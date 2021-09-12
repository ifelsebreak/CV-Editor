export class ExperienceItem {
  public id?: number;
  public name: string = '';
  public company: string = '';
  public location: string = '';
  public startDate: string = '';
  public endDate: string = '';
  public description: string = '';
  public ongoing: boolean = false;

  public constructor(init?:Partial<ExperienceItem>) {
    Object.assign(this, init);
}
}