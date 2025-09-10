export interface User {
  userId: string;
  walletAddress: string;
  kycStatus: 'verified' | 'pending' | 'rejected';
  stakedTokens: number;
  icoInvestments: ICOInvestment[];
}

export interface StakingEntry {
  entryId: string;
  userId: string;
  stakingTier: 7 | 30 | 90;
  amount: number;
  startTime: Date;
  endTime: Date;
  status: 'active' | 'completed' | 'withdrawn';
  apy: number;
  rewards: number;
}

export interface ICO {
  icoId: string;
  projectName: string;
  tokenName: string;
  tokenSymbol: string;
  startDate: Date;
  endDate: Date;
  fundsRaised: number;
  targetFunds: number;
  deploymentStatus: 'pending' | 'deployed' | 'completed';
  escrowAddress: string;
  description: string;
  logoUrl?: string;
  milestones: Milestone[];
}

export interface ICOInvestment {
  investmentId: string;
  icoId: string;
  userId: string;
  amount: number;
  tokenAmount: number;
  status: 'pending' | 'confirmed' | 'completed';
  timestamp: Date;
}

export interface Milestone {
  milestoneId: string;
  icoId: string;
  description: string;
  targetValue: number;
  currentValue: number;
  status: 'pending' | 'in-progress' | 'completed';
  releasePercentage: number;
}

export interface StakingTier {
  duration: 7 | 30 | 90;
  apy: number;
  color: string;
  label: string;
  minAmount: number;
}
