export class ValidationResultModel {
  isValid?: boolean;
  errors?: {
    propertyName: string;
    errorMessage: string;
    attemptedValue: number;
    customState: null;
    severity: string;
    errorCode: string;
    formattedMessagePlaceholderValues: {
      propertyName: string;
      propertyValue: number;
    }[];
  };
  ruleSetsExecuted?: string[];
}
