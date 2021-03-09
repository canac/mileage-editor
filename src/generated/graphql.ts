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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: string;
  Date: string;
};

export type ValidationError = ErrorInterface & {
  __typename?: 'ValidationError';
  /** Combined error message from all validators */
  message?: Maybe<Scalars['String']>;
  /** List of validator errors */
  errors?: Maybe<Array<ValidatorError>>;
};

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']>;
};

export type ValidatorError = {
  __typename?: 'ValidatorError';
  /** Validation error message */
  message?: Maybe<Scalars['String']>;
  /** Source of the validation error from the model path */
  path?: Maybe<Scalars['String']>;
  /** Field value which occurs the validation error */
  value?: Maybe<Scalars['JSON']>;
  /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
  idx: Scalars['Int'];
};


export type MongoError = ErrorInterface & {
  __typename?: 'MongoError';
  /** MongoDB error message */
  message?: Maybe<Scalars['String']>;
  /** MongoDB error code */
  code?: Maybe<Scalars['Int']>;
};

export type RuntimeError = ErrorInterface & {
  __typename?: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  favoritePlaceById?: Maybe<FavoritePlace>;
  favoritePlaceByIds: Array<FavoritePlace>;
  favoritePlaceOne?: Maybe<FavoritePlace>;
  favoritePlaceMany: Array<FavoritePlace>;
  favoritePlaceDataLoader?: Maybe<FavoritePlace>;
  favoritePlaceDataLoaderMany: Array<Maybe<FavoritePlace>>;
  favoritePlaceCount?: Maybe<Scalars['Int']>;
  favoritePlaceConnection?: Maybe<FavoritePlaceConnection>;
  favoritePlacePagination?: Maybe<FavoritePlacePagination>;
  journeyById?: Maybe<Journey>;
  journeyByIds: Array<Journey>;
  journeyOne?: Maybe<Journey>;
  journeyMany: Array<Journey>;
  journeyDataLoader?: Maybe<Journey>;
  journeyDataLoaderMany: Array<Maybe<Journey>>;
  journeyCount?: Maybe<Scalars['Int']>;
  journeyConnection?: Maybe<JourneyConnection>;
  journeyPagination?: Maybe<JourneyPagination>;
};


export type QueryFavoritePlaceByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryFavoritePlaceByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsFavoritePlaceInput>;
};


export type QueryFavoritePlaceOneArgs = {
  filter?: Maybe<FilterFindOneFavoritePlaceInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneFavoritePlaceInput>;
};


export type QueryFavoritePlaceManyArgs = {
  filter?: Maybe<FilterFindManyFavoritePlaceInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyFavoritePlaceInput>;
};


export type QueryFavoritePlaceDataLoaderArgs = {
  _id: Scalars['MongoID'];
};


export type QueryFavoritePlaceDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};


export type QueryFavoritePlaceCountArgs = {
  filter?: Maybe<FilterCountFavoritePlaceInput>;
};


export type QueryFavoritePlaceConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyFavoritePlaceInput>;
  sort?: Maybe<SortConnectionFavoritePlaceEnum>;
};


export type QueryFavoritePlacePaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyFavoritePlaceInput>;
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


export type QueryJourneyOneArgs = {
  filter?: Maybe<FilterFindOneJourneyInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneJourneyInput>;
};


export type QueryJourneyManyArgs = {
  filter?: Maybe<FilterFindManyJourneyInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyJourneyInput>;
};


export type QueryJourneyDataLoaderArgs = {
  _id: Scalars['MongoID'];
};


export type QueryJourneyDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};


export type QueryJourneyCountArgs = {
  filter?: Maybe<FilterCountJourneyInput>;
};


export type QueryJourneyConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyJourneyInput>;
  sort?: Maybe<SortConnectionJourneyEnum>;
};


export type QueryJourneyPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyJourneyInput>;
  sort?: Maybe<SortFindManyJourneyInput>;
};

export type FavoritePlace = {
  __typename?: 'FavoritePlace';
  name: Scalars['String'];
  address: Scalars['String'];
  _id: Scalars['MongoID'];
};


export enum SortFindByIdsFavoritePlaceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterFindOneFavoritePlaceInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneFavoritePlaceOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneFavoritePlaceInput>>;
  AND?: Maybe<Array<FilterFindOneFavoritePlaceInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneFavoritePlaceOperatorsInput = {
  _id?: Maybe<FilterFindOneFavoritePlace_IdOperatorsInput>;
};

export type FilterFindOneFavoritePlace_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneFavoritePlaceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterFindManyFavoritePlaceInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyFavoritePlaceOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyFavoritePlaceInput>>;
  AND?: Maybe<Array<FilterFindManyFavoritePlaceInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyFavoritePlaceOperatorsInput = {
  _id?: Maybe<FilterFindManyFavoritePlace_IdOperatorsInput>;
};

export type FilterFindManyFavoritePlace_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindManyFavoritePlaceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterCountFavoritePlaceInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountFavoritePlaceOperatorsInput>;
  OR?: Maybe<Array<FilterCountFavoritePlaceInput>>;
  AND?: Maybe<Array<FilterCountFavoritePlaceInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountFavoritePlaceOperatorsInput = {
  _id?: Maybe<FilterCountFavoritePlace_IdOperatorsInput>;
};

export type FilterCountFavoritePlace_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
export type FavoritePlaceConnection = {
  __typename?: 'FavoritePlaceConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<FavoritePlaceEdge>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type FavoritePlaceEdge = {
  __typename?: 'FavoritePlaceEdge';
  /** The item at the end of the edge */
  node: FavoritePlace;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export enum SortConnectionFavoritePlaceEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC'
}

/** List of items with pagination. */
export type FavoritePlacePagination = {
  __typename?: 'FavoritePlacePagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<FavoritePlace>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int'];
  perPage: Scalars['Int'];
  pageCount?: Maybe<Scalars['Int']>;
  itemCount?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type Journey = {
  __typename?: 'Journey';
  date: Scalars['Date'];
  description: Scalars['String'];
  to: Scalars['String'];
  from: Scalars['String'];
  miles: Scalars['Float'];
  _id: Scalars['MongoID'];
};


export enum SortFindByIdsJourneyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterFindOneJourneyInput = {
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneJourneyOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneJourneyInput>>;
  AND?: Maybe<Array<FilterFindOneJourneyInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneJourneyOperatorsInput = {
  _id?: Maybe<FilterFindOneJourney_IdOperatorsInput>;
};

export type FilterFindOneJourney_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneJourneyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterFindManyJourneyInput = {
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyJourneyOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyJourneyInput>>;
  AND?: Maybe<Array<FilterFindManyJourneyInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyJourneyOperatorsInput = {
  _id?: Maybe<FilterFindManyJourney_IdOperatorsInput>;
};

export type FilterFindManyJourney_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindManyJourneyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterCountJourneyInput = {
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountJourneyOperatorsInput>;
  OR?: Maybe<Array<FilterCountJourneyInput>>;
  AND?: Maybe<Array<FilterCountJourneyInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountJourneyOperatorsInput = {
  _id?: Maybe<FilterCountJourney_IdOperatorsInput>;
};

export type FilterCountJourney_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
export type JourneyConnection = {
  __typename?: 'JourneyConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<JourneyEdge>;
};

/** An edge in a connection. */
export type JourneyEdge = {
  __typename?: 'JourneyEdge';
  /** The item at the end of the edge */
  node: Journey;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export enum SortConnectionJourneyEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC'
}

/** List of items with pagination. */
export type JourneyPagination = {
  __typename?: 'JourneyPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Journey>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one document with mongoose defaults, setters, hooks and validation */
  favoritePlaceCreateOne?: Maybe<CreateOneFavoritePlacePayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  favoritePlaceCreateMany?: Maybe<CreateManyFavoritePlacePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  favoritePlaceUpdateById?: Maybe<UpdateByIdFavoritePlacePayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  favoritePlaceUpdateOne?: Maybe<UpdateOneFavoritePlacePayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  favoritePlaceUpdateMany?: Maybe<UpdateManyFavoritePlacePayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  favoritePlaceRemoveById?: Maybe<RemoveByIdFavoritePlacePayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  favoritePlaceRemoveOne?: Maybe<RemoveOneFavoritePlacePayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  favoritePlaceRemoveMany?: Maybe<RemoveManyFavoritePlacePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  journeyCreateOne?: Maybe<CreateOneJourneyPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  journeyCreateMany?: Maybe<CreateManyJourneyPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  journeyUpdateById?: Maybe<UpdateByIdJourneyPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  journeyUpdateOne?: Maybe<UpdateOneJourneyPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  journeyUpdateMany?: Maybe<UpdateManyJourneyPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  journeyRemoveById?: Maybe<RemoveByIdJourneyPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  journeyRemoveOne?: Maybe<RemoveOneJourneyPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  journeyRemoveMany?: Maybe<RemoveManyJourneyPayload>;
};


export type MutationFavoritePlaceCreateOneArgs = {
  record: CreateOneFavoritePlaceInput;
};


export type MutationFavoritePlaceCreateManyArgs = {
  records: Array<CreateManyFavoritePlaceInput>;
};


export type MutationFavoritePlaceUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdFavoritePlaceInput;
};


export type MutationFavoritePlaceUpdateOneArgs = {
  record: UpdateOneFavoritePlaceInput;
  filter?: Maybe<FilterUpdateOneFavoritePlaceInput>;
  sort?: Maybe<SortUpdateOneFavoritePlaceInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationFavoritePlaceUpdateManyArgs = {
  record: UpdateManyFavoritePlaceInput;
  filter?: Maybe<FilterUpdateManyFavoritePlaceInput>;
  sort?: Maybe<SortUpdateManyFavoritePlaceInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationFavoritePlaceRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationFavoritePlaceRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneFavoritePlaceInput>;
  sort?: Maybe<SortRemoveOneFavoritePlaceInput>;
};


export type MutationFavoritePlaceRemoveManyArgs = {
  filter: FilterRemoveManyFavoritePlaceInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationJourneyCreateOneArgs = {
  record: CreateOneJourneyInput;
};


export type MutationJourneyCreateManyArgs = {
  records: Array<CreateManyJourneyInput>;
};


export type MutationJourneyUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdJourneyInput;
};


export type MutationJourneyUpdateOneArgs = {
  record: UpdateOneJourneyInput;
  filter?: Maybe<FilterUpdateOneJourneyInput>;
  sort?: Maybe<SortUpdateOneJourneyInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationJourneyUpdateManyArgs = {
  record: UpdateManyJourneyInput;
  filter?: Maybe<FilterUpdateManyJourneyInput>;
  sort?: Maybe<SortUpdateManyJourneyInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationJourneyRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationJourneyRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneJourneyInput>;
  sort?: Maybe<SortRemoveOneJourneyInput>;
};


export type MutationJourneyRemoveManyArgs = {
  filter: FilterRemoveManyJourneyInput;
  limit?: Maybe<Scalars['Int']>;
};

export type CreateOneFavoritePlacePayload = {
  __typename?: 'CreateOneFavoritePlacePayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<FavoritePlace>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateOneFavoritePlaceInput = {
  name: Scalars['String'];
  address: Scalars['String'];
};

export type CreateManyFavoritePlacePayload = {
  __typename?: 'CreateManyFavoritePlacePayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<FavoritePlace>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManyFavoritePlaceInput = {
  name: Scalars['String'];
  address: Scalars['String'];
};

export type UpdateByIdFavoritePlacePayload = {
  __typename?: 'UpdateByIdFavoritePlacePayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<FavoritePlace>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdFavoritePlaceInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
};

export type UpdateOneFavoritePlacePayload = {
  __typename?: 'UpdateOneFavoritePlacePayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<FavoritePlace>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneFavoritePlaceInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
};

export type FilterUpdateOneFavoritePlaceInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneFavoritePlaceOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneFavoritePlaceInput>>;
  AND?: Maybe<Array<FilterUpdateOneFavoritePlaceInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneFavoritePlaceOperatorsInput = {
  _id?: Maybe<FilterUpdateOneFavoritePlace_IdOperatorsInput>;
};

export type FilterUpdateOneFavoritePlace_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateOneFavoritePlaceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateManyFavoritePlacePayload = {
  __typename?: 'UpdateManyFavoritePlacePayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyFavoritePlaceInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
};

export type FilterUpdateManyFavoritePlaceInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyFavoritePlaceOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyFavoritePlaceInput>>;
  AND?: Maybe<Array<FilterUpdateManyFavoritePlaceInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyFavoritePlaceOperatorsInput = {
  _id?: Maybe<FilterUpdateManyFavoritePlace_IdOperatorsInput>;
};

export type FilterUpdateManyFavoritePlace_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateManyFavoritePlaceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type RemoveByIdFavoritePlacePayload = {
  __typename?: 'RemoveByIdFavoritePlacePayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<FavoritePlace>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveOneFavoritePlacePayload = {
  __typename?: 'RemoveOneFavoritePlacePayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<FavoritePlace>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveOneFavoritePlaceInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneFavoritePlaceOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneFavoritePlaceInput>>;
  AND?: Maybe<Array<FilterRemoveOneFavoritePlaceInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneFavoritePlaceOperatorsInput = {
  _id?: Maybe<FilterRemoveOneFavoritePlace_IdOperatorsInput>;
};

export type FilterRemoveOneFavoritePlace_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortRemoveOneFavoritePlaceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type RemoveManyFavoritePlacePayload = {
  __typename?: 'RemoveManyFavoritePlacePayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveManyFavoritePlaceInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyFavoritePlaceOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyFavoritePlaceInput>>;
  AND?: Maybe<Array<FilterRemoveManyFavoritePlaceInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyFavoritePlaceOperatorsInput = {
  _id?: Maybe<FilterRemoveManyFavoritePlace_IdOperatorsInput>;
};

export type FilterRemoveManyFavoritePlace_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type CreateOneJourneyPayload = {
  __typename?: 'CreateOneJourneyPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<Journey>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateOneJourneyInput = {
  date: Scalars['Date'];
  description: Scalars['String'];
  to: Scalars['String'];
  from: Scalars['String'];
  miles: Scalars['Float'];
};

export type CreateManyJourneyPayload = {
  __typename?: 'CreateManyJourneyPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Journey>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManyJourneyInput = {
  date: Scalars['Date'];
  description: Scalars['String'];
  to: Scalars['String'];
  from: Scalars['String'];
  miles: Scalars['Float'];
};

export type UpdateByIdJourneyPayload = {
  __typename?: 'UpdateByIdJourneyPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Journey>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdJourneyInput = {
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
};

export type UpdateOneJourneyPayload = {
  __typename?: 'UpdateOneJourneyPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Journey>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneJourneyInput = {
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
};

export type FilterUpdateOneJourneyInput = {
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneJourneyOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneJourneyInput>>;
  AND?: Maybe<Array<FilterUpdateOneJourneyInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneJourneyOperatorsInput = {
  _id?: Maybe<FilterUpdateOneJourney_IdOperatorsInput>;
};

export type FilterUpdateOneJourney_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateOneJourneyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateManyJourneyPayload = {
  __typename?: 'UpdateManyJourneyPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyJourneyInput = {
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
};

export type FilterUpdateManyJourneyInput = {
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyJourneyOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyJourneyInput>>;
  AND?: Maybe<Array<FilterUpdateManyJourneyInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyJourneyOperatorsInput = {
  _id?: Maybe<FilterUpdateManyJourney_IdOperatorsInput>;
};

export type FilterUpdateManyJourney_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateManyJourneyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type RemoveByIdJourneyPayload = {
  __typename?: 'RemoveByIdJourneyPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Journey>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveOneJourneyPayload = {
  __typename?: 'RemoveOneJourneyPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Journey>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveOneJourneyInput = {
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneJourneyOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneJourneyInput>>;
  AND?: Maybe<Array<FilterRemoveOneJourneyInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneJourneyOperatorsInput = {
  _id?: Maybe<FilterRemoveOneJourney_IdOperatorsInput>;
};

export type FilterRemoveOneJourney_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortRemoveOneJourneyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type RemoveManyJourneyPayload = {
  __typename?: 'RemoveManyJourneyPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveManyJourneyInput = {
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  miles?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyJourneyOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyJourneyInput>>;
  AND?: Maybe<Array<FilterRemoveManyJourneyInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyJourneyOperatorsInput = {
  _id?: Maybe<FilterRemoveManyJourney_IdOperatorsInput>;
};

export type FilterRemoveManyJourney_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FavoritePlaceFieldsFragment = (
  { __typename?: 'FavoritePlace' }
  & Pick<FavoritePlace, '_id' | 'name' | 'address'>
);

export type ReadFavoritePlacesQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadFavoritePlacesQuery = (
  { __typename?: 'Query' }
  & { records: Array<(
    { __typename?: 'FavoritePlace' }
    & FavoritePlaceFieldsFragment
  )> }
);

export type CreateFavoritePlaceMutationVariables = Exact<{
  record: CreateOneFavoritePlaceInput;
}>;


export type CreateFavoritePlaceMutation = (
  { __typename?: 'Mutation' }
  & { result?: Maybe<(
    { __typename?: 'CreateOneFavoritePlacePayload' }
    & { record?: Maybe<(
      { __typename?: 'FavoritePlace' }
      & FavoritePlaceFieldsFragment
    )> }
  )> }
);

export type UpdateFavoritePlaceMutationVariables = Exact<{
  id: Scalars['MongoID'];
  record: UpdateByIdFavoritePlaceInput;
}>;


export type UpdateFavoritePlaceMutation = (
  { __typename?: 'Mutation' }
  & { result?: Maybe<(
    { __typename?: 'UpdateByIdFavoritePlacePayload' }
    & { record?: Maybe<(
      { __typename?: 'FavoritePlace' }
      & FavoritePlaceFieldsFragment
    )> }
  )> }
);

export type DeleteFavoritePlaceMutationVariables = Exact<{
  id: Scalars['MongoID'];
}>;


export type DeleteFavoritePlaceMutation = (
  { __typename?: 'Mutation' }
  & { result?: Maybe<(
    { __typename?: 'RemoveByIdFavoritePlacePayload' }
    & Pick<RemoveByIdFavoritePlacePayload, 'recordId'>
  )> }
);

export type JourneyFieldsFragment = (
  { __typename?: 'Journey' }
  & Pick<Journey, '_id' | 'date' | 'description' | 'to' | 'from' | 'miles'>
);

export type ReadJourneysQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadJourneysQuery = (
  { __typename?: 'Query' }
  & { records: Array<(
    { __typename?: 'Journey' }
    & JourneyFieldsFragment
  )> }
);

export type CreateJourneyMutationVariables = Exact<{
  record: CreateOneJourneyInput;
}>;


export type CreateJourneyMutation = (
  { __typename?: 'Mutation' }
  & { result?: Maybe<(
    { __typename?: 'CreateOneJourneyPayload' }
    & { record?: Maybe<(
      { __typename?: 'Journey' }
      & JourneyFieldsFragment
    )> }
  )> }
);

export type UpdateJourneyMutationVariables = Exact<{
  id: Scalars['MongoID'];
  record: UpdateByIdJourneyInput;
}>;


export type UpdateJourneyMutation = (
  { __typename?: 'Mutation' }
  & { result?: Maybe<(
    { __typename?: 'UpdateByIdJourneyPayload' }
    & { record?: Maybe<(
      { __typename?: 'Journey' }
      & JourneyFieldsFragment
    )> }
  )> }
);

export type DeleteJourneyMutationVariables = Exact<{
  id: Scalars['MongoID'];
}>;


export type DeleteJourneyMutation = (
  { __typename?: 'Mutation' }
  & { result?: Maybe<(
    { __typename?: 'RemoveByIdJourneyPayload' }
    & Pick<RemoveByIdJourneyPayload, 'recordId'>
  )> }
);

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
  to
  from
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