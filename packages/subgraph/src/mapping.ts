import { BigInt } from "@graphprotocol/graph-ts";
import {
  CrowdFunding,
  CampaignCreated,
  DonationReceived,
  FundsWithdrawn,
  RefundIssued,
} from "../generated/CrowdFunding/CrowdFunding";
import { Project, Donation, Withdrawal, Refund } from "../generated/schema";

export function handleCampaignCreated(event: CampaignCreated): void {
  let project = new Project(event.params.campaignId.toString());

  project.title = "";
  project.category = "";
  project.fundingGoal = BigInt.zero();
  project.image = "";
  project.cryptoChoice = "";
  project.duration = BigInt.zero();
  project.description = "";
  project.creator = event.params.creator;
  project.amountCollected = BigInt.zero();
  project.state = "Active";
  project.endTime = BigInt.zero();

  project.save();
}

export function handleDonationReceived(event: DonationReceived): void {
  let donation = new Donation(event.transaction.hash.toHex());

  donation.project = event.params.campaignId.toString();
  donation.donor = event.params.donor;
  donation.amount = event.params.amount;

  let project = Project.load(event.params.campaignId.toString());
  if (project) {
    project.amountCollected = project.amountCollected.plus(event.params.amount);
    project.save();
  }

  donation.save();
}

export function handleFundsWithdrawn(event: FundsWithdrawn): void {
  let withdrawal = new Withdrawal(event.transaction.hash.toHex());

  withdrawal.project = event.params.campaignId.toString();
  withdrawal.recipient = event.params.recipient;
  withdrawal.amount = event.params.amount;
  withdrawal.timestamp = event.block.timestamp;

  withdrawal.save();
}

export function handleRefundIssued(event: RefundIssued): void {
  let refund = new Refund(event.transaction.hash.toHex());

  refund.project = event.params.campaignId.toString();
  refund.recipient = event.params.recipient;
  refund.amount = event.params.amount;
  refund.timestamp = event.block.timestamp;

  refund.save();
}
