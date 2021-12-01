import { Observable } from 'rxjs';

export interface UseCaseAsync<S, T> {
  executeAsync(params: S): Promise<Observable<T>>;
}
