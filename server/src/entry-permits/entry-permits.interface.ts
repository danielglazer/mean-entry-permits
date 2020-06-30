export interface EntryPermit {
  permitId: number;
  guestId: string;
  firstName: string;
  lastName: string;
  compuondId?: string;
  branchId?: string;
  licensePlate?: string;
  start: Date;
  end?: Date;
  comments?: string;
  needEscort?: boolean;
  isAccepted?: boolean;
  reason?: string;
}
