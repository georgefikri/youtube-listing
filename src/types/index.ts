export interface StateAction {
  error: any;
  loading: boolean;
  searchQuery: string;
  selectedVideo: any;
  videosList: any[];
  type: string;
  payload: any;
}

export interface StateProviderTypes {
  reducer: any;
  initialState: any;
  children: any;
}
