const BASE_URL = 'api/v1/';
interface Routes {
  algorithmList: string;
  algorithm: string;
}

export const API_ROUTES: Routes = {
  algorithmList: BASE_URL + 'job',
  algorithm: BASE_URL + 'algorithm/'
};
