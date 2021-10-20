import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: string;
};

export type CreateManyFavoritePlaceInput = {
  address: Scalars['String'];
  name: Scalars['String'];
};

export type CreateManyFavoritePlacePayload = {
  __typename: 'CreateManyFavoritePlacePayload';
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<FavoritePlace>>;
};

export type CreateManyJourneyInput = {
  date: Scalars['Date'];
  description: Scalars['String'];
  from: Scalars['String'];
  miles: Scalars['Float'];
  to: Scalars['String'];
};

export type CreateManyJourneyPayload = {
  __typename: 'CreateManyJourneyPayload';
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Journey>>;
};

export type CreateManyJourneyTemplateInput = {
  description: Scalars['String'];
  from: Scalars['String'];
  miles: Scalars['Float'];
  name: Scalars['String'];
  to: Scalars['String'];
};

export type CreateManyJourneyTemplatePayload = {
  __typename: 'CreateManyJourneyTemplatePayload';
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<JourneyTemplate>>;
};

export type CreateOneFavoritePlaceInput = {
  address: Scalars['String'];
  name: Scalars['String'];
};

export type CreateOneFavoritePlacePayload = {
  __typename: 'CreateOneFavoritePlacePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<FavoritePlace>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type CreateOneJourneyInput = {
  date: Scalars['Date'];
  description: Scalars['String'];
  from: Scalars['String'];
  miles: Scalars['Float'];
  to: Scalars['String'];
};

export type CreateOneJourneyPayload = {
  __typename: 'CreateOneJourneyPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Journey>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type CreateOneJourneyTemplateInput = {
  description: Scalars['String'];
  from: Scalars['String'];
  miles: Scalars['Float'];
  name: Scalars['String'];
  to: Scalars['String'];
};

export type CreateOneJourneyTemplatePayload = {
  __typename: 'CreateOneJourneyTemplatePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<JourneyTemplate>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']>;
};

export type FavoritePlace = {
  __typename: 'FavoritePlace';
  _id: Scalars['MongoID'];
  address: Scalars['String'];
  name: Scalars['String'];
};

/** A connection to a list of items. */
export type FavoritePlaceConnection = {
  __typename: 'FavoritePlaceConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<FavoritePlaceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type FavoritePlaceEdge = {
  __typename: 'FavoritePlaceEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: FavoritePlace;
};

/** List of items with pagination. */
export type FavoritePlacePagination = {
  __typename: 'FavoritePlacePagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<FavoritePlace>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type FilterCountFavoritePlaceInput = {
  AND?: Maybe<Array<FilterCountFavoritePlaceInput>>;
  OR?: Maybe<Array<FilterCountFavoritePlaceInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountFavoritePlaceOperatorsInput>;
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountFavoritePlaceOperatorsInput = {
  _id?: Maybe<FilterCountFavoritePlace_IdOperatorsInput>;
};

export type FilterCountFavoritePlace_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterCountJourneyInput = {
  AND?: Maybe<Array<FilterCountJourneyInput>>;
  OR?: Maybe<Array<FilterCountJourneyInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountJourneyOperatorsInput>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  to?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountJourneyOperatorsInput = {
  _id?: Maybe<FilterCountJourney_IdOperatorsInput>;
};

export type FilterCountJourneyTemplateInput = {
  AND?: Maybe<Array<FilterCountJourneyTemplateInput>>;
  OR?: Maybe<Array<FilterCountJourneyTemplateInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountJourneyTemplateOperatorsInput>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountJourneyTemplateOperatorsInput = {
  _id?: Maybe<FilterCountJourneyTemplate_IdOperatorsInput>;
};

export type FilterCountJourneyTemplate_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterCountJourney_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindManyFavoritePlaceInput = {
  AND?: Maybe<Array<FilterFindManyFavoritePlaceInput>>;
  OR?: Maybe<Array<FilterFindManyFavoritePlaceInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyFavoritePlaceOperatorsInput>;
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyFavoritePlaceOperatorsInput = {
  _id?: Maybe<FilterFindManyFavoritePlace_IdOperatorsInput>;
};

export type FilterFindManyFavoritePlace_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindManyJourneyInput = {
  AND?: Maybe<Array<FilterFindManyJourneyInput>>;
  OR?: Maybe<Array<FilterFindManyJourneyInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyJourneyOperatorsInput>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  to?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyJourneyOperatorsInput = {
  _id?: Maybe<FilterFindManyJourney_IdOperatorsInput>;
};

export type FilterFindManyJourneyTemplateInput = {
  AND?: Maybe<Array<FilterFindManyJourneyTemplateInput>>;
  OR?: Maybe<Array<FilterFindManyJourneyTemplateInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyJourneyTemplateOperatorsInput>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyJourneyTemplateOperatorsInput = {
  _id?: Maybe<FilterFindManyJourneyTemplate_IdOperatorsInput>;
};

export type FilterFindManyJourneyTemplate_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindManyJourney_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindOneFavoritePlaceInput = {
  AND?: Maybe<Array<FilterFindOneFavoritePlaceInput>>;
  OR?: Maybe<Array<FilterFindOneFavoritePlaceInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneFavoritePlaceOperatorsInput>;
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneFavoritePlaceOperatorsInput = {
  _id?: Maybe<FilterFindOneFavoritePlace_IdOperatorsInput>;
};

export type FilterFindOneFavoritePlace_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindOneJourneyInput = {
  AND?: Maybe<Array<FilterFindOneJourneyInput>>;
  OR?: Maybe<Array<FilterFindOneJourneyInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneJourneyOperatorsInput>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  to?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneJourneyOperatorsInput = {
  _id?: Maybe<FilterFindOneJourney_IdOperatorsInput>;
};

export type FilterFindOneJourneyTemplateInput = {
  AND?: Maybe<Array<FilterFindOneJourneyTemplateInput>>;
  OR?: Maybe<Array<FilterFindOneJourneyTemplateInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneJourneyTemplateOperatorsInput>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneJourneyTemplateOperatorsInput = {
  _id?: Maybe<FilterFindOneJourneyTemplate_IdOperatorsInput>;
};

export type FilterFindOneJourneyTemplate_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindOneJourney_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterRemoveManyFavoritePlaceInput = {
  AND?: Maybe<Array<FilterRemoveManyFavoritePlaceInput>>;
  OR?: Maybe<Array<FilterRemoveManyFavoritePlaceInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyFavoritePlaceOperatorsInput>;
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyFavoritePlaceOperatorsInput = {
  _id?: Maybe<FilterRemoveManyFavoritePlace_IdOperatorsInput>;
};

export type FilterRemoveManyFavoritePlace_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterRemoveManyJourneyInput = {
  AND?: Maybe<Array<FilterRemoveManyJourneyInput>>;
  OR?: Maybe<Array<FilterRemoveManyJourneyInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyJourneyOperatorsInput>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  to?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyJourneyOperatorsInput = {
  _id?: Maybe<FilterRemoveManyJourney_IdOperatorsInput>;
};

export type FilterRemoveManyJourneyTemplateInput = {
  AND?: Maybe<Array<FilterRemoveManyJourneyTemplateInput>>;
  OR?: Maybe<Array<FilterRemoveManyJourneyTemplateInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyJourneyTemplateOperatorsInput>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyJourneyTemplateOperatorsInput = {
  _id?: Maybe<FilterRemoveManyJourneyTemplate_IdOperatorsInput>;
};

export type FilterRemoveManyJourneyTemplate_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterRemoveManyJourney_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterRemoveOneFavoritePlaceInput = {
  AND?: Maybe<Array<FilterRemoveOneFavoritePlaceInput>>;
  OR?: Maybe<Array<FilterRemoveOneFavoritePlaceInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneFavoritePlaceOperatorsInput>;
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneFavoritePlaceOperatorsInput = {
  _id?: Maybe<FilterRemoveOneFavoritePlace_IdOperatorsInput>;
};

export type FilterRemoveOneFavoritePlace_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterRemoveOneJourneyInput = {
  AND?: Maybe<Array<FilterRemoveOneJourneyInput>>;
  OR?: Maybe<Array<FilterRemoveOneJourneyInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneJourneyOperatorsInput>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  to?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneJourneyOperatorsInput = {
  _id?: Maybe<FilterRemoveOneJourney_IdOperatorsInput>;
};

export type FilterRemoveOneJourneyTemplateInput = {
  AND?: Maybe<Array<FilterRemoveOneJourneyTemplateInput>>;
  OR?: Maybe<Array<FilterRemoveOneJourneyTemplateInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneJourneyTemplateOperatorsInput>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneJourneyTemplateOperatorsInput = {
  _id?: Maybe<FilterRemoveOneJourneyTemplate_IdOperatorsInput>;
};

export type FilterRemoveOneJourneyTemplate_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterRemoveOneJourney_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterUpdateManyFavoritePlaceInput = {
  AND?: Maybe<Array<FilterUpdateManyFavoritePlaceInput>>;
  OR?: Maybe<Array<FilterUpdateManyFavoritePlaceInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyFavoritePlaceOperatorsInput>;
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyFavoritePlaceOperatorsInput = {
  _id?: Maybe<FilterUpdateManyFavoritePlace_IdOperatorsInput>;
};

export type FilterUpdateManyFavoritePlace_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterUpdateManyJourneyInput = {
  AND?: Maybe<Array<FilterUpdateManyJourneyInput>>;
  OR?: Maybe<Array<FilterUpdateManyJourneyInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyJourneyOperatorsInput>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  to?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyJourneyOperatorsInput = {
  _id?: Maybe<FilterUpdateManyJourney_IdOperatorsInput>;
};

export type FilterUpdateManyJourneyTemplateInput = {
  AND?: Maybe<Array<FilterUpdateManyJourneyTemplateInput>>;
  OR?: Maybe<Array<FilterUpdateManyJourneyTemplateInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyJourneyTemplateOperatorsInput>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyJourneyTemplateOperatorsInput = {
  _id?: Maybe<FilterUpdateManyJourneyTemplate_IdOperatorsInput>;
};

export type FilterUpdateManyJourneyTemplate_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterUpdateManyJourney_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterUpdateOneFavoritePlaceInput = {
  AND?: Maybe<Array<FilterUpdateOneFavoritePlaceInput>>;
  OR?: Maybe<Array<FilterUpdateOneFavoritePlaceInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneFavoritePlaceOperatorsInput>;
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneFavoritePlaceOperatorsInput = {
  _id?: Maybe<FilterUpdateOneFavoritePlace_IdOperatorsInput>;
};

export type FilterUpdateOneFavoritePlace_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterUpdateOneJourneyInput = {
  AND?: Maybe<Array<FilterUpdateOneJourneyInput>>;
  OR?: Maybe<Array<FilterUpdateOneJourneyInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneJourneyOperatorsInput>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  to?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneJourneyOperatorsInput = {
  _id?: Maybe<FilterUpdateOneJourney_IdOperatorsInput>;
};

export type FilterUpdateOneJourneyTemplateInput = {
  AND?: Maybe<Array<FilterUpdateOneJourneyTemplateInput>>;
  OR?: Maybe<Array<FilterUpdateOneJourneyTemplateInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneJourneyTemplateOperatorsInput>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneJourneyTemplateOperatorsInput = {
  _id?: Maybe<FilterUpdateOneJourneyTemplate_IdOperatorsInput>;
};

export type FilterUpdateOneJourneyTemplate_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterUpdateOneJourney_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type Journey = {
  __typename: 'Journey';
  _id: Scalars['MongoID'];
  date: Scalars['Date'];
  description: Scalars['String'];
  from: Scalars['String'];
  miles: Scalars['Float'];
  to: Scalars['String'];
};

/** A connection to a list of items. */
export type JourneyConnection = {
  __typename: 'JourneyConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<JourneyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type JourneyEdge = {
  __typename: 'JourneyEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Journey;
};

/** List of items with pagination. */
export type JourneyPagination = {
  __typename: 'JourneyPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Journey>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type JourneyTemplate = {
  __typename: 'JourneyTemplate';
  _id: Scalars['MongoID'];
  description: Scalars['String'];
  from: Scalars['String'];
  miles: Scalars['Float'];
  name: Scalars['String'];
  to: Scalars['String'];
};

/** A connection to a list of items. */
export type JourneyTemplateConnection = {
  __typename: 'JourneyTemplateConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<JourneyTemplateEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type JourneyTemplateEdge = {
  __typename: 'JourneyTemplateEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: JourneyTemplate;
};

/** List of items with pagination. */
export type JourneyTemplatePagination = {
  __typename: 'JourneyTemplatePagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<JourneyTemplate>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type MongoError = ErrorInterface & {
  __typename: 'MongoError';
  /** MongoDB error code */
  code?: Maybe<Scalars['Int']>;
  /** MongoDB error message */
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename: 'Mutation';
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  favoritePlaceCreateMany?: Maybe<CreateManyFavoritePlacePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  favoritePlaceCreateOne?: Maybe<CreateOneFavoritePlacePayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  favoritePlaceRemoveById?: Maybe<RemoveByIdFavoritePlacePayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  favoritePlaceRemoveMany?: Maybe<RemoveManyFavoritePlacePayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  favoritePlaceRemoveOne?: Maybe<RemoveOneFavoritePlacePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  favoritePlaceUpdateById?: Maybe<UpdateByIdFavoritePlacePayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  favoritePlaceUpdateMany?: Maybe<UpdateManyFavoritePlacePayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  favoritePlaceUpdateOne?: Maybe<UpdateOneFavoritePlacePayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  journeyCreateMany?: Maybe<CreateManyJourneyPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  journeyCreateOne?: Maybe<CreateOneJourneyPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  journeyRemoveById?: Maybe<RemoveByIdJourneyPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  journeyRemoveMany?: Maybe<RemoveManyJourneyPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  journeyRemoveOne?: Maybe<RemoveOneJourneyPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  journeyTemplateCreateMany?: Maybe<CreateManyJourneyTemplatePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  journeyTemplateCreateOne?: Maybe<CreateOneJourneyTemplatePayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  journeyTemplateRemoveById?: Maybe<RemoveByIdJourneyTemplatePayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  journeyTemplateRemoveMany?: Maybe<RemoveManyJourneyTemplatePayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  journeyTemplateRemoveOne?: Maybe<RemoveOneJourneyTemplatePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  journeyTemplateUpdateById?: Maybe<UpdateByIdJourneyTemplatePayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  journeyTemplateUpdateMany?: Maybe<UpdateManyJourneyTemplatePayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  journeyTemplateUpdateOne?: Maybe<UpdateOneJourneyTemplatePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  journeyUpdateById?: Maybe<UpdateByIdJourneyPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  journeyUpdateMany?: Maybe<UpdateManyJourneyPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  journeyUpdateOne?: Maybe<UpdateOneJourneyPayload>;
};


export type MutationFavoritePlaceCreateManyArgs = {
  records: Array<CreateManyFavoritePlaceInput>;
};


export type MutationFavoritePlaceCreateOneArgs = {
  record: CreateOneFavoritePlaceInput;
};


export type MutationFavoritePlaceRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationFavoritePlaceRemoveManyArgs = {
  filter: FilterRemoveManyFavoritePlaceInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationFavoritePlaceRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneFavoritePlaceInput>;
  sort?: Maybe<SortRemoveOneFavoritePlaceInput>;
};


export type MutationFavoritePlaceUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdFavoritePlaceInput;
};


export type MutationFavoritePlaceUpdateManyArgs = {
  filter?: Maybe<FilterUpdateManyFavoritePlaceInput>;
  limit?: Maybe<Scalars['Int']>;
  record: UpdateManyFavoritePlaceInput;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortUpdateManyFavoritePlaceInput>;
};


export type MutationFavoritePlaceUpdateOneArgs = {
  filter?: Maybe<FilterUpdateOneFavoritePlaceInput>;
  record: UpdateOneFavoritePlaceInput;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortUpdateOneFavoritePlaceInput>;
};


export type MutationJourneyCreateManyArgs = {
  records: Array<CreateManyJourneyInput>;
};


export type MutationJourneyCreateOneArgs = {
  record: CreateOneJourneyInput;
};


export type MutationJourneyRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationJourneyRemoveManyArgs = {
  filter: FilterRemoveManyJourneyInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationJourneyRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneJourneyInput>;
  sort?: Maybe<SortRemoveOneJourneyInput>;
};


export type MutationJourneyTemplateCreateManyArgs = {
  records: Array<CreateManyJourneyTemplateInput>;
};


export type MutationJourneyTemplateCreateOneArgs = {
  record: CreateOneJourneyTemplateInput;
};


export type MutationJourneyTemplateRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationJourneyTemplateRemoveManyArgs = {
  filter: FilterRemoveManyJourneyTemplateInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationJourneyTemplateRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneJourneyTemplateInput>;
  sort?: Maybe<SortRemoveOneJourneyTemplateInput>;
};


export type MutationJourneyTemplateUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdJourneyTemplateInput;
};


export type MutationJourneyTemplateUpdateManyArgs = {
  filter?: Maybe<FilterUpdateManyJourneyTemplateInput>;
  limit?: Maybe<Scalars['Int']>;
  record: UpdateManyJourneyTemplateInput;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortUpdateManyJourneyTemplateInput>;
};


export type MutationJourneyTemplateUpdateOneArgs = {
  filter?: Maybe<FilterUpdateOneJourneyTemplateInput>;
  record: UpdateOneJourneyTemplateInput;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortUpdateOneJourneyTemplateInput>;
};


export type MutationJourneyUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdJourneyInput;
};


export type MutationJourneyUpdateManyArgs = {
  filter?: Maybe<FilterUpdateManyJourneyInput>;
  limit?: Maybe<Scalars['Int']>;
  record: UpdateManyJourneyInput;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortUpdateManyJourneyInput>;
};


export type MutationJourneyUpdateOneArgs = {
  filter?: Maybe<FilterUpdateOneJourneyInput>;
  record: UpdateOneJourneyInput;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortUpdateOneJourneyInput>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PaginationInfo = {
  __typename: 'PaginationInfo';
  currentPage: Scalars['Int'];
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  itemCount?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  perPage: Scalars['Int'];
};

export type Query = {
  __typename: 'Query';
  favoritePlaceById?: Maybe<FavoritePlace>;
  favoritePlaceByIds: Array<FavoritePlace>;
  favoritePlaceConnection?: Maybe<FavoritePlaceConnection>;
  favoritePlaceCount?: Maybe<Scalars['Int']>;
  favoritePlaceDataLoader?: Maybe<FavoritePlace>;
  favoritePlaceDataLoaderMany: Array<Maybe<FavoritePlace>>;
  favoritePlaceMany: Array<FavoritePlace>;
  favoritePlaceOne?: Maybe<FavoritePlace>;
  favoritePlacePagination?: Maybe<FavoritePlacePagination>;
  journeyById?: Maybe<Journey>;
  journeyByIds: Array<Journey>;
  journeyConnection?: Maybe<JourneyConnection>;
  journeyCount?: Maybe<Scalars['Int']>;
  journeyDataLoader?: Maybe<Journey>;
  journeyDataLoaderMany: Array<Maybe<Journey>>;
  journeyMany: Array<Journey>;
  journeyOne?: Maybe<Journey>;
  journeyPagination?: Maybe<JourneyPagination>;
  journeyTemplateById?: Maybe<JourneyTemplate>;
  journeyTemplateByIds: Array<JourneyTemplate>;
  journeyTemplateConnection?: Maybe<JourneyTemplateConnection>;
  journeyTemplateCount?: Maybe<Scalars['Int']>;
  journeyTemplateDataLoader?: Maybe<JourneyTemplate>;
  journeyTemplateDataLoaderMany: Array<Maybe<JourneyTemplate>>;
  journeyTemplateMany: Array<JourneyTemplate>;
  journeyTemplateOne?: Maybe<JourneyTemplate>;
  journeyTemplatePagination?: Maybe<JourneyTemplatePagination>;
};


export type QueryFavoritePlaceByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryFavoritePlaceByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsFavoritePlaceInput>;
};


export type QueryFavoritePlaceConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyFavoritePlaceInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortConnectionFavoritePlaceEnum>;
};


export type QueryFavoritePlaceCountArgs = {
  filter?: Maybe<FilterCountFavoritePlaceInput>;
};


export type QueryFavoritePlaceDataLoaderArgs = {
  _id: Scalars['MongoID'];
};


export type QueryFavoritePlaceDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};


export type QueryFavoritePlaceManyArgs = {
  filter?: Maybe<FilterFindManyFavoritePlaceInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyFavoritePlaceInput>;
};


export type QueryFavoritePlaceOneArgs = {
  filter?: Maybe<FilterFindOneFavoritePlaceInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneFavoritePlaceInput>;
};


export type QueryFavoritePlacePaginationArgs = {
  filter?: Maybe<FilterFindManyFavoritePlaceInput>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyFavoritePlaceInput>;
};


export type QueryJourneyByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryJourneyByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsJourneyInput>;
};


export type QueryJourneyConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyJourneyInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortConnectionJourneyEnum>;
};


export type QueryJourneyCountArgs = {
  filter?: Maybe<FilterCountJourneyInput>;
};


export type QueryJourneyDataLoaderArgs = {
  _id: Scalars['MongoID'];
};


export type QueryJourneyDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};


export type QueryJourneyManyArgs = {
  filter?: Maybe<FilterFindManyJourneyInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyJourneyInput>;
};


export type QueryJourneyOneArgs = {
  filter?: Maybe<FilterFindOneJourneyInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneJourneyInput>;
};


export type QueryJourneyPaginationArgs = {
  filter?: Maybe<FilterFindManyJourneyInput>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyJourneyInput>;
};


export type QueryJourneyTemplateByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryJourneyTemplateByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsJourneyTemplateInput>;
};


export type QueryJourneyTemplateConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyJourneyTemplateInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortConnectionJourneyTemplateEnum>;
};


export type QueryJourneyTemplateCountArgs = {
  filter?: Maybe<FilterCountJourneyTemplateInput>;
};


export type QueryJourneyTemplateDataLoaderArgs = {
  _id: Scalars['MongoID'];
};


export type QueryJourneyTemplateDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};


export type QueryJourneyTemplateManyArgs = {
  filter?: Maybe<FilterFindManyJourneyTemplateInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyJourneyTemplateInput>;
};


export type QueryJourneyTemplateOneArgs = {
  filter?: Maybe<FilterFindOneJourneyTemplateInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneJourneyTemplateInput>;
};


export type QueryJourneyTemplatePaginationArgs = {
  filter?: Maybe<FilterFindManyJourneyTemplateInput>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyJourneyTemplateInput>;
};

export type RemoveByIdFavoritePlacePayload = {
  __typename: 'RemoveByIdFavoritePlacePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<FavoritePlace>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveByIdJourneyPayload = {
  __typename: 'RemoveByIdJourneyPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Journey>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveByIdJourneyTemplatePayload = {
  __typename: 'RemoveByIdJourneyTemplatePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<JourneyTemplate>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveManyFavoritePlacePayload = {
  __typename: 'RemoveManyFavoritePlacePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type RemoveManyJourneyPayload = {
  __typename: 'RemoveManyJourneyPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type RemoveManyJourneyTemplatePayload = {
  __typename: 'RemoveManyJourneyTemplatePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type RemoveOneFavoritePlacePayload = {
  __typename: 'RemoveOneFavoritePlacePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<FavoritePlace>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveOneJourneyPayload = {
  __typename: 'RemoveOneJourneyPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Journey>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveOneJourneyTemplatePayload = {
  __typename: 'RemoveOneJourneyTemplatePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<JourneyTemplate>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RuntimeError = ErrorInterface & {
  __typename: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']>;
};

export enum SortConnectionFavoritePlaceEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionJourneyEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionJourneyTemplateEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsFavoritePlaceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsJourneyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsJourneyTemplateInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyFavoritePlaceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyJourneyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyJourneyTemplateInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneFavoritePlaceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneJourneyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneJourneyTemplateInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneFavoritePlaceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneJourneyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneJourneyTemplateInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyFavoritePlaceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyJourneyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyJourneyTemplateInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneFavoritePlaceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneJourneyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneJourneyTemplateInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateByIdFavoritePlaceInput = {
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateByIdFavoritePlacePayload = {
  __typename: 'UpdateByIdFavoritePlacePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<FavoritePlace>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdJourneyInput = {
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  to?: Maybe<Scalars['String']>;
};

export type UpdateByIdJourneyPayload = {
  __typename: 'UpdateByIdJourneyPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Journey>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdJourneyTemplateInput = {
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type UpdateByIdJourneyTemplatePayload = {
  __typename: 'UpdateByIdJourneyTemplatePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<JourneyTemplate>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateManyFavoritePlaceInput = {
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateManyFavoritePlacePayload = {
  __typename: 'UpdateManyFavoritePlacePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type UpdateManyJourneyInput = {
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  to?: Maybe<Scalars['String']>;
};

export type UpdateManyJourneyPayload = {
  __typename: 'UpdateManyJourneyPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type UpdateManyJourneyTemplateInput = {
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type UpdateManyJourneyTemplatePayload = {
  __typename: 'UpdateManyJourneyTemplatePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type UpdateOneFavoritePlaceInput = {
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateOneFavoritePlacePayload = {
  __typename: 'UpdateOneFavoritePlacePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<FavoritePlace>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateOneJourneyInput = {
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  to?: Maybe<Scalars['String']>;
};

export type UpdateOneJourneyPayload = {
  __typename: 'UpdateOneJourneyPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Journey>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateOneJourneyTemplateInput = {
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type UpdateOneJourneyTemplatePayload = {
  __typename: 'UpdateOneJourneyTemplatePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<JourneyTemplate>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type ValidationError = ErrorInterface & {
  __typename: 'ValidationError';
  /** List of validator errors */
  errors?: Maybe<Array<ValidatorError>>;
  /** Combined error message from all validators */
  message?: Maybe<Scalars['String']>;
};

export type ValidatorError = {
  __typename: 'ValidatorError';
  /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
  idx: Scalars['Int'];
  /** Validation error message */
  message?: Maybe<Scalars['String']>;
  /** Source of the validation error from the model path */
  path?: Maybe<Scalars['String']>;
  /** Field value which occurs the validation error */
  value?: Maybe<Scalars['JSON']>;
};

export type FavoritePlaceFieldsFragment = { __typename: 'FavoritePlace', _id: string, name: string, address: string };

export type ReadFavoritePlacesQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadFavoritePlacesQuery = { __typename: 'Query', records: Array<{ __typename: 'FavoritePlace', _id: string, name: string, address: string }> };

export type CreateFavoritePlaceMutationVariables = Exact<{
  record: CreateOneFavoritePlaceInput;
}>;


export type CreateFavoritePlaceMutation = { __typename: 'Mutation', result?: { __typename: 'CreateOneFavoritePlacePayload', record?: { __typename: 'FavoritePlace', _id: string, name: string, address: string } | null | undefined } | null | undefined };

export type UpdateFavoritePlaceMutationVariables = Exact<{
  id: Scalars['MongoID'];
  record: UpdateByIdFavoritePlaceInput;
}>;


export type UpdateFavoritePlaceMutation = { __typename: 'Mutation', result?: { __typename: 'UpdateByIdFavoritePlacePayload', record?: { __typename: 'FavoritePlace', _id: string, name: string, address: string } | null | undefined } | null | undefined };

export type DeleteFavoritePlaceMutationVariables = Exact<{
  id: Scalars['MongoID'];
}>;


export type DeleteFavoritePlaceMutation = { __typename: 'Mutation', result?: { __typename: 'RemoveByIdFavoritePlacePayload', recordId?: string | null | undefined } | null | undefined };

export type JourneyFieldsFragment = { __typename: 'Journey', _id: string, date: string, description: string, from: string, to: string, miles: number };

export type ReadJourneysQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadJourneysQuery = { __typename: 'Query', records: Array<{ __typename: 'Journey', _id: string, date: string, description: string, from: string, to: string, miles: number }> };

export type CreateJourneyMutationVariables = Exact<{
  record: CreateOneJourneyInput;
}>;


export type CreateJourneyMutation = { __typename: 'Mutation', result?: { __typename: 'CreateOneJourneyPayload', record?: { __typename: 'Journey', _id: string, date: string, description: string, from: string, to: string, miles: number } | null | undefined } | null | undefined };

export type UpdateJourneyMutationVariables = Exact<{
  id: Scalars['MongoID'];
  record: UpdateByIdJourneyInput;
}>;


export type UpdateJourneyMutation = { __typename: 'Mutation', result?: { __typename: 'UpdateByIdJourneyPayload', record?: { __typename: 'Journey', _id: string, date: string, description: string, from: string, to: string, miles: number } | null | undefined } | null | undefined };

export type DeleteJourneyMutationVariables = Exact<{
  id: Scalars['MongoID'];
}>;


export type DeleteJourneyMutation = { __typename: 'Mutation', result?: { __typename: 'RemoveByIdJourneyPayload', recordId?: string | null | undefined } | null | undefined };

export type JourneyTemplateFieldsFragment = { __typename: 'JourneyTemplate', _id: string, name: string, description: string, from: string, to: string, miles: number };

export type ReadJourneyTemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadJourneyTemplatesQuery = { __typename: 'Query', records: Array<{ __typename: 'JourneyTemplate', _id: string, name: string, description: string, from: string, to: string, miles: number }> };

export type CreateJourneyTemplateMutationVariables = Exact<{
  record: CreateOneJourneyTemplateInput;
}>;


export type CreateJourneyTemplateMutation = { __typename: 'Mutation', result?: { __typename: 'CreateOneJourneyTemplatePayload', record?: { __typename: 'JourneyTemplate', _id: string, name: string, description: string, from: string, to: string, miles: number } | null | undefined } | null | undefined };

export type UpdateJourneyTemplateMutationVariables = Exact<{
  id: Scalars['MongoID'];
  record: UpdateByIdJourneyTemplateInput;
}>;


export type UpdateJourneyTemplateMutation = { __typename: 'Mutation', result?: { __typename: 'UpdateByIdJourneyTemplatePayload', record?: { __typename: 'JourneyTemplate', _id: string, name: string, description: string, from: string, to: string, miles: number } | null | undefined } | null | undefined };

export type DeleteJourneyTemplateMutationVariables = Exact<{
  id: Scalars['MongoID'];
}>;


export type DeleteJourneyTemplateMutation = { __typename: 'Mutation', result?: { __typename: 'RemoveByIdJourneyTemplatePayload', recordId?: string | null | undefined } | null | undefined };

export const FavoritePlaceFieldsFragmentDoc = gql`
    fragment FavoritePlaceFields on FavoritePlace {
  _id
  name
  address
}
    `;
export const JourneyFieldsFragmentDoc = gql`
    fragment JourneyFields on Journey {
  _id
  date
  description
  from
  to
  miles
}
    `;
export const JourneyTemplateFieldsFragmentDoc = gql`
    fragment JourneyTemplateFields on JourneyTemplate {
  _id
  name
  description
  from
  to
  miles
}
    `;
export const ReadFavoritePlacesDocument = gql`
    query ReadFavoritePlaces {
  records: favoritePlaceMany {
    ...FavoritePlaceFields
  }
}
    ${FavoritePlaceFieldsFragmentDoc}`;

/**
 * __useReadFavoritePlacesQuery__
 *
 * To run a query within a Vue component, call `useReadFavoritePlacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadFavoritePlacesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadFavoritePlacesQuery();
 */
export function useReadFavoritePlacesQuery(options: VueApolloComposable.UseQueryOptions<ReadFavoritePlacesQuery, ReadFavoritePlacesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadFavoritePlacesQuery, ReadFavoritePlacesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadFavoritePlacesQuery, ReadFavoritePlacesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadFavoritePlacesQuery, ReadFavoritePlacesQueryVariables>(ReadFavoritePlacesDocument, {}, options);
}
export type ReadFavoritePlacesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadFavoritePlacesQuery, ReadFavoritePlacesQueryVariables>;
export const CreateFavoritePlaceDocument = gql`
    mutation CreateFavoritePlace($record: CreateOneFavoritePlaceInput!) {
  result: favoritePlaceCreateOne(record: $record) {
    record {
      ...FavoritePlaceFields
    }
  }
}
    ${FavoritePlaceFieldsFragmentDoc}`;

/**
 * __useCreateFavoritePlaceMutation__
 *
 * To run a mutation, you first call `useCreateFavoritePlaceMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateFavoritePlaceMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateFavoritePlaceMutation({
 *   variables: {
 *     record: // value for 'record'
 *   },
 * });
 */
export function useCreateFavoritePlaceMutation(options: VueApolloComposable.UseMutationOptions<CreateFavoritePlaceMutation, CreateFavoritePlaceMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateFavoritePlaceMutation, CreateFavoritePlaceMutationVariables>>) {
  return VueApolloComposable.useMutation<CreateFavoritePlaceMutation, CreateFavoritePlaceMutationVariables>(CreateFavoritePlaceDocument, options);
}
export type CreateFavoritePlaceMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateFavoritePlaceMutation, CreateFavoritePlaceMutationVariables>;
export const UpdateFavoritePlaceDocument = gql`
    mutation UpdateFavoritePlace($id: MongoID!, $record: UpdateByIdFavoritePlaceInput!) {
  result: favoritePlaceUpdateById(_id: $id, record: $record) {
    record {
      ...FavoritePlaceFields
    }
  }
}
    ${FavoritePlaceFieldsFragmentDoc}`;

/**
 * __useUpdateFavoritePlaceMutation__
 *
 * To run a mutation, you first call `useUpdateFavoritePlaceMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFavoritePlaceMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateFavoritePlaceMutation({
 *   variables: {
 *     id: // value for 'id'
 *     record: // value for 'record'
 *   },
 * });
 */
export function useUpdateFavoritePlaceMutation(options: VueApolloComposable.UseMutationOptions<UpdateFavoritePlaceMutation, UpdateFavoritePlaceMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateFavoritePlaceMutation, UpdateFavoritePlaceMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateFavoritePlaceMutation, UpdateFavoritePlaceMutationVariables>(UpdateFavoritePlaceDocument, options);
}
export type UpdateFavoritePlaceMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateFavoritePlaceMutation, UpdateFavoritePlaceMutationVariables>;
export const DeleteFavoritePlaceDocument = gql`
    mutation DeleteFavoritePlace($id: MongoID!) {
  result: favoritePlaceRemoveById(_id: $id) {
    recordId
  }
}
    `;

/**
 * __useDeleteFavoritePlaceMutation__
 *
 * To run a mutation, you first call `useDeleteFavoritePlaceMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFavoritePlaceMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteFavoritePlaceMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFavoritePlaceMutation(options: VueApolloComposable.UseMutationOptions<DeleteFavoritePlaceMutation, DeleteFavoritePlaceMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteFavoritePlaceMutation, DeleteFavoritePlaceMutationVariables>>) {
  return VueApolloComposable.useMutation<DeleteFavoritePlaceMutation, DeleteFavoritePlaceMutationVariables>(DeleteFavoritePlaceDocument, options);
}
export type DeleteFavoritePlaceMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteFavoritePlaceMutation, DeleteFavoritePlaceMutationVariables>;
export const ReadJourneysDocument = gql`
    query ReadJourneys {
  records: journeyMany {
    ...JourneyFields
  }
}
    ${JourneyFieldsFragmentDoc}`;

/**
 * __useReadJourneysQuery__
 *
 * To run a query within a Vue component, call `useReadJourneysQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadJourneysQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadJourneysQuery();
 */
export function useReadJourneysQuery(options: VueApolloComposable.UseQueryOptions<ReadJourneysQuery, ReadJourneysQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadJourneysQuery, ReadJourneysQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadJourneysQuery, ReadJourneysQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadJourneysQuery, ReadJourneysQueryVariables>(ReadJourneysDocument, {}, options);
}
export type ReadJourneysQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadJourneysQuery, ReadJourneysQueryVariables>;
export const CreateJourneyDocument = gql`
    mutation CreateJourney($record: CreateOneJourneyInput!) {
  result: journeyCreateOne(record: $record) {
    record {
      ...JourneyFields
    }
  }
}
    ${JourneyFieldsFragmentDoc}`;

/**
 * __useCreateJourneyMutation__
 *
 * To run a mutation, you first call `useCreateJourneyMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateJourneyMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateJourneyMutation({
 *   variables: {
 *     record: // value for 'record'
 *   },
 * });
 */
export function useCreateJourneyMutation(options: VueApolloComposable.UseMutationOptions<CreateJourneyMutation, CreateJourneyMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateJourneyMutation, CreateJourneyMutationVariables>>) {
  return VueApolloComposable.useMutation<CreateJourneyMutation, CreateJourneyMutationVariables>(CreateJourneyDocument, options);
}
export type CreateJourneyMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateJourneyMutation, CreateJourneyMutationVariables>;
export const UpdateJourneyDocument = gql`
    mutation UpdateJourney($id: MongoID!, $record: UpdateByIdJourneyInput!) {
  result: journeyUpdateById(_id: $id, record: $record) {
    record {
      ...JourneyFields
    }
  }
}
    ${JourneyFieldsFragmentDoc}`;

/**
 * __useUpdateJourneyMutation__
 *
 * To run a mutation, you first call `useUpdateJourneyMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJourneyMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateJourneyMutation({
 *   variables: {
 *     id: // value for 'id'
 *     record: // value for 'record'
 *   },
 * });
 */
export function useUpdateJourneyMutation(options: VueApolloComposable.UseMutationOptions<UpdateJourneyMutation, UpdateJourneyMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateJourneyMutation, UpdateJourneyMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateJourneyMutation, UpdateJourneyMutationVariables>(UpdateJourneyDocument, options);
}
export type UpdateJourneyMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateJourneyMutation, UpdateJourneyMutationVariables>;
export const DeleteJourneyDocument = gql`
    mutation DeleteJourney($id: MongoID!) {
  result: journeyRemoveById(_id: $id) {
    recordId
  }
}
    `;

/**
 * __useDeleteJourneyMutation__
 *
 * To run a mutation, you first call `useDeleteJourneyMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJourneyMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteJourneyMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteJourneyMutation(options: VueApolloComposable.UseMutationOptions<DeleteJourneyMutation, DeleteJourneyMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteJourneyMutation, DeleteJourneyMutationVariables>>) {
  return VueApolloComposable.useMutation<DeleteJourneyMutation, DeleteJourneyMutationVariables>(DeleteJourneyDocument, options);
}
export type DeleteJourneyMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteJourneyMutation, DeleteJourneyMutationVariables>;
export const ReadJourneyTemplatesDocument = gql`
    query ReadJourneyTemplates {
  records: journeyTemplateMany {
    ...JourneyTemplateFields
  }
}
    ${JourneyTemplateFieldsFragmentDoc}`;

/**
 * __useReadJourneyTemplatesQuery__
 *
 * To run a query within a Vue component, call `useReadJourneyTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadJourneyTemplatesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadJourneyTemplatesQuery();
 */
export function useReadJourneyTemplatesQuery(options: VueApolloComposable.UseQueryOptions<ReadJourneyTemplatesQuery, ReadJourneyTemplatesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadJourneyTemplatesQuery, ReadJourneyTemplatesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadJourneyTemplatesQuery, ReadJourneyTemplatesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadJourneyTemplatesQuery, ReadJourneyTemplatesQueryVariables>(ReadJourneyTemplatesDocument, {}, options);
}
export type ReadJourneyTemplatesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadJourneyTemplatesQuery, ReadJourneyTemplatesQueryVariables>;
export const CreateJourneyTemplateDocument = gql`
    mutation CreateJourneyTemplate($record: CreateOneJourneyTemplateInput!) {
  result: journeyTemplateCreateOne(record: $record) {
    record {
      ...JourneyTemplateFields
    }
  }
}
    ${JourneyTemplateFieldsFragmentDoc}`;

/**
 * __useCreateJourneyTemplateMutation__
 *
 * To run a mutation, you first call `useCreateJourneyTemplateMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateJourneyTemplateMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateJourneyTemplateMutation({
 *   variables: {
 *     record: // value for 'record'
 *   },
 * });
 */
export function useCreateJourneyTemplateMutation(options: VueApolloComposable.UseMutationOptions<CreateJourneyTemplateMutation, CreateJourneyTemplateMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateJourneyTemplateMutation, CreateJourneyTemplateMutationVariables>>) {
  return VueApolloComposable.useMutation<CreateJourneyTemplateMutation, CreateJourneyTemplateMutationVariables>(CreateJourneyTemplateDocument, options);
}
export type CreateJourneyTemplateMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateJourneyTemplateMutation, CreateJourneyTemplateMutationVariables>;
export const UpdateJourneyTemplateDocument = gql`
    mutation UpdateJourneyTemplate($id: MongoID!, $record: UpdateByIdJourneyTemplateInput!) {
  result: journeyTemplateUpdateById(_id: $id, record: $record) {
    record {
      ...JourneyTemplateFields
    }
  }
}
    ${JourneyTemplateFieldsFragmentDoc}`;

/**
 * __useUpdateJourneyTemplateMutation__
 *
 * To run a mutation, you first call `useUpdateJourneyTemplateMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJourneyTemplateMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateJourneyTemplateMutation({
 *   variables: {
 *     id: // value for 'id'
 *     record: // value for 'record'
 *   },
 * });
 */
export function useUpdateJourneyTemplateMutation(options: VueApolloComposable.UseMutationOptions<UpdateJourneyTemplateMutation, UpdateJourneyTemplateMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateJourneyTemplateMutation, UpdateJourneyTemplateMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateJourneyTemplateMutation, UpdateJourneyTemplateMutationVariables>(UpdateJourneyTemplateDocument, options);
}
export type UpdateJourneyTemplateMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateJourneyTemplateMutation, UpdateJourneyTemplateMutationVariables>;
export const DeleteJourneyTemplateDocument = gql`
    mutation DeleteJourneyTemplate($id: MongoID!) {
  result: journeyTemplateRemoveById(_id: $id) {
    recordId
  }
}
    `;

/**
 * __useDeleteJourneyTemplateMutation__
 *
 * To run a mutation, you first call `useDeleteJourneyTemplateMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJourneyTemplateMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteJourneyTemplateMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteJourneyTemplateMutation(options: VueApolloComposable.UseMutationOptions<DeleteJourneyTemplateMutation, DeleteJourneyTemplateMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteJourneyTemplateMutation, DeleteJourneyTemplateMutationVariables>>) {
  return VueApolloComposable.useMutation<DeleteJourneyTemplateMutation, DeleteJourneyTemplateMutationVariables>(DeleteJourneyTemplateDocument, options);
}
export type DeleteJourneyTemplateMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteJourneyTemplateMutation, DeleteJourneyTemplateMutationVariables>;