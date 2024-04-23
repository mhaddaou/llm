import {
  UserProfileSchema,
  UserProfileModel,
} from '../models/use-profile.model';
export const userProfileFeature = [
  { name: UserProfileModel.name, schema: UserProfileSchema },
];
