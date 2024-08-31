import { gql } from "@apollo/client";

// Fetch All Campaigns
export const GET_ALL_CAMPAIGNS = gql`
  query GetAllCampaigns {
    projects {
      id
      title
      category
      fundingGoal
      amountCollected
      state
      endTime
    }
  }
`;

// Fetch a Single Campaign by ID
export const GET_CAMPAIGN_BY_ID = gql`
  query GetCampaignById($id: ID!) {
    project(id: $id) {
      id
      title
      category
      fundingGoal
      amountCollected
      state
      endTime
      description
      creator
      donations {
        id
        donor
        amount
      }
      withdrawals {
        id
        recipient
        amount
        timestamp
      }
      refunds {
        id
        recipient
        amount
        timestamp
      }
    }
  }
`;

// Fetch Donations for a Specific Campaign
export const GET_DONATIONS_FOR_CAMPAIGN = gql`
  query GetDonationsForCampaign($campaignId: ID!) {
    donations(where: { project: $campaignId }) {
      id
      donor
      amount
    }
  }
`;

// Fetch Withdrawals for a Specific Campaign
export const GET_WITHDRAWALS_FOR_CAMPAIGN = gql`
  query GetWithdrawalsForCampaign($campaignId: ID!) {
    withdrawals(where: { project: $campaignId }) {
      id
      recipient
      amount
      timestamp
    }
  }
`;

// Fetch Refunds for a Specific Campaign
export const GET_REFUNDS_FOR_CAMPAIGN = gql`
  query GetRefundsForCampaign($campaignId: ID!) {
    refunds(where: { project: $campaignId }) {
      id
      recipient
      amount
      timestamp
    }
  }
`;

export default {
  GET_ALL_CAMPAIGNS,
  GET_CAMPAIGN_BY_ID,
  GET_DONATIONS_FOR_CAMPAIGN,
  GET_WITHDRAWALS_FOR_CAMPAIGN,
  GET_REFUNDS_FOR_CAMPAIGN,
};
