
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
 * Model Technician
 * 
 */
export type Technician = $Result.DefaultSelection<Prisma.$TechnicianPayload>
/**
 * Model SMSMessage
 * 
 */
export type SMSMessage = $Result.DefaultSelection<Prisma.$SMSMessagePayload>
/**
 * Model SMSRecipient
 * 
 */
export type SMSRecipient = $Result.DefaultSelection<Prisma.$SMSRecipientPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TechnicianType: {
  CAR_ACCESSORIES: 'CAR_ACCESSORIES',
  CCTV: 'CCTV'
};

export type TechnicianType = (typeof TechnicianType)[keyof typeof TechnicianType]


export const RecipientStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  FAILED: 'FAILED',
  DELIVERED: 'DELIVERED'
};

export type RecipientStatus = (typeof RecipientStatus)[keyof typeof RecipientStatus]

}

export type TechnicianType = $Enums.TechnicianType

export const TechnicianType: typeof $Enums.TechnicianType

export type RecipientStatus = $Enums.RecipientStatus

export const RecipientStatus: typeof $Enums.RecipientStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Technicians
 * const technicians = await prisma.technician.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Technicians
   * const technicians = await prisma.technician.findMany()
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
   * `prisma.technician`: Exposes CRUD operations for the **Technician** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Technicians
    * const technicians = await prisma.technician.findMany()
    * ```
    */
  get technician(): Prisma.TechnicianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sMSMessage`: Exposes CRUD operations for the **SMSMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SMSMessages
    * const sMSMessages = await prisma.sMSMessage.findMany()
    * ```
    */
  get sMSMessage(): Prisma.SMSMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sMSRecipient`: Exposes CRUD operations for the **SMSRecipient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SMSRecipients
    * const sMSRecipients = await prisma.sMSRecipient.findMany()
    * ```
    */
  get sMSRecipient(): Prisma.SMSRecipientDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    Technician: 'Technician',
    SMSMessage: 'SMSMessage',
    SMSRecipient: 'SMSRecipient'
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
      modelProps: "technician" | "sMSMessage" | "sMSRecipient"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Technician: {
        payload: Prisma.$TechnicianPayload<ExtArgs>
        fields: Prisma.TechnicianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechnicianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechnicianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          findFirst: {
            args: Prisma.TechnicianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechnicianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          findMany: {
            args: Prisma.TechnicianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>[]
          }
          create: {
            args: Prisma.TechnicianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          createMany: {
            args: Prisma.TechnicianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TechnicianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>[]
          }
          delete: {
            args: Prisma.TechnicianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          update: {
            args: Prisma.TechnicianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          deleteMany: {
            args: Prisma.TechnicianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechnicianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TechnicianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>[]
          }
          upsert: {
            args: Prisma.TechnicianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          aggregate: {
            args: Prisma.TechnicianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechnician>
          }
          groupBy: {
            args: Prisma.TechnicianGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechnicianGroupByOutputType>[]
          }
          count: {
            args: Prisma.TechnicianCountArgs<ExtArgs>
            result: $Utils.Optional<TechnicianCountAggregateOutputType> | number
          }
        }
      }
      SMSMessage: {
        payload: Prisma.$SMSMessagePayload<ExtArgs>
        fields: Prisma.SMSMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SMSMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SMSMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSMessagePayload>
          }
          findFirst: {
            args: Prisma.SMSMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SMSMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSMessagePayload>
          }
          findMany: {
            args: Prisma.SMSMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSMessagePayload>[]
          }
          create: {
            args: Prisma.SMSMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSMessagePayload>
          }
          createMany: {
            args: Prisma.SMSMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SMSMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSMessagePayload>[]
          }
          delete: {
            args: Prisma.SMSMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSMessagePayload>
          }
          update: {
            args: Prisma.SMSMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSMessagePayload>
          }
          deleteMany: {
            args: Prisma.SMSMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SMSMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SMSMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSMessagePayload>[]
          }
          upsert: {
            args: Prisma.SMSMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSMessagePayload>
          }
          aggregate: {
            args: Prisma.SMSMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSMSMessage>
          }
          groupBy: {
            args: Prisma.SMSMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SMSMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SMSMessageCountArgs<ExtArgs>
            result: $Utils.Optional<SMSMessageCountAggregateOutputType> | number
          }
        }
      }
      SMSRecipient: {
        payload: Prisma.$SMSRecipientPayload<ExtArgs>
        fields: Prisma.SMSRecipientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SMSRecipientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSRecipientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SMSRecipientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSRecipientPayload>
          }
          findFirst: {
            args: Prisma.SMSRecipientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSRecipientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SMSRecipientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSRecipientPayload>
          }
          findMany: {
            args: Prisma.SMSRecipientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSRecipientPayload>[]
          }
          create: {
            args: Prisma.SMSRecipientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSRecipientPayload>
          }
          createMany: {
            args: Prisma.SMSRecipientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SMSRecipientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSRecipientPayload>[]
          }
          delete: {
            args: Prisma.SMSRecipientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSRecipientPayload>
          }
          update: {
            args: Prisma.SMSRecipientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSRecipientPayload>
          }
          deleteMany: {
            args: Prisma.SMSRecipientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SMSRecipientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SMSRecipientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSRecipientPayload>[]
          }
          upsert: {
            args: Prisma.SMSRecipientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSRecipientPayload>
          }
          aggregate: {
            args: Prisma.SMSRecipientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSMSRecipient>
          }
          groupBy: {
            args: Prisma.SMSRecipientGroupByArgs<ExtArgs>
            result: $Utils.Optional<SMSRecipientGroupByOutputType>[]
          }
          count: {
            args: Prisma.SMSRecipientCountArgs<ExtArgs>
            result: $Utils.Optional<SMSRecipientCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    technician?: TechnicianOmit
    sMSMessage?: SMSMessageOmit
    sMSRecipient?: SMSRecipientOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type TechnicianCountOutputType
   */

  export type TechnicianCountOutputType = {
    SMSRecipient: number
  }

  export type TechnicianCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SMSRecipient?: boolean | TechnicianCountOutputTypeCountSMSRecipientArgs
  }

  // Custom InputTypes
  /**
   * TechnicianCountOutputType without action
   */
  export type TechnicianCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianCountOutputType
     */
    select?: TechnicianCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TechnicianCountOutputType without action
   */
  export type TechnicianCountOutputTypeCountSMSRecipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SMSRecipientWhereInput
  }


  /**
   * Count Type SMSMessageCountOutputType
   */

  export type SMSMessageCountOutputType = {
    recipients: number
  }

  export type SMSMessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipients?: boolean | SMSMessageCountOutputTypeCountRecipientsArgs
  }

  // Custom InputTypes
  /**
   * SMSMessageCountOutputType without action
   */
  export type SMSMessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSMessageCountOutputType
     */
    select?: SMSMessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SMSMessageCountOutputType without action
   */
  export type SMSMessageCountOutputTypeCountRecipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SMSRecipientWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Technician
   */

  export type AggregateTechnician = {
    _count: TechnicianCountAggregateOutputType | null
    _min: TechnicianMinAggregateOutputType | null
    _max: TechnicianMaxAggregateOutputType | null
  }

  export type TechnicianMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    verified: boolean | null
    type: $Enums.TechnicianType | null
    createdAt: Date | null
  }

  export type TechnicianMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    verified: boolean | null
    type: $Enums.TechnicianType | null
    createdAt: Date | null
  }

  export type TechnicianCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    verified: number
    type: number
    createdAt: number
    _all: number
  }


  export type TechnicianMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    verified?: true
    type?: true
    createdAt?: true
  }

  export type TechnicianMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    verified?: true
    type?: true
    createdAt?: true
  }

  export type TechnicianCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    verified?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type TechnicianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Technician to aggregate.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Technicians
    **/
    _count?: true | TechnicianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnicianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnicianMaxAggregateInputType
  }

  export type GetTechnicianAggregateType<T extends TechnicianAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnician]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnician[P]>
      : GetScalarType<T[P], AggregateTechnician[P]>
  }




  export type TechnicianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnicianWhereInput
    orderBy?: TechnicianOrderByWithAggregationInput | TechnicianOrderByWithAggregationInput[]
    by: TechnicianScalarFieldEnum[] | TechnicianScalarFieldEnum
    having?: TechnicianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnicianCountAggregateInputType | true
    _min?: TechnicianMinAggregateInputType
    _max?: TechnicianMaxAggregateInputType
  }

  export type TechnicianGroupByOutputType = {
    id: string
    name: string
    phone: string
    verified: boolean
    type: $Enums.TechnicianType
    createdAt: Date
    _count: TechnicianCountAggregateOutputType | null
    _min: TechnicianMinAggregateOutputType | null
    _max: TechnicianMaxAggregateOutputType | null
  }

  type GetTechnicianGroupByPayload<T extends TechnicianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnicianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnicianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnicianGroupByOutputType[P]>
            : GetScalarType<T[P], TechnicianGroupByOutputType[P]>
        }
      >
    >


  export type TechnicianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    verified?: boolean
    type?: boolean
    createdAt?: boolean
    SMSRecipient?: boolean | Technician$SMSRecipientArgs<ExtArgs>
    _count?: boolean | TechnicianCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technician"]>

  export type TechnicianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    verified?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["technician"]>

  export type TechnicianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    verified?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["technician"]>

  export type TechnicianSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    verified?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type TechnicianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "verified" | "type" | "createdAt", ExtArgs["result"]["technician"]>
  export type TechnicianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SMSRecipient?: boolean | Technician$SMSRecipientArgs<ExtArgs>
    _count?: boolean | TechnicianCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TechnicianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TechnicianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TechnicianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Technician"
    objects: {
      SMSRecipient: Prisma.$SMSRecipientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      verified: boolean
      type: $Enums.TechnicianType
      createdAt: Date
    }, ExtArgs["result"]["technician"]>
    composites: {}
  }

  type TechnicianGetPayload<S extends boolean | null | undefined | TechnicianDefaultArgs> = $Result.GetResult<Prisma.$TechnicianPayload, S>

  type TechnicianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TechnicianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TechnicianCountAggregateInputType | true
    }

  export interface TechnicianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Technician'], meta: { name: 'Technician' } }
    /**
     * Find zero or one Technician that matches the filter.
     * @param {TechnicianFindUniqueArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechnicianFindUniqueArgs>(args: SelectSubset<T, TechnicianFindUniqueArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Technician that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TechnicianFindUniqueOrThrowArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechnicianFindUniqueOrThrowArgs>(args: SelectSubset<T, TechnicianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Technician that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFindFirstArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechnicianFindFirstArgs>(args?: SelectSubset<T, TechnicianFindFirstArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Technician that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFindFirstOrThrowArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechnicianFindFirstOrThrowArgs>(args?: SelectSubset<T, TechnicianFindFirstOrThrowArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Technicians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Technicians
     * const technicians = await prisma.technician.findMany()
     * 
     * // Get first 10 Technicians
     * const technicians = await prisma.technician.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technicianWithIdOnly = await prisma.technician.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TechnicianFindManyArgs>(args?: SelectSubset<T, TechnicianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Technician.
     * @param {TechnicianCreateArgs} args - Arguments to create a Technician.
     * @example
     * // Create one Technician
     * const Technician = await prisma.technician.create({
     *   data: {
     *     // ... data to create a Technician
     *   }
     * })
     * 
     */
    create<T extends TechnicianCreateArgs>(args: SelectSubset<T, TechnicianCreateArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Technicians.
     * @param {TechnicianCreateManyArgs} args - Arguments to create many Technicians.
     * @example
     * // Create many Technicians
     * const technician = await prisma.technician.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TechnicianCreateManyArgs>(args?: SelectSubset<T, TechnicianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Technicians and returns the data saved in the database.
     * @param {TechnicianCreateManyAndReturnArgs} args - Arguments to create many Technicians.
     * @example
     * // Create many Technicians
     * const technician = await prisma.technician.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Technicians and only return the `id`
     * const technicianWithIdOnly = await prisma.technician.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TechnicianCreateManyAndReturnArgs>(args?: SelectSubset<T, TechnicianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Technician.
     * @param {TechnicianDeleteArgs} args - Arguments to delete one Technician.
     * @example
     * // Delete one Technician
     * const Technician = await prisma.technician.delete({
     *   where: {
     *     // ... filter to delete one Technician
     *   }
     * })
     * 
     */
    delete<T extends TechnicianDeleteArgs>(args: SelectSubset<T, TechnicianDeleteArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Technician.
     * @param {TechnicianUpdateArgs} args - Arguments to update one Technician.
     * @example
     * // Update one Technician
     * const technician = await prisma.technician.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TechnicianUpdateArgs>(args: SelectSubset<T, TechnicianUpdateArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Technicians.
     * @param {TechnicianDeleteManyArgs} args - Arguments to filter Technicians to delete.
     * @example
     * // Delete a few Technicians
     * const { count } = await prisma.technician.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TechnicianDeleteManyArgs>(args?: SelectSubset<T, TechnicianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Technicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Technicians
     * const technician = await prisma.technician.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TechnicianUpdateManyArgs>(args: SelectSubset<T, TechnicianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Technicians and returns the data updated in the database.
     * @param {TechnicianUpdateManyAndReturnArgs} args - Arguments to update many Technicians.
     * @example
     * // Update many Technicians
     * const technician = await prisma.technician.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Technicians and only return the `id`
     * const technicianWithIdOnly = await prisma.technician.updateManyAndReturn({
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
    updateManyAndReturn<T extends TechnicianUpdateManyAndReturnArgs>(args: SelectSubset<T, TechnicianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Technician.
     * @param {TechnicianUpsertArgs} args - Arguments to update or create a Technician.
     * @example
     * // Update or create a Technician
     * const technician = await prisma.technician.upsert({
     *   create: {
     *     // ... data to create a Technician
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Technician we want to update
     *   }
     * })
     */
    upsert<T extends TechnicianUpsertArgs>(args: SelectSubset<T, TechnicianUpsertArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Technicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianCountArgs} args - Arguments to filter Technicians to count.
     * @example
     * // Count the number of Technicians
     * const count = await prisma.technician.count({
     *   where: {
     *     // ... the filter for the Technicians we want to count
     *   }
     * })
    **/
    count<T extends TechnicianCountArgs>(
      args?: Subset<T, TechnicianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnicianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Technician.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TechnicianAggregateArgs>(args: Subset<T, TechnicianAggregateArgs>): Prisma.PrismaPromise<GetTechnicianAggregateType<T>>

    /**
     * Group by Technician.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianGroupByArgs} args - Group by arguments.
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
      T extends TechnicianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechnicianGroupByArgs['orderBy'] }
        : { orderBy?: TechnicianGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TechnicianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnicianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Technician model
   */
  readonly fields: TechnicianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Technician.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechnicianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SMSRecipient<T extends Technician$SMSRecipientArgs<ExtArgs> = {}>(args?: Subset<T, Technician$SMSRecipientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SMSRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Technician model
   */
  interface TechnicianFieldRefs {
    readonly id: FieldRef<"Technician", 'String'>
    readonly name: FieldRef<"Technician", 'String'>
    readonly phone: FieldRef<"Technician", 'String'>
    readonly verified: FieldRef<"Technician", 'Boolean'>
    readonly type: FieldRef<"Technician", 'TechnicianType'>
    readonly createdAt: FieldRef<"Technician", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Technician findUnique
   */
  export type TechnicianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician findUniqueOrThrow
   */
  export type TechnicianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician findFirst
   */
  export type TechnicianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Technicians.
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Technicians.
     */
    distinct?: TechnicianScalarFieldEnum | TechnicianScalarFieldEnum[]
  }

  /**
   * Technician findFirstOrThrow
   */
  export type TechnicianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Technicians.
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Technicians.
     */
    distinct?: TechnicianScalarFieldEnum | TechnicianScalarFieldEnum[]
  }

  /**
   * Technician findMany
   */
  export type TechnicianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter, which Technicians to fetch.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Technicians.
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    distinct?: TechnicianScalarFieldEnum | TechnicianScalarFieldEnum[]
  }

  /**
   * Technician create
   */
  export type TechnicianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * The data needed to create a Technician.
     */
    data: XOR<TechnicianCreateInput, TechnicianUncheckedCreateInput>
  }

  /**
   * Technician createMany
   */
  export type TechnicianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Technicians.
     */
    data: TechnicianCreateManyInput | TechnicianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Technician createManyAndReturn
   */
  export type TechnicianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * The data used to create many Technicians.
     */
    data: TechnicianCreateManyInput | TechnicianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Technician update
   */
  export type TechnicianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * The data needed to update a Technician.
     */
    data: XOR<TechnicianUpdateInput, TechnicianUncheckedUpdateInput>
    /**
     * Choose, which Technician to update.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician updateMany
   */
  export type TechnicianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Technicians.
     */
    data: XOR<TechnicianUpdateManyMutationInput, TechnicianUncheckedUpdateManyInput>
    /**
     * Filter which Technicians to update
     */
    where?: TechnicianWhereInput
    /**
     * Limit how many Technicians to update.
     */
    limit?: number
  }

  /**
   * Technician updateManyAndReturn
   */
  export type TechnicianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * The data used to update Technicians.
     */
    data: XOR<TechnicianUpdateManyMutationInput, TechnicianUncheckedUpdateManyInput>
    /**
     * Filter which Technicians to update
     */
    where?: TechnicianWhereInput
    /**
     * Limit how many Technicians to update.
     */
    limit?: number
  }

  /**
   * Technician upsert
   */
  export type TechnicianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * The filter to search for the Technician to update in case it exists.
     */
    where: TechnicianWhereUniqueInput
    /**
     * In case the Technician found by the `where` argument doesn't exist, create a new Technician with this data.
     */
    create: XOR<TechnicianCreateInput, TechnicianUncheckedCreateInput>
    /**
     * In case the Technician was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechnicianUpdateInput, TechnicianUncheckedUpdateInput>
  }

  /**
   * Technician delete
   */
  export type TechnicianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter which Technician to delete.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician deleteMany
   */
  export type TechnicianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Technicians to delete
     */
    where?: TechnicianWhereInput
    /**
     * Limit how many Technicians to delete.
     */
    limit?: number
  }

  /**
   * Technician.SMSRecipient
   */
  export type Technician$SMSRecipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSRecipient
     */
    select?: SMSRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSRecipient
     */
    omit?: SMSRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSRecipientInclude<ExtArgs> | null
    where?: SMSRecipientWhereInput
    orderBy?: SMSRecipientOrderByWithRelationInput | SMSRecipientOrderByWithRelationInput[]
    cursor?: SMSRecipientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SMSRecipientScalarFieldEnum | SMSRecipientScalarFieldEnum[]
  }

  /**
   * Technician without action
   */
  export type TechnicianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
  }


  /**
   * Model SMSMessage
   */

  export type AggregateSMSMessage = {
    _count: SMSMessageCountAggregateOutputType | null
    _min: SMSMessageMinAggregateOutputType | null
    _max: SMSMessageMaxAggregateOutputType | null
  }

  export type SMSMessageMinAggregateOutputType = {
    id: string | null
    body: string | null
    from: string | null
    createdAt: Date | null
  }

  export type SMSMessageMaxAggregateOutputType = {
    id: string | null
    body: string | null
    from: string | null
    createdAt: Date | null
  }

  export type SMSMessageCountAggregateOutputType = {
    id: number
    body: number
    from: number
    createdAt: number
    _all: number
  }


  export type SMSMessageMinAggregateInputType = {
    id?: true
    body?: true
    from?: true
    createdAt?: true
  }

  export type SMSMessageMaxAggregateInputType = {
    id?: true
    body?: true
    from?: true
    createdAt?: true
  }

  export type SMSMessageCountAggregateInputType = {
    id?: true
    body?: true
    from?: true
    createdAt?: true
    _all?: true
  }

  export type SMSMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SMSMessage to aggregate.
     */
    where?: SMSMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSMessages to fetch.
     */
    orderBy?: SMSMessageOrderByWithRelationInput | SMSMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SMSMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SMSMessages
    **/
    _count?: true | SMSMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SMSMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SMSMessageMaxAggregateInputType
  }

  export type GetSMSMessageAggregateType<T extends SMSMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateSMSMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSMSMessage[P]>
      : GetScalarType<T[P], AggregateSMSMessage[P]>
  }




  export type SMSMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SMSMessageWhereInput
    orderBy?: SMSMessageOrderByWithAggregationInput | SMSMessageOrderByWithAggregationInput[]
    by: SMSMessageScalarFieldEnum[] | SMSMessageScalarFieldEnum
    having?: SMSMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SMSMessageCountAggregateInputType | true
    _min?: SMSMessageMinAggregateInputType
    _max?: SMSMessageMaxAggregateInputType
  }

  export type SMSMessageGroupByOutputType = {
    id: string
    body: string
    from: string | null
    createdAt: Date
    _count: SMSMessageCountAggregateOutputType | null
    _min: SMSMessageMinAggregateOutputType | null
    _max: SMSMessageMaxAggregateOutputType | null
  }

  type GetSMSMessageGroupByPayload<T extends SMSMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SMSMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SMSMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SMSMessageGroupByOutputType[P]>
            : GetScalarType<T[P], SMSMessageGroupByOutputType[P]>
        }
      >
    >


  export type SMSMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    from?: boolean
    createdAt?: boolean
    recipients?: boolean | SMSMessage$recipientsArgs<ExtArgs>
    _count?: boolean | SMSMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sMSMessage"]>

  export type SMSMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    from?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sMSMessage"]>

  export type SMSMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    from?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sMSMessage"]>

  export type SMSMessageSelectScalar = {
    id?: boolean
    body?: boolean
    from?: boolean
    createdAt?: boolean
  }

  export type SMSMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "body" | "from" | "createdAt", ExtArgs["result"]["sMSMessage"]>
  export type SMSMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipients?: boolean | SMSMessage$recipientsArgs<ExtArgs>
    _count?: boolean | SMSMessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SMSMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SMSMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SMSMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SMSMessage"
    objects: {
      recipients: Prisma.$SMSRecipientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      body: string
      from: string | null
      createdAt: Date
    }, ExtArgs["result"]["sMSMessage"]>
    composites: {}
  }

  type SMSMessageGetPayload<S extends boolean | null | undefined | SMSMessageDefaultArgs> = $Result.GetResult<Prisma.$SMSMessagePayload, S>

  type SMSMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SMSMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SMSMessageCountAggregateInputType | true
    }

  export interface SMSMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SMSMessage'], meta: { name: 'SMSMessage' } }
    /**
     * Find zero or one SMSMessage that matches the filter.
     * @param {SMSMessageFindUniqueArgs} args - Arguments to find a SMSMessage
     * @example
     * // Get one SMSMessage
     * const sMSMessage = await prisma.sMSMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SMSMessageFindUniqueArgs>(args: SelectSubset<T, SMSMessageFindUniqueArgs<ExtArgs>>): Prisma__SMSMessageClient<$Result.GetResult<Prisma.$SMSMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SMSMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SMSMessageFindUniqueOrThrowArgs} args - Arguments to find a SMSMessage
     * @example
     * // Get one SMSMessage
     * const sMSMessage = await prisma.sMSMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SMSMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, SMSMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SMSMessageClient<$Result.GetResult<Prisma.$SMSMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SMSMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSMessageFindFirstArgs} args - Arguments to find a SMSMessage
     * @example
     * // Get one SMSMessage
     * const sMSMessage = await prisma.sMSMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SMSMessageFindFirstArgs>(args?: SelectSubset<T, SMSMessageFindFirstArgs<ExtArgs>>): Prisma__SMSMessageClient<$Result.GetResult<Prisma.$SMSMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SMSMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSMessageFindFirstOrThrowArgs} args - Arguments to find a SMSMessage
     * @example
     * // Get one SMSMessage
     * const sMSMessage = await prisma.sMSMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SMSMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, SMSMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SMSMessageClient<$Result.GetResult<Prisma.$SMSMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SMSMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SMSMessages
     * const sMSMessages = await prisma.sMSMessage.findMany()
     * 
     * // Get first 10 SMSMessages
     * const sMSMessages = await prisma.sMSMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sMSMessageWithIdOnly = await prisma.sMSMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SMSMessageFindManyArgs>(args?: SelectSubset<T, SMSMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SMSMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SMSMessage.
     * @param {SMSMessageCreateArgs} args - Arguments to create a SMSMessage.
     * @example
     * // Create one SMSMessage
     * const SMSMessage = await prisma.sMSMessage.create({
     *   data: {
     *     // ... data to create a SMSMessage
     *   }
     * })
     * 
     */
    create<T extends SMSMessageCreateArgs>(args: SelectSubset<T, SMSMessageCreateArgs<ExtArgs>>): Prisma__SMSMessageClient<$Result.GetResult<Prisma.$SMSMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SMSMessages.
     * @param {SMSMessageCreateManyArgs} args - Arguments to create many SMSMessages.
     * @example
     * // Create many SMSMessages
     * const sMSMessage = await prisma.sMSMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SMSMessageCreateManyArgs>(args?: SelectSubset<T, SMSMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SMSMessages and returns the data saved in the database.
     * @param {SMSMessageCreateManyAndReturnArgs} args - Arguments to create many SMSMessages.
     * @example
     * // Create many SMSMessages
     * const sMSMessage = await prisma.sMSMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SMSMessages and only return the `id`
     * const sMSMessageWithIdOnly = await prisma.sMSMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SMSMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, SMSMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SMSMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SMSMessage.
     * @param {SMSMessageDeleteArgs} args - Arguments to delete one SMSMessage.
     * @example
     * // Delete one SMSMessage
     * const SMSMessage = await prisma.sMSMessage.delete({
     *   where: {
     *     // ... filter to delete one SMSMessage
     *   }
     * })
     * 
     */
    delete<T extends SMSMessageDeleteArgs>(args: SelectSubset<T, SMSMessageDeleteArgs<ExtArgs>>): Prisma__SMSMessageClient<$Result.GetResult<Prisma.$SMSMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SMSMessage.
     * @param {SMSMessageUpdateArgs} args - Arguments to update one SMSMessage.
     * @example
     * // Update one SMSMessage
     * const sMSMessage = await prisma.sMSMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SMSMessageUpdateArgs>(args: SelectSubset<T, SMSMessageUpdateArgs<ExtArgs>>): Prisma__SMSMessageClient<$Result.GetResult<Prisma.$SMSMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SMSMessages.
     * @param {SMSMessageDeleteManyArgs} args - Arguments to filter SMSMessages to delete.
     * @example
     * // Delete a few SMSMessages
     * const { count } = await prisma.sMSMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SMSMessageDeleteManyArgs>(args?: SelectSubset<T, SMSMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SMSMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SMSMessages
     * const sMSMessage = await prisma.sMSMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SMSMessageUpdateManyArgs>(args: SelectSubset<T, SMSMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SMSMessages and returns the data updated in the database.
     * @param {SMSMessageUpdateManyAndReturnArgs} args - Arguments to update many SMSMessages.
     * @example
     * // Update many SMSMessages
     * const sMSMessage = await prisma.sMSMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SMSMessages and only return the `id`
     * const sMSMessageWithIdOnly = await prisma.sMSMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends SMSMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, SMSMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SMSMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SMSMessage.
     * @param {SMSMessageUpsertArgs} args - Arguments to update or create a SMSMessage.
     * @example
     * // Update or create a SMSMessage
     * const sMSMessage = await prisma.sMSMessage.upsert({
     *   create: {
     *     // ... data to create a SMSMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SMSMessage we want to update
     *   }
     * })
     */
    upsert<T extends SMSMessageUpsertArgs>(args: SelectSubset<T, SMSMessageUpsertArgs<ExtArgs>>): Prisma__SMSMessageClient<$Result.GetResult<Prisma.$SMSMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SMSMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSMessageCountArgs} args - Arguments to filter SMSMessages to count.
     * @example
     * // Count the number of SMSMessages
     * const count = await prisma.sMSMessage.count({
     *   where: {
     *     // ... the filter for the SMSMessages we want to count
     *   }
     * })
    **/
    count<T extends SMSMessageCountArgs>(
      args?: Subset<T, SMSMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SMSMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SMSMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SMSMessageAggregateArgs>(args: Subset<T, SMSMessageAggregateArgs>): Prisma.PrismaPromise<GetSMSMessageAggregateType<T>>

    /**
     * Group by SMSMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSMessageGroupByArgs} args - Group by arguments.
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
      T extends SMSMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SMSMessageGroupByArgs['orderBy'] }
        : { orderBy?: SMSMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SMSMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSMSMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SMSMessage model
   */
  readonly fields: SMSMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SMSMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SMSMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipients<T extends SMSMessage$recipientsArgs<ExtArgs> = {}>(args?: Subset<T, SMSMessage$recipientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SMSRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SMSMessage model
   */
  interface SMSMessageFieldRefs {
    readonly id: FieldRef<"SMSMessage", 'String'>
    readonly body: FieldRef<"SMSMessage", 'String'>
    readonly from: FieldRef<"SMSMessage", 'String'>
    readonly createdAt: FieldRef<"SMSMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SMSMessage findUnique
   */
  export type SMSMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSMessage
     */
    select?: SMSMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSMessage
     */
    omit?: SMSMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSMessageInclude<ExtArgs> | null
    /**
     * Filter, which SMSMessage to fetch.
     */
    where: SMSMessageWhereUniqueInput
  }

  /**
   * SMSMessage findUniqueOrThrow
   */
  export type SMSMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSMessage
     */
    select?: SMSMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSMessage
     */
    omit?: SMSMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSMessageInclude<ExtArgs> | null
    /**
     * Filter, which SMSMessage to fetch.
     */
    where: SMSMessageWhereUniqueInput
  }

  /**
   * SMSMessage findFirst
   */
  export type SMSMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSMessage
     */
    select?: SMSMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSMessage
     */
    omit?: SMSMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSMessageInclude<ExtArgs> | null
    /**
     * Filter, which SMSMessage to fetch.
     */
    where?: SMSMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSMessages to fetch.
     */
    orderBy?: SMSMessageOrderByWithRelationInput | SMSMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SMSMessages.
     */
    cursor?: SMSMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SMSMessages.
     */
    distinct?: SMSMessageScalarFieldEnum | SMSMessageScalarFieldEnum[]
  }

  /**
   * SMSMessage findFirstOrThrow
   */
  export type SMSMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSMessage
     */
    select?: SMSMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSMessage
     */
    omit?: SMSMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSMessageInclude<ExtArgs> | null
    /**
     * Filter, which SMSMessage to fetch.
     */
    where?: SMSMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSMessages to fetch.
     */
    orderBy?: SMSMessageOrderByWithRelationInput | SMSMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SMSMessages.
     */
    cursor?: SMSMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SMSMessages.
     */
    distinct?: SMSMessageScalarFieldEnum | SMSMessageScalarFieldEnum[]
  }

  /**
   * SMSMessage findMany
   */
  export type SMSMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSMessage
     */
    select?: SMSMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSMessage
     */
    omit?: SMSMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSMessageInclude<ExtArgs> | null
    /**
     * Filter, which SMSMessages to fetch.
     */
    where?: SMSMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSMessages to fetch.
     */
    orderBy?: SMSMessageOrderByWithRelationInput | SMSMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SMSMessages.
     */
    cursor?: SMSMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSMessages.
     */
    skip?: number
    distinct?: SMSMessageScalarFieldEnum | SMSMessageScalarFieldEnum[]
  }

  /**
   * SMSMessage create
   */
  export type SMSMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSMessage
     */
    select?: SMSMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSMessage
     */
    omit?: SMSMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a SMSMessage.
     */
    data: XOR<SMSMessageCreateInput, SMSMessageUncheckedCreateInput>
  }

  /**
   * SMSMessage createMany
   */
  export type SMSMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SMSMessages.
     */
    data: SMSMessageCreateManyInput | SMSMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SMSMessage createManyAndReturn
   */
  export type SMSMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSMessage
     */
    select?: SMSMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SMSMessage
     */
    omit?: SMSMessageOmit<ExtArgs> | null
    /**
     * The data used to create many SMSMessages.
     */
    data: SMSMessageCreateManyInput | SMSMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SMSMessage update
   */
  export type SMSMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSMessage
     */
    select?: SMSMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSMessage
     */
    omit?: SMSMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a SMSMessage.
     */
    data: XOR<SMSMessageUpdateInput, SMSMessageUncheckedUpdateInput>
    /**
     * Choose, which SMSMessage to update.
     */
    where: SMSMessageWhereUniqueInput
  }

  /**
   * SMSMessage updateMany
   */
  export type SMSMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SMSMessages.
     */
    data: XOR<SMSMessageUpdateManyMutationInput, SMSMessageUncheckedUpdateManyInput>
    /**
     * Filter which SMSMessages to update
     */
    where?: SMSMessageWhereInput
    /**
     * Limit how many SMSMessages to update.
     */
    limit?: number
  }

  /**
   * SMSMessage updateManyAndReturn
   */
  export type SMSMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSMessage
     */
    select?: SMSMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SMSMessage
     */
    omit?: SMSMessageOmit<ExtArgs> | null
    /**
     * The data used to update SMSMessages.
     */
    data: XOR<SMSMessageUpdateManyMutationInput, SMSMessageUncheckedUpdateManyInput>
    /**
     * Filter which SMSMessages to update
     */
    where?: SMSMessageWhereInput
    /**
     * Limit how many SMSMessages to update.
     */
    limit?: number
  }

  /**
   * SMSMessage upsert
   */
  export type SMSMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSMessage
     */
    select?: SMSMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSMessage
     */
    omit?: SMSMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the SMSMessage to update in case it exists.
     */
    where: SMSMessageWhereUniqueInput
    /**
     * In case the SMSMessage found by the `where` argument doesn't exist, create a new SMSMessage with this data.
     */
    create: XOR<SMSMessageCreateInput, SMSMessageUncheckedCreateInput>
    /**
     * In case the SMSMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SMSMessageUpdateInput, SMSMessageUncheckedUpdateInput>
  }

  /**
   * SMSMessage delete
   */
  export type SMSMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSMessage
     */
    select?: SMSMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSMessage
     */
    omit?: SMSMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSMessageInclude<ExtArgs> | null
    /**
     * Filter which SMSMessage to delete.
     */
    where: SMSMessageWhereUniqueInput
  }

  /**
   * SMSMessage deleteMany
   */
  export type SMSMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SMSMessages to delete
     */
    where?: SMSMessageWhereInput
    /**
     * Limit how many SMSMessages to delete.
     */
    limit?: number
  }

  /**
   * SMSMessage.recipients
   */
  export type SMSMessage$recipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSRecipient
     */
    select?: SMSRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSRecipient
     */
    omit?: SMSRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSRecipientInclude<ExtArgs> | null
    where?: SMSRecipientWhereInput
    orderBy?: SMSRecipientOrderByWithRelationInput | SMSRecipientOrderByWithRelationInput[]
    cursor?: SMSRecipientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SMSRecipientScalarFieldEnum | SMSRecipientScalarFieldEnum[]
  }

  /**
   * SMSMessage without action
   */
  export type SMSMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSMessage
     */
    select?: SMSMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSMessage
     */
    omit?: SMSMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSMessageInclude<ExtArgs> | null
  }


  /**
   * Model SMSRecipient
   */

  export type AggregateSMSRecipient = {
    _count: SMSRecipientCountAggregateOutputType | null
    _min: SMSRecipientMinAggregateOutputType | null
    _max: SMSRecipientMaxAggregateOutputType | null
  }

  export type SMSRecipientMinAggregateOutputType = {
    id: string | null
    messageId: string | null
    technicianId: string | null
    phone: string | null
    status: $Enums.RecipientStatus | null
    createdAt: Date | null
  }

  export type SMSRecipientMaxAggregateOutputType = {
    id: string | null
    messageId: string | null
    technicianId: string | null
    phone: string | null
    status: $Enums.RecipientStatus | null
    createdAt: Date | null
  }

  export type SMSRecipientCountAggregateOutputType = {
    id: number
    messageId: number
    technicianId: number
    phone: number
    status: number
    response: number
    createdAt: number
    _all: number
  }


  export type SMSRecipientMinAggregateInputType = {
    id?: true
    messageId?: true
    technicianId?: true
    phone?: true
    status?: true
    createdAt?: true
  }

  export type SMSRecipientMaxAggregateInputType = {
    id?: true
    messageId?: true
    technicianId?: true
    phone?: true
    status?: true
    createdAt?: true
  }

  export type SMSRecipientCountAggregateInputType = {
    id?: true
    messageId?: true
    technicianId?: true
    phone?: true
    status?: true
    response?: true
    createdAt?: true
    _all?: true
  }

  export type SMSRecipientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SMSRecipient to aggregate.
     */
    where?: SMSRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSRecipients to fetch.
     */
    orderBy?: SMSRecipientOrderByWithRelationInput | SMSRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SMSRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SMSRecipients
    **/
    _count?: true | SMSRecipientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SMSRecipientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SMSRecipientMaxAggregateInputType
  }

  export type GetSMSRecipientAggregateType<T extends SMSRecipientAggregateArgs> = {
        [P in keyof T & keyof AggregateSMSRecipient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSMSRecipient[P]>
      : GetScalarType<T[P], AggregateSMSRecipient[P]>
  }




  export type SMSRecipientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SMSRecipientWhereInput
    orderBy?: SMSRecipientOrderByWithAggregationInput | SMSRecipientOrderByWithAggregationInput[]
    by: SMSRecipientScalarFieldEnum[] | SMSRecipientScalarFieldEnum
    having?: SMSRecipientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SMSRecipientCountAggregateInputType | true
    _min?: SMSRecipientMinAggregateInputType
    _max?: SMSRecipientMaxAggregateInputType
  }

  export type SMSRecipientGroupByOutputType = {
    id: string
    messageId: string
    technicianId: string | null
    phone: string
    status: $Enums.RecipientStatus
    response: JsonValue | null
    createdAt: Date
    _count: SMSRecipientCountAggregateOutputType | null
    _min: SMSRecipientMinAggregateOutputType | null
    _max: SMSRecipientMaxAggregateOutputType | null
  }

  type GetSMSRecipientGroupByPayload<T extends SMSRecipientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SMSRecipientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SMSRecipientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SMSRecipientGroupByOutputType[P]>
            : GetScalarType<T[P], SMSRecipientGroupByOutputType[P]>
        }
      >
    >


  export type SMSRecipientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    technicianId?: boolean
    phone?: boolean
    status?: boolean
    response?: boolean
    createdAt?: boolean
    message?: boolean | SMSMessageDefaultArgs<ExtArgs>
    technician?: boolean | SMSRecipient$technicianArgs<ExtArgs>
  }, ExtArgs["result"]["sMSRecipient"]>

  export type SMSRecipientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    technicianId?: boolean
    phone?: boolean
    status?: boolean
    response?: boolean
    createdAt?: boolean
    message?: boolean | SMSMessageDefaultArgs<ExtArgs>
    technician?: boolean | SMSRecipient$technicianArgs<ExtArgs>
  }, ExtArgs["result"]["sMSRecipient"]>

  export type SMSRecipientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    technicianId?: boolean
    phone?: boolean
    status?: boolean
    response?: boolean
    createdAt?: boolean
    message?: boolean | SMSMessageDefaultArgs<ExtArgs>
    technician?: boolean | SMSRecipient$technicianArgs<ExtArgs>
  }, ExtArgs["result"]["sMSRecipient"]>

  export type SMSRecipientSelectScalar = {
    id?: boolean
    messageId?: boolean
    technicianId?: boolean
    phone?: boolean
    status?: boolean
    response?: boolean
    createdAt?: boolean
  }

  export type SMSRecipientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "messageId" | "technicianId" | "phone" | "status" | "response" | "createdAt", ExtArgs["result"]["sMSRecipient"]>
  export type SMSRecipientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | SMSMessageDefaultArgs<ExtArgs>
    technician?: boolean | SMSRecipient$technicianArgs<ExtArgs>
  }
  export type SMSRecipientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | SMSMessageDefaultArgs<ExtArgs>
    technician?: boolean | SMSRecipient$technicianArgs<ExtArgs>
  }
  export type SMSRecipientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | SMSMessageDefaultArgs<ExtArgs>
    technician?: boolean | SMSRecipient$technicianArgs<ExtArgs>
  }

  export type $SMSRecipientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SMSRecipient"
    objects: {
      message: Prisma.$SMSMessagePayload<ExtArgs>
      technician: Prisma.$TechnicianPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      messageId: string
      technicianId: string | null
      phone: string
      status: $Enums.RecipientStatus
      response: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["sMSRecipient"]>
    composites: {}
  }

  type SMSRecipientGetPayload<S extends boolean | null | undefined | SMSRecipientDefaultArgs> = $Result.GetResult<Prisma.$SMSRecipientPayload, S>

  type SMSRecipientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SMSRecipientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SMSRecipientCountAggregateInputType | true
    }

  export interface SMSRecipientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SMSRecipient'], meta: { name: 'SMSRecipient' } }
    /**
     * Find zero or one SMSRecipient that matches the filter.
     * @param {SMSRecipientFindUniqueArgs} args - Arguments to find a SMSRecipient
     * @example
     * // Get one SMSRecipient
     * const sMSRecipient = await prisma.sMSRecipient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SMSRecipientFindUniqueArgs>(args: SelectSubset<T, SMSRecipientFindUniqueArgs<ExtArgs>>): Prisma__SMSRecipientClient<$Result.GetResult<Prisma.$SMSRecipientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SMSRecipient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SMSRecipientFindUniqueOrThrowArgs} args - Arguments to find a SMSRecipient
     * @example
     * // Get one SMSRecipient
     * const sMSRecipient = await prisma.sMSRecipient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SMSRecipientFindUniqueOrThrowArgs>(args: SelectSubset<T, SMSRecipientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SMSRecipientClient<$Result.GetResult<Prisma.$SMSRecipientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SMSRecipient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSRecipientFindFirstArgs} args - Arguments to find a SMSRecipient
     * @example
     * // Get one SMSRecipient
     * const sMSRecipient = await prisma.sMSRecipient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SMSRecipientFindFirstArgs>(args?: SelectSubset<T, SMSRecipientFindFirstArgs<ExtArgs>>): Prisma__SMSRecipientClient<$Result.GetResult<Prisma.$SMSRecipientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SMSRecipient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSRecipientFindFirstOrThrowArgs} args - Arguments to find a SMSRecipient
     * @example
     * // Get one SMSRecipient
     * const sMSRecipient = await prisma.sMSRecipient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SMSRecipientFindFirstOrThrowArgs>(args?: SelectSubset<T, SMSRecipientFindFirstOrThrowArgs<ExtArgs>>): Prisma__SMSRecipientClient<$Result.GetResult<Prisma.$SMSRecipientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SMSRecipients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSRecipientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SMSRecipients
     * const sMSRecipients = await prisma.sMSRecipient.findMany()
     * 
     * // Get first 10 SMSRecipients
     * const sMSRecipients = await prisma.sMSRecipient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sMSRecipientWithIdOnly = await prisma.sMSRecipient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SMSRecipientFindManyArgs>(args?: SelectSubset<T, SMSRecipientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SMSRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SMSRecipient.
     * @param {SMSRecipientCreateArgs} args - Arguments to create a SMSRecipient.
     * @example
     * // Create one SMSRecipient
     * const SMSRecipient = await prisma.sMSRecipient.create({
     *   data: {
     *     // ... data to create a SMSRecipient
     *   }
     * })
     * 
     */
    create<T extends SMSRecipientCreateArgs>(args: SelectSubset<T, SMSRecipientCreateArgs<ExtArgs>>): Prisma__SMSRecipientClient<$Result.GetResult<Prisma.$SMSRecipientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SMSRecipients.
     * @param {SMSRecipientCreateManyArgs} args - Arguments to create many SMSRecipients.
     * @example
     * // Create many SMSRecipients
     * const sMSRecipient = await prisma.sMSRecipient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SMSRecipientCreateManyArgs>(args?: SelectSubset<T, SMSRecipientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SMSRecipients and returns the data saved in the database.
     * @param {SMSRecipientCreateManyAndReturnArgs} args - Arguments to create many SMSRecipients.
     * @example
     * // Create many SMSRecipients
     * const sMSRecipient = await prisma.sMSRecipient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SMSRecipients and only return the `id`
     * const sMSRecipientWithIdOnly = await prisma.sMSRecipient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SMSRecipientCreateManyAndReturnArgs>(args?: SelectSubset<T, SMSRecipientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SMSRecipientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SMSRecipient.
     * @param {SMSRecipientDeleteArgs} args - Arguments to delete one SMSRecipient.
     * @example
     * // Delete one SMSRecipient
     * const SMSRecipient = await prisma.sMSRecipient.delete({
     *   where: {
     *     // ... filter to delete one SMSRecipient
     *   }
     * })
     * 
     */
    delete<T extends SMSRecipientDeleteArgs>(args: SelectSubset<T, SMSRecipientDeleteArgs<ExtArgs>>): Prisma__SMSRecipientClient<$Result.GetResult<Prisma.$SMSRecipientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SMSRecipient.
     * @param {SMSRecipientUpdateArgs} args - Arguments to update one SMSRecipient.
     * @example
     * // Update one SMSRecipient
     * const sMSRecipient = await prisma.sMSRecipient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SMSRecipientUpdateArgs>(args: SelectSubset<T, SMSRecipientUpdateArgs<ExtArgs>>): Prisma__SMSRecipientClient<$Result.GetResult<Prisma.$SMSRecipientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SMSRecipients.
     * @param {SMSRecipientDeleteManyArgs} args - Arguments to filter SMSRecipients to delete.
     * @example
     * // Delete a few SMSRecipients
     * const { count } = await prisma.sMSRecipient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SMSRecipientDeleteManyArgs>(args?: SelectSubset<T, SMSRecipientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SMSRecipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSRecipientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SMSRecipients
     * const sMSRecipient = await prisma.sMSRecipient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SMSRecipientUpdateManyArgs>(args: SelectSubset<T, SMSRecipientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SMSRecipients and returns the data updated in the database.
     * @param {SMSRecipientUpdateManyAndReturnArgs} args - Arguments to update many SMSRecipients.
     * @example
     * // Update many SMSRecipients
     * const sMSRecipient = await prisma.sMSRecipient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SMSRecipients and only return the `id`
     * const sMSRecipientWithIdOnly = await prisma.sMSRecipient.updateManyAndReturn({
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
    updateManyAndReturn<T extends SMSRecipientUpdateManyAndReturnArgs>(args: SelectSubset<T, SMSRecipientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SMSRecipientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SMSRecipient.
     * @param {SMSRecipientUpsertArgs} args - Arguments to update or create a SMSRecipient.
     * @example
     * // Update or create a SMSRecipient
     * const sMSRecipient = await prisma.sMSRecipient.upsert({
     *   create: {
     *     // ... data to create a SMSRecipient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SMSRecipient we want to update
     *   }
     * })
     */
    upsert<T extends SMSRecipientUpsertArgs>(args: SelectSubset<T, SMSRecipientUpsertArgs<ExtArgs>>): Prisma__SMSRecipientClient<$Result.GetResult<Prisma.$SMSRecipientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SMSRecipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSRecipientCountArgs} args - Arguments to filter SMSRecipients to count.
     * @example
     * // Count the number of SMSRecipients
     * const count = await prisma.sMSRecipient.count({
     *   where: {
     *     // ... the filter for the SMSRecipients we want to count
     *   }
     * })
    **/
    count<T extends SMSRecipientCountArgs>(
      args?: Subset<T, SMSRecipientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SMSRecipientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SMSRecipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSRecipientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SMSRecipientAggregateArgs>(args: Subset<T, SMSRecipientAggregateArgs>): Prisma.PrismaPromise<GetSMSRecipientAggregateType<T>>

    /**
     * Group by SMSRecipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSRecipientGroupByArgs} args - Group by arguments.
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
      T extends SMSRecipientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SMSRecipientGroupByArgs['orderBy'] }
        : { orderBy?: SMSRecipientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SMSRecipientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSMSRecipientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SMSRecipient model
   */
  readonly fields: SMSRecipientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SMSRecipient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SMSRecipientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends SMSMessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SMSMessageDefaultArgs<ExtArgs>>): Prisma__SMSMessageClient<$Result.GetResult<Prisma.$SMSMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    technician<T extends SMSRecipient$technicianArgs<ExtArgs> = {}>(args?: Subset<T, SMSRecipient$technicianArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SMSRecipient model
   */
  interface SMSRecipientFieldRefs {
    readonly id: FieldRef<"SMSRecipient", 'String'>
    readonly messageId: FieldRef<"SMSRecipient", 'String'>
    readonly technicianId: FieldRef<"SMSRecipient", 'String'>
    readonly phone: FieldRef<"SMSRecipient", 'String'>
    readonly status: FieldRef<"SMSRecipient", 'RecipientStatus'>
    readonly response: FieldRef<"SMSRecipient", 'Json'>
    readonly createdAt: FieldRef<"SMSRecipient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SMSRecipient findUnique
   */
  export type SMSRecipientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSRecipient
     */
    select?: SMSRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSRecipient
     */
    omit?: SMSRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSRecipientInclude<ExtArgs> | null
    /**
     * Filter, which SMSRecipient to fetch.
     */
    where: SMSRecipientWhereUniqueInput
  }

  /**
   * SMSRecipient findUniqueOrThrow
   */
  export type SMSRecipientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSRecipient
     */
    select?: SMSRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSRecipient
     */
    omit?: SMSRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSRecipientInclude<ExtArgs> | null
    /**
     * Filter, which SMSRecipient to fetch.
     */
    where: SMSRecipientWhereUniqueInput
  }

  /**
   * SMSRecipient findFirst
   */
  export type SMSRecipientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSRecipient
     */
    select?: SMSRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSRecipient
     */
    omit?: SMSRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSRecipientInclude<ExtArgs> | null
    /**
     * Filter, which SMSRecipient to fetch.
     */
    where?: SMSRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSRecipients to fetch.
     */
    orderBy?: SMSRecipientOrderByWithRelationInput | SMSRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SMSRecipients.
     */
    cursor?: SMSRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SMSRecipients.
     */
    distinct?: SMSRecipientScalarFieldEnum | SMSRecipientScalarFieldEnum[]
  }

  /**
   * SMSRecipient findFirstOrThrow
   */
  export type SMSRecipientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSRecipient
     */
    select?: SMSRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSRecipient
     */
    omit?: SMSRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSRecipientInclude<ExtArgs> | null
    /**
     * Filter, which SMSRecipient to fetch.
     */
    where?: SMSRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSRecipients to fetch.
     */
    orderBy?: SMSRecipientOrderByWithRelationInput | SMSRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SMSRecipients.
     */
    cursor?: SMSRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SMSRecipients.
     */
    distinct?: SMSRecipientScalarFieldEnum | SMSRecipientScalarFieldEnum[]
  }

  /**
   * SMSRecipient findMany
   */
  export type SMSRecipientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSRecipient
     */
    select?: SMSRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSRecipient
     */
    omit?: SMSRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSRecipientInclude<ExtArgs> | null
    /**
     * Filter, which SMSRecipients to fetch.
     */
    where?: SMSRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSRecipients to fetch.
     */
    orderBy?: SMSRecipientOrderByWithRelationInput | SMSRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SMSRecipients.
     */
    cursor?: SMSRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSRecipients.
     */
    skip?: number
    distinct?: SMSRecipientScalarFieldEnum | SMSRecipientScalarFieldEnum[]
  }

  /**
   * SMSRecipient create
   */
  export type SMSRecipientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSRecipient
     */
    select?: SMSRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSRecipient
     */
    omit?: SMSRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSRecipientInclude<ExtArgs> | null
    /**
     * The data needed to create a SMSRecipient.
     */
    data: XOR<SMSRecipientCreateInput, SMSRecipientUncheckedCreateInput>
  }

  /**
   * SMSRecipient createMany
   */
  export type SMSRecipientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SMSRecipients.
     */
    data: SMSRecipientCreateManyInput | SMSRecipientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SMSRecipient createManyAndReturn
   */
  export type SMSRecipientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSRecipient
     */
    select?: SMSRecipientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SMSRecipient
     */
    omit?: SMSRecipientOmit<ExtArgs> | null
    /**
     * The data used to create many SMSRecipients.
     */
    data: SMSRecipientCreateManyInput | SMSRecipientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSRecipientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SMSRecipient update
   */
  export type SMSRecipientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSRecipient
     */
    select?: SMSRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSRecipient
     */
    omit?: SMSRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSRecipientInclude<ExtArgs> | null
    /**
     * The data needed to update a SMSRecipient.
     */
    data: XOR<SMSRecipientUpdateInput, SMSRecipientUncheckedUpdateInput>
    /**
     * Choose, which SMSRecipient to update.
     */
    where: SMSRecipientWhereUniqueInput
  }

  /**
   * SMSRecipient updateMany
   */
  export type SMSRecipientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SMSRecipients.
     */
    data: XOR<SMSRecipientUpdateManyMutationInput, SMSRecipientUncheckedUpdateManyInput>
    /**
     * Filter which SMSRecipients to update
     */
    where?: SMSRecipientWhereInput
    /**
     * Limit how many SMSRecipients to update.
     */
    limit?: number
  }

  /**
   * SMSRecipient updateManyAndReturn
   */
  export type SMSRecipientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSRecipient
     */
    select?: SMSRecipientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SMSRecipient
     */
    omit?: SMSRecipientOmit<ExtArgs> | null
    /**
     * The data used to update SMSRecipients.
     */
    data: XOR<SMSRecipientUpdateManyMutationInput, SMSRecipientUncheckedUpdateManyInput>
    /**
     * Filter which SMSRecipients to update
     */
    where?: SMSRecipientWhereInput
    /**
     * Limit how many SMSRecipients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSRecipientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SMSRecipient upsert
   */
  export type SMSRecipientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSRecipient
     */
    select?: SMSRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSRecipient
     */
    omit?: SMSRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSRecipientInclude<ExtArgs> | null
    /**
     * The filter to search for the SMSRecipient to update in case it exists.
     */
    where: SMSRecipientWhereUniqueInput
    /**
     * In case the SMSRecipient found by the `where` argument doesn't exist, create a new SMSRecipient with this data.
     */
    create: XOR<SMSRecipientCreateInput, SMSRecipientUncheckedCreateInput>
    /**
     * In case the SMSRecipient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SMSRecipientUpdateInput, SMSRecipientUncheckedUpdateInput>
  }

  /**
   * SMSRecipient delete
   */
  export type SMSRecipientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSRecipient
     */
    select?: SMSRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSRecipient
     */
    omit?: SMSRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSRecipientInclude<ExtArgs> | null
    /**
     * Filter which SMSRecipient to delete.
     */
    where: SMSRecipientWhereUniqueInput
  }

  /**
   * SMSRecipient deleteMany
   */
  export type SMSRecipientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SMSRecipients to delete
     */
    where?: SMSRecipientWhereInput
    /**
     * Limit how many SMSRecipients to delete.
     */
    limit?: number
  }

  /**
   * SMSRecipient.technician
   */
  export type SMSRecipient$technicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    where?: TechnicianWhereInput
  }

  /**
   * SMSRecipient without action
   */
  export type SMSRecipientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSRecipient
     */
    select?: SMSRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSRecipient
     */
    omit?: SMSRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSRecipientInclude<ExtArgs> | null
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


  export const TechnicianScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    verified: 'verified',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type TechnicianScalarFieldEnum = (typeof TechnicianScalarFieldEnum)[keyof typeof TechnicianScalarFieldEnum]


  export const SMSMessageScalarFieldEnum: {
    id: 'id',
    body: 'body',
    from: 'from',
    createdAt: 'createdAt'
  };

  export type SMSMessageScalarFieldEnum = (typeof SMSMessageScalarFieldEnum)[keyof typeof SMSMessageScalarFieldEnum]


  export const SMSRecipientScalarFieldEnum: {
    id: 'id',
    messageId: 'messageId',
    technicianId: 'technicianId',
    phone: 'phone',
    status: 'status',
    response: 'response',
    createdAt: 'createdAt'
  };

  export type SMSRecipientScalarFieldEnum = (typeof SMSRecipientScalarFieldEnum)[keyof typeof SMSRecipientScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TechnicianType'
   */
  export type EnumTechnicianTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TechnicianType'>
    


  /**
   * Reference to a field of type 'TechnicianType[]'
   */
  export type ListEnumTechnicianTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TechnicianType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RecipientStatus'
   */
  export type EnumRecipientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecipientStatus'>
    


  /**
   * Reference to a field of type 'RecipientStatus[]'
   */
  export type ListEnumRecipientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecipientStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type TechnicianWhereInput = {
    AND?: TechnicianWhereInput | TechnicianWhereInput[]
    OR?: TechnicianWhereInput[]
    NOT?: TechnicianWhereInput | TechnicianWhereInput[]
    id?: UuidFilter<"Technician"> | string
    name?: StringFilter<"Technician"> | string
    phone?: StringFilter<"Technician"> | string
    verified?: BoolFilter<"Technician"> | boolean
    type?: EnumTechnicianTypeFilter<"Technician"> | $Enums.TechnicianType
    createdAt?: DateTimeFilter<"Technician"> | Date | string
    SMSRecipient?: SMSRecipientListRelationFilter
  }

  export type TechnicianOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    verified?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    SMSRecipient?: SMSRecipientOrderByRelationAggregateInput
  }

  export type TechnicianWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TechnicianWhereInput | TechnicianWhereInput[]
    OR?: TechnicianWhereInput[]
    NOT?: TechnicianWhereInput | TechnicianWhereInput[]
    name?: StringFilter<"Technician"> | string
    phone?: StringFilter<"Technician"> | string
    verified?: BoolFilter<"Technician"> | boolean
    type?: EnumTechnicianTypeFilter<"Technician"> | $Enums.TechnicianType
    createdAt?: DateTimeFilter<"Technician"> | Date | string
    SMSRecipient?: SMSRecipientListRelationFilter
  }, "id">

  export type TechnicianOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    verified?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: TechnicianCountOrderByAggregateInput
    _max?: TechnicianMaxOrderByAggregateInput
    _min?: TechnicianMinOrderByAggregateInput
  }

  export type TechnicianScalarWhereWithAggregatesInput = {
    AND?: TechnicianScalarWhereWithAggregatesInput | TechnicianScalarWhereWithAggregatesInput[]
    OR?: TechnicianScalarWhereWithAggregatesInput[]
    NOT?: TechnicianScalarWhereWithAggregatesInput | TechnicianScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Technician"> | string
    name?: StringWithAggregatesFilter<"Technician"> | string
    phone?: StringWithAggregatesFilter<"Technician"> | string
    verified?: BoolWithAggregatesFilter<"Technician"> | boolean
    type?: EnumTechnicianTypeWithAggregatesFilter<"Technician"> | $Enums.TechnicianType
    createdAt?: DateTimeWithAggregatesFilter<"Technician"> | Date | string
  }

  export type SMSMessageWhereInput = {
    AND?: SMSMessageWhereInput | SMSMessageWhereInput[]
    OR?: SMSMessageWhereInput[]
    NOT?: SMSMessageWhereInput | SMSMessageWhereInput[]
    id?: UuidFilter<"SMSMessage"> | string
    body?: StringFilter<"SMSMessage"> | string
    from?: StringNullableFilter<"SMSMessage"> | string | null
    createdAt?: DateTimeFilter<"SMSMessage"> | Date | string
    recipients?: SMSRecipientListRelationFilter
  }

  export type SMSMessageOrderByWithRelationInput = {
    id?: SortOrder
    body?: SortOrder
    from?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    recipients?: SMSRecipientOrderByRelationAggregateInput
  }

  export type SMSMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SMSMessageWhereInput | SMSMessageWhereInput[]
    OR?: SMSMessageWhereInput[]
    NOT?: SMSMessageWhereInput | SMSMessageWhereInput[]
    body?: StringFilter<"SMSMessage"> | string
    from?: StringNullableFilter<"SMSMessage"> | string | null
    createdAt?: DateTimeFilter<"SMSMessage"> | Date | string
    recipients?: SMSRecipientListRelationFilter
  }, "id">

  export type SMSMessageOrderByWithAggregationInput = {
    id?: SortOrder
    body?: SortOrder
    from?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SMSMessageCountOrderByAggregateInput
    _max?: SMSMessageMaxOrderByAggregateInput
    _min?: SMSMessageMinOrderByAggregateInput
  }

  export type SMSMessageScalarWhereWithAggregatesInput = {
    AND?: SMSMessageScalarWhereWithAggregatesInput | SMSMessageScalarWhereWithAggregatesInput[]
    OR?: SMSMessageScalarWhereWithAggregatesInput[]
    NOT?: SMSMessageScalarWhereWithAggregatesInput | SMSMessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SMSMessage"> | string
    body?: StringWithAggregatesFilter<"SMSMessage"> | string
    from?: StringNullableWithAggregatesFilter<"SMSMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SMSMessage"> | Date | string
  }

  export type SMSRecipientWhereInput = {
    AND?: SMSRecipientWhereInput | SMSRecipientWhereInput[]
    OR?: SMSRecipientWhereInput[]
    NOT?: SMSRecipientWhereInput | SMSRecipientWhereInput[]
    id?: UuidFilter<"SMSRecipient"> | string
    messageId?: UuidFilter<"SMSRecipient"> | string
    technicianId?: UuidNullableFilter<"SMSRecipient"> | string | null
    phone?: StringFilter<"SMSRecipient"> | string
    status?: EnumRecipientStatusFilter<"SMSRecipient"> | $Enums.RecipientStatus
    response?: JsonNullableFilter<"SMSRecipient">
    createdAt?: DateTimeFilter<"SMSRecipient"> | Date | string
    message?: XOR<SMSMessageScalarRelationFilter, SMSMessageWhereInput>
    technician?: XOR<TechnicianNullableScalarRelationFilter, TechnicianWhereInput> | null
  }

  export type SMSRecipientOrderByWithRelationInput = {
    id?: SortOrder
    messageId?: SortOrder
    technicianId?: SortOrderInput | SortOrder
    phone?: SortOrder
    status?: SortOrder
    response?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    message?: SMSMessageOrderByWithRelationInput
    technician?: TechnicianOrderByWithRelationInput
  }

  export type SMSRecipientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SMSRecipientWhereInput | SMSRecipientWhereInput[]
    OR?: SMSRecipientWhereInput[]
    NOT?: SMSRecipientWhereInput | SMSRecipientWhereInput[]
    messageId?: UuidFilter<"SMSRecipient"> | string
    technicianId?: UuidNullableFilter<"SMSRecipient"> | string | null
    phone?: StringFilter<"SMSRecipient"> | string
    status?: EnumRecipientStatusFilter<"SMSRecipient"> | $Enums.RecipientStatus
    response?: JsonNullableFilter<"SMSRecipient">
    createdAt?: DateTimeFilter<"SMSRecipient"> | Date | string
    message?: XOR<SMSMessageScalarRelationFilter, SMSMessageWhereInput>
    technician?: XOR<TechnicianNullableScalarRelationFilter, TechnicianWhereInput> | null
  }, "id">

  export type SMSRecipientOrderByWithAggregationInput = {
    id?: SortOrder
    messageId?: SortOrder
    technicianId?: SortOrderInput | SortOrder
    phone?: SortOrder
    status?: SortOrder
    response?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SMSRecipientCountOrderByAggregateInput
    _max?: SMSRecipientMaxOrderByAggregateInput
    _min?: SMSRecipientMinOrderByAggregateInput
  }

  export type SMSRecipientScalarWhereWithAggregatesInput = {
    AND?: SMSRecipientScalarWhereWithAggregatesInput | SMSRecipientScalarWhereWithAggregatesInput[]
    OR?: SMSRecipientScalarWhereWithAggregatesInput[]
    NOT?: SMSRecipientScalarWhereWithAggregatesInput | SMSRecipientScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SMSRecipient"> | string
    messageId?: UuidWithAggregatesFilter<"SMSRecipient"> | string
    technicianId?: UuidNullableWithAggregatesFilter<"SMSRecipient"> | string | null
    phone?: StringWithAggregatesFilter<"SMSRecipient"> | string
    status?: EnumRecipientStatusWithAggregatesFilter<"SMSRecipient"> | $Enums.RecipientStatus
    response?: JsonNullableWithAggregatesFilter<"SMSRecipient">
    createdAt?: DateTimeWithAggregatesFilter<"SMSRecipient"> | Date | string
  }

  export type TechnicianCreateInput = {
    id?: string
    name: string
    phone: string
    verified?: boolean
    type: $Enums.TechnicianType
    createdAt?: Date | string
    SMSRecipient?: SMSRecipientCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    verified?: boolean
    type: $Enums.TechnicianType
    createdAt?: Date | string
    SMSRecipient?: SMSRecipientUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTechnicianTypeFieldUpdateOperationsInput | $Enums.TechnicianType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SMSRecipient?: SMSRecipientUpdateManyWithoutTechnicianNestedInput
  }

  export type TechnicianUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTechnicianTypeFieldUpdateOperationsInput | $Enums.TechnicianType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SMSRecipient?: SMSRecipientUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type TechnicianCreateManyInput = {
    id?: string
    name: string
    phone: string
    verified?: boolean
    type: $Enums.TechnicianType
    createdAt?: Date | string
  }

  export type TechnicianUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTechnicianTypeFieldUpdateOperationsInput | $Enums.TechnicianType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnicianUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTechnicianTypeFieldUpdateOperationsInput | $Enums.TechnicianType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSMessageCreateInput = {
    id?: string
    body: string
    from?: string | null
    createdAt?: Date | string
    recipients?: SMSRecipientCreateNestedManyWithoutMessageInput
  }

  export type SMSMessageUncheckedCreateInput = {
    id?: string
    body: string
    from?: string | null
    createdAt?: Date | string
    recipients?: SMSRecipientUncheckedCreateNestedManyWithoutMessageInput
  }

  export type SMSMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: SMSRecipientUpdateManyWithoutMessageNestedInput
  }

  export type SMSMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: SMSRecipientUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type SMSMessageCreateManyInput = {
    id?: string
    body: string
    from?: string | null
    createdAt?: Date | string
  }

  export type SMSMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSRecipientCreateInput = {
    id?: string
    phone: string
    status?: $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    message: SMSMessageCreateNestedOneWithoutRecipientsInput
    technician?: TechnicianCreateNestedOneWithoutSMSRecipientInput
  }

  export type SMSRecipientUncheckedCreateInput = {
    id?: string
    messageId: string
    technicianId?: string | null
    phone: string
    status?: $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SMSRecipientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: SMSMessageUpdateOneRequiredWithoutRecipientsNestedInput
    technician?: TechnicianUpdateOneWithoutSMSRecipientNestedInput
  }

  export type SMSRecipientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSRecipientCreateManyInput = {
    id?: string
    messageId: string
    technicianId?: string | null
    phone: string
    status?: $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SMSRecipientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSRecipientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumTechnicianTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianType | EnumTechnicianTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianType[] | ListEnumTechnicianTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianType[] | ListEnumTechnicianTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianTypeFilter<$PrismaModel> | $Enums.TechnicianType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SMSRecipientListRelationFilter = {
    every?: SMSRecipientWhereInput
    some?: SMSRecipientWhereInput
    none?: SMSRecipientWhereInput
  }

  export type SMSRecipientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TechnicianCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    verified?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type TechnicianMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    verified?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type TechnicianMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    verified?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTechnicianTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianType | EnumTechnicianTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianType[] | ListEnumTechnicianTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianType[] | ListEnumTechnicianTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianTypeWithAggregatesFilter<$PrismaModel> | $Enums.TechnicianType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTechnicianTypeFilter<$PrismaModel>
    _max?: NestedEnumTechnicianTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SMSMessageCountOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    from?: SortOrder
    createdAt?: SortOrder
  }

  export type SMSMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    from?: SortOrder
    createdAt?: SortOrder
  }

  export type SMSMessageMinOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    from?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRecipientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipientStatus | EnumRecipientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipientStatusFilter<$PrismaModel> | $Enums.RecipientStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SMSMessageScalarRelationFilter = {
    is?: SMSMessageWhereInput
    isNot?: SMSMessageWhereInput
  }

  export type TechnicianNullableScalarRelationFilter = {
    is?: TechnicianWhereInput | null
    isNot?: TechnicianWhereInput | null
  }

  export type SMSRecipientCountOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    technicianId?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type SMSRecipientMaxOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    technicianId?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type SMSRecipientMinOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    technicianId?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRecipientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipientStatus | EnumRecipientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipientStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecipientStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecipientStatusFilter<$PrismaModel>
    _max?: NestedEnumRecipientStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SMSRecipientCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<SMSRecipientCreateWithoutTechnicianInput, SMSRecipientUncheckedCreateWithoutTechnicianInput> | SMSRecipientCreateWithoutTechnicianInput[] | SMSRecipientUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: SMSRecipientCreateOrConnectWithoutTechnicianInput | SMSRecipientCreateOrConnectWithoutTechnicianInput[]
    createMany?: SMSRecipientCreateManyTechnicianInputEnvelope
    connect?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
  }

  export type SMSRecipientUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<SMSRecipientCreateWithoutTechnicianInput, SMSRecipientUncheckedCreateWithoutTechnicianInput> | SMSRecipientCreateWithoutTechnicianInput[] | SMSRecipientUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: SMSRecipientCreateOrConnectWithoutTechnicianInput | SMSRecipientCreateOrConnectWithoutTechnicianInput[]
    createMany?: SMSRecipientCreateManyTechnicianInputEnvelope
    connect?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumTechnicianTypeFieldUpdateOperationsInput = {
    set?: $Enums.TechnicianType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SMSRecipientUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<SMSRecipientCreateWithoutTechnicianInput, SMSRecipientUncheckedCreateWithoutTechnicianInput> | SMSRecipientCreateWithoutTechnicianInput[] | SMSRecipientUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: SMSRecipientCreateOrConnectWithoutTechnicianInput | SMSRecipientCreateOrConnectWithoutTechnicianInput[]
    upsert?: SMSRecipientUpsertWithWhereUniqueWithoutTechnicianInput | SMSRecipientUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: SMSRecipientCreateManyTechnicianInputEnvelope
    set?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    disconnect?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    delete?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    connect?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    update?: SMSRecipientUpdateWithWhereUniqueWithoutTechnicianInput | SMSRecipientUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: SMSRecipientUpdateManyWithWhereWithoutTechnicianInput | SMSRecipientUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: SMSRecipientScalarWhereInput | SMSRecipientScalarWhereInput[]
  }

  export type SMSRecipientUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<SMSRecipientCreateWithoutTechnicianInput, SMSRecipientUncheckedCreateWithoutTechnicianInput> | SMSRecipientCreateWithoutTechnicianInput[] | SMSRecipientUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: SMSRecipientCreateOrConnectWithoutTechnicianInput | SMSRecipientCreateOrConnectWithoutTechnicianInput[]
    upsert?: SMSRecipientUpsertWithWhereUniqueWithoutTechnicianInput | SMSRecipientUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: SMSRecipientCreateManyTechnicianInputEnvelope
    set?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    disconnect?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    delete?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    connect?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    update?: SMSRecipientUpdateWithWhereUniqueWithoutTechnicianInput | SMSRecipientUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: SMSRecipientUpdateManyWithWhereWithoutTechnicianInput | SMSRecipientUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: SMSRecipientScalarWhereInput | SMSRecipientScalarWhereInput[]
  }

  export type SMSRecipientCreateNestedManyWithoutMessageInput = {
    create?: XOR<SMSRecipientCreateWithoutMessageInput, SMSRecipientUncheckedCreateWithoutMessageInput> | SMSRecipientCreateWithoutMessageInput[] | SMSRecipientUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: SMSRecipientCreateOrConnectWithoutMessageInput | SMSRecipientCreateOrConnectWithoutMessageInput[]
    createMany?: SMSRecipientCreateManyMessageInputEnvelope
    connect?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
  }

  export type SMSRecipientUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<SMSRecipientCreateWithoutMessageInput, SMSRecipientUncheckedCreateWithoutMessageInput> | SMSRecipientCreateWithoutMessageInput[] | SMSRecipientUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: SMSRecipientCreateOrConnectWithoutMessageInput | SMSRecipientCreateOrConnectWithoutMessageInput[]
    createMany?: SMSRecipientCreateManyMessageInputEnvelope
    connect?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SMSRecipientUpdateManyWithoutMessageNestedInput = {
    create?: XOR<SMSRecipientCreateWithoutMessageInput, SMSRecipientUncheckedCreateWithoutMessageInput> | SMSRecipientCreateWithoutMessageInput[] | SMSRecipientUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: SMSRecipientCreateOrConnectWithoutMessageInput | SMSRecipientCreateOrConnectWithoutMessageInput[]
    upsert?: SMSRecipientUpsertWithWhereUniqueWithoutMessageInput | SMSRecipientUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: SMSRecipientCreateManyMessageInputEnvelope
    set?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    disconnect?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    delete?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    connect?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    update?: SMSRecipientUpdateWithWhereUniqueWithoutMessageInput | SMSRecipientUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: SMSRecipientUpdateManyWithWhereWithoutMessageInput | SMSRecipientUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: SMSRecipientScalarWhereInput | SMSRecipientScalarWhereInput[]
  }

  export type SMSRecipientUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<SMSRecipientCreateWithoutMessageInput, SMSRecipientUncheckedCreateWithoutMessageInput> | SMSRecipientCreateWithoutMessageInput[] | SMSRecipientUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: SMSRecipientCreateOrConnectWithoutMessageInput | SMSRecipientCreateOrConnectWithoutMessageInput[]
    upsert?: SMSRecipientUpsertWithWhereUniqueWithoutMessageInput | SMSRecipientUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: SMSRecipientCreateManyMessageInputEnvelope
    set?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    disconnect?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    delete?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    connect?: SMSRecipientWhereUniqueInput | SMSRecipientWhereUniqueInput[]
    update?: SMSRecipientUpdateWithWhereUniqueWithoutMessageInput | SMSRecipientUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: SMSRecipientUpdateManyWithWhereWithoutMessageInput | SMSRecipientUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: SMSRecipientScalarWhereInput | SMSRecipientScalarWhereInput[]
  }

  export type SMSMessageCreateNestedOneWithoutRecipientsInput = {
    create?: XOR<SMSMessageCreateWithoutRecipientsInput, SMSMessageUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: SMSMessageCreateOrConnectWithoutRecipientsInput
    connect?: SMSMessageWhereUniqueInput
  }

  export type TechnicianCreateNestedOneWithoutSMSRecipientInput = {
    create?: XOR<TechnicianCreateWithoutSMSRecipientInput, TechnicianUncheckedCreateWithoutSMSRecipientInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutSMSRecipientInput
    connect?: TechnicianWhereUniqueInput
  }

  export type EnumRecipientStatusFieldUpdateOperationsInput = {
    set?: $Enums.RecipientStatus
  }

  export type SMSMessageUpdateOneRequiredWithoutRecipientsNestedInput = {
    create?: XOR<SMSMessageCreateWithoutRecipientsInput, SMSMessageUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: SMSMessageCreateOrConnectWithoutRecipientsInput
    upsert?: SMSMessageUpsertWithoutRecipientsInput
    connect?: SMSMessageWhereUniqueInput
    update?: XOR<XOR<SMSMessageUpdateToOneWithWhereWithoutRecipientsInput, SMSMessageUpdateWithoutRecipientsInput>, SMSMessageUncheckedUpdateWithoutRecipientsInput>
  }

  export type TechnicianUpdateOneWithoutSMSRecipientNestedInput = {
    create?: XOR<TechnicianCreateWithoutSMSRecipientInput, TechnicianUncheckedCreateWithoutSMSRecipientInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutSMSRecipientInput
    upsert?: TechnicianUpsertWithoutSMSRecipientInput
    disconnect?: TechnicianWhereInput | boolean
    delete?: TechnicianWhereInput | boolean
    connect?: TechnicianWhereUniqueInput
    update?: XOR<XOR<TechnicianUpdateToOneWithWhereWithoutSMSRecipientInput, TechnicianUpdateWithoutSMSRecipientInput>, TechnicianUncheckedUpdateWithoutSMSRecipientInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTechnicianTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianType | EnumTechnicianTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianType[] | ListEnumTechnicianTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianType[] | ListEnumTechnicianTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianTypeFilter<$PrismaModel> | $Enums.TechnicianType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTechnicianTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianType | EnumTechnicianTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianType[] | ListEnumTechnicianTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianType[] | ListEnumTechnicianTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianTypeWithAggregatesFilter<$PrismaModel> | $Enums.TechnicianType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTechnicianTypeFilter<$PrismaModel>
    _max?: NestedEnumTechnicianTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRecipientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipientStatus | EnumRecipientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipientStatusFilter<$PrismaModel> | $Enums.RecipientStatus
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumRecipientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipientStatus | EnumRecipientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipientStatus[] | ListEnumRecipientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipientStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecipientStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecipientStatusFilter<$PrismaModel>
    _max?: NestedEnumRecipientStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SMSRecipientCreateWithoutTechnicianInput = {
    id?: string
    phone: string
    status?: $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    message: SMSMessageCreateNestedOneWithoutRecipientsInput
  }

  export type SMSRecipientUncheckedCreateWithoutTechnicianInput = {
    id?: string
    messageId: string
    phone: string
    status?: $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SMSRecipientCreateOrConnectWithoutTechnicianInput = {
    where: SMSRecipientWhereUniqueInput
    create: XOR<SMSRecipientCreateWithoutTechnicianInput, SMSRecipientUncheckedCreateWithoutTechnicianInput>
  }

  export type SMSRecipientCreateManyTechnicianInputEnvelope = {
    data: SMSRecipientCreateManyTechnicianInput | SMSRecipientCreateManyTechnicianInput[]
    skipDuplicates?: boolean
  }

  export type SMSRecipientUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: SMSRecipientWhereUniqueInput
    update: XOR<SMSRecipientUpdateWithoutTechnicianInput, SMSRecipientUncheckedUpdateWithoutTechnicianInput>
    create: XOR<SMSRecipientCreateWithoutTechnicianInput, SMSRecipientUncheckedCreateWithoutTechnicianInput>
  }

  export type SMSRecipientUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: SMSRecipientWhereUniqueInput
    data: XOR<SMSRecipientUpdateWithoutTechnicianInput, SMSRecipientUncheckedUpdateWithoutTechnicianInput>
  }

  export type SMSRecipientUpdateManyWithWhereWithoutTechnicianInput = {
    where: SMSRecipientScalarWhereInput
    data: XOR<SMSRecipientUpdateManyMutationInput, SMSRecipientUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type SMSRecipientScalarWhereInput = {
    AND?: SMSRecipientScalarWhereInput | SMSRecipientScalarWhereInput[]
    OR?: SMSRecipientScalarWhereInput[]
    NOT?: SMSRecipientScalarWhereInput | SMSRecipientScalarWhereInput[]
    id?: UuidFilter<"SMSRecipient"> | string
    messageId?: UuidFilter<"SMSRecipient"> | string
    technicianId?: UuidNullableFilter<"SMSRecipient"> | string | null
    phone?: StringFilter<"SMSRecipient"> | string
    status?: EnumRecipientStatusFilter<"SMSRecipient"> | $Enums.RecipientStatus
    response?: JsonNullableFilter<"SMSRecipient">
    createdAt?: DateTimeFilter<"SMSRecipient"> | Date | string
  }

  export type SMSRecipientCreateWithoutMessageInput = {
    id?: string
    phone: string
    status?: $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    technician?: TechnicianCreateNestedOneWithoutSMSRecipientInput
  }

  export type SMSRecipientUncheckedCreateWithoutMessageInput = {
    id?: string
    technicianId?: string | null
    phone: string
    status?: $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SMSRecipientCreateOrConnectWithoutMessageInput = {
    where: SMSRecipientWhereUniqueInput
    create: XOR<SMSRecipientCreateWithoutMessageInput, SMSRecipientUncheckedCreateWithoutMessageInput>
  }

  export type SMSRecipientCreateManyMessageInputEnvelope = {
    data: SMSRecipientCreateManyMessageInput | SMSRecipientCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type SMSRecipientUpsertWithWhereUniqueWithoutMessageInput = {
    where: SMSRecipientWhereUniqueInput
    update: XOR<SMSRecipientUpdateWithoutMessageInput, SMSRecipientUncheckedUpdateWithoutMessageInput>
    create: XOR<SMSRecipientCreateWithoutMessageInput, SMSRecipientUncheckedCreateWithoutMessageInput>
  }

  export type SMSRecipientUpdateWithWhereUniqueWithoutMessageInput = {
    where: SMSRecipientWhereUniqueInput
    data: XOR<SMSRecipientUpdateWithoutMessageInput, SMSRecipientUncheckedUpdateWithoutMessageInput>
  }

  export type SMSRecipientUpdateManyWithWhereWithoutMessageInput = {
    where: SMSRecipientScalarWhereInput
    data: XOR<SMSRecipientUpdateManyMutationInput, SMSRecipientUncheckedUpdateManyWithoutMessageInput>
  }

  export type SMSMessageCreateWithoutRecipientsInput = {
    id?: string
    body: string
    from?: string | null
    createdAt?: Date | string
  }

  export type SMSMessageUncheckedCreateWithoutRecipientsInput = {
    id?: string
    body: string
    from?: string | null
    createdAt?: Date | string
  }

  export type SMSMessageCreateOrConnectWithoutRecipientsInput = {
    where: SMSMessageWhereUniqueInput
    create: XOR<SMSMessageCreateWithoutRecipientsInput, SMSMessageUncheckedCreateWithoutRecipientsInput>
  }

  export type TechnicianCreateWithoutSMSRecipientInput = {
    id?: string
    name: string
    phone: string
    verified?: boolean
    type: $Enums.TechnicianType
    createdAt?: Date | string
  }

  export type TechnicianUncheckedCreateWithoutSMSRecipientInput = {
    id?: string
    name: string
    phone: string
    verified?: boolean
    type: $Enums.TechnicianType
    createdAt?: Date | string
  }

  export type TechnicianCreateOrConnectWithoutSMSRecipientInput = {
    where: TechnicianWhereUniqueInput
    create: XOR<TechnicianCreateWithoutSMSRecipientInput, TechnicianUncheckedCreateWithoutSMSRecipientInput>
  }

  export type SMSMessageUpsertWithoutRecipientsInput = {
    update: XOR<SMSMessageUpdateWithoutRecipientsInput, SMSMessageUncheckedUpdateWithoutRecipientsInput>
    create: XOR<SMSMessageCreateWithoutRecipientsInput, SMSMessageUncheckedCreateWithoutRecipientsInput>
    where?: SMSMessageWhereInput
  }

  export type SMSMessageUpdateToOneWithWhereWithoutRecipientsInput = {
    where?: SMSMessageWhereInput
    data: XOR<SMSMessageUpdateWithoutRecipientsInput, SMSMessageUncheckedUpdateWithoutRecipientsInput>
  }

  export type SMSMessageUpdateWithoutRecipientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSMessageUncheckedUpdateWithoutRecipientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    from?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnicianUpsertWithoutSMSRecipientInput = {
    update: XOR<TechnicianUpdateWithoutSMSRecipientInput, TechnicianUncheckedUpdateWithoutSMSRecipientInput>
    create: XOR<TechnicianCreateWithoutSMSRecipientInput, TechnicianUncheckedCreateWithoutSMSRecipientInput>
    where?: TechnicianWhereInput
  }

  export type TechnicianUpdateToOneWithWhereWithoutSMSRecipientInput = {
    where?: TechnicianWhereInput
    data: XOR<TechnicianUpdateWithoutSMSRecipientInput, TechnicianUncheckedUpdateWithoutSMSRecipientInput>
  }

  export type TechnicianUpdateWithoutSMSRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTechnicianTypeFieldUpdateOperationsInput | $Enums.TechnicianType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnicianUncheckedUpdateWithoutSMSRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumTechnicianTypeFieldUpdateOperationsInput | $Enums.TechnicianType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSRecipientCreateManyTechnicianInput = {
    id?: string
    messageId: string
    phone: string
    status?: $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SMSRecipientUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: SMSMessageUpdateOneRequiredWithoutRecipientsNestedInput
  }

  export type SMSRecipientUncheckedUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSRecipientUncheckedUpdateManyWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSRecipientCreateManyMessageInput = {
    id?: string
    technicianId?: string | null
    phone: string
    status?: $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SMSRecipientUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: TechnicianUpdateOneWithoutSMSRecipientNestedInput
  }

  export type SMSRecipientUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSRecipientUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumRecipientStatusFieldUpdateOperationsInput | $Enums.RecipientStatus
    response?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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