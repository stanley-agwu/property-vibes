export interface IProviderDetail {
  id: string;
  name: string;
}

export interface IProvider {
  [key: string]: IProviderDetail;
}
