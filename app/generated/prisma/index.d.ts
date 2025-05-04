
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Streamer
 * 
 */
export type Streamer = $Result.DefaultSelection<Prisma.$StreamerPayload>
/**
 * Model UpVotes
 * 
 */
export type UpVotes = $Result.DefaultSelection<Prisma.$UpVotesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Streamer: 'Streamer',
  Creator: 'Creator'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StreamType: {
  spotify: 'spotify',
  youtube: 'youtube'
};

export type StreamType = (typeof StreamType)[keyof typeof StreamType]


export const Providers: {
  Google: 'Google'
};

export type Providers = (typeof Providers)[keyof typeof Providers]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StreamType = $Enums.StreamType

export const StreamType: typeof $Enums.StreamType

export type Providers = $Enums.Providers

export const Providers: typeof $Enums.Providers

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streamer`: Exposes CRUD operations for the **Streamer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streamers
    * const streamers = await prisma.streamer.findMany()
    * ```
    */
  get streamer(): Prisma.StreamerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.upVotes`: Exposes CRUD operations for the **UpVotes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UpVotes
    * const upVotes = await prisma.upVotes.findMany()
    * ```
    */
  get upVotes(): Prisma.UpVotesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Streamer: 'Streamer',
    UpVotes: 'UpVotes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "streamer" | "upVotes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Streamer: {
        payload: Prisma.$StreamerPayload<ExtArgs>
        fields: Prisma.StreamerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>
          }
          findFirst: {
            args: Prisma.StreamerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>
          }
          findMany: {
            args: Prisma.StreamerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>[]
          }
          create: {
            args: Prisma.StreamerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>
          }
          createMany: {
            args: Prisma.StreamerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>[]
          }
          delete: {
            args: Prisma.StreamerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>
          }
          update: {
            args: Prisma.StreamerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>
          }
          deleteMany: {
            args: Prisma.StreamerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>[]
          }
          upsert: {
            args: Prisma.StreamerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>
          }
          aggregate: {
            args: Prisma.StreamerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreamer>
          }
          groupBy: {
            args: Prisma.StreamerGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamerGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamerCountArgs<ExtArgs>
            result: $Utils.Optional<StreamerCountAggregateOutputType> | number
          }
        }
      }
      UpVotes: {
        payload: Prisma.$UpVotesPayload<ExtArgs>
        fields: Prisma.UpVotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpVotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpVotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpVotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpVotesPayload>
          }
          findFirst: {
            args: Prisma.UpVotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpVotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpVotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpVotesPayload>
          }
          findMany: {
            args: Prisma.UpVotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpVotesPayload>[]
          }
          create: {
            args: Prisma.UpVotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpVotesPayload>
          }
          createMany: {
            args: Prisma.UpVotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UpVotesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpVotesPayload>[]
          }
          delete: {
            args: Prisma.UpVotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpVotesPayload>
          }
          update: {
            args: Prisma.UpVotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpVotesPayload>
          }
          deleteMany: {
            args: Prisma.UpVotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UpVotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UpVotesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpVotesPayload>[]
          }
          upsert: {
            args: Prisma.UpVotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpVotesPayload>
          }
          aggregate: {
            args: Prisma.UpVotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpVotes>
          }
          groupBy: {
            args: Prisma.UpVotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UpVotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpVotesCountArgs<ExtArgs>
            result: $Utils.Optional<UpVotesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    streamer?: StreamerOmit
    upVotes?: UpVotesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    streamer: number
    upvotes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | UserCountOutputTypeCountStreamerArgs
    upvotes?: boolean | UserCountOutputTypeCountUpvotesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStreamerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpVotesWhereInput
  }


  /**
   * Count Type StreamerCountOutputType
   */

  export type StreamerCountOutputType = {
    upvotes: number
  }

  export type StreamerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upvotes?: boolean | StreamerCountOutputTypeCountUpvotesArgs
  }

  // Custom InputTypes
  /**
   * StreamerCountOutputType without action
   */
  export type StreamerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerCountOutputType
     */
    select?: StreamerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StreamerCountOutputType without action
   */
  export type StreamerCountOutputTypeCountUpvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpVotesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    provider: $Enums.Providers | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    provider: $Enums.Providers | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    provider: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    provider?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    provider?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    provider?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    provider: $Enums.Providers
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    provider?: boolean
    role?: boolean
    streamer?: boolean | User$streamerArgs<ExtArgs>
    upvotes?: boolean | User$upvotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    provider?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    provider?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    provider?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "provider" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | User$streamerArgs<ExtArgs>
    upvotes?: boolean | User$upvotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      streamer: Prisma.$StreamerPayload<ExtArgs>[]
      upvotes: Prisma.$UpVotesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      provider: $Enums.Providers
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streamer<T extends User$streamerArgs<ExtArgs> = {}>(args?: Subset<T, User$streamerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    upvotes<T extends User$upvotesArgs<ExtArgs> = {}>(args?: Subset<T, User$upvotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpVotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'Providers'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.streamer
   */
  export type User$streamerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    where?: StreamerWhereInput
    orderBy?: StreamerOrderByWithRelationInput | StreamerOrderByWithRelationInput[]
    cursor?: StreamerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamerScalarFieldEnum | StreamerScalarFieldEnum[]
  }

  /**
   * User.upvotes
   */
  export type User$upvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpVotes
     */
    select?: UpVotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpVotes
     */
    omit?: UpVotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpVotesInclude<ExtArgs> | null
    where?: UpVotesWhereInput
    orderBy?: UpVotesOrderByWithRelationInput | UpVotesOrderByWithRelationInput[]
    cursor?: UpVotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpVotesScalarFieldEnum | UpVotesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Streamer
   */

  export type AggregateStreamer = {
    _count: StreamerCountAggregateOutputType | null
    _min: StreamerMinAggregateOutputType | null
    _max: StreamerMaxAggregateOutputType | null
  }

  export type StreamerMinAggregateOutputType = {
    id: string | null
    type: $Enums.StreamType | null
    url: string | null
    extractedId: string | null
    userId: string | null
    active: boolean | null
  }

  export type StreamerMaxAggregateOutputType = {
    id: string | null
    type: $Enums.StreamType | null
    url: string | null
    extractedId: string | null
    userId: string | null
    active: boolean | null
  }

  export type StreamerCountAggregateOutputType = {
    id: number
    type: number
    url: number
    extractedId: number
    userId: number
    active: number
    _all: number
  }


  export type StreamerMinAggregateInputType = {
    id?: true
    type?: true
    url?: true
    extractedId?: true
    userId?: true
    active?: true
  }

  export type StreamerMaxAggregateInputType = {
    id?: true
    type?: true
    url?: true
    extractedId?: true
    userId?: true
    active?: true
  }

  export type StreamerCountAggregateInputType = {
    id?: true
    type?: true
    url?: true
    extractedId?: true
    userId?: true
    active?: true
    _all?: true
  }

  export type StreamerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streamer to aggregate.
     */
    where?: StreamerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streamers to fetch.
     */
    orderBy?: StreamerOrderByWithRelationInput | StreamerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streamers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streamers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Streamers
    **/
    _count?: true | StreamerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamerMaxAggregateInputType
  }

  export type GetStreamerAggregateType<T extends StreamerAggregateArgs> = {
        [P in keyof T & keyof AggregateStreamer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreamer[P]>
      : GetScalarType<T[P], AggregateStreamer[P]>
  }




  export type StreamerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamerWhereInput
    orderBy?: StreamerOrderByWithAggregationInput | StreamerOrderByWithAggregationInput[]
    by: StreamerScalarFieldEnum[] | StreamerScalarFieldEnum
    having?: StreamerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamerCountAggregateInputType | true
    _min?: StreamerMinAggregateInputType
    _max?: StreamerMaxAggregateInputType
  }

  export type StreamerGroupByOutputType = {
    id: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    userId: string
    active: boolean
    _count: StreamerCountAggregateOutputType | null
    _min: StreamerMinAggregateOutputType | null
    _max: StreamerMaxAggregateOutputType | null
  }

  type GetStreamerGroupByPayload<T extends StreamerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamerGroupByOutputType[P]>
            : GetScalarType<T[P], StreamerGroupByOutputType[P]>
        }
      >
    >


  export type StreamerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    extractedId?: boolean
    userId?: boolean
    active?: boolean
    upvotes?: boolean | Streamer$upvotesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StreamerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamer"]>

  export type StreamerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    extractedId?: boolean
    userId?: boolean
    active?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamer"]>

  export type StreamerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    extractedId?: boolean
    userId?: boolean
    active?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamer"]>

  export type StreamerSelectScalar = {
    id?: boolean
    type?: boolean
    url?: boolean
    extractedId?: boolean
    userId?: boolean
    active?: boolean
  }

  export type StreamerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "url" | "extractedId" | "userId" | "active", ExtArgs["result"]["streamer"]>
  export type StreamerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upvotes?: boolean | Streamer$upvotesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StreamerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StreamerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StreamerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StreamerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Streamer"
    objects: {
      upvotes: Prisma.$UpVotesPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.StreamType
      url: string
      extractedId: string
      userId: string
      active: boolean
    }, ExtArgs["result"]["streamer"]>
    composites: {}
  }

  type StreamerGetPayload<S extends boolean | null | undefined | StreamerDefaultArgs> = $Result.GetResult<Prisma.$StreamerPayload, S>

  type StreamerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamerCountAggregateInputType | true
    }

  export interface StreamerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Streamer'], meta: { name: 'Streamer' } }
    /**
     * Find zero or one Streamer that matches the filter.
     * @param {StreamerFindUniqueArgs} args - Arguments to find a Streamer
     * @example
     * // Get one Streamer
     * const streamer = await prisma.streamer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamerFindUniqueArgs>(args: SelectSubset<T, StreamerFindUniqueArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Streamer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamerFindUniqueOrThrowArgs} args - Arguments to find a Streamer
     * @example
     * // Get one Streamer
     * const streamer = await prisma.streamer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamerFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streamer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerFindFirstArgs} args - Arguments to find a Streamer
     * @example
     * // Get one Streamer
     * const streamer = await prisma.streamer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamerFindFirstArgs>(args?: SelectSubset<T, StreamerFindFirstArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streamer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerFindFirstOrThrowArgs} args - Arguments to find a Streamer
     * @example
     * // Get one Streamer
     * const streamer = await prisma.streamer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamerFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamerFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Streamers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streamers
     * const streamers = await prisma.streamer.findMany()
     * 
     * // Get first 10 Streamers
     * const streamers = await prisma.streamer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamerWithIdOnly = await prisma.streamer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamerFindManyArgs>(args?: SelectSubset<T, StreamerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Streamer.
     * @param {StreamerCreateArgs} args - Arguments to create a Streamer.
     * @example
     * // Create one Streamer
     * const Streamer = await prisma.streamer.create({
     *   data: {
     *     // ... data to create a Streamer
     *   }
     * })
     * 
     */
    create<T extends StreamerCreateArgs>(args: SelectSubset<T, StreamerCreateArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Streamers.
     * @param {StreamerCreateManyArgs} args - Arguments to create many Streamers.
     * @example
     * // Create many Streamers
     * const streamer = await prisma.streamer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamerCreateManyArgs>(args?: SelectSubset<T, StreamerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Streamers and returns the data saved in the database.
     * @param {StreamerCreateManyAndReturnArgs} args - Arguments to create many Streamers.
     * @example
     * // Create many Streamers
     * const streamer = await prisma.streamer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Streamers and only return the `id`
     * const streamerWithIdOnly = await prisma.streamer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamerCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Streamer.
     * @param {StreamerDeleteArgs} args - Arguments to delete one Streamer.
     * @example
     * // Delete one Streamer
     * const Streamer = await prisma.streamer.delete({
     *   where: {
     *     // ... filter to delete one Streamer
     *   }
     * })
     * 
     */
    delete<T extends StreamerDeleteArgs>(args: SelectSubset<T, StreamerDeleteArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Streamer.
     * @param {StreamerUpdateArgs} args - Arguments to update one Streamer.
     * @example
     * // Update one Streamer
     * const streamer = await prisma.streamer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamerUpdateArgs>(args: SelectSubset<T, StreamerUpdateArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Streamers.
     * @param {StreamerDeleteManyArgs} args - Arguments to filter Streamers to delete.
     * @example
     * // Delete a few Streamers
     * const { count } = await prisma.streamer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamerDeleteManyArgs>(args?: SelectSubset<T, StreamerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streamers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streamers
     * const streamer = await prisma.streamer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamerUpdateManyArgs>(args: SelectSubset<T, StreamerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streamers and returns the data updated in the database.
     * @param {StreamerUpdateManyAndReturnArgs} args - Arguments to update many Streamers.
     * @example
     * // Update many Streamers
     * const streamer = await prisma.streamer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Streamers and only return the `id`
     * const streamerWithIdOnly = await prisma.streamer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StreamerUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Streamer.
     * @param {StreamerUpsertArgs} args - Arguments to update or create a Streamer.
     * @example
     * // Update or create a Streamer
     * const streamer = await prisma.streamer.upsert({
     *   create: {
     *     // ... data to create a Streamer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Streamer we want to update
     *   }
     * })
     */
    upsert<T extends StreamerUpsertArgs>(args: SelectSubset<T, StreamerUpsertArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Streamers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerCountArgs} args - Arguments to filter Streamers to count.
     * @example
     * // Count the number of Streamers
     * const count = await prisma.streamer.count({
     *   where: {
     *     // ... the filter for the Streamers we want to count
     *   }
     * })
    **/
    count<T extends StreamerCountArgs>(
      args?: Subset<T, StreamerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Streamer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreamerAggregateArgs>(args: Subset<T, StreamerAggregateArgs>): Prisma.PrismaPromise<GetStreamerAggregateType<T>>

    /**
     * Group by Streamer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreamerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamerGroupByArgs['orderBy'] }
        : { orderBy?: StreamerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreamerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Streamer model
   */
  readonly fields: StreamerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Streamer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    upvotes<T extends Streamer$upvotesArgs<ExtArgs> = {}>(args?: Subset<T, Streamer$upvotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpVotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Streamer model
   */
  interface StreamerFieldRefs {
    readonly id: FieldRef<"Streamer", 'String'>
    readonly type: FieldRef<"Streamer", 'StreamType'>
    readonly url: FieldRef<"Streamer", 'String'>
    readonly extractedId: FieldRef<"Streamer", 'String'>
    readonly userId: FieldRef<"Streamer", 'String'>
    readonly active: FieldRef<"Streamer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Streamer findUnique
   */
  export type StreamerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * Filter, which Streamer to fetch.
     */
    where: StreamerWhereUniqueInput
  }

  /**
   * Streamer findUniqueOrThrow
   */
  export type StreamerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * Filter, which Streamer to fetch.
     */
    where: StreamerWhereUniqueInput
  }

  /**
   * Streamer findFirst
   */
  export type StreamerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * Filter, which Streamer to fetch.
     */
    where?: StreamerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streamers to fetch.
     */
    orderBy?: StreamerOrderByWithRelationInput | StreamerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streamers.
     */
    cursor?: StreamerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streamers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streamers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streamers.
     */
    distinct?: StreamerScalarFieldEnum | StreamerScalarFieldEnum[]
  }

  /**
   * Streamer findFirstOrThrow
   */
  export type StreamerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * Filter, which Streamer to fetch.
     */
    where?: StreamerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streamers to fetch.
     */
    orderBy?: StreamerOrderByWithRelationInput | StreamerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streamers.
     */
    cursor?: StreamerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streamers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streamers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streamers.
     */
    distinct?: StreamerScalarFieldEnum | StreamerScalarFieldEnum[]
  }

  /**
   * Streamer findMany
   */
  export type StreamerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * Filter, which Streamers to fetch.
     */
    where?: StreamerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streamers to fetch.
     */
    orderBy?: StreamerOrderByWithRelationInput | StreamerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Streamers.
     */
    cursor?: StreamerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streamers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streamers.
     */
    skip?: number
    distinct?: StreamerScalarFieldEnum | StreamerScalarFieldEnum[]
  }

  /**
   * Streamer create
   */
  export type StreamerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * The data needed to create a Streamer.
     */
    data: XOR<StreamerCreateInput, StreamerUncheckedCreateInput>
  }

  /**
   * Streamer createMany
   */
  export type StreamerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Streamers.
     */
    data: StreamerCreateManyInput | StreamerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Streamer createManyAndReturn
   */
  export type StreamerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * The data used to create many Streamers.
     */
    data: StreamerCreateManyInput | StreamerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Streamer update
   */
  export type StreamerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * The data needed to update a Streamer.
     */
    data: XOR<StreamerUpdateInput, StreamerUncheckedUpdateInput>
    /**
     * Choose, which Streamer to update.
     */
    where: StreamerWhereUniqueInput
  }

  /**
   * Streamer updateMany
   */
  export type StreamerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Streamers.
     */
    data: XOR<StreamerUpdateManyMutationInput, StreamerUncheckedUpdateManyInput>
    /**
     * Filter which Streamers to update
     */
    where?: StreamerWhereInput
    /**
     * Limit how many Streamers to update.
     */
    limit?: number
  }

  /**
   * Streamer updateManyAndReturn
   */
  export type StreamerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * The data used to update Streamers.
     */
    data: XOR<StreamerUpdateManyMutationInput, StreamerUncheckedUpdateManyInput>
    /**
     * Filter which Streamers to update
     */
    where?: StreamerWhereInput
    /**
     * Limit how many Streamers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Streamer upsert
   */
  export type StreamerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * The filter to search for the Streamer to update in case it exists.
     */
    where: StreamerWhereUniqueInput
    /**
     * In case the Streamer found by the `where` argument doesn't exist, create a new Streamer with this data.
     */
    create: XOR<StreamerCreateInput, StreamerUncheckedCreateInput>
    /**
     * In case the Streamer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamerUpdateInput, StreamerUncheckedUpdateInput>
  }

  /**
   * Streamer delete
   */
  export type StreamerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * Filter which Streamer to delete.
     */
    where: StreamerWhereUniqueInput
  }

  /**
   * Streamer deleteMany
   */
  export type StreamerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streamers to delete
     */
    where?: StreamerWhereInput
    /**
     * Limit how many Streamers to delete.
     */
    limit?: number
  }

  /**
   * Streamer.upvotes
   */
  export type Streamer$upvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpVotes
     */
    select?: UpVotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpVotes
     */
    omit?: UpVotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpVotesInclude<ExtArgs> | null
    where?: UpVotesWhereInput
    orderBy?: UpVotesOrderByWithRelationInput | UpVotesOrderByWithRelationInput[]
    cursor?: UpVotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpVotesScalarFieldEnum | UpVotesScalarFieldEnum[]
  }

  /**
   * Streamer without action
   */
  export type StreamerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
  }


  /**
   * Model UpVotes
   */

  export type AggregateUpVotes = {
    _count: UpVotesCountAggregateOutputType | null
    _min: UpVotesMinAggregateOutputType | null
    _max: UpVotesMaxAggregateOutputType | null
  }

  export type UpVotesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    streamId: string | null
  }

  export type UpVotesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    streamId: string | null
  }

  export type UpVotesCountAggregateOutputType = {
    id: number
    userId: number
    streamId: number
    _all: number
  }


  export type UpVotesMinAggregateInputType = {
    id?: true
    userId?: true
    streamId?: true
  }

  export type UpVotesMaxAggregateInputType = {
    id?: true
    userId?: true
    streamId?: true
  }

  export type UpVotesCountAggregateInputType = {
    id?: true
    userId?: true
    streamId?: true
    _all?: true
  }

  export type UpVotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpVotes to aggregate.
     */
    where?: UpVotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpVotes to fetch.
     */
    orderBy?: UpVotesOrderByWithRelationInput | UpVotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpVotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UpVotes
    **/
    _count?: true | UpVotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpVotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpVotesMaxAggregateInputType
  }

  export type GetUpVotesAggregateType<T extends UpVotesAggregateArgs> = {
        [P in keyof T & keyof AggregateUpVotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpVotes[P]>
      : GetScalarType<T[P], AggregateUpVotes[P]>
  }




  export type UpVotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpVotesWhereInput
    orderBy?: UpVotesOrderByWithAggregationInput | UpVotesOrderByWithAggregationInput[]
    by: UpVotesScalarFieldEnum[] | UpVotesScalarFieldEnum
    having?: UpVotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpVotesCountAggregateInputType | true
    _min?: UpVotesMinAggregateInputType
    _max?: UpVotesMaxAggregateInputType
  }

  export type UpVotesGroupByOutputType = {
    id: string
    userId: string
    streamId: string
    _count: UpVotesCountAggregateOutputType | null
    _min: UpVotesMinAggregateOutputType | null
    _max: UpVotesMaxAggregateOutputType | null
  }

  type GetUpVotesGroupByPayload<T extends UpVotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpVotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpVotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpVotesGroupByOutputType[P]>
            : GetScalarType<T[P], UpVotesGroupByOutputType[P]>
        }
      >
    >


  export type UpVotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    streamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upVotes"]>

  export type UpVotesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    streamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upVotes"]>

  export type UpVotesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    streamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upVotes"]>

  export type UpVotesSelectScalar = {
    id?: boolean
    userId?: boolean
    streamId?: boolean
  }

  export type UpVotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "streamId", ExtArgs["result"]["upVotes"]>
  export type UpVotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
  }
  export type UpVotesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
  }
  export type UpVotesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
  }

  export type $UpVotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UpVotes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      streamer: Prisma.$StreamerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      streamId: string
    }, ExtArgs["result"]["upVotes"]>
    composites: {}
  }

  type UpVotesGetPayload<S extends boolean | null | undefined | UpVotesDefaultArgs> = $Result.GetResult<Prisma.$UpVotesPayload, S>

  type UpVotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UpVotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UpVotesCountAggregateInputType | true
    }

  export interface UpVotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UpVotes'], meta: { name: 'UpVotes' } }
    /**
     * Find zero or one UpVotes that matches the filter.
     * @param {UpVotesFindUniqueArgs} args - Arguments to find a UpVotes
     * @example
     * // Get one UpVotes
     * const upVotes = await prisma.upVotes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UpVotesFindUniqueArgs>(args: SelectSubset<T, UpVotesFindUniqueArgs<ExtArgs>>): Prisma__UpVotesClient<$Result.GetResult<Prisma.$UpVotesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UpVotes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UpVotesFindUniqueOrThrowArgs} args - Arguments to find a UpVotes
     * @example
     * // Get one UpVotes
     * const upVotes = await prisma.upVotes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UpVotesFindUniqueOrThrowArgs>(args: SelectSubset<T, UpVotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UpVotesClient<$Result.GetResult<Prisma.$UpVotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UpVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpVotesFindFirstArgs} args - Arguments to find a UpVotes
     * @example
     * // Get one UpVotes
     * const upVotes = await prisma.upVotes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UpVotesFindFirstArgs>(args?: SelectSubset<T, UpVotesFindFirstArgs<ExtArgs>>): Prisma__UpVotesClient<$Result.GetResult<Prisma.$UpVotesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UpVotes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpVotesFindFirstOrThrowArgs} args - Arguments to find a UpVotes
     * @example
     * // Get one UpVotes
     * const upVotes = await prisma.upVotes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UpVotesFindFirstOrThrowArgs>(args?: SelectSubset<T, UpVotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UpVotesClient<$Result.GetResult<Prisma.$UpVotesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UpVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpVotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UpVotes
     * const upVotes = await prisma.upVotes.findMany()
     * 
     * // Get first 10 UpVotes
     * const upVotes = await prisma.upVotes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const upVotesWithIdOnly = await prisma.upVotes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UpVotesFindManyArgs>(args?: SelectSubset<T, UpVotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpVotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UpVotes.
     * @param {UpVotesCreateArgs} args - Arguments to create a UpVotes.
     * @example
     * // Create one UpVotes
     * const UpVotes = await prisma.upVotes.create({
     *   data: {
     *     // ... data to create a UpVotes
     *   }
     * })
     * 
     */
    create<T extends UpVotesCreateArgs>(args: SelectSubset<T, UpVotesCreateArgs<ExtArgs>>): Prisma__UpVotesClient<$Result.GetResult<Prisma.$UpVotesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UpVotes.
     * @param {UpVotesCreateManyArgs} args - Arguments to create many UpVotes.
     * @example
     * // Create many UpVotes
     * const upVotes = await prisma.upVotes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UpVotesCreateManyArgs>(args?: SelectSubset<T, UpVotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UpVotes and returns the data saved in the database.
     * @param {UpVotesCreateManyAndReturnArgs} args - Arguments to create many UpVotes.
     * @example
     * // Create many UpVotes
     * const upVotes = await prisma.upVotes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UpVotes and only return the `id`
     * const upVotesWithIdOnly = await prisma.upVotes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UpVotesCreateManyAndReturnArgs>(args?: SelectSubset<T, UpVotesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpVotesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UpVotes.
     * @param {UpVotesDeleteArgs} args - Arguments to delete one UpVotes.
     * @example
     * // Delete one UpVotes
     * const UpVotes = await prisma.upVotes.delete({
     *   where: {
     *     // ... filter to delete one UpVotes
     *   }
     * })
     * 
     */
    delete<T extends UpVotesDeleteArgs>(args: SelectSubset<T, UpVotesDeleteArgs<ExtArgs>>): Prisma__UpVotesClient<$Result.GetResult<Prisma.$UpVotesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UpVotes.
     * @param {UpVotesUpdateArgs} args - Arguments to update one UpVotes.
     * @example
     * // Update one UpVotes
     * const upVotes = await prisma.upVotes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UpVotesUpdateArgs>(args: SelectSubset<T, UpVotesUpdateArgs<ExtArgs>>): Prisma__UpVotesClient<$Result.GetResult<Prisma.$UpVotesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UpVotes.
     * @param {UpVotesDeleteManyArgs} args - Arguments to filter UpVotes to delete.
     * @example
     * // Delete a few UpVotes
     * const { count } = await prisma.upVotes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UpVotesDeleteManyArgs>(args?: SelectSubset<T, UpVotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpVotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UpVotes
     * const upVotes = await prisma.upVotes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UpVotesUpdateManyArgs>(args: SelectSubset<T, UpVotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpVotes and returns the data updated in the database.
     * @param {UpVotesUpdateManyAndReturnArgs} args - Arguments to update many UpVotes.
     * @example
     * // Update many UpVotes
     * const upVotes = await prisma.upVotes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UpVotes and only return the `id`
     * const upVotesWithIdOnly = await prisma.upVotes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UpVotesUpdateManyAndReturnArgs>(args: SelectSubset<T, UpVotesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpVotesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UpVotes.
     * @param {UpVotesUpsertArgs} args - Arguments to update or create a UpVotes.
     * @example
     * // Update or create a UpVotes
     * const upVotes = await prisma.upVotes.upsert({
     *   create: {
     *     // ... data to create a UpVotes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UpVotes we want to update
     *   }
     * })
     */
    upsert<T extends UpVotesUpsertArgs>(args: SelectSubset<T, UpVotesUpsertArgs<ExtArgs>>): Prisma__UpVotesClient<$Result.GetResult<Prisma.$UpVotesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UpVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpVotesCountArgs} args - Arguments to filter UpVotes to count.
     * @example
     * // Count the number of UpVotes
     * const count = await prisma.upVotes.count({
     *   where: {
     *     // ... the filter for the UpVotes we want to count
     *   }
     * })
    **/
    count<T extends UpVotesCountArgs>(
      args?: Subset<T, UpVotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpVotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UpVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpVotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UpVotesAggregateArgs>(args: Subset<T, UpVotesAggregateArgs>): Prisma.PrismaPromise<GetUpVotesAggregateType<T>>

    /**
     * Group by UpVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpVotesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UpVotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpVotesGroupByArgs['orderBy'] }
        : { orderBy?: UpVotesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UpVotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpVotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UpVotes model
   */
  readonly fields: UpVotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UpVotes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpVotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    streamer<T extends StreamerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StreamerDefaultArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UpVotes model
   */
  interface UpVotesFieldRefs {
    readonly id: FieldRef<"UpVotes", 'String'>
    readonly userId: FieldRef<"UpVotes", 'String'>
    readonly streamId: FieldRef<"UpVotes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UpVotes findUnique
   */
  export type UpVotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpVotes
     */
    select?: UpVotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpVotes
     */
    omit?: UpVotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpVotesInclude<ExtArgs> | null
    /**
     * Filter, which UpVotes to fetch.
     */
    where: UpVotesWhereUniqueInput
  }

  /**
   * UpVotes findUniqueOrThrow
   */
  export type UpVotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpVotes
     */
    select?: UpVotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpVotes
     */
    omit?: UpVotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpVotesInclude<ExtArgs> | null
    /**
     * Filter, which UpVotes to fetch.
     */
    where: UpVotesWhereUniqueInput
  }

  /**
   * UpVotes findFirst
   */
  export type UpVotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpVotes
     */
    select?: UpVotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpVotes
     */
    omit?: UpVotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpVotesInclude<ExtArgs> | null
    /**
     * Filter, which UpVotes to fetch.
     */
    where?: UpVotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpVotes to fetch.
     */
    orderBy?: UpVotesOrderByWithRelationInput | UpVotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpVotes.
     */
    cursor?: UpVotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpVotes.
     */
    distinct?: UpVotesScalarFieldEnum | UpVotesScalarFieldEnum[]
  }

  /**
   * UpVotes findFirstOrThrow
   */
  export type UpVotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpVotes
     */
    select?: UpVotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpVotes
     */
    omit?: UpVotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpVotesInclude<ExtArgs> | null
    /**
     * Filter, which UpVotes to fetch.
     */
    where?: UpVotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpVotes to fetch.
     */
    orderBy?: UpVotesOrderByWithRelationInput | UpVotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpVotes.
     */
    cursor?: UpVotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpVotes.
     */
    distinct?: UpVotesScalarFieldEnum | UpVotesScalarFieldEnum[]
  }

  /**
   * UpVotes findMany
   */
  export type UpVotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpVotes
     */
    select?: UpVotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpVotes
     */
    omit?: UpVotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpVotesInclude<ExtArgs> | null
    /**
     * Filter, which UpVotes to fetch.
     */
    where?: UpVotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpVotes to fetch.
     */
    orderBy?: UpVotesOrderByWithRelationInput | UpVotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UpVotes.
     */
    cursor?: UpVotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpVotes.
     */
    skip?: number
    distinct?: UpVotesScalarFieldEnum | UpVotesScalarFieldEnum[]
  }

  /**
   * UpVotes create
   */
  export type UpVotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpVotes
     */
    select?: UpVotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpVotes
     */
    omit?: UpVotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpVotesInclude<ExtArgs> | null
    /**
     * The data needed to create a UpVotes.
     */
    data: XOR<UpVotesCreateInput, UpVotesUncheckedCreateInput>
  }

  /**
   * UpVotes createMany
   */
  export type UpVotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UpVotes.
     */
    data: UpVotesCreateManyInput | UpVotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UpVotes createManyAndReturn
   */
  export type UpVotesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpVotes
     */
    select?: UpVotesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UpVotes
     */
    omit?: UpVotesOmit<ExtArgs> | null
    /**
     * The data used to create many UpVotes.
     */
    data: UpVotesCreateManyInput | UpVotesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpVotesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UpVotes update
   */
  export type UpVotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpVotes
     */
    select?: UpVotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpVotes
     */
    omit?: UpVotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpVotesInclude<ExtArgs> | null
    /**
     * The data needed to update a UpVotes.
     */
    data: XOR<UpVotesUpdateInput, UpVotesUncheckedUpdateInput>
    /**
     * Choose, which UpVotes to update.
     */
    where: UpVotesWhereUniqueInput
  }

  /**
   * UpVotes updateMany
   */
  export type UpVotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UpVotes.
     */
    data: XOR<UpVotesUpdateManyMutationInput, UpVotesUncheckedUpdateManyInput>
    /**
     * Filter which UpVotes to update
     */
    where?: UpVotesWhereInput
    /**
     * Limit how many UpVotes to update.
     */
    limit?: number
  }

  /**
   * UpVotes updateManyAndReturn
   */
  export type UpVotesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpVotes
     */
    select?: UpVotesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UpVotes
     */
    omit?: UpVotesOmit<ExtArgs> | null
    /**
     * The data used to update UpVotes.
     */
    data: XOR<UpVotesUpdateManyMutationInput, UpVotesUncheckedUpdateManyInput>
    /**
     * Filter which UpVotes to update
     */
    where?: UpVotesWhereInput
    /**
     * Limit how many UpVotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpVotesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UpVotes upsert
   */
  export type UpVotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpVotes
     */
    select?: UpVotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpVotes
     */
    omit?: UpVotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpVotesInclude<ExtArgs> | null
    /**
     * The filter to search for the UpVotes to update in case it exists.
     */
    where: UpVotesWhereUniqueInput
    /**
     * In case the UpVotes found by the `where` argument doesn't exist, create a new UpVotes with this data.
     */
    create: XOR<UpVotesCreateInput, UpVotesUncheckedCreateInput>
    /**
     * In case the UpVotes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpVotesUpdateInput, UpVotesUncheckedUpdateInput>
  }

  /**
   * UpVotes delete
   */
  export type UpVotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpVotes
     */
    select?: UpVotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpVotes
     */
    omit?: UpVotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpVotesInclude<ExtArgs> | null
    /**
     * Filter which UpVotes to delete.
     */
    where: UpVotesWhereUniqueInput
  }

  /**
   * UpVotes deleteMany
   */
  export type UpVotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpVotes to delete
     */
    where?: UpVotesWhereInput
    /**
     * Limit how many UpVotes to delete.
     */
    limit?: number
  }

  /**
   * UpVotes without action
   */
  export type UpVotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpVotes
     */
    select?: UpVotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpVotes
     */
    omit?: UpVotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpVotesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    provider: 'provider',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StreamerScalarFieldEnum: {
    id: 'id',
    type: 'type',
    url: 'url',
    extractedId: 'extractedId',
    userId: 'userId',
    active: 'active'
  };

  export type StreamerScalarFieldEnum = (typeof StreamerScalarFieldEnum)[keyof typeof StreamerScalarFieldEnum]


  export const UpVotesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    streamId: 'streamId'
  };

  export type UpVotesScalarFieldEnum = (typeof UpVotesScalarFieldEnum)[keyof typeof UpVotesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Providers'
   */
  export type EnumProvidersFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Providers'>
    


  /**
   * Reference to a field of type 'Providers[]'
   */
  export type ListEnumProvidersFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Providers[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'StreamType'
   */
  export type EnumStreamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreamType'>
    


  /**
   * Reference to a field of type 'StreamType[]'
   */
  export type ListEnumStreamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreamType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    provider?: EnumProvidersFilter<"User"> | $Enums.Providers
    role?: EnumRoleFilter<"User"> | $Enums.Role
    streamer?: StreamerListRelationFilter
    upvotes?: UpVotesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    role?: SortOrder
    streamer?: StreamerOrderByRelationAggregateInput
    upvotes?: UpVotesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    provider?: EnumProvidersFilter<"User"> | $Enums.Providers
    role?: EnumRoleFilter<"User"> | $Enums.Role
    streamer?: StreamerListRelationFilter
    upvotes?: UpVotesListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    provider?: EnumProvidersWithAggregatesFilter<"User"> | $Enums.Providers
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type StreamerWhereInput = {
    AND?: StreamerWhereInput | StreamerWhereInput[]
    OR?: StreamerWhereInput[]
    NOT?: StreamerWhereInput | StreamerWhereInput[]
    id?: StringFilter<"Streamer"> | string
    type?: EnumStreamTypeFilter<"Streamer"> | $Enums.StreamType
    url?: StringFilter<"Streamer"> | string
    extractedId?: StringFilter<"Streamer"> | string
    userId?: StringFilter<"Streamer"> | string
    active?: BoolFilter<"Streamer"> | boolean
    upvotes?: UpVotesListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StreamerOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    extractedId?: SortOrder
    userId?: SortOrder
    active?: SortOrder
    upvotes?: UpVotesOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type StreamerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StreamerWhereInput | StreamerWhereInput[]
    OR?: StreamerWhereInput[]
    NOT?: StreamerWhereInput | StreamerWhereInput[]
    type?: EnumStreamTypeFilter<"Streamer"> | $Enums.StreamType
    url?: StringFilter<"Streamer"> | string
    extractedId?: StringFilter<"Streamer"> | string
    userId?: StringFilter<"Streamer"> | string
    active?: BoolFilter<"Streamer"> | boolean
    upvotes?: UpVotesListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StreamerOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    extractedId?: SortOrder
    userId?: SortOrder
    active?: SortOrder
    _count?: StreamerCountOrderByAggregateInput
    _max?: StreamerMaxOrderByAggregateInput
    _min?: StreamerMinOrderByAggregateInput
  }

  export type StreamerScalarWhereWithAggregatesInput = {
    AND?: StreamerScalarWhereWithAggregatesInput | StreamerScalarWhereWithAggregatesInput[]
    OR?: StreamerScalarWhereWithAggregatesInput[]
    NOT?: StreamerScalarWhereWithAggregatesInput | StreamerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Streamer"> | string
    type?: EnumStreamTypeWithAggregatesFilter<"Streamer"> | $Enums.StreamType
    url?: StringWithAggregatesFilter<"Streamer"> | string
    extractedId?: StringWithAggregatesFilter<"Streamer"> | string
    userId?: StringWithAggregatesFilter<"Streamer"> | string
    active?: BoolWithAggregatesFilter<"Streamer"> | boolean
  }

  export type UpVotesWhereInput = {
    AND?: UpVotesWhereInput | UpVotesWhereInput[]
    OR?: UpVotesWhereInput[]
    NOT?: UpVotesWhereInput | UpVotesWhereInput[]
    id?: StringFilter<"UpVotes"> | string
    userId?: StringFilter<"UpVotes"> | string
    streamId?: StringFilter<"UpVotes"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    streamer?: XOR<StreamerScalarRelationFilter, StreamerWhereInput>
  }

  export type UpVotesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    streamId?: SortOrder
    user?: UserOrderByWithRelationInput
    streamer?: StreamerOrderByWithRelationInput
  }

  export type UpVotesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_streamId?: UpVotesUserIdStreamIdCompoundUniqueInput
    AND?: UpVotesWhereInput | UpVotesWhereInput[]
    OR?: UpVotesWhereInput[]
    NOT?: UpVotesWhereInput | UpVotesWhereInput[]
    userId?: StringFilter<"UpVotes"> | string
    streamId?: StringFilter<"UpVotes"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    streamer?: XOR<StreamerScalarRelationFilter, StreamerWhereInput>
  }, "id" | "userId_streamId">

  export type UpVotesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    streamId?: SortOrder
    _count?: UpVotesCountOrderByAggregateInput
    _max?: UpVotesMaxOrderByAggregateInput
    _min?: UpVotesMinOrderByAggregateInput
  }

  export type UpVotesScalarWhereWithAggregatesInput = {
    AND?: UpVotesScalarWhereWithAggregatesInput | UpVotesScalarWhereWithAggregatesInput[]
    OR?: UpVotesScalarWhereWithAggregatesInput[]
    NOT?: UpVotesScalarWhereWithAggregatesInput | UpVotesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UpVotes"> | string
    userId?: StringWithAggregatesFilter<"UpVotes"> | string
    streamId?: StringWithAggregatesFilter<"UpVotes"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Providers
    role: $Enums.Role
    streamer?: StreamerCreateNestedManyWithoutUserInput
    upvotes?: UpVotesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Providers
    role: $Enums.Role
    streamer?: StreamerUncheckedCreateNestedManyWithoutUserInput
    upvotes?: UpVotesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProvidersFieldUpdateOperationsInput | $Enums.Providers
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    streamer?: StreamerUpdateManyWithoutUserNestedInput
    upvotes?: UpVotesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProvidersFieldUpdateOperationsInput | $Enums.Providers
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    streamer?: StreamerUncheckedUpdateManyWithoutUserNestedInput
    upvotes?: UpVotesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Providers
    role: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProvidersFieldUpdateOperationsInput | $Enums.Providers
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProvidersFieldUpdateOperationsInput | $Enums.Providers
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type StreamerCreateInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    active?: boolean
    upvotes?: UpVotesCreateNestedManyWithoutStreamerInput
    user: UserCreateNestedOneWithoutStreamerInput
  }

  export type StreamerUncheckedCreateInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    userId: string
    active?: boolean
    upvotes?: UpVotesUncheckedCreateNestedManyWithoutStreamerInput
  }

  export type StreamerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    upvotes?: UpVotesUpdateManyWithoutStreamerNestedInput
    user?: UserUpdateOneRequiredWithoutStreamerNestedInput
  }

  export type StreamerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    upvotes?: UpVotesUncheckedUpdateManyWithoutStreamerNestedInput
  }

  export type StreamerCreateManyInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    userId: string
    active?: boolean
  }

  export type StreamerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StreamerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UpVotesCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutUpvotesInput
    streamer: StreamerCreateNestedOneWithoutUpvotesInput
  }

  export type UpVotesUncheckedCreateInput = {
    id?: string
    userId: string
    streamId: string
  }

  export type UpVotesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUpvotesNestedInput
    streamer?: StreamerUpdateOneRequiredWithoutUpvotesNestedInput
  }

  export type UpVotesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
  }

  export type UpVotesCreateManyInput = {
    id?: string
    userId: string
    streamId: string
  }

  export type UpVotesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UpVotesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumProvidersFilter<$PrismaModel = never> = {
    equals?: $Enums.Providers | EnumProvidersFieldRefInput<$PrismaModel>
    in?: $Enums.Providers[] | ListEnumProvidersFieldRefInput<$PrismaModel>
    notIn?: $Enums.Providers[] | ListEnumProvidersFieldRefInput<$PrismaModel>
    not?: NestedEnumProvidersFilter<$PrismaModel> | $Enums.Providers
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StreamerListRelationFilter = {
    every?: StreamerWhereInput
    some?: StreamerWhereInput
    none?: StreamerWhereInput
  }

  export type UpVotesListRelationFilter = {
    every?: UpVotesWhereInput
    some?: UpVotesWhereInput
    none?: UpVotesWhereInput
  }

  export type StreamerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UpVotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumProvidersWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Providers | EnumProvidersFieldRefInput<$PrismaModel>
    in?: $Enums.Providers[] | ListEnumProvidersFieldRefInput<$PrismaModel>
    notIn?: $Enums.Providers[] | ListEnumProvidersFieldRefInput<$PrismaModel>
    not?: NestedEnumProvidersWithAggregatesFilter<$PrismaModel> | $Enums.Providers
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProvidersFilter<$PrismaModel>
    _max?: NestedEnumProvidersFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumStreamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamType | EnumStreamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamTypeFilter<$PrismaModel> | $Enums.StreamType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StreamerCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    extractedId?: SortOrder
    userId?: SortOrder
    active?: SortOrder
  }

  export type StreamerMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    extractedId?: SortOrder
    userId?: SortOrder
    active?: SortOrder
  }

  export type StreamerMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    extractedId?: SortOrder
    userId?: SortOrder
    active?: SortOrder
  }

  export type EnumStreamTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamType | EnumStreamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamTypeWithAggregatesFilter<$PrismaModel> | $Enums.StreamType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStreamTypeFilter<$PrismaModel>
    _max?: NestedEnumStreamTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StreamerScalarRelationFilter = {
    is?: StreamerWhereInput
    isNot?: StreamerWhereInput
  }

  export type UpVotesUserIdStreamIdCompoundUniqueInput = {
    userId: string
    streamId: string
  }

  export type UpVotesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    streamId?: SortOrder
  }

  export type UpVotesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    streamId?: SortOrder
  }

  export type UpVotesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    streamId?: SortOrder
  }

  export type StreamerCreateNestedManyWithoutUserInput = {
    create?: XOR<StreamerCreateWithoutUserInput, StreamerUncheckedCreateWithoutUserInput> | StreamerCreateWithoutUserInput[] | StreamerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamerCreateOrConnectWithoutUserInput | StreamerCreateOrConnectWithoutUserInput[]
    createMany?: StreamerCreateManyUserInputEnvelope
    connect?: StreamerWhereUniqueInput | StreamerWhereUniqueInput[]
  }

  export type UpVotesCreateNestedManyWithoutUserInput = {
    create?: XOR<UpVotesCreateWithoutUserInput, UpVotesUncheckedCreateWithoutUserInput> | UpVotesCreateWithoutUserInput[] | UpVotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpVotesCreateOrConnectWithoutUserInput | UpVotesCreateOrConnectWithoutUserInput[]
    createMany?: UpVotesCreateManyUserInputEnvelope
    connect?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
  }

  export type StreamerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StreamerCreateWithoutUserInput, StreamerUncheckedCreateWithoutUserInput> | StreamerCreateWithoutUserInput[] | StreamerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamerCreateOrConnectWithoutUserInput | StreamerCreateOrConnectWithoutUserInput[]
    createMany?: StreamerCreateManyUserInputEnvelope
    connect?: StreamerWhereUniqueInput | StreamerWhereUniqueInput[]
  }

  export type UpVotesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UpVotesCreateWithoutUserInput, UpVotesUncheckedCreateWithoutUserInput> | UpVotesCreateWithoutUserInput[] | UpVotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpVotesCreateOrConnectWithoutUserInput | UpVotesCreateOrConnectWithoutUserInput[]
    createMany?: UpVotesCreateManyUserInputEnvelope
    connect?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumProvidersFieldUpdateOperationsInput = {
    set?: $Enums.Providers
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type StreamerUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreamerCreateWithoutUserInput, StreamerUncheckedCreateWithoutUserInput> | StreamerCreateWithoutUserInput[] | StreamerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamerCreateOrConnectWithoutUserInput | StreamerCreateOrConnectWithoutUserInput[]
    upsert?: StreamerUpsertWithWhereUniqueWithoutUserInput | StreamerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreamerCreateManyUserInputEnvelope
    set?: StreamerWhereUniqueInput | StreamerWhereUniqueInput[]
    disconnect?: StreamerWhereUniqueInput | StreamerWhereUniqueInput[]
    delete?: StreamerWhereUniqueInput | StreamerWhereUniqueInput[]
    connect?: StreamerWhereUniqueInput | StreamerWhereUniqueInput[]
    update?: StreamerUpdateWithWhereUniqueWithoutUserInput | StreamerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreamerUpdateManyWithWhereWithoutUserInput | StreamerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreamerScalarWhereInput | StreamerScalarWhereInput[]
  }

  export type UpVotesUpdateManyWithoutUserNestedInput = {
    create?: XOR<UpVotesCreateWithoutUserInput, UpVotesUncheckedCreateWithoutUserInput> | UpVotesCreateWithoutUserInput[] | UpVotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpVotesCreateOrConnectWithoutUserInput | UpVotesCreateOrConnectWithoutUserInput[]
    upsert?: UpVotesUpsertWithWhereUniqueWithoutUserInput | UpVotesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UpVotesCreateManyUserInputEnvelope
    set?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    disconnect?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    delete?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    connect?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    update?: UpVotesUpdateWithWhereUniqueWithoutUserInput | UpVotesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UpVotesUpdateManyWithWhereWithoutUserInput | UpVotesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UpVotesScalarWhereInput | UpVotesScalarWhereInput[]
  }

  export type StreamerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreamerCreateWithoutUserInput, StreamerUncheckedCreateWithoutUserInput> | StreamerCreateWithoutUserInput[] | StreamerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamerCreateOrConnectWithoutUserInput | StreamerCreateOrConnectWithoutUserInput[]
    upsert?: StreamerUpsertWithWhereUniqueWithoutUserInput | StreamerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreamerCreateManyUserInputEnvelope
    set?: StreamerWhereUniqueInput | StreamerWhereUniqueInput[]
    disconnect?: StreamerWhereUniqueInput | StreamerWhereUniqueInput[]
    delete?: StreamerWhereUniqueInput | StreamerWhereUniqueInput[]
    connect?: StreamerWhereUniqueInput | StreamerWhereUniqueInput[]
    update?: StreamerUpdateWithWhereUniqueWithoutUserInput | StreamerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreamerUpdateManyWithWhereWithoutUserInput | StreamerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreamerScalarWhereInput | StreamerScalarWhereInput[]
  }

  export type UpVotesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UpVotesCreateWithoutUserInput, UpVotesUncheckedCreateWithoutUserInput> | UpVotesCreateWithoutUserInput[] | UpVotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpVotesCreateOrConnectWithoutUserInput | UpVotesCreateOrConnectWithoutUserInput[]
    upsert?: UpVotesUpsertWithWhereUniqueWithoutUserInput | UpVotesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UpVotesCreateManyUserInputEnvelope
    set?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    disconnect?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    delete?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    connect?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    update?: UpVotesUpdateWithWhereUniqueWithoutUserInput | UpVotesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UpVotesUpdateManyWithWhereWithoutUserInput | UpVotesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UpVotesScalarWhereInput | UpVotesScalarWhereInput[]
  }

  export type UpVotesCreateNestedManyWithoutStreamerInput = {
    create?: XOR<UpVotesCreateWithoutStreamerInput, UpVotesUncheckedCreateWithoutStreamerInput> | UpVotesCreateWithoutStreamerInput[] | UpVotesUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: UpVotesCreateOrConnectWithoutStreamerInput | UpVotesCreateOrConnectWithoutStreamerInput[]
    createMany?: UpVotesCreateManyStreamerInputEnvelope
    connect?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutStreamerInput = {
    create?: XOR<UserCreateWithoutStreamerInput, UserUncheckedCreateWithoutStreamerInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamerInput
    connect?: UserWhereUniqueInput
  }

  export type UpVotesUncheckedCreateNestedManyWithoutStreamerInput = {
    create?: XOR<UpVotesCreateWithoutStreamerInput, UpVotesUncheckedCreateWithoutStreamerInput> | UpVotesCreateWithoutStreamerInput[] | UpVotesUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: UpVotesCreateOrConnectWithoutStreamerInput | UpVotesCreateOrConnectWithoutStreamerInput[]
    createMany?: UpVotesCreateManyStreamerInputEnvelope
    connect?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
  }

  export type EnumStreamTypeFieldUpdateOperationsInput = {
    set?: $Enums.StreamType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UpVotesUpdateManyWithoutStreamerNestedInput = {
    create?: XOR<UpVotesCreateWithoutStreamerInput, UpVotesUncheckedCreateWithoutStreamerInput> | UpVotesCreateWithoutStreamerInput[] | UpVotesUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: UpVotesCreateOrConnectWithoutStreamerInput | UpVotesCreateOrConnectWithoutStreamerInput[]
    upsert?: UpVotesUpsertWithWhereUniqueWithoutStreamerInput | UpVotesUpsertWithWhereUniqueWithoutStreamerInput[]
    createMany?: UpVotesCreateManyStreamerInputEnvelope
    set?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    disconnect?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    delete?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    connect?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    update?: UpVotesUpdateWithWhereUniqueWithoutStreamerInput | UpVotesUpdateWithWhereUniqueWithoutStreamerInput[]
    updateMany?: UpVotesUpdateManyWithWhereWithoutStreamerInput | UpVotesUpdateManyWithWhereWithoutStreamerInput[]
    deleteMany?: UpVotesScalarWhereInput | UpVotesScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutStreamerNestedInput = {
    create?: XOR<UserCreateWithoutStreamerInput, UserUncheckedCreateWithoutStreamerInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamerInput
    upsert?: UserUpsertWithoutStreamerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStreamerInput, UserUpdateWithoutStreamerInput>, UserUncheckedUpdateWithoutStreamerInput>
  }

  export type UpVotesUncheckedUpdateManyWithoutStreamerNestedInput = {
    create?: XOR<UpVotesCreateWithoutStreamerInput, UpVotesUncheckedCreateWithoutStreamerInput> | UpVotesCreateWithoutStreamerInput[] | UpVotesUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: UpVotesCreateOrConnectWithoutStreamerInput | UpVotesCreateOrConnectWithoutStreamerInput[]
    upsert?: UpVotesUpsertWithWhereUniqueWithoutStreamerInput | UpVotesUpsertWithWhereUniqueWithoutStreamerInput[]
    createMany?: UpVotesCreateManyStreamerInputEnvelope
    set?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    disconnect?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    delete?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    connect?: UpVotesWhereUniqueInput | UpVotesWhereUniqueInput[]
    update?: UpVotesUpdateWithWhereUniqueWithoutStreamerInput | UpVotesUpdateWithWhereUniqueWithoutStreamerInput[]
    updateMany?: UpVotesUpdateManyWithWhereWithoutStreamerInput | UpVotesUpdateManyWithWhereWithoutStreamerInput[]
    deleteMany?: UpVotesScalarWhereInput | UpVotesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUpvotesInput = {
    create?: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpvotesInput
    connect?: UserWhereUniqueInput
  }

  export type StreamerCreateNestedOneWithoutUpvotesInput = {
    create?: XOR<StreamerCreateWithoutUpvotesInput, StreamerUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: StreamerCreateOrConnectWithoutUpvotesInput
    connect?: StreamerWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUpvotesNestedInput = {
    create?: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpvotesInput
    upsert?: UserUpsertWithoutUpvotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpvotesInput, UserUpdateWithoutUpvotesInput>, UserUncheckedUpdateWithoutUpvotesInput>
  }

  export type StreamerUpdateOneRequiredWithoutUpvotesNestedInput = {
    create?: XOR<StreamerCreateWithoutUpvotesInput, StreamerUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: StreamerCreateOrConnectWithoutUpvotesInput
    upsert?: StreamerUpsertWithoutUpvotesInput
    connect?: StreamerWhereUniqueInput
    update?: XOR<XOR<StreamerUpdateToOneWithWhereWithoutUpvotesInput, StreamerUpdateWithoutUpvotesInput>, StreamerUncheckedUpdateWithoutUpvotesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumProvidersFilter<$PrismaModel = never> = {
    equals?: $Enums.Providers | EnumProvidersFieldRefInput<$PrismaModel>
    in?: $Enums.Providers[] | ListEnumProvidersFieldRefInput<$PrismaModel>
    notIn?: $Enums.Providers[] | ListEnumProvidersFieldRefInput<$PrismaModel>
    not?: NestedEnumProvidersFilter<$PrismaModel> | $Enums.Providers
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumProvidersWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Providers | EnumProvidersFieldRefInput<$PrismaModel>
    in?: $Enums.Providers[] | ListEnumProvidersFieldRefInput<$PrismaModel>
    notIn?: $Enums.Providers[] | ListEnumProvidersFieldRefInput<$PrismaModel>
    not?: NestedEnumProvidersWithAggregatesFilter<$PrismaModel> | $Enums.Providers
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProvidersFilter<$PrismaModel>
    _max?: NestedEnumProvidersFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumStreamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamType | EnumStreamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamTypeFilter<$PrismaModel> | $Enums.StreamType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumStreamTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamType | EnumStreamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamTypeWithAggregatesFilter<$PrismaModel> | $Enums.StreamType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStreamTypeFilter<$PrismaModel>
    _max?: NestedEnumStreamTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StreamerCreateWithoutUserInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    active?: boolean
    upvotes?: UpVotesCreateNestedManyWithoutStreamerInput
  }

  export type StreamerUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    active?: boolean
    upvotes?: UpVotesUncheckedCreateNestedManyWithoutStreamerInput
  }

  export type StreamerCreateOrConnectWithoutUserInput = {
    where: StreamerWhereUniqueInput
    create: XOR<StreamerCreateWithoutUserInput, StreamerUncheckedCreateWithoutUserInput>
  }

  export type StreamerCreateManyUserInputEnvelope = {
    data: StreamerCreateManyUserInput | StreamerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UpVotesCreateWithoutUserInput = {
    id?: string
    streamer: StreamerCreateNestedOneWithoutUpvotesInput
  }

  export type UpVotesUncheckedCreateWithoutUserInput = {
    id?: string
    streamId: string
  }

  export type UpVotesCreateOrConnectWithoutUserInput = {
    where: UpVotesWhereUniqueInput
    create: XOR<UpVotesCreateWithoutUserInput, UpVotesUncheckedCreateWithoutUserInput>
  }

  export type UpVotesCreateManyUserInputEnvelope = {
    data: UpVotesCreateManyUserInput | UpVotesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StreamerUpsertWithWhereUniqueWithoutUserInput = {
    where: StreamerWhereUniqueInput
    update: XOR<StreamerUpdateWithoutUserInput, StreamerUncheckedUpdateWithoutUserInput>
    create: XOR<StreamerCreateWithoutUserInput, StreamerUncheckedCreateWithoutUserInput>
  }

  export type StreamerUpdateWithWhereUniqueWithoutUserInput = {
    where: StreamerWhereUniqueInput
    data: XOR<StreamerUpdateWithoutUserInput, StreamerUncheckedUpdateWithoutUserInput>
  }

  export type StreamerUpdateManyWithWhereWithoutUserInput = {
    where: StreamerScalarWhereInput
    data: XOR<StreamerUpdateManyMutationInput, StreamerUncheckedUpdateManyWithoutUserInput>
  }

  export type StreamerScalarWhereInput = {
    AND?: StreamerScalarWhereInput | StreamerScalarWhereInput[]
    OR?: StreamerScalarWhereInput[]
    NOT?: StreamerScalarWhereInput | StreamerScalarWhereInput[]
    id?: StringFilter<"Streamer"> | string
    type?: EnumStreamTypeFilter<"Streamer"> | $Enums.StreamType
    url?: StringFilter<"Streamer"> | string
    extractedId?: StringFilter<"Streamer"> | string
    userId?: StringFilter<"Streamer"> | string
    active?: BoolFilter<"Streamer"> | boolean
  }

  export type UpVotesUpsertWithWhereUniqueWithoutUserInput = {
    where: UpVotesWhereUniqueInput
    update: XOR<UpVotesUpdateWithoutUserInput, UpVotesUncheckedUpdateWithoutUserInput>
    create: XOR<UpVotesCreateWithoutUserInput, UpVotesUncheckedCreateWithoutUserInput>
  }

  export type UpVotesUpdateWithWhereUniqueWithoutUserInput = {
    where: UpVotesWhereUniqueInput
    data: XOR<UpVotesUpdateWithoutUserInput, UpVotesUncheckedUpdateWithoutUserInput>
  }

  export type UpVotesUpdateManyWithWhereWithoutUserInput = {
    where: UpVotesScalarWhereInput
    data: XOR<UpVotesUpdateManyMutationInput, UpVotesUncheckedUpdateManyWithoutUserInput>
  }

  export type UpVotesScalarWhereInput = {
    AND?: UpVotesScalarWhereInput | UpVotesScalarWhereInput[]
    OR?: UpVotesScalarWhereInput[]
    NOT?: UpVotesScalarWhereInput | UpVotesScalarWhereInput[]
    id?: StringFilter<"UpVotes"> | string
    userId?: StringFilter<"UpVotes"> | string
    streamId?: StringFilter<"UpVotes"> | string
  }

  export type UpVotesCreateWithoutStreamerInput = {
    id?: string
    user: UserCreateNestedOneWithoutUpvotesInput
  }

  export type UpVotesUncheckedCreateWithoutStreamerInput = {
    id?: string
    userId: string
  }

  export type UpVotesCreateOrConnectWithoutStreamerInput = {
    where: UpVotesWhereUniqueInput
    create: XOR<UpVotesCreateWithoutStreamerInput, UpVotesUncheckedCreateWithoutStreamerInput>
  }

  export type UpVotesCreateManyStreamerInputEnvelope = {
    data: UpVotesCreateManyStreamerInput | UpVotesCreateManyStreamerInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutStreamerInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Providers
    role: $Enums.Role
    upvotes?: UpVotesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStreamerInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Providers
    role: $Enums.Role
    upvotes?: UpVotesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStreamerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStreamerInput, UserUncheckedCreateWithoutStreamerInput>
  }

  export type UpVotesUpsertWithWhereUniqueWithoutStreamerInput = {
    where: UpVotesWhereUniqueInput
    update: XOR<UpVotesUpdateWithoutStreamerInput, UpVotesUncheckedUpdateWithoutStreamerInput>
    create: XOR<UpVotesCreateWithoutStreamerInput, UpVotesUncheckedCreateWithoutStreamerInput>
  }

  export type UpVotesUpdateWithWhereUniqueWithoutStreamerInput = {
    where: UpVotesWhereUniqueInput
    data: XOR<UpVotesUpdateWithoutStreamerInput, UpVotesUncheckedUpdateWithoutStreamerInput>
  }

  export type UpVotesUpdateManyWithWhereWithoutStreamerInput = {
    where: UpVotesScalarWhereInput
    data: XOR<UpVotesUpdateManyMutationInput, UpVotesUncheckedUpdateManyWithoutStreamerInput>
  }

  export type UserUpsertWithoutStreamerInput = {
    update: XOR<UserUpdateWithoutStreamerInput, UserUncheckedUpdateWithoutStreamerInput>
    create: XOR<UserCreateWithoutStreamerInput, UserUncheckedCreateWithoutStreamerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStreamerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStreamerInput, UserUncheckedUpdateWithoutStreamerInput>
  }

  export type UserUpdateWithoutStreamerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProvidersFieldUpdateOperationsInput | $Enums.Providers
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    upvotes?: UpVotesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStreamerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProvidersFieldUpdateOperationsInput | $Enums.Providers
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    upvotes?: UpVotesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUpvotesInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Providers
    role: $Enums.Role
    streamer?: StreamerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpvotesInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Providers
    role: $Enums.Role
    streamer?: StreamerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpvotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
  }

  export type StreamerCreateWithoutUpvotesInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    active?: boolean
    user: UserCreateNestedOneWithoutStreamerInput
  }

  export type StreamerUncheckedCreateWithoutUpvotesInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    userId: string
    active?: boolean
  }

  export type StreamerCreateOrConnectWithoutUpvotesInput = {
    where: StreamerWhereUniqueInput
    create: XOR<StreamerCreateWithoutUpvotesInput, StreamerUncheckedCreateWithoutUpvotesInput>
  }

  export type UserUpsertWithoutUpvotesInput = {
    update: XOR<UserUpdateWithoutUpvotesInput, UserUncheckedUpdateWithoutUpvotesInput>
    create: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpvotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpvotesInput, UserUncheckedUpdateWithoutUpvotesInput>
  }

  export type UserUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProvidersFieldUpdateOperationsInput | $Enums.Providers
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    streamer?: StreamerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProvidersFieldUpdateOperationsInput | $Enums.Providers
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    streamer?: StreamerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StreamerUpsertWithoutUpvotesInput = {
    update: XOR<StreamerUpdateWithoutUpvotesInput, StreamerUncheckedUpdateWithoutUpvotesInput>
    create: XOR<StreamerCreateWithoutUpvotesInput, StreamerUncheckedCreateWithoutUpvotesInput>
    where?: StreamerWhereInput
  }

  export type StreamerUpdateToOneWithWhereWithoutUpvotesInput = {
    where?: StreamerWhereInput
    data: XOR<StreamerUpdateWithoutUpvotesInput, StreamerUncheckedUpdateWithoutUpvotesInput>
  }

  export type StreamerUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutStreamerNestedInput
  }

  export type StreamerUncheckedUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StreamerCreateManyUserInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    active?: boolean
  }

  export type UpVotesCreateManyUserInput = {
    id?: string
    streamId: string
  }

  export type StreamerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    upvotes?: UpVotesUpdateManyWithoutStreamerNestedInput
  }

  export type StreamerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    upvotes?: UpVotesUncheckedUpdateManyWithoutStreamerNestedInput
  }

  export type StreamerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UpVotesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamer?: StreamerUpdateOneRequiredWithoutUpvotesNestedInput
  }

  export type UpVotesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
  }

  export type UpVotesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
  }

  export type UpVotesCreateManyStreamerInput = {
    id?: string
    userId: string
  }

  export type UpVotesUpdateWithoutStreamerInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUpvotesNestedInput
  }

  export type UpVotesUncheckedUpdateWithoutStreamerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UpVotesUncheckedUpdateManyWithoutStreamerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}