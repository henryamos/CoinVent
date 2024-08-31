// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract CrowdFunding {
	enum CampaignState {
		Active,
		Successful,
		Unsuccessful
	}

	struct Project {
		string title;
		string category;
		uint256 fundingGoal;
		string image;
		string cryptoChoice;
		uint256 duration;
		string description;
		address payable creator;
		uint256 amountCollected;
		CampaignState state;
		uint256 endTime;
	}

	Project[] public campaigns;
	mapping(uint256 => mapping(address => uint256)) public donations; // Track donations by campaign and address
	uint256 public campaignCount;

	// Event to notify when a new campaign is created
	event CampaignCreated(uint256 campaignId, address creator);

	// Event to notify when a donation is made
	event DonationReceived(uint256 campaignId, address donor, uint256 amount);

	// Event to notify when funds are withdrawn
	event FundsWithdrawn(uint256 campaignId, address recipient, uint256 amount);

	// Event to notify when a refund is issued
	event RefundIssued(uint256 campaignId, address recipient, uint256 amount);

	// Create a new campaign
	function createCampaign(
		string memory _title,
		string memory _category,
		uint256 _fundingGoal,
		string memory _image,
		string memory _cryptoChoice,
		uint256 _duration,
		string memory _description
	) external {
		require(_fundingGoal > 0, "Funding goal must be greater than zero");
		require(_duration > 0, "Duration must be greater than zero");

		uint256 endTime = block.timestamp + _duration;

		campaigns.push(
			Project({
				title: _title,
				category: _category,
				fundingGoal: _fundingGoal,
				image: _image,
				cryptoChoice: _cryptoChoice,
				duration: _duration,
				description: _description,
				creator: payable(msg.sender),
				amountCollected: 0,
				state: CampaignState.Active,
				endTime: endTime
			})
		);

		campaignCount++;

		emit CampaignCreated(campaignCount - 1, msg.sender);
	}

	// Donate to a campaign using Ether
	function donateEther(uint256 _campaignId) external payable {
		require(_campaignId < campaignCount, "Invalid campaign ID");
		Project storage project = campaigns[_campaignId];
		require(
			project.state == CampaignState.Active,
			"Campaign is not active"
		);
		require(block.timestamp < project.endTime, "Campaign has ended");

		project.amountCollected += msg.value;
		donations[_campaignId][msg.sender] += msg.value;

		emit DonationReceived(_campaignId, msg.sender, msg.value);

		// Check if the campaign is fully funded
		if (project.amountCollected >= project.fundingGoal) {
			project.state = CampaignState.Successful;
		}
	}

	// Donate to a campaign using an ERC20 token
	function donateToken(
		uint256 _campaignId,
		address _tokenAddress,
		uint256 _amount
	) external {
		require(_campaignId < campaignCount, "Invalid campaign ID");
		Project storage project = campaigns[_campaignId];
		require(
			project.state == CampaignState.Active,
			"Campaign is not active"
		);
		require(block.timestamp < project.endTime, "Campaign has ended");

		IERC20 token = IERC20(_tokenAddress);
		require(
			token.transferFrom(msg.sender, address(this), _amount),
			"Token transfer failed"
		);

		project.amountCollected += _amount;
		donations[_campaignId][msg.sender] += _amount;

		emit DonationReceived(_campaignId, msg.sender, _amount);

		// Check if the campaign is fully funded
		if (project.amountCollected >= project.fundingGoal) {
			project.state = CampaignState.Successful;
		}
	}

	// Withdraw funds from a successful campaign
	function withdrawFunds(uint256 _campaignId) external {
		require(_campaignId < campaignCount, "Invalid campaign ID");
		Project storage project = campaigns[_campaignId];
		require(
			msg.sender == project.creator,
			"Only the campaign creator can withdraw funds"
		);
		require(
			project.state == CampaignState.Successful,
			"Campaign is not successful"
		);

		uint256 amount = project.amountCollected;
		project.amountCollected = 0;

		project.creator.transfer(amount);

		emit FundsWithdrawn(_campaignId, msg.sender, amount);
	}

	// Refund donations if the campaign is unsuccessful
	function refund(uint256 _campaignId) external {
		require(_campaignId < campaignCount, "Invalid campaign ID");
		Project storage project = campaigns[_campaignId];
		require(
			block.timestamp >= project.endTime,
			"Campaign has not ended yet"
		);
		require(
			project.state != CampaignState.Successful,
			"Campaign was successful"
		);

		uint256 donatedAmount = donations[_campaignId][msg.sender];
		require(donatedAmount > 0, "No donations to refund");

		donations[_campaignId][msg.sender] = 0;
		payable(msg.sender).transfer(donatedAmount);

		emit RefundIssued(_campaignId, msg.sender, donatedAmount);
	}

	// Check and update the state of campaigns
	function checkCampaignState(uint256 _campaignId) external {
		require(_campaignId < campaignCount, "Invalid campaign ID");
		Project storage project = campaigns[_campaignId];
		require(
			block.timestamp >= project.endTime,
			"Campaign has not ended yet"
		);

		if (project.amountCollected < project.fundingGoal) {
			project.state = CampaignState.Unsuccessful;
		}
	}

	// Get details of a campaign
	function getCampaign(
		uint256 _campaignId
	)
		external
		view
		returns (
			string memory title,
			string memory category,
			uint256 fundingGoal,
			string memory image,
			string memory cryptoChoice,
			uint256 duration,
			string memory description,
			address creator,
			uint256 amountCollected,
			CampaignState state,
			uint256 endTime
		)
	{
		require(_campaignId < campaignCount, "Invalid campaign ID");
		Project storage project = campaigns[_campaignId];
		return (
			project.title,
			project.category,
			project.fundingGoal,
			project.image,
			project.cryptoChoice,
			project.duration,
			project.description,
			project.creator,
			project.amountCollected,
			project.state,
			project.endTime
		);
	}
}
