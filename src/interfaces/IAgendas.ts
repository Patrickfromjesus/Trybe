 export default interface IAgenda<T> {
  protocol: string;
  date: Date;
  rules: T;
}
