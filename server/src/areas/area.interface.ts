export interface Area {
  areaId: number;
  name: string;
  approvedParkings?: number;
  managerId: string;
  parentAreaId?: number;
}
