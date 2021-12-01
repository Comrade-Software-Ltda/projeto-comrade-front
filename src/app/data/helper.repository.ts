import { HttpParams } from '@angular/common/http';
import { PageCustomFilterModel } from '../core/utils/filters/page-custom-filter.model';
import { PageFilterModel, ParamCustom } from '../core/utils/filters/page-filter.model';

export const makeParamFilterGrid = (filter: PageFilterModel): string => {
  const filters = [];
  if (filter.status) {
    filters.push(`status=${filter.status}`);
  }

  if (filter.pageNumber != null) {
    filters.push(`pageNumber=${filter.pageNumber}`);
  } else {
    filters.push(`pageNumber=${0}`);
  }

  if (filter.pageSize != null) {
    filters.push(`pageSize=${filter.pageSize}`);
  } else {
    filters.push(`pageSize=${1000}`);
  }

  (filter.custom || []).map((c: any) => {
    filters.push(`${c.key}=${c.value}`);
  });

  return filters.length > 0 ? `?${filters.join('&')}` : '';
};

export const makeParamCustomFilterGrid = (filter: PageCustomFilterModel): string => {
  const filters: any[] = [];

  (filter.custom || []).map((c: any) => {
    filters.push(c);
  });

  return filters.length > 0 ? `?${filters.join('&')}` : '';
};

export const makeParamFilterList = (filter: PageFilterModel): string => {
  const filters: any[] = [];

  (filter.custom || []).map((c: ParamCustom) => {
    filters.push(`${c.key}=${c.value}`);
  });

  return filters.length > 0 ? `?${filters.join('&')}` : '';
};
