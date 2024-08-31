COINVENT PRODUCT REQUIREMENT DOCUMENT (PRD)



PitchDeck Link: (https://www.canva.com/design/DAGPP3n5BMs/P64-V6T3gN1YvpQLvrcAXA/view?utm_content=DAGPP3n5BMs&utm_campaign=designshare&utm_medium=link&utm_source=editor)

Figma Link: (https://www.figma.com/file/DUYNo7MkDhjMsFHoTUCOXm?node-id=44:748&m=dev&t=V61KGYatkwQJyswo-1&locale=en&type=design)

Miro Link: (https://miro.com/app/board/uXjVKkP6u6I=/?share_link_id=595122630031)


Introduction: 

Coinvent is a decentralized crowdfunding platform built on the Optimism (Layer 2 scaling solution on Ethereum) that enables entrepreneurs to raise funds for their projects on in cryptocurrency
We aim to leverage Optimism's scalability, low transaction fees, and compatibility with Ethereum to enhance user experience.


 Goal:
To enable startups in the web3 space to raise funds through crypto investments. 



FEATURES AND REQUIREMENTS

 User Roles
Startups:
Create and manage crowdfunding campaigns.
Set funding goals, deadlines, and reward structures.
Track campaign progress and investor interactions.

Investors:
Browse and search for active campaigns.
Invest in projects using Op, Eth or other compatible Stablecoins 
Monitor investments and receive rewards.

Admin:
Monitor and manage platform activity.
Review and approve campaigns.
Handle disputes and ensure compliance.



 FUNCTIONAL REQUIREMENT 

Campaign Management
Create Project: Allow startups to set up new campaigns including project details, funding goals, timelines, and reward tiers.

Edit Project: Enable updates to campaign information.

Project Details: Display real-time status of ongoing projects including funding progress and remaining time.

Withdrawal: Withdraw funds raised after meeting requirements and deadline

 Investment Process
Browse Campaigns: Provide a searchable and filterable list of active projects.

Invest/Donate : Facilitate investments using OP, Eth or other stable coins, including transaction processing and confirmation.

Rewards: Implement a mechanism to distribute rewards to investors based on campaign terms.

Smart Contracts
Fund Management: Use Optimism L2 on Ethereum smart contracts to handle funds, ensuring they are only released when certain conditions are met.

Automatic Refunds: Implement functionality to automatically refund investors if a campaign fails to meet its funding goal.

User Accounts
Registration and Login: Allow users to create accounts and log in using their wallets (e.g., MetaMask).

Profile Management: Enable users to manage their profiles and view their investment history.

Administration
Campaign Approval: Admins should review and approve startup campaigns before they go live.

Platform Monitoring: Provide tools for monitoring platform activity and resolving disputes.

Security
Smart Contract Audits: Ensure all smart contracts are audited for vulnerabilities.

Data Protection: Implement measures to protect user data and transaction information.



 NON-FUNCTIONAL REQUIREMENTS 

Scalability: Ensure the platform can handle a growing number of users and transactions.

Performance: Optimize for fast transaction processing and minimal downtime.

Usability: Design an intuitive user interface for both startups and investors.

Explanation of Core Feature Points
Home Page: The initial page where users select to log in or sign up.

Login / Signup:
Login: Existing users (Investor, Startup, or Admin) log in using their wallet.

Sign Up: New users connect their Ethereum wallet and create an account.

Wallet Login / Wallet Setup:
Wallet Login: Existing users authenticate with their Ethereum wallet.

Wallet Setup: New users set up and connect their wallet.

User Dashboards:
Investor Dashboard: Allows investors to browse and invest in campaigns.

Startup Dashboard: Allows startups to create and manage campaigns/projects.

Admin Dashboard: Provides tools for reviewing, approving, and monitoring campaigns and platform activity.

Investor Features:
Browse Campaigns: Search and view available crowdfunding projects.

Select project & Donate: Choose a campaign and make an investment using Eth, Op or optimism compatible stable coin.

Confirm & Pay: Complete the investment process with Ethereum transaction confirmation.

View Investments: Monitor and manage investments made.

Startup Features:
Create Campaign: Set up new crowdfunding campaigns including details, goals, and rewards.

Edit Campaign: Update or modify existing campaigns.

Track Campaign Progress: Monitor the progress of active campaigns.

Admin Features:
Review Campaigns: Review startup campaigns for approval.

Approve/Reject: Approve or reject campaigns based on review criteria.

Monitor Platform Activity: Oversee all platform activities to ensure smooth operation.

Handle Disputes: Address and resolve any disputes or issues that arise.

Logout: Users log out from the platform after completing their tasks.
