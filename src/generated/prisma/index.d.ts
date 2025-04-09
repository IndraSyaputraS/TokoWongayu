
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
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Benefit
 * 
 */
export type Benefit = $Result.DefaultSelection<Prisma.$BenefitPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model CalculationData
 * 
 */
export type CalculationData = $Result.DefaultSelection<Prisma.$CalculationDataPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model BundleCategory
 * 
 */
export type BundleCategory = $Result.DefaultSelection<Prisma.$BundleCategoryPayload>
/**
 * Model Ratings
 * 
 */
export type Ratings = $Result.DefaultSelection<Prisma.$RatingsPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model ItemRecomendation
 * 
 */
export type ItemRecomendation = $Result.DefaultSelection<Prisma.$ItemRecomendationPayload>
/**
 * Model BundlingItem
 * 
 */
export type BundlingItem = $Result.DefaultSelection<Prisma.$BundlingItemPayload>
/**
 * Model BundlingPackage
 * 
 */
export type BundlingPackage = $Result.DefaultSelection<Prisma.$BundlingPackagePayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
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
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
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
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.benefit`: Exposes CRUD operations for the **Benefit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Benefits
    * const benefits = await prisma.benefit.findMany()
    * ```
    */
  get benefit(): Prisma.BenefitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calculationData`: Exposes CRUD operations for the **CalculationData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CalculationData
    * const calculationData = await prisma.calculationData.findMany()
    * ```
    */
  get calculationData(): Prisma.CalculationDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bundleCategory`: Exposes CRUD operations for the **BundleCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BundleCategories
    * const bundleCategories = await prisma.bundleCategory.findMany()
    * ```
    */
  get bundleCategory(): Prisma.BundleCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ratings`: Exposes CRUD operations for the **Ratings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.ratings.findMany()
    * ```
    */
  get ratings(): Prisma.RatingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemRecomendation`: Exposes CRUD operations for the **ItemRecomendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemRecomendations
    * const itemRecomendations = await prisma.itemRecomendation.findMany()
    * ```
    */
  get itemRecomendation(): Prisma.ItemRecomendationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bundlingItem`: Exposes CRUD operations for the **BundlingItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BundlingItems
    * const bundlingItems = await prisma.bundlingItem.findMany()
    * ```
    */
  get bundlingItem(): Prisma.BundlingItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bundlingPackage`: Exposes CRUD operations for the **BundlingPackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BundlingPackages
    * const bundlingPackages = await prisma.bundlingPackage.findMany()
    * ```
    */
  get bundlingPackage(): Prisma.BundlingPackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Product: 'Product',
    Benefit: 'Benefit',
    Category: 'Category',
    Brand: 'Brand',
    CalculationData: 'CalculationData',
    Users: 'Users',
    BundleCategory: 'BundleCategory',
    Ratings: 'Ratings',
    Image: 'Image',
    ItemRecomendation: 'ItemRecomendation',
    BundlingItem: 'BundlingItem',
    BundlingPackage: 'BundlingPackage',
    Transaction: 'Transaction'
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
      modelProps: "product" | "benefit" | "category" | "brand" | "calculationData" | "users" | "bundleCategory" | "ratings" | "image" | "itemRecomendation" | "bundlingItem" | "bundlingPackage" | "transaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Benefit: {
        payload: Prisma.$BenefitPayload<ExtArgs>
        fields: Prisma.BenefitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BenefitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BenefitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          findFirst: {
            args: Prisma.BenefitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BenefitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          findMany: {
            args: Prisma.BenefitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          create: {
            args: Prisma.BenefitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          createMany: {
            args: Prisma.BenefitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BenefitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          delete: {
            args: Prisma.BenefitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          update: {
            args: Prisma.BenefitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          deleteMany: {
            args: Prisma.BenefitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BenefitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BenefitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          upsert: {
            args: Prisma.BenefitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          aggregate: {
            args: Prisma.BenefitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBenefit>
          }
          groupBy: {
            args: Prisma.BenefitGroupByArgs<ExtArgs>
            result: $Utils.Optional<BenefitGroupByOutputType>[]
          }
          count: {
            args: Prisma.BenefitCountArgs<ExtArgs>
            result: $Utils.Optional<BenefitCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      CalculationData: {
        payload: Prisma.$CalculationDataPayload<ExtArgs>
        fields: Prisma.CalculationDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalculationDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalculationDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationDataPayload>
          }
          findFirst: {
            args: Prisma.CalculationDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalculationDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationDataPayload>
          }
          findMany: {
            args: Prisma.CalculationDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationDataPayload>[]
          }
          create: {
            args: Prisma.CalculationDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationDataPayload>
          }
          createMany: {
            args: Prisma.CalculationDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalculationDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationDataPayload>[]
          }
          delete: {
            args: Prisma.CalculationDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationDataPayload>
          }
          update: {
            args: Prisma.CalculationDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationDataPayload>
          }
          deleteMany: {
            args: Prisma.CalculationDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalculationDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalculationDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationDataPayload>[]
          }
          upsert: {
            args: Prisma.CalculationDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationDataPayload>
          }
          aggregate: {
            args: Prisma.CalculationDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalculationData>
          }
          groupBy: {
            args: Prisma.CalculationDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalculationDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalculationDataCountArgs<ExtArgs>
            result: $Utils.Optional<CalculationDataCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      BundleCategory: {
        payload: Prisma.$BundleCategoryPayload<ExtArgs>
        fields: Prisma.BundleCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BundleCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundleCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BundleCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundleCategoryPayload>
          }
          findFirst: {
            args: Prisma.BundleCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundleCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BundleCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundleCategoryPayload>
          }
          findMany: {
            args: Prisma.BundleCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundleCategoryPayload>[]
          }
          create: {
            args: Prisma.BundleCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundleCategoryPayload>
          }
          createMany: {
            args: Prisma.BundleCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BundleCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundleCategoryPayload>[]
          }
          delete: {
            args: Prisma.BundleCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundleCategoryPayload>
          }
          update: {
            args: Prisma.BundleCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundleCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BundleCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BundleCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BundleCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundleCategoryPayload>[]
          }
          upsert: {
            args: Prisma.BundleCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundleCategoryPayload>
          }
          aggregate: {
            args: Prisma.BundleCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBundleCategory>
          }
          groupBy: {
            args: Prisma.BundleCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BundleCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BundleCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<BundleCategoryCountAggregateOutputType> | number
          }
        }
      }
      Ratings: {
        payload: Prisma.$RatingsPayload<ExtArgs>
        fields: Prisma.RatingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>
          }
          findFirst: {
            args: Prisma.RatingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>
          }
          findMany: {
            args: Prisma.RatingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>[]
          }
          create: {
            args: Prisma.RatingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>
          }
          createMany: {
            args: Prisma.RatingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>[]
          }
          delete: {
            args: Prisma.RatingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>
          }
          update: {
            args: Prisma.RatingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>
          }
          deleteMany: {
            args: Prisma.RatingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>[]
          }
          upsert: {
            args: Prisma.RatingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>
          }
          aggregate: {
            args: Prisma.RatingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRatings>
          }
          groupBy: {
            args: Prisma.RatingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingsCountArgs<ExtArgs>
            result: $Utils.Optional<RatingsCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      ItemRecomendation: {
        payload: Prisma.$ItemRecomendationPayload<ExtArgs>
        fields: Prisma.ItemRecomendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemRecomendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemRecomendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemRecomendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemRecomendationPayload>
          }
          findFirst: {
            args: Prisma.ItemRecomendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemRecomendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemRecomendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemRecomendationPayload>
          }
          findMany: {
            args: Prisma.ItemRecomendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemRecomendationPayload>[]
          }
          create: {
            args: Prisma.ItemRecomendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemRecomendationPayload>
          }
          createMany: {
            args: Prisma.ItemRecomendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemRecomendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemRecomendationPayload>[]
          }
          delete: {
            args: Prisma.ItemRecomendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemRecomendationPayload>
          }
          update: {
            args: Prisma.ItemRecomendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemRecomendationPayload>
          }
          deleteMany: {
            args: Prisma.ItemRecomendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemRecomendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemRecomendationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemRecomendationPayload>[]
          }
          upsert: {
            args: Prisma.ItemRecomendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemRecomendationPayload>
          }
          aggregate: {
            args: Prisma.ItemRecomendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemRecomendation>
          }
          groupBy: {
            args: Prisma.ItemRecomendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemRecomendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemRecomendationCountArgs<ExtArgs>
            result: $Utils.Optional<ItemRecomendationCountAggregateOutputType> | number
          }
        }
      }
      BundlingItem: {
        payload: Prisma.$BundlingItemPayload<ExtArgs>
        fields: Prisma.BundlingItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BundlingItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BundlingItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingItemPayload>
          }
          findFirst: {
            args: Prisma.BundlingItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BundlingItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingItemPayload>
          }
          findMany: {
            args: Prisma.BundlingItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingItemPayload>[]
          }
          create: {
            args: Prisma.BundlingItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingItemPayload>
          }
          createMany: {
            args: Prisma.BundlingItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BundlingItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingItemPayload>[]
          }
          delete: {
            args: Prisma.BundlingItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingItemPayload>
          }
          update: {
            args: Prisma.BundlingItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingItemPayload>
          }
          deleteMany: {
            args: Prisma.BundlingItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BundlingItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BundlingItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingItemPayload>[]
          }
          upsert: {
            args: Prisma.BundlingItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingItemPayload>
          }
          aggregate: {
            args: Prisma.BundlingItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBundlingItem>
          }
          groupBy: {
            args: Prisma.BundlingItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BundlingItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.BundlingItemCountArgs<ExtArgs>
            result: $Utils.Optional<BundlingItemCountAggregateOutputType> | number
          }
        }
      }
      BundlingPackage: {
        payload: Prisma.$BundlingPackagePayload<ExtArgs>
        fields: Prisma.BundlingPackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BundlingPackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingPackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BundlingPackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingPackagePayload>
          }
          findFirst: {
            args: Prisma.BundlingPackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingPackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BundlingPackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingPackagePayload>
          }
          findMany: {
            args: Prisma.BundlingPackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingPackagePayload>[]
          }
          create: {
            args: Prisma.BundlingPackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingPackagePayload>
          }
          createMany: {
            args: Prisma.BundlingPackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BundlingPackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingPackagePayload>[]
          }
          delete: {
            args: Prisma.BundlingPackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingPackagePayload>
          }
          update: {
            args: Prisma.BundlingPackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingPackagePayload>
          }
          deleteMany: {
            args: Prisma.BundlingPackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BundlingPackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BundlingPackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingPackagePayload>[]
          }
          upsert: {
            args: Prisma.BundlingPackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlingPackagePayload>
          }
          aggregate: {
            args: Prisma.BundlingPackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBundlingPackage>
          }
          groupBy: {
            args: Prisma.BundlingPackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<BundlingPackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.BundlingPackageCountArgs<ExtArgs>
            result: $Utils.Optional<BundlingPackageCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
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
    product?: ProductOmit
    benefit?: BenefitOmit
    category?: CategoryOmit
    brand?: BrandOmit
    calculationData?: CalculationDataOmit
    users?: UsersOmit
    bundleCategory?: BundleCategoryOmit
    ratings?: RatingsOmit
    image?: ImageOmit
    itemRecomendation?: ItemRecomendationOmit
    bundlingItem?: BundlingItemOmit
    bundlingPackage?: BundlingPackageOmit
    transaction?: TransactionOmit
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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    CalculationData: number
    Ratings: number
    ItemRecomendation: number
    BundlingItem: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CalculationData?: boolean | ProductCountOutputTypeCountCalculationDataArgs
    Ratings?: boolean | ProductCountOutputTypeCountRatingsArgs
    ItemRecomendation?: boolean | ProductCountOutputTypeCountItemRecomendationArgs
    BundlingItem?: boolean | ProductCountOutputTypeCountBundlingItemArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCalculationDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalculationDataWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingsWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountItemRecomendationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemRecomendationWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountBundlingItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BundlingItemWhereInput
  }


  /**
   * Count Type BenefitCountOutputType
   */

  export type BenefitCountOutputType = {
    Product: number
    BundleCategory: number
  }

  export type BenefitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | BenefitCountOutputTypeCountProductArgs
    BundleCategory?: boolean | BenefitCountOutputTypeCountBundleCategoryArgs
  }

  // Custom InputTypes
  /**
   * BenefitCountOutputType without action
   */
  export type BenefitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitCountOutputType
     */
    select?: BenefitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BenefitCountOutputType without action
   */
  export type BenefitCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * BenefitCountOutputType without action
   */
  export type BenefitCountOutputTypeCountBundleCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BundleCategoryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Product: number
    BundleCategory: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | CategoryCountOutputTypeCountProductArgs
    BundleCategory?: boolean | CategoryCountOutputTypeCountBundleCategoryArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBundleCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BundleCategoryWhereInput
  }


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    Product: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | BrandCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Ratings: number
    Transaction: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ratings?: boolean | UsersCountOutputTypeCountRatingsArgs
    Transaction?: boolean | UsersCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type BundlingPackageCountOutputType
   */

  export type BundlingPackageCountOutputType = {
    BundlingItem: number
    Transaction: number
  }

  export type BundlingPackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BundlingItem?: boolean | BundlingPackageCountOutputTypeCountBundlingItemArgs
    Transaction?: boolean | BundlingPackageCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * BundlingPackageCountOutputType without action
   */
  export type BundlingPackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingPackageCountOutputType
     */
    select?: BundlingPackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BundlingPackageCountOutputType without action
   */
  export type BundlingPackageCountOutputTypeCountBundlingItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BundlingItemWhereInput
  }

  /**
   * BundlingPackageCountOutputType without action
   */
  export type BundlingPackageCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    brandId: number | null
    price: number | null
    stock: number | null
    categoryId: number | null
    benefitId: number | null
    imageId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    brandId: number | null
    price: number | null
    stock: number | null
    categoryId: number | null
    benefitId: number | null
    imageId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    brandId: number | null
    itemCode: string | null
    price: number | null
    stock: number | null
    categoryId: number | null
    benefitId: number | null
    imageId: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    brandId: number | null
    itemCode: string | null
    price: number | null
    stock: number | null
    categoryId: number | null
    benefitId: number | null
    imageId: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    brandId: number
    itemCode: number
    price: number
    stock: number
    categoryId: number
    benefitId: number
    imageId: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    brandId?: true
    price?: true
    stock?: true
    categoryId?: true
    benefitId?: true
    imageId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    brandId?: true
    price?: true
    stock?: true
    categoryId?: true
    benefitId?: true
    imageId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
    itemCode?: true
    price?: true
    stock?: true
    categoryId?: true
    benefitId?: true
    imageId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
    itemCode?: true
    price?: true
    stock?: true
    categoryId?: true
    benefitId?: true
    imageId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
    itemCode?: true
    price?: true
    stock?: true
    categoryId?: true
    benefitId?: true
    imageId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    brandId: number | null
    itemCode: string
    price: number | null
    stock: number | null
    categoryId: number | null
    benefitId: number | null
    imageId: number | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandId?: boolean
    itemCode?: boolean
    price?: boolean
    stock?: boolean
    categoryId?: boolean
    benefitId?: boolean
    imageId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Brand?: boolean | Product$BrandArgs<ExtArgs>
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    Benefit?: boolean | Product$BenefitArgs<ExtArgs>
    CalculationData?: boolean | Product$CalculationDataArgs<ExtArgs>
    Ratings?: boolean | Product$RatingsArgs<ExtArgs>
    ItemRecomendation?: boolean | Product$ItemRecomendationArgs<ExtArgs>
    BundlingItem?: boolean | Product$BundlingItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandId?: boolean
    itemCode?: boolean
    price?: boolean
    stock?: boolean
    categoryId?: boolean
    benefitId?: boolean
    imageId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Brand?: boolean | Product$BrandArgs<ExtArgs>
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    Benefit?: boolean | Product$BenefitArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandId?: boolean
    itemCode?: boolean
    price?: boolean
    stock?: boolean
    categoryId?: boolean
    benefitId?: boolean
    imageId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Brand?: boolean | Product$BrandArgs<ExtArgs>
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    Benefit?: boolean | Product$BenefitArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    brandId?: boolean
    itemCode?: boolean
    price?: boolean
    stock?: boolean
    categoryId?: boolean
    benefitId?: boolean
    imageId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brandId" | "itemCode" | "price" | "stock" | "categoryId" | "benefitId" | "imageId" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Brand?: boolean | Product$BrandArgs<ExtArgs>
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    Benefit?: boolean | Product$BenefitArgs<ExtArgs>
    CalculationData?: boolean | Product$CalculationDataArgs<ExtArgs>
    Ratings?: boolean | Product$RatingsArgs<ExtArgs>
    ItemRecomendation?: boolean | Product$ItemRecomendationArgs<ExtArgs>
    BundlingItem?: boolean | Product$BundlingItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Brand?: boolean | Product$BrandArgs<ExtArgs>
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    Benefit?: boolean | Product$BenefitArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Brand?: boolean | Product$BrandArgs<ExtArgs>
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    Benefit?: boolean | Product$BenefitArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      Brand: Prisma.$BrandPayload<ExtArgs> | null
      Category: Prisma.$CategoryPayload<ExtArgs> | null
      Benefit: Prisma.$BenefitPayload<ExtArgs> | null
      CalculationData: Prisma.$CalculationDataPayload<ExtArgs>[]
      Ratings: Prisma.$RatingsPayload<ExtArgs>[]
      ItemRecomendation: Prisma.$ItemRecomendationPayload<ExtArgs>[]
      BundlingItem: Prisma.$BundlingItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      brandId: number | null
      itemCode: string
      price: number | null
      stock: number | null
      categoryId: number | null
      benefitId: number | null
      imageId: number | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Brand<T extends Product$BrandArgs<ExtArgs> = {}>(args?: Subset<T, Product$BrandArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Category<T extends Product$CategoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$CategoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Benefit<T extends Product$BenefitArgs<ExtArgs> = {}>(args?: Subset<T, Product$BenefitArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    CalculationData<T extends Product$CalculationDataArgs<ExtArgs> = {}>(args?: Subset<T, Product$CalculationDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Ratings<T extends Product$RatingsArgs<ExtArgs> = {}>(args?: Subset<T, Product$RatingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ItemRecomendation<T extends Product$ItemRecomendationArgs<ExtArgs> = {}>(args?: Subset<T, Product$ItemRecomendationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemRecomendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BundlingItem<T extends Product$BundlingItemArgs<ExtArgs> = {}>(args?: Subset<T, Product$BundlingItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundlingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly brandId: FieldRef<"Product", 'Int'>
    readonly itemCode: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly benefitId: FieldRef<"Product", 'Int'>
    readonly imageId: FieldRef<"Product", 'Int'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.Brand
   */
  export type Product$BrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    where?: BrandWhereInput
  }

  /**
   * Product.Category
   */
  export type Product$CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Product.Benefit
   */
  export type Product$BenefitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    where?: BenefitWhereInput
  }

  /**
   * Product.CalculationData
   */
  export type Product$CalculationDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationData
     */
    select?: CalculationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationData
     */
    omit?: CalculationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationDataInclude<ExtArgs> | null
    where?: CalculationDataWhereInput
    orderBy?: CalculationDataOrderByWithRelationInput | CalculationDataOrderByWithRelationInput[]
    cursor?: CalculationDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalculationDataScalarFieldEnum | CalculationDataScalarFieldEnum[]
  }

  /**
   * Product.Ratings
   */
  export type Product$RatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    where?: RatingsWhereInput
    orderBy?: RatingsOrderByWithRelationInput | RatingsOrderByWithRelationInput[]
    cursor?: RatingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * Product.ItemRecomendation
   */
  export type Product$ItemRecomendationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemRecomendation
     */
    select?: ItemRecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemRecomendation
     */
    omit?: ItemRecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemRecomendationInclude<ExtArgs> | null
    where?: ItemRecomendationWhereInput
    orderBy?: ItemRecomendationOrderByWithRelationInput | ItemRecomendationOrderByWithRelationInput[]
    cursor?: ItemRecomendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemRecomendationScalarFieldEnum | ItemRecomendationScalarFieldEnum[]
  }

  /**
   * Product.BundlingItem
   */
  export type Product$BundlingItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingItem
     */
    select?: BundlingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingItem
     */
    omit?: BundlingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingItemInclude<ExtArgs> | null
    where?: BundlingItemWhereInput
    orderBy?: BundlingItemOrderByWithRelationInput | BundlingItemOrderByWithRelationInput[]
    cursor?: BundlingItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BundlingItemScalarFieldEnum | BundlingItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Benefit
   */

  export type AggregateBenefit = {
    _count: BenefitCountAggregateOutputType | null
    _avg: BenefitAvgAggregateOutputType | null
    _sum: BenefitSumAggregateOutputType | null
    _min: BenefitMinAggregateOutputType | null
    _max: BenefitMaxAggregateOutputType | null
  }

  export type BenefitAvgAggregateOutputType = {
    id: number | null
  }

  export type BenefitSumAggregateOutputType = {
    id: number | null
  }

  export type BenefitMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BenefitMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BenefitCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BenefitAvgAggregateInputType = {
    id?: true
  }

  export type BenefitSumAggregateInputType = {
    id?: true
  }

  export type BenefitMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BenefitMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BenefitCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BenefitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benefit to aggregate.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Benefits
    **/
    _count?: true | BenefitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BenefitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BenefitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BenefitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BenefitMaxAggregateInputType
  }

  export type GetBenefitAggregateType<T extends BenefitAggregateArgs> = {
        [P in keyof T & keyof AggregateBenefit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBenefit[P]>
      : GetScalarType<T[P], AggregateBenefit[P]>
  }




  export type BenefitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BenefitWhereInput
    orderBy?: BenefitOrderByWithAggregationInput | BenefitOrderByWithAggregationInput[]
    by: BenefitScalarFieldEnum[] | BenefitScalarFieldEnum
    having?: BenefitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BenefitCountAggregateInputType | true
    _avg?: BenefitAvgAggregateInputType
    _sum?: BenefitSumAggregateInputType
    _min?: BenefitMinAggregateInputType
    _max?: BenefitMaxAggregateInputType
  }

  export type BenefitGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BenefitCountAggregateOutputType | null
    _avg: BenefitAvgAggregateOutputType | null
    _sum: BenefitSumAggregateOutputType | null
    _min: BenefitMinAggregateOutputType | null
    _max: BenefitMaxAggregateOutputType | null
  }

  type GetBenefitGroupByPayload<T extends BenefitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BenefitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BenefitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BenefitGroupByOutputType[P]>
            : GetScalarType<T[P], BenefitGroupByOutputType[P]>
        }
      >
    >


  export type BenefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | Benefit$ProductArgs<ExtArgs>
    BundleCategory?: boolean | Benefit$BundleCategoryArgs<ExtArgs>
    _count?: boolean | BenefitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BenefitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["benefit"]>
  export type BenefitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | Benefit$ProductArgs<ExtArgs>
    BundleCategory?: boolean | Benefit$BundleCategoryArgs<ExtArgs>
    _count?: boolean | BenefitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BenefitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BenefitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BenefitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Benefit"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
      BundleCategory: Prisma.$BundleCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["benefit"]>
    composites: {}
  }

  type BenefitGetPayload<S extends boolean | null | undefined | BenefitDefaultArgs> = $Result.GetResult<Prisma.$BenefitPayload, S>

  type BenefitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BenefitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BenefitCountAggregateInputType | true
    }

  export interface BenefitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Benefit'], meta: { name: 'Benefit' } }
    /**
     * Find zero or one Benefit that matches the filter.
     * @param {BenefitFindUniqueArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BenefitFindUniqueArgs>(args: SelectSubset<T, BenefitFindUniqueArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Benefit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BenefitFindUniqueOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BenefitFindUniqueOrThrowArgs>(args: SelectSubset<T, BenefitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benefit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindFirstArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BenefitFindFirstArgs>(args?: SelectSubset<T, BenefitFindFirstArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benefit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindFirstOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BenefitFindFirstOrThrowArgs>(args?: SelectSubset<T, BenefitFindFirstOrThrowArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Benefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Benefits
     * const benefits = await prisma.benefit.findMany()
     * 
     * // Get first 10 Benefits
     * const benefits = await prisma.benefit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const benefitWithIdOnly = await prisma.benefit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BenefitFindManyArgs>(args?: SelectSubset<T, BenefitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Benefit.
     * @param {BenefitCreateArgs} args - Arguments to create a Benefit.
     * @example
     * // Create one Benefit
     * const Benefit = await prisma.benefit.create({
     *   data: {
     *     // ... data to create a Benefit
     *   }
     * })
     * 
     */
    create<T extends BenefitCreateArgs>(args: SelectSubset<T, BenefitCreateArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Benefits.
     * @param {BenefitCreateManyArgs} args - Arguments to create many Benefits.
     * @example
     * // Create many Benefits
     * const benefit = await prisma.benefit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BenefitCreateManyArgs>(args?: SelectSubset<T, BenefitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Benefits and returns the data saved in the database.
     * @param {BenefitCreateManyAndReturnArgs} args - Arguments to create many Benefits.
     * @example
     * // Create many Benefits
     * const benefit = await prisma.benefit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Benefits and only return the `id`
     * const benefitWithIdOnly = await prisma.benefit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BenefitCreateManyAndReturnArgs>(args?: SelectSubset<T, BenefitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Benefit.
     * @param {BenefitDeleteArgs} args - Arguments to delete one Benefit.
     * @example
     * // Delete one Benefit
     * const Benefit = await prisma.benefit.delete({
     *   where: {
     *     // ... filter to delete one Benefit
     *   }
     * })
     * 
     */
    delete<T extends BenefitDeleteArgs>(args: SelectSubset<T, BenefitDeleteArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Benefit.
     * @param {BenefitUpdateArgs} args - Arguments to update one Benefit.
     * @example
     * // Update one Benefit
     * const benefit = await prisma.benefit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BenefitUpdateArgs>(args: SelectSubset<T, BenefitUpdateArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Benefits.
     * @param {BenefitDeleteManyArgs} args - Arguments to filter Benefits to delete.
     * @example
     * // Delete a few Benefits
     * const { count } = await prisma.benefit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BenefitDeleteManyArgs>(args?: SelectSubset<T, BenefitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Benefits
     * const benefit = await prisma.benefit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BenefitUpdateManyArgs>(args: SelectSubset<T, BenefitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benefits and returns the data updated in the database.
     * @param {BenefitUpdateManyAndReturnArgs} args - Arguments to update many Benefits.
     * @example
     * // Update many Benefits
     * const benefit = await prisma.benefit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Benefits and only return the `id`
     * const benefitWithIdOnly = await prisma.benefit.updateManyAndReturn({
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
    updateManyAndReturn<T extends BenefitUpdateManyAndReturnArgs>(args: SelectSubset<T, BenefitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Benefit.
     * @param {BenefitUpsertArgs} args - Arguments to update or create a Benefit.
     * @example
     * // Update or create a Benefit
     * const benefit = await prisma.benefit.upsert({
     *   create: {
     *     // ... data to create a Benefit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Benefit we want to update
     *   }
     * })
     */
    upsert<T extends BenefitUpsertArgs>(args: SelectSubset<T, BenefitUpsertArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitCountArgs} args - Arguments to filter Benefits to count.
     * @example
     * // Count the number of Benefits
     * const count = await prisma.benefit.count({
     *   where: {
     *     // ... the filter for the Benefits we want to count
     *   }
     * })
    **/
    count<T extends BenefitCountArgs>(
      args?: Subset<T, BenefitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BenefitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BenefitAggregateArgs>(args: Subset<T, BenefitAggregateArgs>): Prisma.PrismaPromise<GetBenefitAggregateType<T>>

    /**
     * Group by Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitGroupByArgs} args - Group by arguments.
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
      T extends BenefitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BenefitGroupByArgs['orderBy'] }
        : { orderBy?: BenefitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BenefitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBenefitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Benefit model
   */
  readonly fields: BenefitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Benefit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BenefitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends Benefit$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Benefit$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BundleCategory<T extends Benefit$BundleCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Benefit$BundleCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundleCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Benefit model
   */
  interface BenefitFieldRefs {
    readonly id: FieldRef<"Benefit", 'Int'>
    readonly name: FieldRef<"Benefit", 'String'>
    readonly createdAt: FieldRef<"Benefit", 'DateTime'>
    readonly updatedAt: FieldRef<"Benefit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Benefit findUnique
   */
  export type BenefitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit findUniqueOrThrow
   */
  export type BenefitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit findFirst
   */
  export type BenefitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit findFirstOrThrow
   */
  export type BenefitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit findMany
   */
  export type BenefitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefits to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit create
   */
  export type BenefitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * The data needed to create a Benefit.
     */
    data: XOR<BenefitCreateInput, BenefitUncheckedCreateInput>
  }

  /**
   * Benefit createMany
   */
  export type BenefitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Benefits.
     */
    data: BenefitCreateManyInput | BenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Benefit createManyAndReturn
   */
  export type BenefitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * The data used to create many Benefits.
     */
    data: BenefitCreateManyInput | BenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Benefit update
   */
  export type BenefitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * The data needed to update a Benefit.
     */
    data: XOR<BenefitUpdateInput, BenefitUncheckedUpdateInput>
    /**
     * Choose, which Benefit to update.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit updateMany
   */
  export type BenefitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Benefits.
     */
    data: XOR<BenefitUpdateManyMutationInput, BenefitUncheckedUpdateManyInput>
    /**
     * Filter which Benefits to update
     */
    where?: BenefitWhereInput
    /**
     * Limit how many Benefits to update.
     */
    limit?: number
  }

  /**
   * Benefit updateManyAndReturn
   */
  export type BenefitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * The data used to update Benefits.
     */
    data: XOR<BenefitUpdateManyMutationInput, BenefitUncheckedUpdateManyInput>
    /**
     * Filter which Benefits to update
     */
    where?: BenefitWhereInput
    /**
     * Limit how many Benefits to update.
     */
    limit?: number
  }

  /**
   * Benefit upsert
   */
  export type BenefitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * The filter to search for the Benefit to update in case it exists.
     */
    where: BenefitWhereUniqueInput
    /**
     * In case the Benefit found by the `where` argument doesn't exist, create a new Benefit with this data.
     */
    create: XOR<BenefitCreateInput, BenefitUncheckedCreateInput>
    /**
     * In case the Benefit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BenefitUpdateInput, BenefitUncheckedUpdateInput>
  }

  /**
   * Benefit delete
   */
  export type BenefitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter which Benefit to delete.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit deleteMany
   */
  export type BenefitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benefits to delete
     */
    where?: BenefitWhereInput
    /**
     * Limit how many Benefits to delete.
     */
    limit?: number
  }

  /**
   * Benefit.Product
   */
  export type Benefit$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Benefit.BundleCategory
   */
  export type Benefit$BundleCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCategory
     */
    select?: BundleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundleCategory
     */
    omit?: BundleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleCategoryInclude<ExtArgs> | null
    where?: BundleCategoryWhereInput
    orderBy?: BundleCategoryOrderByWithRelationInput | BundleCategoryOrderByWithRelationInput[]
    cursor?: BundleCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BundleCategoryScalarFieldEnum | BundleCategoryScalarFieldEnum[]
  }

  /**
   * Benefit without action
   */
  export type BenefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | Category$ProductArgs<ExtArgs>
    BundleCategory?: boolean | Category$BundleCategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | Category$ProductArgs<ExtArgs>
    BundleCategory?: boolean | Category$BundleCategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
      BundleCategory: Prisma.$BundleCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends Category$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Category$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BundleCategory<T extends Category$BundleCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Category$BundleCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundleCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.Product
   */
  export type Category$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category.BundleCategory
   */
  export type Category$BundleCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCategory
     */
    select?: BundleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundleCategory
     */
    omit?: BundleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleCategoryInclude<ExtArgs> | null
    where?: BundleCategoryWhereInput
    orderBy?: BundleCategoryOrderByWithRelationInput | BundleCategoryOrderByWithRelationInput[]
    cursor?: BundleCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BundleCategoryScalarFieldEnum | BundleCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandAvgAggregateOutputType = {
    id: number | null
  }

  export type BrandSumAggregateOutputType = {
    id: number | null
  }

  export type BrandMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrandAvgAggregateInputType = {
    id?: true
  }

  export type BrandSumAggregateInputType = {
    id?: true
  }

  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _avg?: BrandAvgAggregateInputType
    _sum?: BrandSumAggregateInputType
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | Brand$ProductArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | Brand$ProductArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.updateManyAndReturn({
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
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
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
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends Brand$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Brand$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'Int'>
    readonly name: FieldRef<"Brand", 'String'>
    readonly createdAt: FieldRef<"Brand", 'DateTime'>
    readonly updatedAt: FieldRef<"Brand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand updateManyAndReturn
   */
  export type BrandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.Product
   */
  export type Brand$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model CalculationData
   */

  export type AggregateCalculationData = {
    _count: CalculationDataCountAggregateOutputType | null
    _avg: CalculationDataAvgAggregateOutputType | null
    _sum: CalculationDataSumAggregateOutputType | null
    _min: CalculationDataMinAggregateOutputType | null
    _max: CalculationDataMaxAggregateOutputType | null
  }

  export type CalculationDataAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    value: number | null
  }

  export type CalculationDataSumAggregateOutputType = {
    id: number | null
    productId: number | null
    value: number | null
  }

  export type CalculationDataMinAggregateOutputType = {
    id: number | null
    transaction: string | null
    productId: number | null
    value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalculationDataMaxAggregateOutputType = {
    id: number | null
    transaction: string | null
    productId: number | null
    value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalculationDataCountAggregateOutputType = {
    id: number
    transaction: number
    productId: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CalculationDataAvgAggregateInputType = {
    id?: true
    productId?: true
    value?: true
  }

  export type CalculationDataSumAggregateInputType = {
    id?: true
    productId?: true
    value?: true
  }

  export type CalculationDataMinAggregateInputType = {
    id?: true
    transaction?: true
    productId?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalculationDataMaxAggregateInputType = {
    id?: true
    transaction?: true
    productId?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalculationDataCountAggregateInputType = {
    id?: true
    transaction?: true
    productId?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CalculationDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalculationData to aggregate.
     */
    where?: CalculationDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalculationData to fetch.
     */
    orderBy?: CalculationDataOrderByWithRelationInput | CalculationDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalculationDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalculationData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalculationData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CalculationData
    **/
    _count?: true | CalculationDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalculationDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalculationDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalculationDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalculationDataMaxAggregateInputType
  }

  export type GetCalculationDataAggregateType<T extends CalculationDataAggregateArgs> = {
        [P in keyof T & keyof AggregateCalculationData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalculationData[P]>
      : GetScalarType<T[P], AggregateCalculationData[P]>
  }




  export type CalculationDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalculationDataWhereInput
    orderBy?: CalculationDataOrderByWithAggregationInput | CalculationDataOrderByWithAggregationInput[]
    by: CalculationDataScalarFieldEnum[] | CalculationDataScalarFieldEnum
    having?: CalculationDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalculationDataCountAggregateInputType | true
    _avg?: CalculationDataAvgAggregateInputType
    _sum?: CalculationDataSumAggregateInputType
    _min?: CalculationDataMinAggregateInputType
    _max?: CalculationDataMaxAggregateInputType
  }

  export type CalculationDataGroupByOutputType = {
    id: number
    transaction: string
    productId: number
    value: number
    createdAt: Date
    updatedAt: Date
    _count: CalculationDataCountAggregateOutputType | null
    _avg: CalculationDataAvgAggregateOutputType | null
    _sum: CalculationDataSumAggregateOutputType | null
    _min: CalculationDataMinAggregateOutputType | null
    _max: CalculationDataMaxAggregateOutputType | null
  }

  type GetCalculationDataGroupByPayload<T extends CalculationDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalculationDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalculationDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalculationDataGroupByOutputType[P]>
            : GetScalarType<T[P], CalculationDataGroupByOutputType[P]>
        }
      >
    >


  export type CalculationDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction?: boolean
    productId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calculationData"]>

  export type CalculationDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction?: boolean
    productId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calculationData"]>

  export type CalculationDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction?: boolean
    productId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calculationData"]>

  export type CalculationDataSelectScalar = {
    id?: boolean
    transaction?: boolean
    productId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CalculationDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transaction" | "productId" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["calculationData"]>
  export type CalculationDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type CalculationDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type CalculationDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $CalculationDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CalculationData"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transaction: string
      productId: number
      value: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["calculationData"]>
    composites: {}
  }

  type CalculationDataGetPayload<S extends boolean | null | undefined | CalculationDataDefaultArgs> = $Result.GetResult<Prisma.$CalculationDataPayload, S>

  type CalculationDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalculationDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalculationDataCountAggregateInputType | true
    }

  export interface CalculationDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CalculationData'], meta: { name: 'CalculationData' } }
    /**
     * Find zero or one CalculationData that matches the filter.
     * @param {CalculationDataFindUniqueArgs} args - Arguments to find a CalculationData
     * @example
     * // Get one CalculationData
     * const calculationData = await prisma.calculationData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalculationDataFindUniqueArgs>(args: SelectSubset<T, CalculationDataFindUniqueArgs<ExtArgs>>): Prisma__CalculationDataClient<$Result.GetResult<Prisma.$CalculationDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CalculationData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalculationDataFindUniqueOrThrowArgs} args - Arguments to find a CalculationData
     * @example
     * // Get one CalculationData
     * const calculationData = await prisma.calculationData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalculationDataFindUniqueOrThrowArgs>(args: SelectSubset<T, CalculationDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalculationDataClient<$Result.GetResult<Prisma.$CalculationDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalculationData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationDataFindFirstArgs} args - Arguments to find a CalculationData
     * @example
     * // Get one CalculationData
     * const calculationData = await prisma.calculationData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalculationDataFindFirstArgs>(args?: SelectSubset<T, CalculationDataFindFirstArgs<ExtArgs>>): Prisma__CalculationDataClient<$Result.GetResult<Prisma.$CalculationDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalculationData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationDataFindFirstOrThrowArgs} args - Arguments to find a CalculationData
     * @example
     * // Get one CalculationData
     * const calculationData = await prisma.calculationData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalculationDataFindFirstOrThrowArgs>(args?: SelectSubset<T, CalculationDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalculationDataClient<$Result.GetResult<Prisma.$CalculationDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CalculationData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CalculationData
     * const calculationData = await prisma.calculationData.findMany()
     * 
     * // Get first 10 CalculationData
     * const calculationData = await prisma.calculationData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calculationDataWithIdOnly = await prisma.calculationData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalculationDataFindManyArgs>(args?: SelectSubset<T, CalculationDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CalculationData.
     * @param {CalculationDataCreateArgs} args - Arguments to create a CalculationData.
     * @example
     * // Create one CalculationData
     * const CalculationData = await prisma.calculationData.create({
     *   data: {
     *     // ... data to create a CalculationData
     *   }
     * })
     * 
     */
    create<T extends CalculationDataCreateArgs>(args: SelectSubset<T, CalculationDataCreateArgs<ExtArgs>>): Prisma__CalculationDataClient<$Result.GetResult<Prisma.$CalculationDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CalculationData.
     * @param {CalculationDataCreateManyArgs} args - Arguments to create many CalculationData.
     * @example
     * // Create many CalculationData
     * const calculationData = await prisma.calculationData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalculationDataCreateManyArgs>(args?: SelectSubset<T, CalculationDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CalculationData and returns the data saved in the database.
     * @param {CalculationDataCreateManyAndReturnArgs} args - Arguments to create many CalculationData.
     * @example
     * // Create many CalculationData
     * const calculationData = await prisma.calculationData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CalculationData and only return the `id`
     * const calculationDataWithIdOnly = await prisma.calculationData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalculationDataCreateManyAndReturnArgs>(args?: SelectSubset<T, CalculationDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CalculationData.
     * @param {CalculationDataDeleteArgs} args - Arguments to delete one CalculationData.
     * @example
     * // Delete one CalculationData
     * const CalculationData = await prisma.calculationData.delete({
     *   where: {
     *     // ... filter to delete one CalculationData
     *   }
     * })
     * 
     */
    delete<T extends CalculationDataDeleteArgs>(args: SelectSubset<T, CalculationDataDeleteArgs<ExtArgs>>): Prisma__CalculationDataClient<$Result.GetResult<Prisma.$CalculationDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CalculationData.
     * @param {CalculationDataUpdateArgs} args - Arguments to update one CalculationData.
     * @example
     * // Update one CalculationData
     * const calculationData = await prisma.calculationData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalculationDataUpdateArgs>(args: SelectSubset<T, CalculationDataUpdateArgs<ExtArgs>>): Prisma__CalculationDataClient<$Result.GetResult<Prisma.$CalculationDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CalculationData.
     * @param {CalculationDataDeleteManyArgs} args - Arguments to filter CalculationData to delete.
     * @example
     * // Delete a few CalculationData
     * const { count } = await prisma.calculationData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalculationDataDeleteManyArgs>(args?: SelectSubset<T, CalculationDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalculationData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CalculationData
     * const calculationData = await prisma.calculationData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalculationDataUpdateManyArgs>(args: SelectSubset<T, CalculationDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalculationData and returns the data updated in the database.
     * @param {CalculationDataUpdateManyAndReturnArgs} args - Arguments to update many CalculationData.
     * @example
     * // Update many CalculationData
     * const calculationData = await prisma.calculationData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CalculationData and only return the `id`
     * const calculationDataWithIdOnly = await prisma.calculationData.updateManyAndReturn({
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
    updateManyAndReturn<T extends CalculationDataUpdateManyAndReturnArgs>(args: SelectSubset<T, CalculationDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CalculationData.
     * @param {CalculationDataUpsertArgs} args - Arguments to update or create a CalculationData.
     * @example
     * // Update or create a CalculationData
     * const calculationData = await prisma.calculationData.upsert({
     *   create: {
     *     // ... data to create a CalculationData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CalculationData we want to update
     *   }
     * })
     */
    upsert<T extends CalculationDataUpsertArgs>(args: SelectSubset<T, CalculationDataUpsertArgs<ExtArgs>>): Prisma__CalculationDataClient<$Result.GetResult<Prisma.$CalculationDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CalculationData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationDataCountArgs} args - Arguments to filter CalculationData to count.
     * @example
     * // Count the number of CalculationData
     * const count = await prisma.calculationData.count({
     *   where: {
     *     // ... the filter for the CalculationData we want to count
     *   }
     * })
    **/
    count<T extends CalculationDataCountArgs>(
      args?: Subset<T, CalculationDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalculationDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CalculationData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalculationDataAggregateArgs>(args: Subset<T, CalculationDataAggregateArgs>): Prisma.PrismaPromise<GetCalculationDataAggregateType<T>>

    /**
     * Group by CalculationData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationDataGroupByArgs} args - Group by arguments.
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
      T extends CalculationDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalculationDataGroupByArgs['orderBy'] }
        : { orderBy?: CalculationDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CalculationDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalculationDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CalculationData model
   */
  readonly fields: CalculationDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CalculationData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalculationDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CalculationData model
   */
  interface CalculationDataFieldRefs {
    readonly id: FieldRef<"CalculationData", 'Int'>
    readonly transaction: FieldRef<"CalculationData", 'String'>
    readonly productId: FieldRef<"CalculationData", 'Int'>
    readonly value: FieldRef<"CalculationData", 'Int'>
    readonly createdAt: FieldRef<"CalculationData", 'DateTime'>
    readonly updatedAt: FieldRef<"CalculationData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CalculationData findUnique
   */
  export type CalculationDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationData
     */
    select?: CalculationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationData
     */
    omit?: CalculationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationDataInclude<ExtArgs> | null
    /**
     * Filter, which CalculationData to fetch.
     */
    where: CalculationDataWhereUniqueInput
  }

  /**
   * CalculationData findUniqueOrThrow
   */
  export type CalculationDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationData
     */
    select?: CalculationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationData
     */
    omit?: CalculationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationDataInclude<ExtArgs> | null
    /**
     * Filter, which CalculationData to fetch.
     */
    where: CalculationDataWhereUniqueInput
  }

  /**
   * CalculationData findFirst
   */
  export type CalculationDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationData
     */
    select?: CalculationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationData
     */
    omit?: CalculationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationDataInclude<ExtArgs> | null
    /**
     * Filter, which CalculationData to fetch.
     */
    where?: CalculationDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalculationData to fetch.
     */
    orderBy?: CalculationDataOrderByWithRelationInput | CalculationDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalculationData.
     */
    cursor?: CalculationDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalculationData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalculationData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalculationData.
     */
    distinct?: CalculationDataScalarFieldEnum | CalculationDataScalarFieldEnum[]
  }

  /**
   * CalculationData findFirstOrThrow
   */
  export type CalculationDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationData
     */
    select?: CalculationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationData
     */
    omit?: CalculationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationDataInclude<ExtArgs> | null
    /**
     * Filter, which CalculationData to fetch.
     */
    where?: CalculationDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalculationData to fetch.
     */
    orderBy?: CalculationDataOrderByWithRelationInput | CalculationDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalculationData.
     */
    cursor?: CalculationDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalculationData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalculationData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalculationData.
     */
    distinct?: CalculationDataScalarFieldEnum | CalculationDataScalarFieldEnum[]
  }

  /**
   * CalculationData findMany
   */
  export type CalculationDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationData
     */
    select?: CalculationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationData
     */
    omit?: CalculationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationDataInclude<ExtArgs> | null
    /**
     * Filter, which CalculationData to fetch.
     */
    where?: CalculationDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalculationData to fetch.
     */
    orderBy?: CalculationDataOrderByWithRelationInput | CalculationDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CalculationData.
     */
    cursor?: CalculationDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalculationData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalculationData.
     */
    skip?: number
    distinct?: CalculationDataScalarFieldEnum | CalculationDataScalarFieldEnum[]
  }

  /**
   * CalculationData create
   */
  export type CalculationDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationData
     */
    select?: CalculationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationData
     */
    omit?: CalculationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationDataInclude<ExtArgs> | null
    /**
     * The data needed to create a CalculationData.
     */
    data: XOR<CalculationDataCreateInput, CalculationDataUncheckedCreateInput>
  }

  /**
   * CalculationData createMany
   */
  export type CalculationDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CalculationData.
     */
    data: CalculationDataCreateManyInput | CalculationDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalculationData createManyAndReturn
   */
  export type CalculationDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationData
     */
    select?: CalculationDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationData
     */
    omit?: CalculationDataOmit<ExtArgs> | null
    /**
     * The data used to create many CalculationData.
     */
    data: CalculationDataCreateManyInput | CalculationDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalculationData update
   */
  export type CalculationDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationData
     */
    select?: CalculationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationData
     */
    omit?: CalculationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationDataInclude<ExtArgs> | null
    /**
     * The data needed to update a CalculationData.
     */
    data: XOR<CalculationDataUpdateInput, CalculationDataUncheckedUpdateInput>
    /**
     * Choose, which CalculationData to update.
     */
    where: CalculationDataWhereUniqueInput
  }

  /**
   * CalculationData updateMany
   */
  export type CalculationDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CalculationData.
     */
    data: XOR<CalculationDataUpdateManyMutationInput, CalculationDataUncheckedUpdateManyInput>
    /**
     * Filter which CalculationData to update
     */
    where?: CalculationDataWhereInput
    /**
     * Limit how many CalculationData to update.
     */
    limit?: number
  }

  /**
   * CalculationData updateManyAndReturn
   */
  export type CalculationDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationData
     */
    select?: CalculationDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationData
     */
    omit?: CalculationDataOmit<ExtArgs> | null
    /**
     * The data used to update CalculationData.
     */
    data: XOR<CalculationDataUpdateManyMutationInput, CalculationDataUncheckedUpdateManyInput>
    /**
     * Filter which CalculationData to update
     */
    where?: CalculationDataWhereInput
    /**
     * Limit how many CalculationData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalculationData upsert
   */
  export type CalculationDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationData
     */
    select?: CalculationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationData
     */
    omit?: CalculationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationDataInclude<ExtArgs> | null
    /**
     * The filter to search for the CalculationData to update in case it exists.
     */
    where: CalculationDataWhereUniqueInput
    /**
     * In case the CalculationData found by the `where` argument doesn't exist, create a new CalculationData with this data.
     */
    create: XOR<CalculationDataCreateInput, CalculationDataUncheckedCreateInput>
    /**
     * In case the CalculationData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalculationDataUpdateInput, CalculationDataUncheckedUpdateInput>
  }

  /**
   * CalculationData delete
   */
  export type CalculationDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationData
     */
    select?: CalculationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationData
     */
    omit?: CalculationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationDataInclude<ExtArgs> | null
    /**
     * Filter which CalculationData to delete.
     */
    where: CalculationDataWhereUniqueInput
  }

  /**
   * CalculationData deleteMany
   */
  export type CalculationDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalculationData to delete
     */
    where?: CalculationDataWhereInput
    /**
     * Limit how many CalculationData to delete.
     */
    limit?: number
  }

  /**
   * CalculationData without action
   */
  export type CalculationDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationData
     */
    select?: CalculationDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationData
     */
    omit?: CalculationDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationDataInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    role: string | null
    address: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    role: string | null
    address: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    role: number
    address: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    address?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    address?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    address?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    username: string
    password: string
    role: string
    address: string
    phone: string
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Ratings?: boolean | Users$RatingsArgs<ExtArgs>
    Transaction?: boolean | Users$TransactionArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "role" | "address" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ratings?: boolean | Users$RatingsArgs<ExtArgs>
    Transaction?: boolean | Users$TransactionArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Ratings: Prisma.$RatingsPayload<ExtArgs>[]
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      username: string
      password: string
      role: string
      address: string
      phone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ratings<T extends Users$RatingsArgs<ExtArgs> = {}>(args?: Subset<T, Users$RatingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Transaction<T extends Users$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, Users$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly address: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Ratings
   */
  export type Users$RatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    where?: RatingsWhereInput
    orderBy?: RatingsOrderByWithRelationInput | RatingsOrderByWithRelationInput[]
    cursor?: RatingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * Users.Transaction
   */
  export type Users$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model BundleCategory
   */

  export type AggregateBundleCategory = {
    _count: BundleCategoryCountAggregateOutputType | null
    _avg: BundleCategoryAvgAggregateOutputType | null
    _sum: BundleCategorySumAggregateOutputType | null
    _min: BundleCategoryMinAggregateOutputType | null
    _max: BundleCategoryMaxAggregateOutputType | null
  }

  export type BundleCategoryAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    benefitId: number | null
  }

  export type BundleCategorySumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    benefitId: number | null
  }

  export type BundleCategoryMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    benefitId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BundleCategoryMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    benefitId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BundleCategoryCountAggregateOutputType = {
    id: number
    categoryId: number
    benefitId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BundleCategoryAvgAggregateInputType = {
    id?: true
    categoryId?: true
    benefitId?: true
  }

  export type BundleCategorySumAggregateInputType = {
    id?: true
    categoryId?: true
    benefitId?: true
  }

  export type BundleCategoryMinAggregateInputType = {
    id?: true
    categoryId?: true
    benefitId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BundleCategoryMaxAggregateInputType = {
    id?: true
    categoryId?: true
    benefitId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BundleCategoryCountAggregateInputType = {
    id?: true
    categoryId?: true
    benefitId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BundleCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BundleCategory to aggregate.
     */
    where?: BundleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundleCategories to fetch.
     */
    orderBy?: BundleCategoryOrderByWithRelationInput | BundleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BundleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BundleCategories
    **/
    _count?: true | BundleCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BundleCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BundleCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BundleCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BundleCategoryMaxAggregateInputType
  }

  export type GetBundleCategoryAggregateType<T extends BundleCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBundleCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBundleCategory[P]>
      : GetScalarType<T[P], AggregateBundleCategory[P]>
  }




  export type BundleCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BundleCategoryWhereInput
    orderBy?: BundleCategoryOrderByWithAggregationInput | BundleCategoryOrderByWithAggregationInput[]
    by: BundleCategoryScalarFieldEnum[] | BundleCategoryScalarFieldEnum
    having?: BundleCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BundleCategoryCountAggregateInputType | true
    _avg?: BundleCategoryAvgAggregateInputType
    _sum?: BundleCategorySumAggregateInputType
    _min?: BundleCategoryMinAggregateInputType
    _max?: BundleCategoryMaxAggregateInputType
  }

  export type BundleCategoryGroupByOutputType = {
    id: number
    categoryId: number
    benefitId: number
    createdAt: Date
    updatedAt: Date
    _count: BundleCategoryCountAggregateOutputType | null
    _avg: BundleCategoryAvgAggregateOutputType | null
    _sum: BundleCategorySumAggregateOutputType | null
    _min: BundleCategoryMinAggregateOutputType | null
    _max: BundleCategoryMaxAggregateOutputType | null
  }

  type GetBundleCategoryGroupByPayload<T extends BundleCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BundleCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BundleCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BundleCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BundleCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BundleCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    benefitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bundleCategory"]>

  export type BundleCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    benefitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bundleCategory"]>

  export type BundleCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    benefitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bundleCategory"]>

  export type BundleCategorySelectScalar = {
    id?: boolean
    categoryId?: boolean
    benefitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BundleCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "benefitId" | "createdAt" | "updatedAt", ExtArgs["result"]["bundleCategory"]>
  export type BundleCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }
  export type BundleCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }
  export type BundleCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }

  export type $BundleCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BundleCategory"
    objects: {
      Category: Prisma.$CategoryPayload<ExtArgs>
      Benefit: Prisma.$BenefitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryId: number
      benefitId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bundleCategory"]>
    composites: {}
  }

  type BundleCategoryGetPayload<S extends boolean | null | undefined | BundleCategoryDefaultArgs> = $Result.GetResult<Prisma.$BundleCategoryPayload, S>

  type BundleCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BundleCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BundleCategoryCountAggregateInputType | true
    }

  export interface BundleCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BundleCategory'], meta: { name: 'BundleCategory' } }
    /**
     * Find zero or one BundleCategory that matches the filter.
     * @param {BundleCategoryFindUniqueArgs} args - Arguments to find a BundleCategory
     * @example
     * // Get one BundleCategory
     * const bundleCategory = await prisma.bundleCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BundleCategoryFindUniqueArgs>(args: SelectSubset<T, BundleCategoryFindUniqueArgs<ExtArgs>>): Prisma__BundleCategoryClient<$Result.GetResult<Prisma.$BundleCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BundleCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BundleCategoryFindUniqueOrThrowArgs} args - Arguments to find a BundleCategory
     * @example
     * // Get one BundleCategory
     * const bundleCategory = await prisma.bundleCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BundleCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BundleCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BundleCategoryClient<$Result.GetResult<Prisma.$BundleCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BundleCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleCategoryFindFirstArgs} args - Arguments to find a BundleCategory
     * @example
     * // Get one BundleCategory
     * const bundleCategory = await prisma.bundleCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BundleCategoryFindFirstArgs>(args?: SelectSubset<T, BundleCategoryFindFirstArgs<ExtArgs>>): Prisma__BundleCategoryClient<$Result.GetResult<Prisma.$BundleCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BundleCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleCategoryFindFirstOrThrowArgs} args - Arguments to find a BundleCategory
     * @example
     * // Get one BundleCategory
     * const bundleCategory = await prisma.bundleCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BundleCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BundleCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BundleCategoryClient<$Result.GetResult<Prisma.$BundleCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BundleCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BundleCategories
     * const bundleCategories = await prisma.bundleCategory.findMany()
     * 
     * // Get first 10 BundleCategories
     * const bundleCategories = await prisma.bundleCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bundleCategoryWithIdOnly = await prisma.bundleCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BundleCategoryFindManyArgs>(args?: SelectSubset<T, BundleCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundleCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BundleCategory.
     * @param {BundleCategoryCreateArgs} args - Arguments to create a BundleCategory.
     * @example
     * // Create one BundleCategory
     * const BundleCategory = await prisma.bundleCategory.create({
     *   data: {
     *     // ... data to create a BundleCategory
     *   }
     * })
     * 
     */
    create<T extends BundleCategoryCreateArgs>(args: SelectSubset<T, BundleCategoryCreateArgs<ExtArgs>>): Prisma__BundleCategoryClient<$Result.GetResult<Prisma.$BundleCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BundleCategories.
     * @param {BundleCategoryCreateManyArgs} args - Arguments to create many BundleCategories.
     * @example
     * // Create many BundleCategories
     * const bundleCategory = await prisma.bundleCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BundleCategoryCreateManyArgs>(args?: SelectSubset<T, BundleCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BundleCategories and returns the data saved in the database.
     * @param {BundleCategoryCreateManyAndReturnArgs} args - Arguments to create many BundleCategories.
     * @example
     * // Create many BundleCategories
     * const bundleCategory = await prisma.bundleCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BundleCategories and only return the `id`
     * const bundleCategoryWithIdOnly = await prisma.bundleCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BundleCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BundleCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundleCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BundleCategory.
     * @param {BundleCategoryDeleteArgs} args - Arguments to delete one BundleCategory.
     * @example
     * // Delete one BundleCategory
     * const BundleCategory = await prisma.bundleCategory.delete({
     *   where: {
     *     // ... filter to delete one BundleCategory
     *   }
     * })
     * 
     */
    delete<T extends BundleCategoryDeleteArgs>(args: SelectSubset<T, BundleCategoryDeleteArgs<ExtArgs>>): Prisma__BundleCategoryClient<$Result.GetResult<Prisma.$BundleCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BundleCategory.
     * @param {BundleCategoryUpdateArgs} args - Arguments to update one BundleCategory.
     * @example
     * // Update one BundleCategory
     * const bundleCategory = await prisma.bundleCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BundleCategoryUpdateArgs>(args: SelectSubset<T, BundleCategoryUpdateArgs<ExtArgs>>): Prisma__BundleCategoryClient<$Result.GetResult<Prisma.$BundleCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BundleCategories.
     * @param {BundleCategoryDeleteManyArgs} args - Arguments to filter BundleCategories to delete.
     * @example
     * // Delete a few BundleCategories
     * const { count } = await prisma.bundleCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BundleCategoryDeleteManyArgs>(args?: SelectSubset<T, BundleCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BundleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BundleCategories
     * const bundleCategory = await prisma.bundleCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BundleCategoryUpdateManyArgs>(args: SelectSubset<T, BundleCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BundleCategories and returns the data updated in the database.
     * @param {BundleCategoryUpdateManyAndReturnArgs} args - Arguments to update many BundleCategories.
     * @example
     * // Update many BundleCategories
     * const bundleCategory = await prisma.bundleCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BundleCategories and only return the `id`
     * const bundleCategoryWithIdOnly = await prisma.bundleCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends BundleCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, BundleCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundleCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BundleCategory.
     * @param {BundleCategoryUpsertArgs} args - Arguments to update or create a BundleCategory.
     * @example
     * // Update or create a BundleCategory
     * const bundleCategory = await prisma.bundleCategory.upsert({
     *   create: {
     *     // ... data to create a BundleCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BundleCategory we want to update
     *   }
     * })
     */
    upsert<T extends BundleCategoryUpsertArgs>(args: SelectSubset<T, BundleCategoryUpsertArgs<ExtArgs>>): Prisma__BundleCategoryClient<$Result.GetResult<Prisma.$BundleCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BundleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleCategoryCountArgs} args - Arguments to filter BundleCategories to count.
     * @example
     * // Count the number of BundleCategories
     * const count = await prisma.bundleCategory.count({
     *   where: {
     *     // ... the filter for the BundleCategories we want to count
     *   }
     * })
    **/
    count<T extends BundleCategoryCountArgs>(
      args?: Subset<T, BundleCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BundleCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BundleCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BundleCategoryAggregateArgs>(args: Subset<T, BundleCategoryAggregateArgs>): Prisma.PrismaPromise<GetBundleCategoryAggregateType<T>>

    /**
     * Group by BundleCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleCategoryGroupByArgs} args - Group by arguments.
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
      T extends BundleCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BundleCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BundleCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BundleCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBundleCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BundleCategory model
   */
  readonly fields: BundleCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BundleCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BundleCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Benefit<T extends BenefitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BenefitDefaultArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BundleCategory model
   */
  interface BundleCategoryFieldRefs {
    readonly id: FieldRef<"BundleCategory", 'Int'>
    readonly categoryId: FieldRef<"BundleCategory", 'Int'>
    readonly benefitId: FieldRef<"BundleCategory", 'Int'>
    readonly createdAt: FieldRef<"BundleCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"BundleCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BundleCategory findUnique
   */
  export type BundleCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCategory
     */
    select?: BundleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundleCategory
     */
    omit?: BundleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BundleCategory to fetch.
     */
    where: BundleCategoryWhereUniqueInput
  }

  /**
   * BundleCategory findUniqueOrThrow
   */
  export type BundleCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCategory
     */
    select?: BundleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundleCategory
     */
    omit?: BundleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BundleCategory to fetch.
     */
    where: BundleCategoryWhereUniqueInput
  }

  /**
   * BundleCategory findFirst
   */
  export type BundleCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCategory
     */
    select?: BundleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundleCategory
     */
    omit?: BundleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BundleCategory to fetch.
     */
    where?: BundleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundleCategories to fetch.
     */
    orderBy?: BundleCategoryOrderByWithRelationInput | BundleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BundleCategories.
     */
    cursor?: BundleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BundleCategories.
     */
    distinct?: BundleCategoryScalarFieldEnum | BundleCategoryScalarFieldEnum[]
  }

  /**
   * BundleCategory findFirstOrThrow
   */
  export type BundleCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCategory
     */
    select?: BundleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundleCategory
     */
    omit?: BundleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BundleCategory to fetch.
     */
    where?: BundleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundleCategories to fetch.
     */
    orderBy?: BundleCategoryOrderByWithRelationInput | BundleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BundleCategories.
     */
    cursor?: BundleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BundleCategories.
     */
    distinct?: BundleCategoryScalarFieldEnum | BundleCategoryScalarFieldEnum[]
  }

  /**
   * BundleCategory findMany
   */
  export type BundleCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCategory
     */
    select?: BundleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundleCategory
     */
    omit?: BundleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BundleCategories to fetch.
     */
    where?: BundleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundleCategories to fetch.
     */
    orderBy?: BundleCategoryOrderByWithRelationInput | BundleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BundleCategories.
     */
    cursor?: BundleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundleCategories.
     */
    skip?: number
    distinct?: BundleCategoryScalarFieldEnum | BundleCategoryScalarFieldEnum[]
  }

  /**
   * BundleCategory create
   */
  export type BundleCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCategory
     */
    select?: BundleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundleCategory
     */
    omit?: BundleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BundleCategory.
     */
    data: XOR<BundleCategoryCreateInput, BundleCategoryUncheckedCreateInput>
  }

  /**
   * BundleCategory createMany
   */
  export type BundleCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BundleCategories.
     */
    data: BundleCategoryCreateManyInput | BundleCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BundleCategory createManyAndReturn
   */
  export type BundleCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCategory
     */
    select?: BundleCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BundleCategory
     */
    omit?: BundleCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many BundleCategories.
     */
    data: BundleCategoryCreateManyInput | BundleCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BundleCategory update
   */
  export type BundleCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCategory
     */
    select?: BundleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundleCategory
     */
    omit?: BundleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BundleCategory.
     */
    data: XOR<BundleCategoryUpdateInput, BundleCategoryUncheckedUpdateInput>
    /**
     * Choose, which BundleCategory to update.
     */
    where: BundleCategoryWhereUniqueInput
  }

  /**
   * BundleCategory updateMany
   */
  export type BundleCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BundleCategories.
     */
    data: XOR<BundleCategoryUpdateManyMutationInput, BundleCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BundleCategories to update
     */
    where?: BundleCategoryWhereInput
    /**
     * Limit how many BundleCategories to update.
     */
    limit?: number
  }

  /**
   * BundleCategory updateManyAndReturn
   */
  export type BundleCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCategory
     */
    select?: BundleCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BundleCategory
     */
    omit?: BundleCategoryOmit<ExtArgs> | null
    /**
     * The data used to update BundleCategories.
     */
    data: XOR<BundleCategoryUpdateManyMutationInput, BundleCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BundleCategories to update
     */
    where?: BundleCategoryWhereInput
    /**
     * Limit how many BundleCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BundleCategory upsert
   */
  export type BundleCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCategory
     */
    select?: BundleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundleCategory
     */
    omit?: BundleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BundleCategory to update in case it exists.
     */
    where: BundleCategoryWhereUniqueInput
    /**
     * In case the BundleCategory found by the `where` argument doesn't exist, create a new BundleCategory with this data.
     */
    create: XOR<BundleCategoryCreateInput, BundleCategoryUncheckedCreateInput>
    /**
     * In case the BundleCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BundleCategoryUpdateInput, BundleCategoryUncheckedUpdateInput>
  }

  /**
   * BundleCategory delete
   */
  export type BundleCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCategory
     */
    select?: BundleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundleCategory
     */
    omit?: BundleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleCategoryInclude<ExtArgs> | null
    /**
     * Filter which BundleCategory to delete.
     */
    where: BundleCategoryWhereUniqueInput
  }

  /**
   * BundleCategory deleteMany
   */
  export type BundleCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BundleCategories to delete
     */
    where?: BundleCategoryWhereInput
    /**
     * Limit how many BundleCategories to delete.
     */
    limit?: number
  }

  /**
   * BundleCategory without action
   */
  export type BundleCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCategory
     */
    select?: BundleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundleCategory
     */
    omit?: BundleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Ratings
   */

  export type AggregateRatings = {
    _count: RatingsCountAggregateOutputType | null
    _avg: RatingsAvgAggregateOutputType | null
    _sum: RatingsSumAggregateOutputType | null
    _min: RatingsMinAggregateOutputType | null
    _max: RatingsMaxAggregateOutputType | null
  }

  export type RatingsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    rating: number | null
  }

  export type RatingsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    rating: number | null
  }

  export type RatingsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    rating: number | null
    review: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatingsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    rating: number | null
    review: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatingsCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    rating: number
    review: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RatingsAvgAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    rating?: true
  }

  export type RatingsSumAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    rating?: true
  }

  export type RatingsMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    rating?: true
    review?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatingsMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    rating?: true
    review?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatingsCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    rating?: true
    review?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RatingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to aggregate.
     */
    where?: RatingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingsOrderByWithRelationInput | RatingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingsMaxAggregateInputType
  }

  export type GetRatingsAggregateType<T extends RatingsAggregateArgs> = {
        [P in keyof T & keyof AggregateRatings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRatings[P]>
      : GetScalarType<T[P], AggregateRatings[P]>
  }




  export type RatingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingsWhereInput
    orderBy?: RatingsOrderByWithAggregationInput | RatingsOrderByWithAggregationInput[]
    by: RatingsScalarFieldEnum[] | RatingsScalarFieldEnum
    having?: RatingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingsCountAggregateInputType | true
    _avg?: RatingsAvgAggregateInputType
    _sum?: RatingsSumAggregateInputType
    _min?: RatingsMinAggregateInputType
    _max?: RatingsMaxAggregateInputType
  }

  export type RatingsGroupByOutputType = {
    id: number
    userId: number
    productId: number
    rating: number
    review: string
    createdAt: Date
    updatedAt: Date
    _count: RatingsCountAggregateOutputType | null
    _avg: RatingsAvgAggregateOutputType | null
    _sum: RatingsSumAggregateOutputType | null
    _min: RatingsMinAggregateOutputType | null
    _max: RatingsMaxAggregateOutputType | null
  }

  type GetRatingsGroupByPayload<T extends RatingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingsGroupByOutputType[P]>
            : GetScalarType<T[P], RatingsGroupByOutputType[P]>
        }
      >
    >


  export type RatingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    rating?: boolean
    review?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratings"]>

  export type RatingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    rating?: boolean
    review?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratings"]>

  export type RatingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    rating?: boolean
    review?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratings"]>

  export type RatingsSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    rating?: boolean
    review?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RatingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "rating" | "review" | "createdAt" | "updatedAt", ExtArgs["result"]["ratings"]>
  export type RatingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type RatingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type RatingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $RatingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ratings"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      productId: number
      rating: number
      review: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ratings"]>
    composites: {}
  }

  type RatingsGetPayload<S extends boolean | null | undefined | RatingsDefaultArgs> = $Result.GetResult<Prisma.$RatingsPayload, S>

  type RatingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingsCountAggregateInputType | true
    }

  export interface RatingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ratings'], meta: { name: 'Ratings' } }
    /**
     * Find zero or one Ratings that matches the filter.
     * @param {RatingsFindUniqueArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingsFindUniqueArgs>(args: SelectSubset<T, RatingsFindUniqueArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ratings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingsFindUniqueOrThrowArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingsFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsFindFirstArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingsFindFirstArgs>(args?: SelectSubset<T, RatingsFindFirstArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ratings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsFindFirstOrThrowArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingsFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.ratings.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.ratings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingsWithIdOnly = await prisma.ratings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingsFindManyArgs>(args?: SelectSubset<T, RatingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ratings.
     * @param {RatingsCreateArgs} args - Arguments to create a Ratings.
     * @example
     * // Create one Ratings
     * const Ratings = await prisma.ratings.create({
     *   data: {
     *     // ... data to create a Ratings
     *   }
     * })
     * 
     */
    create<T extends RatingsCreateArgs>(args: SelectSubset<T, RatingsCreateArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingsCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const ratings = await prisma.ratings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingsCreateManyArgs>(args?: SelectSubset<T, RatingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingsCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const ratings = await prisma.ratings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingsWithIdOnly = await prisma.ratings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingsCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ratings.
     * @param {RatingsDeleteArgs} args - Arguments to delete one Ratings.
     * @example
     * // Delete one Ratings
     * const Ratings = await prisma.ratings.delete({
     *   where: {
     *     // ... filter to delete one Ratings
     *   }
     * })
     * 
     */
    delete<T extends RatingsDeleteArgs>(args: SelectSubset<T, RatingsDeleteArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ratings.
     * @param {RatingsUpdateArgs} args - Arguments to update one Ratings.
     * @example
     * // Update one Ratings
     * const ratings = await prisma.ratings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingsUpdateArgs>(args: SelectSubset<T, RatingsUpdateArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingsDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.ratings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingsDeleteManyArgs>(args?: SelectSubset<T, RatingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const ratings = await prisma.ratings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingsUpdateManyArgs>(args: SelectSubset<T, RatingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingsUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const ratings = await prisma.ratings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingsWithIdOnly = await prisma.ratings.updateManyAndReturn({
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
    updateManyAndReturn<T extends RatingsUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ratings.
     * @param {RatingsUpsertArgs} args - Arguments to update or create a Ratings.
     * @example
     * // Update or create a Ratings
     * const ratings = await prisma.ratings.upsert({
     *   create: {
     *     // ... data to create a Ratings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ratings we want to update
     *   }
     * })
     */
    upsert<T extends RatingsUpsertArgs>(args: SelectSubset<T, RatingsUpsertArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.ratings.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingsCountArgs>(
      args?: Subset<T, RatingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingsAggregateArgs>(args: Subset<T, RatingsAggregateArgs>): Prisma.PrismaPromise<GetRatingsAggregateType<T>>

    /**
     * Group by Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsGroupByArgs} args - Group by arguments.
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
      T extends RatingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingsGroupByArgs['orderBy'] }
        : { orderBy?: RatingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ratings model
   */
  readonly fields: RatingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ratings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ratings model
   */
  interface RatingsFieldRefs {
    readonly id: FieldRef<"Ratings", 'Int'>
    readonly userId: FieldRef<"Ratings", 'Int'>
    readonly productId: FieldRef<"Ratings", 'Int'>
    readonly rating: FieldRef<"Ratings", 'Int'>
    readonly review: FieldRef<"Ratings", 'String'>
    readonly createdAt: FieldRef<"Ratings", 'DateTime'>
    readonly updatedAt: FieldRef<"Ratings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ratings findUnique
   */
  export type RatingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where: RatingsWhereUniqueInput
  }

  /**
   * Ratings findUniqueOrThrow
   */
  export type RatingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where: RatingsWhereUniqueInput
  }

  /**
   * Ratings findFirst
   */
  export type RatingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingsOrderByWithRelationInput | RatingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * Ratings findFirstOrThrow
   */
  export type RatingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingsOrderByWithRelationInput | RatingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * Ratings findMany
   */
  export type RatingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingsOrderByWithRelationInput | RatingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * Ratings create
   */
  export type RatingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Ratings.
     */
    data: XOR<RatingsCreateInput, RatingsUncheckedCreateInput>
  }

  /**
   * Ratings createMany
   */
  export type RatingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingsCreateManyInput | RatingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ratings createManyAndReturn
   */
  export type RatingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingsCreateManyInput | RatingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ratings update
   */
  export type RatingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Ratings.
     */
    data: XOR<RatingsUpdateInput, RatingsUncheckedUpdateInput>
    /**
     * Choose, which Ratings to update.
     */
    where: RatingsWhereUniqueInput
  }

  /**
   * Ratings updateMany
   */
  export type RatingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingsUpdateManyMutationInput, RatingsUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingsWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Ratings updateManyAndReturn
   */
  export type RatingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingsUpdateManyMutationInput, RatingsUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingsWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ratings upsert
   */
  export type RatingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Ratings to update in case it exists.
     */
    where: RatingsWhereUniqueInput
    /**
     * In case the Ratings found by the `where` argument doesn't exist, create a new Ratings with this data.
     */
    create: XOR<RatingsCreateInput, RatingsUncheckedCreateInput>
    /**
     * In case the Ratings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingsUpdateInput, RatingsUncheckedUpdateInput>
  }

  /**
   * Ratings delete
   */
  export type RatingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * Filter which Ratings to delete.
     */
    where: RatingsWhereUniqueInput
  }

  /**
   * Ratings deleteMany
   */
  export type RatingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingsWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Ratings without action
   */
  export type RatingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    image: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    image: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    image: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    image?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    image?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    image?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    image: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    image?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["image"]>

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      imageUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly image: FieldRef<"Image", 'String'>
    readonly imageUrl: FieldRef<"Image", 'String'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly updatedAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
  }


  /**
   * Model ItemRecomendation
   */

  export type AggregateItemRecomendation = {
    _count: ItemRecomendationCountAggregateOutputType | null
    _avg: ItemRecomendationAvgAggregateOutputType | null
    _sum: ItemRecomendationSumAggregateOutputType | null
    _min: ItemRecomendationMinAggregateOutputType | null
    _max: ItemRecomendationMaxAggregateOutputType | null
  }

  export type ItemRecomendationAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ItemRecomendationSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ItemRecomendationMinAggregateOutputType = {
    id: number | null
    productId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemRecomendationMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemRecomendationCountAggregateOutputType = {
    id: number
    productId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemRecomendationAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ItemRecomendationSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ItemRecomendationMinAggregateInputType = {
    id?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemRecomendationMaxAggregateInputType = {
    id?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemRecomendationCountAggregateInputType = {
    id?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemRecomendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemRecomendation to aggregate.
     */
    where?: ItemRecomendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemRecomendations to fetch.
     */
    orderBy?: ItemRecomendationOrderByWithRelationInput | ItemRecomendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemRecomendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemRecomendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemRecomendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemRecomendations
    **/
    _count?: true | ItemRecomendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemRecomendationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemRecomendationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemRecomendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemRecomendationMaxAggregateInputType
  }

  export type GetItemRecomendationAggregateType<T extends ItemRecomendationAggregateArgs> = {
        [P in keyof T & keyof AggregateItemRecomendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemRecomendation[P]>
      : GetScalarType<T[P], AggregateItemRecomendation[P]>
  }




  export type ItemRecomendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemRecomendationWhereInput
    orderBy?: ItemRecomendationOrderByWithAggregationInput | ItemRecomendationOrderByWithAggregationInput[]
    by: ItemRecomendationScalarFieldEnum[] | ItemRecomendationScalarFieldEnum
    having?: ItemRecomendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemRecomendationCountAggregateInputType | true
    _avg?: ItemRecomendationAvgAggregateInputType
    _sum?: ItemRecomendationSumAggregateInputType
    _min?: ItemRecomendationMinAggregateInputType
    _max?: ItemRecomendationMaxAggregateInputType
  }

  export type ItemRecomendationGroupByOutputType = {
    id: number
    productId: number
    createdAt: Date
    updatedAt: Date
    _count: ItemRecomendationCountAggregateOutputType | null
    _avg: ItemRecomendationAvgAggregateOutputType | null
    _sum: ItemRecomendationSumAggregateOutputType | null
    _min: ItemRecomendationMinAggregateOutputType | null
    _max: ItemRecomendationMaxAggregateOutputType | null
  }

  type GetItemRecomendationGroupByPayload<T extends ItemRecomendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemRecomendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemRecomendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemRecomendationGroupByOutputType[P]>
            : GetScalarType<T[P], ItemRecomendationGroupByOutputType[P]>
        }
      >
    >


  export type ItemRecomendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemRecomendation"]>

  export type ItemRecomendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemRecomendation"]>

  export type ItemRecomendationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemRecomendation"]>

  export type ItemRecomendationSelectScalar = {
    id?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemRecomendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "createdAt" | "updatedAt", ExtArgs["result"]["itemRecomendation"]>
  export type ItemRecomendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ItemRecomendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ItemRecomendationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ItemRecomendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemRecomendation"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["itemRecomendation"]>
    composites: {}
  }

  type ItemRecomendationGetPayload<S extends boolean | null | undefined | ItemRecomendationDefaultArgs> = $Result.GetResult<Prisma.$ItemRecomendationPayload, S>

  type ItemRecomendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemRecomendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemRecomendationCountAggregateInputType | true
    }

  export interface ItemRecomendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemRecomendation'], meta: { name: 'ItemRecomendation' } }
    /**
     * Find zero or one ItemRecomendation that matches the filter.
     * @param {ItemRecomendationFindUniqueArgs} args - Arguments to find a ItemRecomendation
     * @example
     * // Get one ItemRecomendation
     * const itemRecomendation = await prisma.itemRecomendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemRecomendationFindUniqueArgs>(args: SelectSubset<T, ItemRecomendationFindUniqueArgs<ExtArgs>>): Prisma__ItemRecomendationClient<$Result.GetResult<Prisma.$ItemRecomendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemRecomendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemRecomendationFindUniqueOrThrowArgs} args - Arguments to find a ItemRecomendation
     * @example
     * // Get one ItemRecomendation
     * const itemRecomendation = await prisma.itemRecomendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemRecomendationFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemRecomendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemRecomendationClient<$Result.GetResult<Prisma.$ItemRecomendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemRecomendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemRecomendationFindFirstArgs} args - Arguments to find a ItemRecomendation
     * @example
     * // Get one ItemRecomendation
     * const itemRecomendation = await prisma.itemRecomendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemRecomendationFindFirstArgs>(args?: SelectSubset<T, ItemRecomendationFindFirstArgs<ExtArgs>>): Prisma__ItemRecomendationClient<$Result.GetResult<Prisma.$ItemRecomendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemRecomendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemRecomendationFindFirstOrThrowArgs} args - Arguments to find a ItemRecomendation
     * @example
     * // Get one ItemRecomendation
     * const itemRecomendation = await prisma.itemRecomendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemRecomendationFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemRecomendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemRecomendationClient<$Result.GetResult<Prisma.$ItemRecomendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemRecomendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemRecomendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemRecomendations
     * const itemRecomendations = await prisma.itemRecomendation.findMany()
     * 
     * // Get first 10 ItemRecomendations
     * const itemRecomendations = await prisma.itemRecomendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemRecomendationWithIdOnly = await prisma.itemRecomendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemRecomendationFindManyArgs>(args?: SelectSubset<T, ItemRecomendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemRecomendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemRecomendation.
     * @param {ItemRecomendationCreateArgs} args - Arguments to create a ItemRecomendation.
     * @example
     * // Create one ItemRecomendation
     * const ItemRecomendation = await prisma.itemRecomendation.create({
     *   data: {
     *     // ... data to create a ItemRecomendation
     *   }
     * })
     * 
     */
    create<T extends ItemRecomendationCreateArgs>(args: SelectSubset<T, ItemRecomendationCreateArgs<ExtArgs>>): Prisma__ItemRecomendationClient<$Result.GetResult<Prisma.$ItemRecomendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemRecomendations.
     * @param {ItemRecomendationCreateManyArgs} args - Arguments to create many ItemRecomendations.
     * @example
     * // Create many ItemRecomendations
     * const itemRecomendation = await prisma.itemRecomendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemRecomendationCreateManyArgs>(args?: SelectSubset<T, ItemRecomendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemRecomendations and returns the data saved in the database.
     * @param {ItemRecomendationCreateManyAndReturnArgs} args - Arguments to create many ItemRecomendations.
     * @example
     * // Create many ItemRecomendations
     * const itemRecomendation = await prisma.itemRecomendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemRecomendations and only return the `id`
     * const itemRecomendationWithIdOnly = await prisma.itemRecomendation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemRecomendationCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemRecomendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemRecomendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemRecomendation.
     * @param {ItemRecomendationDeleteArgs} args - Arguments to delete one ItemRecomendation.
     * @example
     * // Delete one ItemRecomendation
     * const ItemRecomendation = await prisma.itemRecomendation.delete({
     *   where: {
     *     // ... filter to delete one ItemRecomendation
     *   }
     * })
     * 
     */
    delete<T extends ItemRecomendationDeleteArgs>(args: SelectSubset<T, ItemRecomendationDeleteArgs<ExtArgs>>): Prisma__ItemRecomendationClient<$Result.GetResult<Prisma.$ItemRecomendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemRecomendation.
     * @param {ItemRecomendationUpdateArgs} args - Arguments to update one ItemRecomendation.
     * @example
     * // Update one ItemRecomendation
     * const itemRecomendation = await prisma.itemRecomendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemRecomendationUpdateArgs>(args: SelectSubset<T, ItemRecomendationUpdateArgs<ExtArgs>>): Prisma__ItemRecomendationClient<$Result.GetResult<Prisma.$ItemRecomendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemRecomendations.
     * @param {ItemRecomendationDeleteManyArgs} args - Arguments to filter ItemRecomendations to delete.
     * @example
     * // Delete a few ItemRecomendations
     * const { count } = await prisma.itemRecomendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemRecomendationDeleteManyArgs>(args?: SelectSubset<T, ItemRecomendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemRecomendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemRecomendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemRecomendations
     * const itemRecomendation = await prisma.itemRecomendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemRecomendationUpdateManyArgs>(args: SelectSubset<T, ItemRecomendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemRecomendations and returns the data updated in the database.
     * @param {ItemRecomendationUpdateManyAndReturnArgs} args - Arguments to update many ItemRecomendations.
     * @example
     * // Update many ItemRecomendations
     * const itemRecomendation = await prisma.itemRecomendation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemRecomendations and only return the `id`
     * const itemRecomendationWithIdOnly = await prisma.itemRecomendation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemRecomendationUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemRecomendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemRecomendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemRecomendation.
     * @param {ItemRecomendationUpsertArgs} args - Arguments to update or create a ItemRecomendation.
     * @example
     * // Update or create a ItemRecomendation
     * const itemRecomendation = await prisma.itemRecomendation.upsert({
     *   create: {
     *     // ... data to create a ItemRecomendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemRecomendation we want to update
     *   }
     * })
     */
    upsert<T extends ItemRecomendationUpsertArgs>(args: SelectSubset<T, ItemRecomendationUpsertArgs<ExtArgs>>): Prisma__ItemRecomendationClient<$Result.GetResult<Prisma.$ItemRecomendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemRecomendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemRecomendationCountArgs} args - Arguments to filter ItemRecomendations to count.
     * @example
     * // Count the number of ItemRecomendations
     * const count = await prisma.itemRecomendation.count({
     *   where: {
     *     // ... the filter for the ItemRecomendations we want to count
     *   }
     * })
    **/
    count<T extends ItemRecomendationCountArgs>(
      args?: Subset<T, ItemRecomendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemRecomendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemRecomendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemRecomendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemRecomendationAggregateArgs>(args: Subset<T, ItemRecomendationAggregateArgs>): Prisma.PrismaPromise<GetItemRecomendationAggregateType<T>>

    /**
     * Group by ItemRecomendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemRecomendationGroupByArgs} args - Group by arguments.
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
      T extends ItemRecomendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemRecomendationGroupByArgs['orderBy'] }
        : { orderBy?: ItemRecomendationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemRecomendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemRecomendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemRecomendation model
   */
  readonly fields: ItemRecomendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemRecomendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemRecomendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ItemRecomendation model
   */
  interface ItemRecomendationFieldRefs {
    readonly id: FieldRef<"ItemRecomendation", 'Int'>
    readonly productId: FieldRef<"ItemRecomendation", 'Int'>
    readonly createdAt: FieldRef<"ItemRecomendation", 'DateTime'>
    readonly updatedAt: FieldRef<"ItemRecomendation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemRecomendation findUnique
   */
  export type ItemRecomendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemRecomendation
     */
    select?: ItemRecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemRecomendation
     */
    omit?: ItemRecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemRecomendationInclude<ExtArgs> | null
    /**
     * Filter, which ItemRecomendation to fetch.
     */
    where: ItemRecomendationWhereUniqueInput
  }

  /**
   * ItemRecomendation findUniqueOrThrow
   */
  export type ItemRecomendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemRecomendation
     */
    select?: ItemRecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemRecomendation
     */
    omit?: ItemRecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemRecomendationInclude<ExtArgs> | null
    /**
     * Filter, which ItemRecomendation to fetch.
     */
    where: ItemRecomendationWhereUniqueInput
  }

  /**
   * ItemRecomendation findFirst
   */
  export type ItemRecomendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemRecomendation
     */
    select?: ItemRecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemRecomendation
     */
    omit?: ItemRecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemRecomendationInclude<ExtArgs> | null
    /**
     * Filter, which ItemRecomendation to fetch.
     */
    where?: ItemRecomendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemRecomendations to fetch.
     */
    orderBy?: ItemRecomendationOrderByWithRelationInput | ItemRecomendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemRecomendations.
     */
    cursor?: ItemRecomendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemRecomendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemRecomendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemRecomendations.
     */
    distinct?: ItemRecomendationScalarFieldEnum | ItemRecomendationScalarFieldEnum[]
  }

  /**
   * ItemRecomendation findFirstOrThrow
   */
  export type ItemRecomendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemRecomendation
     */
    select?: ItemRecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemRecomendation
     */
    omit?: ItemRecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemRecomendationInclude<ExtArgs> | null
    /**
     * Filter, which ItemRecomendation to fetch.
     */
    where?: ItemRecomendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemRecomendations to fetch.
     */
    orderBy?: ItemRecomendationOrderByWithRelationInput | ItemRecomendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemRecomendations.
     */
    cursor?: ItemRecomendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemRecomendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemRecomendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemRecomendations.
     */
    distinct?: ItemRecomendationScalarFieldEnum | ItemRecomendationScalarFieldEnum[]
  }

  /**
   * ItemRecomendation findMany
   */
  export type ItemRecomendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemRecomendation
     */
    select?: ItemRecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemRecomendation
     */
    omit?: ItemRecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemRecomendationInclude<ExtArgs> | null
    /**
     * Filter, which ItemRecomendations to fetch.
     */
    where?: ItemRecomendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemRecomendations to fetch.
     */
    orderBy?: ItemRecomendationOrderByWithRelationInput | ItemRecomendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemRecomendations.
     */
    cursor?: ItemRecomendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemRecomendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemRecomendations.
     */
    skip?: number
    distinct?: ItemRecomendationScalarFieldEnum | ItemRecomendationScalarFieldEnum[]
  }

  /**
   * ItemRecomendation create
   */
  export type ItemRecomendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemRecomendation
     */
    select?: ItemRecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemRecomendation
     */
    omit?: ItemRecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemRecomendationInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemRecomendation.
     */
    data: XOR<ItemRecomendationCreateInput, ItemRecomendationUncheckedCreateInput>
  }

  /**
   * ItemRecomendation createMany
   */
  export type ItemRecomendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemRecomendations.
     */
    data: ItemRecomendationCreateManyInput | ItemRecomendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemRecomendation createManyAndReturn
   */
  export type ItemRecomendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemRecomendation
     */
    select?: ItemRecomendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemRecomendation
     */
    omit?: ItemRecomendationOmit<ExtArgs> | null
    /**
     * The data used to create many ItemRecomendations.
     */
    data: ItemRecomendationCreateManyInput | ItemRecomendationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemRecomendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemRecomendation update
   */
  export type ItemRecomendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemRecomendation
     */
    select?: ItemRecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemRecomendation
     */
    omit?: ItemRecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemRecomendationInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemRecomendation.
     */
    data: XOR<ItemRecomendationUpdateInput, ItemRecomendationUncheckedUpdateInput>
    /**
     * Choose, which ItemRecomendation to update.
     */
    where: ItemRecomendationWhereUniqueInput
  }

  /**
   * ItemRecomendation updateMany
   */
  export type ItemRecomendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemRecomendations.
     */
    data: XOR<ItemRecomendationUpdateManyMutationInput, ItemRecomendationUncheckedUpdateManyInput>
    /**
     * Filter which ItemRecomendations to update
     */
    where?: ItemRecomendationWhereInput
    /**
     * Limit how many ItemRecomendations to update.
     */
    limit?: number
  }

  /**
   * ItemRecomendation updateManyAndReturn
   */
  export type ItemRecomendationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemRecomendation
     */
    select?: ItemRecomendationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemRecomendation
     */
    omit?: ItemRecomendationOmit<ExtArgs> | null
    /**
     * The data used to update ItemRecomendations.
     */
    data: XOR<ItemRecomendationUpdateManyMutationInput, ItemRecomendationUncheckedUpdateManyInput>
    /**
     * Filter which ItemRecomendations to update
     */
    where?: ItemRecomendationWhereInput
    /**
     * Limit how many ItemRecomendations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemRecomendationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemRecomendation upsert
   */
  export type ItemRecomendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemRecomendation
     */
    select?: ItemRecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemRecomendation
     */
    omit?: ItemRecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemRecomendationInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemRecomendation to update in case it exists.
     */
    where: ItemRecomendationWhereUniqueInput
    /**
     * In case the ItemRecomendation found by the `where` argument doesn't exist, create a new ItemRecomendation with this data.
     */
    create: XOR<ItemRecomendationCreateInput, ItemRecomendationUncheckedCreateInput>
    /**
     * In case the ItemRecomendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemRecomendationUpdateInput, ItemRecomendationUncheckedUpdateInput>
  }

  /**
   * ItemRecomendation delete
   */
  export type ItemRecomendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemRecomendation
     */
    select?: ItemRecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemRecomendation
     */
    omit?: ItemRecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemRecomendationInclude<ExtArgs> | null
    /**
     * Filter which ItemRecomendation to delete.
     */
    where: ItemRecomendationWhereUniqueInput
  }

  /**
   * ItemRecomendation deleteMany
   */
  export type ItemRecomendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemRecomendations to delete
     */
    where?: ItemRecomendationWhereInput
    /**
     * Limit how many ItemRecomendations to delete.
     */
    limit?: number
  }

  /**
   * ItemRecomendation without action
   */
  export type ItemRecomendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemRecomendation
     */
    select?: ItemRecomendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemRecomendation
     */
    omit?: ItemRecomendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemRecomendationInclude<ExtArgs> | null
  }


  /**
   * Model BundlingItem
   */

  export type AggregateBundlingItem = {
    _count: BundlingItemCountAggregateOutputType | null
    _avg: BundlingItemAvgAggregateOutputType | null
    _sum: BundlingItemSumAggregateOutputType | null
    _min: BundlingItemMinAggregateOutputType | null
    _max: BundlingItemMaxAggregateOutputType | null
  }

  export type BundlingItemAvgAggregateOutputType = {
    id: number | null
    bundlingPackId: number | null
    productId: number | null
  }

  export type BundlingItemSumAggregateOutputType = {
    id: number | null
    bundlingPackId: number | null
    productId: number | null
  }

  export type BundlingItemMinAggregateOutputType = {
    id: number | null
    bundlingPackId: number | null
    productId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BundlingItemMaxAggregateOutputType = {
    id: number | null
    bundlingPackId: number | null
    productId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BundlingItemCountAggregateOutputType = {
    id: number
    bundlingPackId: number
    productId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BundlingItemAvgAggregateInputType = {
    id?: true
    bundlingPackId?: true
    productId?: true
  }

  export type BundlingItemSumAggregateInputType = {
    id?: true
    bundlingPackId?: true
    productId?: true
  }

  export type BundlingItemMinAggregateInputType = {
    id?: true
    bundlingPackId?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BundlingItemMaxAggregateInputType = {
    id?: true
    bundlingPackId?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BundlingItemCountAggregateInputType = {
    id?: true
    bundlingPackId?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BundlingItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BundlingItem to aggregate.
     */
    where?: BundlingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundlingItems to fetch.
     */
    orderBy?: BundlingItemOrderByWithRelationInput | BundlingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BundlingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundlingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundlingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BundlingItems
    **/
    _count?: true | BundlingItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BundlingItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BundlingItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BundlingItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BundlingItemMaxAggregateInputType
  }

  export type GetBundlingItemAggregateType<T extends BundlingItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBundlingItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBundlingItem[P]>
      : GetScalarType<T[P], AggregateBundlingItem[P]>
  }




  export type BundlingItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BundlingItemWhereInput
    orderBy?: BundlingItemOrderByWithAggregationInput | BundlingItemOrderByWithAggregationInput[]
    by: BundlingItemScalarFieldEnum[] | BundlingItemScalarFieldEnum
    having?: BundlingItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BundlingItemCountAggregateInputType | true
    _avg?: BundlingItemAvgAggregateInputType
    _sum?: BundlingItemSumAggregateInputType
    _min?: BundlingItemMinAggregateInputType
    _max?: BundlingItemMaxAggregateInputType
  }

  export type BundlingItemGroupByOutputType = {
    id: number
    bundlingPackId: number
    productId: number
    createdAt: Date
    updatedAt: Date
    _count: BundlingItemCountAggregateOutputType | null
    _avg: BundlingItemAvgAggregateOutputType | null
    _sum: BundlingItemSumAggregateOutputType | null
    _min: BundlingItemMinAggregateOutputType | null
    _max: BundlingItemMaxAggregateOutputType | null
  }

  type GetBundlingItemGroupByPayload<T extends BundlingItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BundlingItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BundlingItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BundlingItemGroupByOutputType[P]>
            : GetScalarType<T[P], BundlingItemGroupByOutputType[P]>
        }
      >
    >


  export type BundlingItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bundlingPackId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    BundlingPackage?: boolean | BundlingPackageDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bundlingItem"]>

  export type BundlingItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bundlingPackId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    BundlingPackage?: boolean | BundlingPackageDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bundlingItem"]>

  export type BundlingItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bundlingPackId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    BundlingPackage?: boolean | BundlingPackageDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bundlingItem"]>

  export type BundlingItemSelectScalar = {
    id?: boolean
    bundlingPackId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BundlingItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bundlingPackId" | "productId" | "createdAt" | "updatedAt", ExtArgs["result"]["bundlingItem"]>
  export type BundlingItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BundlingPackage?: boolean | BundlingPackageDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type BundlingItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BundlingPackage?: boolean | BundlingPackageDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type BundlingItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BundlingPackage?: boolean | BundlingPackageDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $BundlingItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BundlingItem"
    objects: {
      BundlingPackage: Prisma.$BundlingPackagePayload<ExtArgs>
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bundlingPackId: number
      productId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bundlingItem"]>
    composites: {}
  }

  type BundlingItemGetPayload<S extends boolean | null | undefined | BundlingItemDefaultArgs> = $Result.GetResult<Prisma.$BundlingItemPayload, S>

  type BundlingItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BundlingItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BundlingItemCountAggregateInputType | true
    }

  export interface BundlingItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BundlingItem'], meta: { name: 'BundlingItem' } }
    /**
     * Find zero or one BundlingItem that matches the filter.
     * @param {BundlingItemFindUniqueArgs} args - Arguments to find a BundlingItem
     * @example
     * // Get one BundlingItem
     * const bundlingItem = await prisma.bundlingItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BundlingItemFindUniqueArgs>(args: SelectSubset<T, BundlingItemFindUniqueArgs<ExtArgs>>): Prisma__BundlingItemClient<$Result.GetResult<Prisma.$BundlingItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BundlingItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BundlingItemFindUniqueOrThrowArgs} args - Arguments to find a BundlingItem
     * @example
     * // Get one BundlingItem
     * const bundlingItem = await prisma.bundlingItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BundlingItemFindUniqueOrThrowArgs>(args: SelectSubset<T, BundlingItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BundlingItemClient<$Result.GetResult<Prisma.$BundlingItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BundlingItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlingItemFindFirstArgs} args - Arguments to find a BundlingItem
     * @example
     * // Get one BundlingItem
     * const bundlingItem = await prisma.bundlingItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BundlingItemFindFirstArgs>(args?: SelectSubset<T, BundlingItemFindFirstArgs<ExtArgs>>): Prisma__BundlingItemClient<$Result.GetResult<Prisma.$BundlingItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BundlingItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlingItemFindFirstOrThrowArgs} args - Arguments to find a BundlingItem
     * @example
     * // Get one BundlingItem
     * const bundlingItem = await prisma.bundlingItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BundlingItemFindFirstOrThrowArgs>(args?: SelectSubset<T, BundlingItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__BundlingItemClient<$Result.GetResult<Prisma.$BundlingItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BundlingItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlingItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BundlingItems
     * const bundlingItems = await prisma.bundlingItem.findMany()
     * 
     * // Get first 10 BundlingItems
     * const bundlingItems = await prisma.bundlingItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bundlingItemWithIdOnly = await prisma.bundlingItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BundlingItemFindManyArgs>(args?: SelectSubset<T, BundlingItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundlingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BundlingItem.
     * @param {BundlingItemCreateArgs} args - Arguments to create a BundlingItem.
     * @example
     * // Create one BundlingItem
     * const BundlingItem = await prisma.bundlingItem.create({
     *   data: {
     *     // ... data to create a BundlingItem
     *   }
     * })
     * 
     */
    create<T extends BundlingItemCreateArgs>(args: SelectSubset<T, BundlingItemCreateArgs<ExtArgs>>): Prisma__BundlingItemClient<$Result.GetResult<Prisma.$BundlingItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BundlingItems.
     * @param {BundlingItemCreateManyArgs} args - Arguments to create many BundlingItems.
     * @example
     * // Create many BundlingItems
     * const bundlingItem = await prisma.bundlingItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BundlingItemCreateManyArgs>(args?: SelectSubset<T, BundlingItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BundlingItems and returns the data saved in the database.
     * @param {BundlingItemCreateManyAndReturnArgs} args - Arguments to create many BundlingItems.
     * @example
     * // Create many BundlingItems
     * const bundlingItem = await prisma.bundlingItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BundlingItems and only return the `id`
     * const bundlingItemWithIdOnly = await prisma.bundlingItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BundlingItemCreateManyAndReturnArgs>(args?: SelectSubset<T, BundlingItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundlingItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BundlingItem.
     * @param {BundlingItemDeleteArgs} args - Arguments to delete one BundlingItem.
     * @example
     * // Delete one BundlingItem
     * const BundlingItem = await prisma.bundlingItem.delete({
     *   where: {
     *     // ... filter to delete one BundlingItem
     *   }
     * })
     * 
     */
    delete<T extends BundlingItemDeleteArgs>(args: SelectSubset<T, BundlingItemDeleteArgs<ExtArgs>>): Prisma__BundlingItemClient<$Result.GetResult<Prisma.$BundlingItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BundlingItem.
     * @param {BundlingItemUpdateArgs} args - Arguments to update one BundlingItem.
     * @example
     * // Update one BundlingItem
     * const bundlingItem = await prisma.bundlingItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BundlingItemUpdateArgs>(args: SelectSubset<T, BundlingItemUpdateArgs<ExtArgs>>): Prisma__BundlingItemClient<$Result.GetResult<Prisma.$BundlingItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BundlingItems.
     * @param {BundlingItemDeleteManyArgs} args - Arguments to filter BundlingItems to delete.
     * @example
     * // Delete a few BundlingItems
     * const { count } = await prisma.bundlingItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BundlingItemDeleteManyArgs>(args?: SelectSubset<T, BundlingItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BundlingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlingItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BundlingItems
     * const bundlingItem = await prisma.bundlingItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BundlingItemUpdateManyArgs>(args: SelectSubset<T, BundlingItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BundlingItems and returns the data updated in the database.
     * @param {BundlingItemUpdateManyAndReturnArgs} args - Arguments to update many BundlingItems.
     * @example
     * // Update many BundlingItems
     * const bundlingItem = await prisma.bundlingItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BundlingItems and only return the `id`
     * const bundlingItemWithIdOnly = await prisma.bundlingItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends BundlingItemUpdateManyAndReturnArgs>(args: SelectSubset<T, BundlingItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundlingItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BundlingItem.
     * @param {BundlingItemUpsertArgs} args - Arguments to update or create a BundlingItem.
     * @example
     * // Update or create a BundlingItem
     * const bundlingItem = await prisma.bundlingItem.upsert({
     *   create: {
     *     // ... data to create a BundlingItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BundlingItem we want to update
     *   }
     * })
     */
    upsert<T extends BundlingItemUpsertArgs>(args: SelectSubset<T, BundlingItemUpsertArgs<ExtArgs>>): Prisma__BundlingItemClient<$Result.GetResult<Prisma.$BundlingItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BundlingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlingItemCountArgs} args - Arguments to filter BundlingItems to count.
     * @example
     * // Count the number of BundlingItems
     * const count = await prisma.bundlingItem.count({
     *   where: {
     *     // ... the filter for the BundlingItems we want to count
     *   }
     * })
    **/
    count<T extends BundlingItemCountArgs>(
      args?: Subset<T, BundlingItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BundlingItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BundlingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlingItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BundlingItemAggregateArgs>(args: Subset<T, BundlingItemAggregateArgs>): Prisma.PrismaPromise<GetBundlingItemAggregateType<T>>

    /**
     * Group by BundlingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlingItemGroupByArgs} args - Group by arguments.
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
      T extends BundlingItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BundlingItemGroupByArgs['orderBy'] }
        : { orderBy?: BundlingItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BundlingItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBundlingItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BundlingItem model
   */
  readonly fields: BundlingItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BundlingItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BundlingItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    BundlingPackage<T extends BundlingPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BundlingPackageDefaultArgs<ExtArgs>>): Prisma__BundlingPackageClient<$Result.GetResult<Prisma.$BundlingPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BundlingItem model
   */
  interface BundlingItemFieldRefs {
    readonly id: FieldRef<"BundlingItem", 'Int'>
    readonly bundlingPackId: FieldRef<"BundlingItem", 'Int'>
    readonly productId: FieldRef<"BundlingItem", 'Int'>
    readonly createdAt: FieldRef<"BundlingItem", 'DateTime'>
    readonly updatedAt: FieldRef<"BundlingItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BundlingItem findUnique
   */
  export type BundlingItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingItem
     */
    select?: BundlingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingItem
     */
    omit?: BundlingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingItemInclude<ExtArgs> | null
    /**
     * Filter, which BundlingItem to fetch.
     */
    where: BundlingItemWhereUniqueInput
  }

  /**
   * BundlingItem findUniqueOrThrow
   */
  export type BundlingItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingItem
     */
    select?: BundlingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingItem
     */
    omit?: BundlingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingItemInclude<ExtArgs> | null
    /**
     * Filter, which BundlingItem to fetch.
     */
    where: BundlingItemWhereUniqueInput
  }

  /**
   * BundlingItem findFirst
   */
  export type BundlingItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingItem
     */
    select?: BundlingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingItem
     */
    omit?: BundlingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingItemInclude<ExtArgs> | null
    /**
     * Filter, which BundlingItem to fetch.
     */
    where?: BundlingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundlingItems to fetch.
     */
    orderBy?: BundlingItemOrderByWithRelationInput | BundlingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BundlingItems.
     */
    cursor?: BundlingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundlingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundlingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BundlingItems.
     */
    distinct?: BundlingItemScalarFieldEnum | BundlingItemScalarFieldEnum[]
  }

  /**
   * BundlingItem findFirstOrThrow
   */
  export type BundlingItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingItem
     */
    select?: BundlingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingItem
     */
    omit?: BundlingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingItemInclude<ExtArgs> | null
    /**
     * Filter, which BundlingItem to fetch.
     */
    where?: BundlingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundlingItems to fetch.
     */
    orderBy?: BundlingItemOrderByWithRelationInput | BundlingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BundlingItems.
     */
    cursor?: BundlingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundlingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundlingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BundlingItems.
     */
    distinct?: BundlingItemScalarFieldEnum | BundlingItemScalarFieldEnum[]
  }

  /**
   * BundlingItem findMany
   */
  export type BundlingItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingItem
     */
    select?: BundlingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingItem
     */
    omit?: BundlingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingItemInclude<ExtArgs> | null
    /**
     * Filter, which BundlingItems to fetch.
     */
    where?: BundlingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundlingItems to fetch.
     */
    orderBy?: BundlingItemOrderByWithRelationInput | BundlingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BundlingItems.
     */
    cursor?: BundlingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundlingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundlingItems.
     */
    skip?: number
    distinct?: BundlingItemScalarFieldEnum | BundlingItemScalarFieldEnum[]
  }

  /**
   * BundlingItem create
   */
  export type BundlingItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingItem
     */
    select?: BundlingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingItem
     */
    omit?: BundlingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingItemInclude<ExtArgs> | null
    /**
     * The data needed to create a BundlingItem.
     */
    data: XOR<BundlingItemCreateInput, BundlingItemUncheckedCreateInput>
  }

  /**
   * BundlingItem createMany
   */
  export type BundlingItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BundlingItems.
     */
    data: BundlingItemCreateManyInput | BundlingItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BundlingItem createManyAndReturn
   */
  export type BundlingItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingItem
     */
    select?: BundlingItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingItem
     */
    omit?: BundlingItemOmit<ExtArgs> | null
    /**
     * The data used to create many BundlingItems.
     */
    data: BundlingItemCreateManyInput | BundlingItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BundlingItem update
   */
  export type BundlingItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingItem
     */
    select?: BundlingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingItem
     */
    omit?: BundlingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingItemInclude<ExtArgs> | null
    /**
     * The data needed to update a BundlingItem.
     */
    data: XOR<BundlingItemUpdateInput, BundlingItemUncheckedUpdateInput>
    /**
     * Choose, which BundlingItem to update.
     */
    where: BundlingItemWhereUniqueInput
  }

  /**
   * BundlingItem updateMany
   */
  export type BundlingItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BundlingItems.
     */
    data: XOR<BundlingItemUpdateManyMutationInput, BundlingItemUncheckedUpdateManyInput>
    /**
     * Filter which BundlingItems to update
     */
    where?: BundlingItemWhereInput
    /**
     * Limit how many BundlingItems to update.
     */
    limit?: number
  }

  /**
   * BundlingItem updateManyAndReturn
   */
  export type BundlingItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingItem
     */
    select?: BundlingItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingItem
     */
    omit?: BundlingItemOmit<ExtArgs> | null
    /**
     * The data used to update BundlingItems.
     */
    data: XOR<BundlingItemUpdateManyMutationInput, BundlingItemUncheckedUpdateManyInput>
    /**
     * Filter which BundlingItems to update
     */
    where?: BundlingItemWhereInput
    /**
     * Limit how many BundlingItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BundlingItem upsert
   */
  export type BundlingItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingItem
     */
    select?: BundlingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingItem
     */
    omit?: BundlingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingItemInclude<ExtArgs> | null
    /**
     * The filter to search for the BundlingItem to update in case it exists.
     */
    where: BundlingItemWhereUniqueInput
    /**
     * In case the BundlingItem found by the `where` argument doesn't exist, create a new BundlingItem with this data.
     */
    create: XOR<BundlingItemCreateInput, BundlingItemUncheckedCreateInput>
    /**
     * In case the BundlingItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BundlingItemUpdateInput, BundlingItemUncheckedUpdateInput>
  }

  /**
   * BundlingItem delete
   */
  export type BundlingItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingItem
     */
    select?: BundlingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingItem
     */
    omit?: BundlingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingItemInclude<ExtArgs> | null
    /**
     * Filter which BundlingItem to delete.
     */
    where: BundlingItemWhereUniqueInput
  }

  /**
   * BundlingItem deleteMany
   */
  export type BundlingItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BundlingItems to delete
     */
    where?: BundlingItemWhereInput
    /**
     * Limit how many BundlingItems to delete.
     */
    limit?: number
  }

  /**
   * BundlingItem without action
   */
  export type BundlingItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingItem
     */
    select?: BundlingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingItem
     */
    omit?: BundlingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingItemInclude<ExtArgs> | null
  }


  /**
   * Model BundlingPackage
   */

  export type AggregateBundlingPackage = {
    _count: BundlingPackageCountAggregateOutputType | null
    _avg: BundlingPackageAvgAggregateOutputType | null
    _sum: BundlingPackageSumAggregateOutputType | null
    _min: BundlingPackageMinAggregateOutputType | null
    _max: BundlingPackageMaxAggregateOutputType | null
  }

  export type BundlingPackageAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type BundlingPackageSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type BundlingPackageMinAggregateOutputType = {
    id: number | null
    benefit: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BundlingPackageMaxAggregateOutputType = {
    id: number | null
    benefit: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BundlingPackageCountAggregateOutputType = {
    id: number
    benefit: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BundlingPackageAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type BundlingPackageSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type BundlingPackageMinAggregateInputType = {
    id?: true
    benefit?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BundlingPackageMaxAggregateInputType = {
    id?: true
    benefit?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BundlingPackageCountAggregateInputType = {
    id?: true
    benefit?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BundlingPackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BundlingPackage to aggregate.
     */
    where?: BundlingPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundlingPackages to fetch.
     */
    orderBy?: BundlingPackageOrderByWithRelationInput | BundlingPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BundlingPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundlingPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundlingPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BundlingPackages
    **/
    _count?: true | BundlingPackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BundlingPackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BundlingPackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BundlingPackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BundlingPackageMaxAggregateInputType
  }

  export type GetBundlingPackageAggregateType<T extends BundlingPackageAggregateArgs> = {
        [P in keyof T & keyof AggregateBundlingPackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBundlingPackage[P]>
      : GetScalarType<T[P], AggregateBundlingPackage[P]>
  }




  export type BundlingPackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BundlingPackageWhereInput
    orderBy?: BundlingPackageOrderByWithAggregationInput | BundlingPackageOrderByWithAggregationInput[]
    by: BundlingPackageScalarFieldEnum[] | BundlingPackageScalarFieldEnum
    having?: BundlingPackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BundlingPackageCountAggregateInputType | true
    _avg?: BundlingPackageAvgAggregateInputType
    _sum?: BundlingPackageSumAggregateInputType
    _min?: BundlingPackageMinAggregateInputType
    _max?: BundlingPackageMaxAggregateInputType
  }

  export type BundlingPackageGroupByOutputType = {
    id: number
    benefit: string
    price: number
    createdAt: Date
    updatedAt: Date
    _count: BundlingPackageCountAggregateOutputType | null
    _avg: BundlingPackageAvgAggregateOutputType | null
    _sum: BundlingPackageSumAggregateOutputType | null
    _min: BundlingPackageMinAggregateOutputType | null
    _max: BundlingPackageMaxAggregateOutputType | null
  }

  type GetBundlingPackageGroupByPayload<T extends BundlingPackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BundlingPackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BundlingPackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BundlingPackageGroupByOutputType[P]>
            : GetScalarType<T[P], BundlingPackageGroupByOutputType[P]>
        }
      >
    >


  export type BundlingPackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    benefit?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    BundlingItem?: boolean | BundlingPackage$BundlingItemArgs<ExtArgs>
    Transaction?: boolean | BundlingPackage$TransactionArgs<ExtArgs>
    _count?: boolean | BundlingPackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bundlingPackage"]>

  export type BundlingPackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    benefit?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bundlingPackage"]>

  export type BundlingPackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    benefit?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bundlingPackage"]>

  export type BundlingPackageSelectScalar = {
    id?: boolean
    benefit?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BundlingPackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "benefit" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["bundlingPackage"]>
  export type BundlingPackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BundlingItem?: boolean | BundlingPackage$BundlingItemArgs<ExtArgs>
    Transaction?: boolean | BundlingPackage$TransactionArgs<ExtArgs>
    _count?: boolean | BundlingPackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BundlingPackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BundlingPackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BundlingPackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BundlingPackage"
    objects: {
      BundlingItem: Prisma.$BundlingItemPayload<ExtArgs>[]
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      benefit: string
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bundlingPackage"]>
    composites: {}
  }

  type BundlingPackageGetPayload<S extends boolean | null | undefined | BundlingPackageDefaultArgs> = $Result.GetResult<Prisma.$BundlingPackagePayload, S>

  type BundlingPackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BundlingPackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BundlingPackageCountAggregateInputType | true
    }

  export interface BundlingPackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BundlingPackage'], meta: { name: 'BundlingPackage' } }
    /**
     * Find zero or one BundlingPackage that matches the filter.
     * @param {BundlingPackageFindUniqueArgs} args - Arguments to find a BundlingPackage
     * @example
     * // Get one BundlingPackage
     * const bundlingPackage = await prisma.bundlingPackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BundlingPackageFindUniqueArgs>(args: SelectSubset<T, BundlingPackageFindUniqueArgs<ExtArgs>>): Prisma__BundlingPackageClient<$Result.GetResult<Prisma.$BundlingPackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BundlingPackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BundlingPackageFindUniqueOrThrowArgs} args - Arguments to find a BundlingPackage
     * @example
     * // Get one BundlingPackage
     * const bundlingPackage = await prisma.bundlingPackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BundlingPackageFindUniqueOrThrowArgs>(args: SelectSubset<T, BundlingPackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BundlingPackageClient<$Result.GetResult<Prisma.$BundlingPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BundlingPackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlingPackageFindFirstArgs} args - Arguments to find a BundlingPackage
     * @example
     * // Get one BundlingPackage
     * const bundlingPackage = await prisma.bundlingPackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BundlingPackageFindFirstArgs>(args?: SelectSubset<T, BundlingPackageFindFirstArgs<ExtArgs>>): Prisma__BundlingPackageClient<$Result.GetResult<Prisma.$BundlingPackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BundlingPackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlingPackageFindFirstOrThrowArgs} args - Arguments to find a BundlingPackage
     * @example
     * // Get one BundlingPackage
     * const bundlingPackage = await prisma.bundlingPackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BundlingPackageFindFirstOrThrowArgs>(args?: SelectSubset<T, BundlingPackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__BundlingPackageClient<$Result.GetResult<Prisma.$BundlingPackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BundlingPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlingPackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BundlingPackages
     * const bundlingPackages = await prisma.bundlingPackage.findMany()
     * 
     * // Get first 10 BundlingPackages
     * const bundlingPackages = await prisma.bundlingPackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bundlingPackageWithIdOnly = await prisma.bundlingPackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BundlingPackageFindManyArgs>(args?: SelectSubset<T, BundlingPackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundlingPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BundlingPackage.
     * @param {BundlingPackageCreateArgs} args - Arguments to create a BundlingPackage.
     * @example
     * // Create one BundlingPackage
     * const BundlingPackage = await prisma.bundlingPackage.create({
     *   data: {
     *     // ... data to create a BundlingPackage
     *   }
     * })
     * 
     */
    create<T extends BundlingPackageCreateArgs>(args: SelectSubset<T, BundlingPackageCreateArgs<ExtArgs>>): Prisma__BundlingPackageClient<$Result.GetResult<Prisma.$BundlingPackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BundlingPackages.
     * @param {BundlingPackageCreateManyArgs} args - Arguments to create many BundlingPackages.
     * @example
     * // Create many BundlingPackages
     * const bundlingPackage = await prisma.bundlingPackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BundlingPackageCreateManyArgs>(args?: SelectSubset<T, BundlingPackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BundlingPackages and returns the data saved in the database.
     * @param {BundlingPackageCreateManyAndReturnArgs} args - Arguments to create many BundlingPackages.
     * @example
     * // Create many BundlingPackages
     * const bundlingPackage = await prisma.bundlingPackage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BundlingPackages and only return the `id`
     * const bundlingPackageWithIdOnly = await prisma.bundlingPackage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BundlingPackageCreateManyAndReturnArgs>(args?: SelectSubset<T, BundlingPackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundlingPackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BundlingPackage.
     * @param {BundlingPackageDeleteArgs} args - Arguments to delete one BundlingPackage.
     * @example
     * // Delete one BundlingPackage
     * const BundlingPackage = await prisma.bundlingPackage.delete({
     *   where: {
     *     // ... filter to delete one BundlingPackage
     *   }
     * })
     * 
     */
    delete<T extends BundlingPackageDeleteArgs>(args: SelectSubset<T, BundlingPackageDeleteArgs<ExtArgs>>): Prisma__BundlingPackageClient<$Result.GetResult<Prisma.$BundlingPackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BundlingPackage.
     * @param {BundlingPackageUpdateArgs} args - Arguments to update one BundlingPackage.
     * @example
     * // Update one BundlingPackage
     * const bundlingPackage = await prisma.bundlingPackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BundlingPackageUpdateArgs>(args: SelectSubset<T, BundlingPackageUpdateArgs<ExtArgs>>): Prisma__BundlingPackageClient<$Result.GetResult<Prisma.$BundlingPackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BundlingPackages.
     * @param {BundlingPackageDeleteManyArgs} args - Arguments to filter BundlingPackages to delete.
     * @example
     * // Delete a few BundlingPackages
     * const { count } = await prisma.bundlingPackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BundlingPackageDeleteManyArgs>(args?: SelectSubset<T, BundlingPackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BundlingPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlingPackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BundlingPackages
     * const bundlingPackage = await prisma.bundlingPackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BundlingPackageUpdateManyArgs>(args: SelectSubset<T, BundlingPackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BundlingPackages and returns the data updated in the database.
     * @param {BundlingPackageUpdateManyAndReturnArgs} args - Arguments to update many BundlingPackages.
     * @example
     * // Update many BundlingPackages
     * const bundlingPackage = await prisma.bundlingPackage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BundlingPackages and only return the `id`
     * const bundlingPackageWithIdOnly = await prisma.bundlingPackage.updateManyAndReturn({
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
    updateManyAndReturn<T extends BundlingPackageUpdateManyAndReturnArgs>(args: SelectSubset<T, BundlingPackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundlingPackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BundlingPackage.
     * @param {BundlingPackageUpsertArgs} args - Arguments to update or create a BundlingPackage.
     * @example
     * // Update or create a BundlingPackage
     * const bundlingPackage = await prisma.bundlingPackage.upsert({
     *   create: {
     *     // ... data to create a BundlingPackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BundlingPackage we want to update
     *   }
     * })
     */
    upsert<T extends BundlingPackageUpsertArgs>(args: SelectSubset<T, BundlingPackageUpsertArgs<ExtArgs>>): Prisma__BundlingPackageClient<$Result.GetResult<Prisma.$BundlingPackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BundlingPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlingPackageCountArgs} args - Arguments to filter BundlingPackages to count.
     * @example
     * // Count the number of BundlingPackages
     * const count = await prisma.bundlingPackage.count({
     *   where: {
     *     // ... the filter for the BundlingPackages we want to count
     *   }
     * })
    **/
    count<T extends BundlingPackageCountArgs>(
      args?: Subset<T, BundlingPackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BundlingPackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BundlingPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlingPackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BundlingPackageAggregateArgs>(args: Subset<T, BundlingPackageAggregateArgs>): Prisma.PrismaPromise<GetBundlingPackageAggregateType<T>>

    /**
     * Group by BundlingPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlingPackageGroupByArgs} args - Group by arguments.
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
      T extends BundlingPackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BundlingPackageGroupByArgs['orderBy'] }
        : { orderBy?: BundlingPackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BundlingPackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBundlingPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BundlingPackage model
   */
  readonly fields: BundlingPackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BundlingPackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BundlingPackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    BundlingItem<T extends BundlingPackage$BundlingItemArgs<ExtArgs> = {}>(args?: Subset<T, BundlingPackage$BundlingItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundlingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Transaction<T extends BundlingPackage$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, BundlingPackage$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BundlingPackage model
   */
  interface BundlingPackageFieldRefs {
    readonly id: FieldRef<"BundlingPackage", 'Int'>
    readonly benefit: FieldRef<"BundlingPackage", 'String'>
    readonly price: FieldRef<"BundlingPackage", 'Float'>
    readonly createdAt: FieldRef<"BundlingPackage", 'DateTime'>
    readonly updatedAt: FieldRef<"BundlingPackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BundlingPackage findUnique
   */
  export type BundlingPackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingPackage
     */
    select?: BundlingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingPackage
     */
    omit?: BundlingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingPackageInclude<ExtArgs> | null
    /**
     * Filter, which BundlingPackage to fetch.
     */
    where: BundlingPackageWhereUniqueInput
  }

  /**
   * BundlingPackage findUniqueOrThrow
   */
  export type BundlingPackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingPackage
     */
    select?: BundlingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingPackage
     */
    omit?: BundlingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingPackageInclude<ExtArgs> | null
    /**
     * Filter, which BundlingPackage to fetch.
     */
    where: BundlingPackageWhereUniqueInput
  }

  /**
   * BundlingPackage findFirst
   */
  export type BundlingPackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingPackage
     */
    select?: BundlingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingPackage
     */
    omit?: BundlingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingPackageInclude<ExtArgs> | null
    /**
     * Filter, which BundlingPackage to fetch.
     */
    where?: BundlingPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundlingPackages to fetch.
     */
    orderBy?: BundlingPackageOrderByWithRelationInput | BundlingPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BundlingPackages.
     */
    cursor?: BundlingPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundlingPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundlingPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BundlingPackages.
     */
    distinct?: BundlingPackageScalarFieldEnum | BundlingPackageScalarFieldEnum[]
  }

  /**
   * BundlingPackage findFirstOrThrow
   */
  export type BundlingPackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingPackage
     */
    select?: BundlingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingPackage
     */
    omit?: BundlingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingPackageInclude<ExtArgs> | null
    /**
     * Filter, which BundlingPackage to fetch.
     */
    where?: BundlingPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundlingPackages to fetch.
     */
    orderBy?: BundlingPackageOrderByWithRelationInput | BundlingPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BundlingPackages.
     */
    cursor?: BundlingPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundlingPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundlingPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BundlingPackages.
     */
    distinct?: BundlingPackageScalarFieldEnum | BundlingPackageScalarFieldEnum[]
  }

  /**
   * BundlingPackage findMany
   */
  export type BundlingPackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingPackage
     */
    select?: BundlingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingPackage
     */
    omit?: BundlingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingPackageInclude<ExtArgs> | null
    /**
     * Filter, which BundlingPackages to fetch.
     */
    where?: BundlingPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundlingPackages to fetch.
     */
    orderBy?: BundlingPackageOrderByWithRelationInput | BundlingPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BundlingPackages.
     */
    cursor?: BundlingPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundlingPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundlingPackages.
     */
    skip?: number
    distinct?: BundlingPackageScalarFieldEnum | BundlingPackageScalarFieldEnum[]
  }

  /**
   * BundlingPackage create
   */
  export type BundlingPackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingPackage
     */
    select?: BundlingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingPackage
     */
    omit?: BundlingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingPackageInclude<ExtArgs> | null
    /**
     * The data needed to create a BundlingPackage.
     */
    data: XOR<BundlingPackageCreateInput, BundlingPackageUncheckedCreateInput>
  }

  /**
   * BundlingPackage createMany
   */
  export type BundlingPackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BundlingPackages.
     */
    data: BundlingPackageCreateManyInput | BundlingPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BundlingPackage createManyAndReturn
   */
  export type BundlingPackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingPackage
     */
    select?: BundlingPackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingPackage
     */
    omit?: BundlingPackageOmit<ExtArgs> | null
    /**
     * The data used to create many BundlingPackages.
     */
    data: BundlingPackageCreateManyInput | BundlingPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BundlingPackage update
   */
  export type BundlingPackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingPackage
     */
    select?: BundlingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingPackage
     */
    omit?: BundlingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingPackageInclude<ExtArgs> | null
    /**
     * The data needed to update a BundlingPackage.
     */
    data: XOR<BundlingPackageUpdateInput, BundlingPackageUncheckedUpdateInput>
    /**
     * Choose, which BundlingPackage to update.
     */
    where: BundlingPackageWhereUniqueInput
  }

  /**
   * BundlingPackage updateMany
   */
  export type BundlingPackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BundlingPackages.
     */
    data: XOR<BundlingPackageUpdateManyMutationInput, BundlingPackageUncheckedUpdateManyInput>
    /**
     * Filter which BundlingPackages to update
     */
    where?: BundlingPackageWhereInput
    /**
     * Limit how many BundlingPackages to update.
     */
    limit?: number
  }

  /**
   * BundlingPackage updateManyAndReturn
   */
  export type BundlingPackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingPackage
     */
    select?: BundlingPackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingPackage
     */
    omit?: BundlingPackageOmit<ExtArgs> | null
    /**
     * The data used to update BundlingPackages.
     */
    data: XOR<BundlingPackageUpdateManyMutationInput, BundlingPackageUncheckedUpdateManyInput>
    /**
     * Filter which BundlingPackages to update
     */
    where?: BundlingPackageWhereInput
    /**
     * Limit how many BundlingPackages to update.
     */
    limit?: number
  }

  /**
   * BundlingPackage upsert
   */
  export type BundlingPackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingPackage
     */
    select?: BundlingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingPackage
     */
    omit?: BundlingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingPackageInclude<ExtArgs> | null
    /**
     * The filter to search for the BundlingPackage to update in case it exists.
     */
    where: BundlingPackageWhereUniqueInput
    /**
     * In case the BundlingPackage found by the `where` argument doesn't exist, create a new BundlingPackage with this data.
     */
    create: XOR<BundlingPackageCreateInput, BundlingPackageUncheckedCreateInput>
    /**
     * In case the BundlingPackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BundlingPackageUpdateInput, BundlingPackageUncheckedUpdateInput>
  }

  /**
   * BundlingPackage delete
   */
  export type BundlingPackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingPackage
     */
    select?: BundlingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingPackage
     */
    omit?: BundlingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingPackageInclude<ExtArgs> | null
    /**
     * Filter which BundlingPackage to delete.
     */
    where: BundlingPackageWhereUniqueInput
  }

  /**
   * BundlingPackage deleteMany
   */
  export type BundlingPackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BundlingPackages to delete
     */
    where?: BundlingPackageWhereInput
    /**
     * Limit how many BundlingPackages to delete.
     */
    limit?: number
  }

  /**
   * BundlingPackage.BundlingItem
   */
  export type BundlingPackage$BundlingItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingItem
     */
    select?: BundlingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingItem
     */
    omit?: BundlingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingItemInclude<ExtArgs> | null
    where?: BundlingItemWhereInput
    orderBy?: BundlingItemOrderByWithRelationInput | BundlingItemOrderByWithRelationInput[]
    cursor?: BundlingItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BundlingItemScalarFieldEnum | BundlingItemScalarFieldEnum[]
  }

  /**
   * BundlingPackage.Transaction
   */
  export type BundlingPackage$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * BundlingPackage without action
   */
  export type BundlingPackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlingPackage
     */
    select?: BundlingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BundlingPackage
     */
    omit?: BundlingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundlingPackageInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    bundlingPackId: number | null
    totalPrice: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    bundlingPackId: number | null
    totalPrice: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    bundlingPackId: number | null
    totalPrice: number | null
    paymentStatus: string | null
    orderNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    bundlingPackId: number | null
    totalPrice: number | null
    paymentStatus: string | null
    orderNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    bundlingPackId: number
    totalPrice: number
    paymentStatus: number
    orderNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    userId?: true
    bundlingPackId?: true
    totalPrice?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    userId?: true
    bundlingPackId?: true
    totalPrice?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    bundlingPackId?: true
    totalPrice?: true
    paymentStatus?: true
    orderNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    bundlingPackId?: true
    totalPrice?: true
    paymentStatus?: true
    orderNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    bundlingPackId?: true
    totalPrice?: true
    paymentStatus?: true
    orderNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    userId: number
    bundlingPackId: number
    totalPrice: number
    paymentStatus: string
    orderNumber: string
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bundlingPackId?: boolean
    totalPrice?: boolean
    paymentStatus?: boolean
    orderNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    BundlingPackage?: boolean | BundlingPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bundlingPackId?: boolean
    totalPrice?: boolean
    paymentStatus?: boolean
    orderNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    BundlingPackage?: boolean | BundlingPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bundlingPackId?: boolean
    totalPrice?: boolean
    paymentStatus?: boolean
    orderNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    BundlingPackage?: boolean | BundlingPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    bundlingPackId?: boolean
    totalPrice?: boolean
    paymentStatus?: boolean
    orderNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bundlingPackId" | "totalPrice" | "paymentStatus" | "orderNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    BundlingPackage?: boolean | BundlingPackageDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    BundlingPackage?: boolean | BundlingPackageDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    BundlingPackage?: boolean | BundlingPackageDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
      BundlingPackage: Prisma.$BundlingPackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      bundlingPackId: number
      totalPrice: number
      paymentStatus: string
      orderNumber: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    BundlingPackage<T extends BundlingPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BundlingPackageDefaultArgs<ExtArgs>>): Prisma__BundlingPackageClient<$Result.GetResult<Prisma.$BundlingPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly userId: FieldRef<"Transaction", 'Int'>
    readonly bundlingPackId: FieldRef<"Transaction", 'Int'>
    readonly totalPrice: FieldRef<"Transaction", 'Float'>
    readonly paymentStatus: FieldRef<"Transaction", 'String'>
    readonly orderNumber: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brandId: 'brandId',
    itemCode: 'itemCode',
    price: 'price',
    stock: 'stock',
    categoryId: 'categoryId',
    benefitId: 'benefitId',
    imageId: 'imageId',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const BenefitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BenefitScalarFieldEnum = (typeof BenefitScalarFieldEnum)[keyof typeof BenefitScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const CalculationDataScalarFieldEnum: {
    id: 'id',
    transaction: 'transaction',
    productId: 'productId',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CalculationDataScalarFieldEnum = (typeof CalculationDataScalarFieldEnum)[keyof typeof CalculationDataScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    role: 'role',
    address: 'address',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const BundleCategoryScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    benefitId: 'benefitId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BundleCategoryScalarFieldEnum = (typeof BundleCategoryScalarFieldEnum)[keyof typeof BundleCategoryScalarFieldEnum]


  export const RatingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    rating: 'rating',
    review: 'review',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RatingsScalarFieldEnum = (typeof RatingsScalarFieldEnum)[keyof typeof RatingsScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    image: 'image',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const ItemRecomendationScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemRecomendationScalarFieldEnum = (typeof ItemRecomendationScalarFieldEnum)[keyof typeof ItemRecomendationScalarFieldEnum]


  export const BundlingItemScalarFieldEnum: {
    id: 'id',
    bundlingPackId: 'bundlingPackId',
    productId: 'productId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BundlingItemScalarFieldEnum = (typeof BundlingItemScalarFieldEnum)[keyof typeof BundlingItemScalarFieldEnum]


  export const BundlingPackageScalarFieldEnum: {
    id: 'id',
    benefit: 'benefit',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BundlingPackageScalarFieldEnum = (typeof BundlingPackageScalarFieldEnum)[keyof typeof BundlingPackageScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bundlingPackId: 'bundlingPackId',
    totalPrice: 'totalPrice',
    paymentStatus: 'paymentStatus',
    orderNumber: 'orderNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    brandId?: IntNullableFilter<"Product"> | number | null
    itemCode?: StringFilter<"Product"> | string
    price?: FloatNullableFilter<"Product"> | number | null
    stock?: IntNullableFilter<"Product"> | number | null
    categoryId?: IntNullableFilter<"Product"> | number | null
    benefitId?: IntNullableFilter<"Product"> | number | null
    imageId?: IntNullableFilter<"Product"> | number | null
    imageUrl?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    Brand?: XOR<BrandNullableScalarRelationFilter, BrandWhereInput> | null
    Category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    Benefit?: XOR<BenefitNullableScalarRelationFilter, BenefitWhereInput> | null
    CalculationData?: CalculationDataListRelationFilter
    Ratings?: RatingsListRelationFilter
    ItemRecomendation?: ItemRecomendationListRelationFilter
    BundlingItem?: BundlingItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrderInput | SortOrder
    itemCode?: SortOrder
    price?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    benefitId?: SortOrderInput | SortOrder
    imageId?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Brand?: BrandOrderByWithRelationInput
    Category?: CategoryOrderByWithRelationInput
    Benefit?: BenefitOrderByWithRelationInput
    CalculationData?: CalculationDataOrderByRelationAggregateInput
    Ratings?: RatingsOrderByRelationAggregateInput
    ItemRecomendation?: ItemRecomendationOrderByRelationAggregateInput
    BundlingItem?: BundlingItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    brandId?: IntNullableFilter<"Product"> | number | null
    itemCode?: StringFilter<"Product"> | string
    price?: FloatNullableFilter<"Product"> | number | null
    stock?: IntNullableFilter<"Product"> | number | null
    categoryId?: IntNullableFilter<"Product"> | number | null
    benefitId?: IntNullableFilter<"Product"> | number | null
    imageId?: IntNullableFilter<"Product"> | number | null
    imageUrl?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    Brand?: XOR<BrandNullableScalarRelationFilter, BrandWhereInput> | null
    Category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    Benefit?: XOR<BenefitNullableScalarRelationFilter, BenefitWhereInput> | null
    CalculationData?: CalculationDataListRelationFilter
    Ratings?: RatingsListRelationFilter
    ItemRecomendation?: ItemRecomendationListRelationFilter
    BundlingItem?: BundlingItemListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrderInput | SortOrder
    itemCode?: SortOrder
    price?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    benefitId?: SortOrderInput | SortOrder
    imageId?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    brandId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    itemCode?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    stock?: IntNullableWithAggregatesFilter<"Product"> | number | null
    categoryId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    benefitId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    imageId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    imageUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type BenefitWhereInput = {
    AND?: BenefitWhereInput | BenefitWhereInput[]
    OR?: BenefitWhereInput[]
    NOT?: BenefitWhereInput | BenefitWhereInput[]
    id?: IntFilter<"Benefit"> | number
    name?: StringFilter<"Benefit"> | string
    createdAt?: DateTimeFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeFilter<"Benefit"> | Date | string
    Product?: ProductListRelationFilter
    BundleCategory?: BundleCategoryListRelationFilter
  }

  export type BenefitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
    BundleCategory?: BundleCategoryOrderByRelationAggregateInput
  }

  export type BenefitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BenefitWhereInput | BenefitWhereInput[]
    OR?: BenefitWhereInput[]
    NOT?: BenefitWhereInput | BenefitWhereInput[]
    name?: StringFilter<"Benefit"> | string
    createdAt?: DateTimeFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeFilter<"Benefit"> | Date | string
    Product?: ProductListRelationFilter
    BundleCategory?: BundleCategoryListRelationFilter
  }, "id">

  export type BenefitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BenefitCountOrderByAggregateInput
    _avg?: BenefitAvgOrderByAggregateInput
    _max?: BenefitMaxOrderByAggregateInput
    _min?: BenefitMinOrderByAggregateInput
    _sum?: BenefitSumOrderByAggregateInput
  }

  export type BenefitScalarWhereWithAggregatesInput = {
    AND?: BenefitScalarWhereWithAggregatesInput | BenefitScalarWhereWithAggregatesInput[]
    OR?: BenefitScalarWhereWithAggregatesInput[]
    NOT?: BenefitScalarWhereWithAggregatesInput | BenefitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Benefit"> | number
    name?: StringWithAggregatesFilter<"Benefit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Benefit"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    Product?: ProductListRelationFilter
    BundleCategory?: BundleCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
    BundleCategory?: BundleCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    Product?: ProductListRelationFilter
    BundleCategory?: BundleCategoryListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: IntFilter<"Brand"> | number
    name?: StringFilter<"Brand"> | string
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    Product?: ProductListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    name?: StringFilter<"Brand"> | string
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    Product?: ProductListRelationFilter
  }, "id">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _avg?: BrandAvgOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
    _sum?: BrandSumOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Brand"> | number
    name?: StringWithAggregatesFilter<"Brand"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
  }

  export type CalculationDataWhereInput = {
    AND?: CalculationDataWhereInput | CalculationDataWhereInput[]
    OR?: CalculationDataWhereInput[]
    NOT?: CalculationDataWhereInput | CalculationDataWhereInput[]
    id?: IntFilter<"CalculationData"> | number
    transaction?: StringFilter<"CalculationData"> | string
    productId?: IntFilter<"CalculationData"> | number
    value?: IntFilter<"CalculationData"> | number
    createdAt?: DateTimeFilter<"CalculationData"> | Date | string
    updatedAt?: DateTimeFilter<"CalculationData"> | Date | string
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type CalculationDataOrderByWithRelationInput = {
    id?: SortOrder
    transaction?: SortOrder
    productId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Product?: ProductOrderByWithRelationInput
  }

  export type CalculationDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CalculationDataWhereInput | CalculationDataWhereInput[]
    OR?: CalculationDataWhereInput[]
    NOT?: CalculationDataWhereInput | CalculationDataWhereInput[]
    transaction?: StringFilter<"CalculationData"> | string
    productId?: IntFilter<"CalculationData"> | number
    value?: IntFilter<"CalculationData"> | number
    createdAt?: DateTimeFilter<"CalculationData"> | Date | string
    updatedAt?: DateTimeFilter<"CalculationData"> | Date | string
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type CalculationDataOrderByWithAggregationInput = {
    id?: SortOrder
    transaction?: SortOrder
    productId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CalculationDataCountOrderByAggregateInput
    _avg?: CalculationDataAvgOrderByAggregateInput
    _max?: CalculationDataMaxOrderByAggregateInput
    _min?: CalculationDataMinOrderByAggregateInput
    _sum?: CalculationDataSumOrderByAggregateInput
  }

  export type CalculationDataScalarWhereWithAggregatesInput = {
    AND?: CalculationDataScalarWhereWithAggregatesInput | CalculationDataScalarWhereWithAggregatesInput[]
    OR?: CalculationDataScalarWhereWithAggregatesInput[]
    NOT?: CalculationDataScalarWhereWithAggregatesInput | CalculationDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CalculationData"> | number
    transaction?: StringWithAggregatesFilter<"CalculationData"> | string
    productId?: IntWithAggregatesFilter<"CalculationData"> | number
    value?: IntWithAggregatesFilter<"CalculationData"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CalculationData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CalculationData"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    address?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    Ratings?: RatingsListRelationFilter
    Transaction?: TransactionListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Ratings?: RatingsOrderByRelationAggregateInput
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    address?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    Ratings?: RatingsListRelationFilter
    Transaction?: TransactionListRelationFilter
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role?: StringWithAggregatesFilter<"Users"> | string
    address?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type BundleCategoryWhereInput = {
    AND?: BundleCategoryWhereInput | BundleCategoryWhereInput[]
    OR?: BundleCategoryWhereInput[]
    NOT?: BundleCategoryWhereInput | BundleCategoryWhereInput[]
    id?: IntFilter<"BundleCategory"> | number
    categoryId?: IntFilter<"BundleCategory"> | number
    benefitId?: IntFilter<"BundleCategory"> | number
    createdAt?: DateTimeFilter<"BundleCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BundleCategory"> | Date | string
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    Benefit?: XOR<BenefitScalarRelationFilter, BenefitWhereInput>
  }

  export type BundleCategoryOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    benefitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Category?: CategoryOrderByWithRelationInput
    Benefit?: BenefitOrderByWithRelationInput
  }

  export type BundleCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BundleCategoryWhereInput | BundleCategoryWhereInput[]
    OR?: BundleCategoryWhereInput[]
    NOT?: BundleCategoryWhereInput | BundleCategoryWhereInput[]
    categoryId?: IntFilter<"BundleCategory"> | number
    benefitId?: IntFilter<"BundleCategory"> | number
    createdAt?: DateTimeFilter<"BundleCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BundleCategory"> | Date | string
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    Benefit?: XOR<BenefitScalarRelationFilter, BenefitWhereInput>
  }, "id">

  export type BundleCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    benefitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BundleCategoryCountOrderByAggregateInput
    _avg?: BundleCategoryAvgOrderByAggregateInput
    _max?: BundleCategoryMaxOrderByAggregateInput
    _min?: BundleCategoryMinOrderByAggregateInput
    _sum?: BundleCategorySumOrderByAggregateInput
  }

  export type BundleCategoryScalarWhereWithAggregatesInput = {
    AND?: BundleCategoryScalarWhereWithAggregatesInput | BundleCategoryScalarWhereWithAggregatesInput[]
    OR?: BundleCategoryScalarWhereWithAggregatesInput[]
    NOT?: BundleCategoryScalarWhereWithAggregatesInput | BundleCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BundleCategory"> | number
    categoryId?: IntWithAggregatesFilter<"BundleCategory"> | number
    benefitId?: IntWithAggregatesFilter<"BundleCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BundleCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BundleCategory"> | Date | string
  }

  export type RatingsWhereInput = {
    AND?: RatingsWhereInput | RatingsWhereInput[]
    OR?: RatingsWhereInput[]
    NOT?: RatingsWhereInput | RatingsWhereInput[]
    id?: IntFilter<"Ratings"> | number
    userId?: IntFilter<"Ratings"> | number
    productId?: IntFilter<"Ratings"> | number
    rating?: IntFilter<"Ratings"> | number
    review?: StringFilter<"Ratings"> | string
    createdAt?: DateTimeFilter<"Ratings"> | Date | string
    updatedAt?: DateTimeFilter<"Ratings"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type RatingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
    Product?: ProductOrderByWithRelationInput
  }

  export type RatingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RatingsWhereInput | RatingsWhereInput[]
    OR?: RatingsWhereInput[]
    NOT?: RatingsWhereInput | RatingsWhereInput[]
    userId?: IntFilter<"Ratings"> | number
    productId?: IntFilter<"Ratings"> | number
    rating?: IntFilter<"Ratings"> | number
    review?: StringFilter<"Ratings"> | string
    createdAt?: DateTimeFilter<"Ratings"> | Date | string
    updatedAt?: DateTimeFilter<"Ratings"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type RatingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RatingsCountOrderByAggregateInput
    _avg?: RatingsAvgOrderByAggregateInput
    _max?: RatingsMaxOrderByAggregateInput
    _min?: RatingsMinOrderByAggregateInput
    _sum?: RatingsSumOrderByAggregateInput
  }

  export type RatingsScalarWhereWithAggregatesInput = {
    AND?: RatingsScalarWhereWithAggregatesInput | RatingsScalarWhereWithAggregatesInput[]
    OR?: RatingsScalarWhereWithAggregatesInput[]
    NOT?: RatingsScalarWhereWithAggregatesInput | RatingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ratings"> | number
    userId?: IntWithAggregatesFilter<"Ratings"> | number
    productId?: IntWithAggregatesFilter<"Ratings"> | number
    rating?: IntWithAggregatesFilter<"Ratings"> | number
    review?: StringWithAggregatesFilter<"Ratings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ratings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ratings"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    image?: StringFilter<"Image"> | string
    imageUrl?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    image?: StringFilter<"Image"> | string
    imageUrl?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    image?: StringWithAggregatesFilter<"Image"> | string
    imageUrl?: StringWithAggregatesFilter<"Image"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type ItemRecomendationWhereInput = {
    AND?: ItemRecomendationWhereInput | ItemRecomendationWhereInput[]
    OR?: ItemRecomendationWhereInput[]
    NOT?: ItemRecomendationWhereInput | ItemRecomendationWhereInput[]
    id?: IntFilter<"ItemRecomendation"> | number
    productId?: IntFilter<"ItemRecomendation"> | number
    createdAt?: DateTimeFilter<"ItemRecomendation"> | Date | string
    updatedAt?: DateTimeFilter<"ItemRecomendation"> | Date | string
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ItemRecomendationOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Product?: ProductOrderByWithRelationInput
  }

  export type ItemRecomendationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemRecomendationWhereInput | ItemRecomendationWhereInput[]
    OR?: ItemRecomendationWhereInput[]
    NOT?: ItemRecomendationWhereInput | ItemRecomendationWhereInput[]
    productId?: IntFilter<"ItemRecomendation"> | number
    createdAt?: DateTimeFilter<"ItemRecomendation"> | Date | string
    updatedAt?: DateTimeFilter<"ItemRecomendation"> | Date | string
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ItemRecomendationOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemRecomendationCountOrderByAggregateInput
    _avg?: ItemRecomendationAvgOrderByAggregateInput
    _max?: ItemRecomendationMaxOrderByAggregateInput
    _min?: ItemRecomendationMinOrderByAggregateInput
    _sum?: ItemRecomendationSumOrderByAggregateInput
  }

  export type ItemRecomendationScalarWhereWithAggregatesInput = {
    AND?: ItemRecomendationScalarWhereWithAggregatesInput | ItemRecomendationScalarWhereWithAggregatesInput[]
    OR?: ItemRecomendationScalarWhereWithAggregatesInput[]
    NOT?: ItemRecomendationScalarWhereWithAggregatesInput | ItemRecomendationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemRecomendation"> | number
    productId?: IntWithAggregatesFilter<"ItemRecomendation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ItemRecomendation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ItemRecomendation"> | Date | string
  }

  export type BundlingItemWhereInput = {
    AND?: BundlingItemWhereInput | BundlingItemWhereInput[]
    OR?: BundlingItemWhereInput[]
    NOT?: BundlingItemWhereInput | BundlingItemWhereInput[]
    id?: IntFilter<"BundlingItem"> | number
    bundlingPackId?: IntFilter<"BundlingItem"> | number
    productId?: IntFilter<"BundlingItem"> | number
    createdAt?: DateTimeFilter<"BundlingItem"> | Date | string
    updatedAt?: DateTimeFilter<"BundlingItem"> | Date | string
    BundlingPackage?: XOR<BundlingPackageScalarRelationFilter, BundlingPackageWhereInput>
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type BundlingItemOrderByWithRelationInput = {
    id?: SortOrder
    bundlingPackId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    BundlingPackage?: BundlingPackageOrderByWithRelationInput
    Product?: ProductOrderByWithRelationInput
  }

  export type BundlingItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BundlingItemWhereInput | BundlingItemWhereInput[]
    OR?: BundlingItemWhereInput[]
    NOT?: BundlingItemWhereInput | BundlingItemWhereInput[]
    bundlingPackId?: IntFilter<"BundlingItem"> | number
    productId?: IntFilter<"BundlingItem"> | number
    createdAt?: DateTimeFilter<"BundlingItem"> | Date | string
    updatedAt?: DateTimeFilter<"BundlingItem"> | Date | string
    BundlingPackage?: XOR<BundlingPackageScalarRelationFilter, BundlingPackageWhereInput>
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type BundlingItemOrderByWithAggregationInput = {
    id?: SortOrder
    bundlingPackId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BundlingItemCountOrderByAggregateInput
    _avg?: BundlingItemAvgOrderByAggregateInput
    _max?: BundlingItemMaxOrderByAggregateInput
    _min?: BundlingItemMinOrderByAggregateInput
    _sum?: BundlingItemSumOrderByAggregateInput
  }

  export type BundlingItemScalarWhereWithAggregatesInput = {
    AND?: BundlingItemScalarWhereWithAggregatesInput | BundlingItemScalarWhereWithAggregatesInput[]
    OR?: BundlingItemScalarWhereWithAggregatesInput[]
    NOT?: BundlingItemScalarWhereWithAggregatesInput | BundlingItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BundlingItem"> | number
    bundlingPackId?: IntWithAggregatesFilter<"BundlingItem"> | number
    productId?: IntWithAggregatesFilter<"BundlingItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BundlingItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BundlingItem"> | Date | string
  }

  export type BundlingPackageWhereInput = {
    AND?: BundlingPackageWhereInput | BundlingPackageWhereInput[]
    OR?: BundlingPackageWhereInput[]
    NOT?: BundlingPackageWhereInput | BundlingPackageWhereInput[]
    id?: IntFilter<"BundlingPackage"> | number
    benefit?: StringFilter<"BundlingPackage"> | string
    price?: FloatFilter<"BundlingPackage"> | number
    createdAt?: DateTimeFilter<"BundlingPackage"> | Date | string
    updatedAt?: DateTimeFilter<"BundlingPackage"> | Date | string
    BundlingItem?: BundlingItemListRelationFilter
    Transaction?: TransactionListRelationFilter
  }

  export type BundlingPackageOrderByWithRelationInput = {
    id?: SortOrder
    benefit?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    BundlingItem?: BundlingItemOrderByRelationAggregateInput
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type BundlingPackageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BundlingPackageWhereInput | BundlingPackageWhereInput[]
    OR?: BundlingPackageWhereInput[]
    NOT?: BundlingPackageWhereInput | BundlingPackageWhereInput[]
    benefit?: StringFilter<"BundlingPackage"> | string
    price?: FloatFilter<"BundlingPackage"> | number
    createdAt?: DateTimeFilter<"BundlingPackage"> | Date | string
    updatedAt?: DateTimeFilter<"BundlingPackage"> | Date | string
    BundlingItem?: BundlingItemListRelationFilter
    Transaction?: TransactionListRelationFilter
  }, "id">

  export type BundlingPackageOrderByWithAggregationInput = {
    id?: SortOrder
    benefit?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BundlingPackageCountOrderByAggregateInput
    _avg?: BundlingPackageAvgOrderByAggregateInput
    _max?: BundlingPackageMaxOrderByAggregateInput
    _min?: BundlingPackageMinOrderByAggregateInput
    _sum?: BundlingPackageSumOrderByAggregateInput
  }

  export type BundlingPackageScalarWhereWithAggregatesInput = {
    AND?: BundlingPackageScalarWhereWithAggregatesInput | BundlingPackageScalarWhereWithAggregatesInput[]
    OR?: BundlingPackageScalarWhereWithAggregatesInput[]
    NOT?: BundlingPackageScalarWhereWithAggregatesInput | BundlingPackageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BundlingPackage"> | number
    benefit?: StringWithAggregatesFilter<"BundlingPackage"> | string
    price?: FloatWithAggregatesFilter<"BundlingPackage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BundlingPackage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BundlingPackage"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    bundlingPackId?: IntFilter<"Transaction"> | number
    totalPrice?: FloatFilter<"Transaction"> | number
    paymentStatus?: StringFilter<"Transaction"> | string
    orderNumber?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    BundlingPackage?: XOR<BundlingPackageScalarRelationFilter, BundlingPackageWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bundlingPackId?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    orderNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
    BundlingPackage?: BundlingPackageOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: IntFilter<"Transaction"> | number
    bundlingPackId?: IntFilter<"Transaction"> | number
    totalPrice?: FloatFilter<"Transaction"> | number
    paymentStatus?: StringFilter<"Transaction"> | string
    orderNumber?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    BundlingPackage?: XOR<BundlingPackageScalarRelationFilter, BundlingPackageWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bundlingPackId?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    orderNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    userId?: IntWithAggregatesFilter<"Transaction"> | number
    bundlingPackId?: IntWithAggregatesFilter<"Transaction"> | number
    totalPrice?: FloatWithAggregatesFilter<"Transaction"> | number
    paymentStatus?: StringWithAggregatesFilter<"Transaction"> | string
    orderNumber?: StringWithAggregatesFilter<"Transaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type ProductCreateInput = {
    name: string
    itemCode: string
    price?: number | null
    stock?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Brand?: BrandCreateNestedOneWithoutProductInput
    Category?: CategoryCreateNestedOneWithoutProductInput
    Benefit?: BenefitCreateNestedOneWithoutProductInput
    CalculationData?: CalculationDataCreateNestedManyWithoutProductInput
    Ratings?: RatingsCreateNestedManyWithoutProductInput
    ItemRecomendation?: ItemRecomendationCreateNestedManyWithoutProductInput
    BundlingItem?: BundlingItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    brandId?: number | null
    itemCode: string
    price?: number | null
    stock?: number | null
    categoryId?: number | null
    benefitId?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CalculationData?: CalculationDataUncheckedCreateNestedManyWithoutProductInput
    Ratings?: RatingsUncheckedCreateNestedManyWithoutProductInput
    ItemRecomendation?: ItemRecomendationUncheckedCreateNestedManyWithoutProductInput
    BundlingItem?: BundlingItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Brand?: BrandUpdateOneWithoutProductNestedInput
    Category?: CategoryUpdateOneWithoutProductNestedInput
    Benefit?: BenefitUpdateOneWithoutProductNestedInput
    CalculationData?: CalculationDataUpdateManyWithoutProductNestedInput
    Ratings?: RatingsUpdateManyWithoutProductNestedInput
    ItemRecomendation?: ItemRecomendationUpdateManyWithoutProductNestedInput
    BundlingItem?: BundlingItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    benefitId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CalculationData?: CalculationDataUncheckedUpdateManyWithoutProductNestedInput
    Ratings?: RatingsUncheckedUpdateManyWithoutProductNestedInput
    ItemRecomendation?: ItemRecomendationUncheckedUpdateManyWithoutProductNestedInput
    BundlingItem?: BundlingItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    brandId?: number | null
    itemCode: string
    price?: number | null
    stock?: number | null
    categoryId?: number | null
    benefitId?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    benefitId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductCreateNestedManyWithoutBenefitInput
    BundleCategory?: BundleCategoryCreateNestedManyWithoutBenefitInput
  }

  export type BenefitUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutBenefitInput
    BundleCategory?: BundleCategoryUncheckedCreateNestedManyWithoutBenefitInput
  }

  export type BenefitUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateManyWithoutBenefitNestedInput
    BundleCategory?: BundleCategoryUpdateManyWithoutBenefitNestedInput
  }

  export type BenefitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutBenefitNestedInput
    BundleCategory?: BundleCategoryUncheckedUpdateManyWithoutBenefitNestedInput
  }

  export type BenefitCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductCreateNestedManyWithoutCategoryInput
    BundleCategory?: BundleCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    BundleCategory?: BundleCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateManyWithoutCategoryNestedInput
    BundleCategory?: BundleCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    BundleCategory?: BundleCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalculationDataCreateInput = {
    transaction: string
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Product: ProductCreateNestedOneWithoutCalculationDataInput
  }

  export type CalculationDataUncheckedCreateInput = {
    id?: number
    transaction: string
    productId: number
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalculationDataUpdateInput = {
    transaction?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateOneRequiredWithoutCalculationDataNestedInput
  }

  export type CalculationDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalculationDataCreateManyInput = {
    id?: number
    transaction: string
    productId: number
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalculationDataUpdateManyMutationInput = {
    transaction?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalculationDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    name: string
    username: string
    password: string
    role?: string
    address: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Ratings?: RatingsCreateNestedManyWithoutUsersInput
    Transaction?: TransactionCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    username: string
    password: string
    role?: string
    address: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Ratings?: RatingsUncheckedCreateNestedManyWithoutUsersInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ratings?: RatingsUpdateManyWithoutUsersNestedInput
    Transaction?: TransactionUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ratings?: RatingsUncheckedUpdateManyWithoutUsersNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    username: string
    password: string
    role?: string
    address: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundleCategoryCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    Category: CategoryCreateNestedOneWithoutBundleCategoryInput
    Benefit: BenefitCreateNestedOneWithoutBundleCategoryInput
  }

  export type BundleCategoryUncheckedCreateInput = {
    id?: number
    categoryId: number
    benefitId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BundleCategoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneRequiredWithoutBundleCategoryNestedInput
    Benefit?: BenefitUpdateOneRequiredWithoutBundleCategoryNestedInput
  }

  export type BundleCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    benefitId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundleCategoryCreateManyInput = {
    id?: number
    categoryId: number
    benefitId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BundleCategoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundleCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    benefitId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingsCreateInput = {
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users: UsersCreateNestedOneWithoutRatingsInput
    Product: ProductCreateNestedOneWithoutRatingsInput
  }

  export type RatingsUncheckedCreateInput = {
    id?: number
    userId: number
    productId: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingsUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutRatingsNestedInput
    Product?: ProductUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingsCreateManyInput = {
    id?: number
    userId: number
    productId: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingsUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    image: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    image: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyInput = {
    id?: number
    image: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemRecomendationCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    Product: ProductCreateNestedOneWithoutItemRecomendationInput
  }

  export type ItemRecomendationUncheckedCreateInput = {
    id?: number
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemRecomendationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateOneRequiredWithoutItemRecomendationNestedInput
  }

  export type ItemRecomendationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemRecomendationCreateManyInput = {
    id?: number
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemRecomendationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemRecomendationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundlingItemCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    BundlingPackage: BundlingPackageCreateNestedOneWithoutBundlingItemInput
    Product: ProductCreateNestedOneWithoutBundlingItemInput
  }

  export type BundlingItemUncheckedCreateInput = {
    id?: number
    bundlingPackId: number
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BundlingItemUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BundlingPackage?: BundlingPackageUpdateOneRequiredWithoutBundlingItemNestedInput
    Product?: ProductUpdateOneRequiredWithoutBundlingItemNestedInput
  }

  export type BundlingItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bundlingPackId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundlingItemCreateManyInput = {
    id?: number
    bundlingPackId: number
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BundlingItemUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundlingItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bundlingPackId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundlingPackageCreateInput = {
    benefit: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BundlingItem?: BundlingItemCreateNestedManyWithoutBundlingPackageInput
    Transaction?: TransactionCreateNestedManyWithoutBundlingPackageInput
  }

  export type BundlingPackageUncheckedCreateInput = {
    id?: number
    benefit: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BundlingItem?: BundlingItemUncheckedCreateNestedManyWithoutBundlingPackageInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutBundlingPackageInput
  }

  export type BundlingPackageUpdateInput = {
    benefit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BundlingItem?: BundlingItemUpdateManyWithoutBundlingPackageNestedInput
    Transaction?: TransactionUpdateManyWithoutBundlingPackageNestedInput
  }

  export type BundlingPackageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    benefit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BundlingItem?: BundlingItemUncheckedUpdateManyWithoutBundlingPackageNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutBundlingPackageNestedInput
  }

  export type BundlingPackageCreateManyInput = {
    id?: number
    benefit: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BundlingPackageUpdateManyMutationInput = {
    benefit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundlingPackageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    benefit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    totalPrice: number
    paymentStatus: string
    orderNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users: UsersCreateNestedOneWithoutTransactionInput
    BundlingPackage: BundlingPackageCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    userId: number
    bundlingPackId: number
    totalPrice: number
    paymentStatus: string
    orderNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutTransactionNestedInput
    BundlingPackage?: BundlingPackageUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bundlingPackId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    userId: number
    bundlingPackId: number
    totalPrice: number
    paymentStatus: string
    orderNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bundlingPackId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type BrandNullableScalarRelationFilter = {
    is?: BrandWhereInput | null
    isNot?: BrandWhereInput | null
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type BenefitNullableScalarRelationFilter = {
    is?: BenefitWhereInput | null
    isNot?: BenefitWhereInput | null
  }

  export type CalculationDataListRelationFilter = {
    every?: CalculationDataWhereInput
    some?: CalculationDataWhereInput
    none?: CalculationDataWhereInput
  }

  export type RatingsListRelationFilter = {
    every?: RatingsWhereInput
    some?: RatingsWhereInput
    none?: RatingsWhereInput
  }

  export type ItemRecomendationListRelationFilter = {
    every?: ItemRecomendationWhereInput
    some?: ItemRecomendationWhereInput
    none?: ItemRecomendationWhereInput
  }

  export type BundlingItemListRelationFilter = {
    every?: BundlingItemWhereInput
    some?: BundlingItemWhereInput
    none?: BundlingItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CalculationDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemRecomendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BundlingItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    itemCode?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    benefitId?: SortOrder
    imageId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    benefitId?: SortOrder
    imageId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    itemCode?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    benefitId?: SortOrder
    imageId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    itemCode?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    benefitId?: SortOrder
    imageId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    benefitId?: SortOrder
    imageId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type BundleCategoryListRelationFilter = {
    every?: BundleCategoryWhereInput
    some?: BundleCategoryWhereInput
    none?: BundleCategoryWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BundleCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BenefitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BenefitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type CalculationDataCountOrderByAggregateInput = {
    id?: SortOrder
    transaction?: SortOrder
    productId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalculationDataAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    value?: SortOrder
  }

  export type CalculationDataMaxOrderByAggregateInput = {
    id?: SortOrder
    transaction?: SortOrder
    productId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalculationDataMinOrderByAggregateInput = {
    id?: SortOrder
    transaction?: SortOrder
    productId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalculationDataSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    value?: SortOrder
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type BenefitScalarRelationFilter = {
    is?: BenefitWhereInput
    isNot?: BenefitWhereInput
  }

  export type BundleCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    benefitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BundleCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    benefitId?: SortOrder
  }

  export type BundleCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    benefitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BundleCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    benefitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BundleCategorySumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    benefitId?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type RatingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
  }

  export type RatingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItemRecomendationCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemRecomendationAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ItemRecomendationMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemRecomendationMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemRecomendationSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type BundlingPackageScalarRelationFilter = {
    is?: BundlingPackageWhereInput
    isNot?: BundlingPackageWhereInput
  }

  export type BundlingItemCountOrderByAggregateInput = {
    id?: SortOrder
    bundlingPackId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BundlingItemAvgOrderByAggregateInput = {
    id?: SortOrder
    bundlingPackId?: SortOrder
    productId?: SortOrder
  }

  export type BundlingItemMaxOrderByAggregateInput = {
    id?: SortOrder
    bundlingPackId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BundlingItemMinOrderByAggregateInput = {
    id?: SortOrder
    bundlingPackId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BundlingItemSumOrderByAggregateInput = {
    id?: SortOrder
    bundlingPackId?: SortOrder
    productId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BundlingPackageCountOrderByAggregateInput = {
    id?: SortOrder
    benefit?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BundlingPackageAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type BundlingPackageMaxOrderByAggregateInput = {
    id?: SortOrder
    benefit?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BundlingPackageMinOrderByAggregateInput = {
    id?: SortOrder
    benefit?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BundlingPackageSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bundlingPackId?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    orderNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bundlingPackId?: SortOrder
    totalPrice?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bundlingPackId?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    orderNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bundlingPackId?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    orderNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bundlingPackId?: SortOrder
    totalPrice?: SortOrder
  }

  export type BrandCreateNestedOneWithoutProductInput = {
    create?: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductInput
    connect?: BrandWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    connect?: CategoryWhereUniqueInput
  }

  export type BenefitCreateNestedOneWithoutProductInput = {
    create?: XOR<BenefitCreateWithoutProductInput, BenefitUncheckedCreateWithoutProductInput>
    connectOrCreate?: BenefitCreateOrConnectWithoutProductInput
    connect?: BenefitWhereUniqueInput
  }

  export type CalculationDataCreateNestedManyWithoutProductInput = {
    create?: XOR<CalculationDataCreateWithoutProductInput, CalculationDataUncheckedCreateWithoutProductInput> | CalculationDataCreateWithoutProductInput[] | CalculationDataUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CalculationDataCreateOrConnectWithoutProductInput | CalculationDataCreateOrConnectWithoutProductInput[]
    createMany?: CalculationDataCreateManyProductInputEnvelope
    connect?: CalculationDataWhereUniqueInput | CalculationDataWhereUniqueInput[]
  }

  export type RatingsCreateNestedManyWithoutProductInput = {
    create?: XOR<RatingsCreateWithoutProductInput, RatingsUncheckedCreateWithoutProductInput> | RatingsCreateWithoutProductInput[] | RatingsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutProductInput | RatingsCreateOrConnectWithoutProductInput[]
    createMany?: RatingsCreateManyProductInputEnvelope
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
  }

  export type ItemRecomendationCreateNestedManyWithoutProductInput = {
    create?: XOR<ItemRecomendationCreateWithoutProductInput, ItemRecomendationUncheckedCreateWithoutProductInput> | ItemRecomendationCreateWithoutProductInput[] | ItemRecomendationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ItemRecomendationCreateOrConnectWithoutProductInput | ItemRecomendationCreateOrConnectWithoutProductInput[]
    createMany?: ItemRecomendationCreateManyProductInputEnvelope
    connect?: ItemRecomendationWhereUniqueInput | ItemRecomendationWhereUniqueInput[]
  }

  export type BundlingItemCreateNestedManyWithoutProductInput = {
    create?: XOR<BundlingItemCreateWithoutProductInput, BundlingItemUncheckedCreateWithoutProductInput> | BundlingItemCreateWithoutProductInput[] | BundlingItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BundlingItemCreateOrConnectWithoutProductInput | BundlingItemCreateOrConnectWithoutProductInput[]
    createMany?: BundlingItemCreateManyProductInputEnvelope
    connect?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
  }

  export type CalculationDataUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CalculationDataCreateWithoutProductInput, CalculationDataUncheckedCreateWithoutProductInput> | CalculationDataCreateWithoutProductInput[] | CalculationDataUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CalculationDataCreateOrConnectWithoutProductInput | CalculationDataCreateOrConnectWithoutProductInput[]
    createMany?: CalculationDataCreateManyProductInputEnvelope
    connect?: CalculationDataWhereUniqueInput | CalculationDataWhereUniqueInput[]
  }

  export type RatingsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<RatingsCreateWithoutProductInput, RatingsUncheckedCreateWithoutProductInput> | RatingsCreateWithoutProductInput[] | RatingsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutProductInput | RatingsCreateOrConnectWithoutProductInput[]
    createMany?: RatingsCreateManyProductInputEnvelope
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
  }

  export type ItemRecomendationUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ItemRecomendationCreateWithoutProductInput, ItemRecomendationUncheckedCreateWithoutProductInput> | ItemRecomendationCreateWithoutProductInput[] | ItemRecomendationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ItemRecomendationCreateOrConnectWithoutProductInput | ItemRecomendationCreateOrConnectWithoutProductInput[]
    createMany?: ItemRecomendationCreateManyProductInputEnvelope
    connect?: ItemRecomendationWhereUniqueInput | ItemRecomendationWhereUniqueInput[]
  }

  export type BundlingItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<BundlingItemCreateWithoutProductInput, BundlingItemUncheckedCreateWithoutProductInput> | BundlingItemCreateWithoutProductInput[] | BundlingItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BundlingItemCreateOrConnectWithoutProductInput | BundlingItemCreateOrConnectWithoutProductInput[]
    createMany?: BundlingItemCreateManyProductInputEnvelope
    connect?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BrandUpdateOneWithoutProductNestedInput = {
    create?: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductInput
    upsert?: BrandUpsertWithoutProductInput
    disconnect?: BrandWhereInput | boolean
    delete?: BrandWhereInput | boolean
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutProductInput, BrandUpdateWithoutProductInput>, BrandUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateOneWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    upsert?: CategoryUpsertWithoutProductInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductInput, CategoryUpdateWithoutProductInput>, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type BenefitUpdateOneWithoutProductNestedInput = {
    create?: XOR<BenefitCreateWithoutProductInput, BenefitUncheckedCreateWithoutProductInput>
    connectOrCreate?: BenefitCreateOrConnectWithoutProductInput
    upsert?: BenefitUpsertWithoutProductInput
    disconnect?: BenefitWhereInput | boolean
    delete?: BenefitWhereInput | boolean
    connect?: BenefitWhereUniqueInput
    update?: XOR<XOR<BenefitUpdateToOneWithWhereWithoutProductInput, BenefitUpdateWithoutProductInput>, BenefitUncheckedUpdateWithoutProductInput>
  }

  export type CalculationDataUpdateManyWithoutProductNestedInput = {
    create?: XOR<CalculationDataCreateWithoutProductInput, CalculationDataUncheckedCreateWithoutProductInput> | CalculationDataCreateWithoutProductInput[] | CalculationDataUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CalculationDataCreateOrConnectWithoutProductInput | CalculationDataCreateOrConnectWithoutProductInput[]
    upsert?: CalculationDataUpsertWithWhereUniqueWithoutProductInput | CalculationDataUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CalculationDataCreateManyProductInputEnvelope
    set?: CalculationDataWhereUniqueInput | CalculationDataWhereUniqueInput[]
    disconnect?: CalculationDataWhereUniqueInput | CalculationDataWhereUniqueInput[]
    delete?: CalculationDataWhereUniqueInput | CalculationDataWhereUniqueInput[]
    connect?: CalculationDataWhereUniqueInput | CalculationDataWhereUniqueInput[]
    update?: CalculationDataUpdateWithWhereUniqueWithoutProductInput | CalculationDataUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CalculationDataUpdateManyWithWhereWithoutProductInput | CalculationDataUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CalculationDataScalarWhereInput | CalculationDataScalarWhereInput[]
  }

  export type RatingsUpdateManyWithoutProductNestedInput = {
    create?: XOR<RatingsCreateWithoutProductInput, RatingsUncheckedCreateWithoutProductInput> | RatingsCreateWithoutProductInput[] | RatingsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutProductInput | RatingsCreateOrConnectWithoutProductInput[]
    upsert?: RatingsUpsertWithWhereUniqueWithoutProductInput | RatingsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RatingsCreateManyProductInputEnvelope
    set?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    disconnect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    delete?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    update?: RatingsUpdateWithWhereUniqueWithoutProductInput | RatingsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RatingsUpdateManyWithWhereWithoutProductInput | RatingsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RatingsScalarWhereInput | RatingsScalarWhereInput[]
  }

  export type ItemRecomendationUpdateManyWithoutProductNestedInput = {
    create?: XOR<ItemRecomendationCreateWithoutProductInput, ItemRecomendationUncheckedCreateWithoutProductInput> | ItemRecomendationCreateWithoutProductInput[] | ItemRecomendationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ItemRecomendationCreateOrConnectWithoutProductInput | ItemRecomendationCreateOrConnectWithoutProductInput[]
    upsert?: ItemRecomendationUpsertWithWhereUniqueWithoutProductInput | ItemRecomendationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ItemRecomendationCreateManyProductInputEnvelope
    set?: ItemRecomendationWhereUniqueInput | ItemRecomendationWhereUniqueInput[]
    disconnect?: ItemRecomendationWhereUniqueInput | ItemRecomendationWhereUniqueInput[]
    delete?: ItemRecomendationWhereUniqueInput | ItemRecomendationWhereUniqueInput[]
    connect?: ItemRecomendationWhereUniqueInput | ItemRecomendationWhereUniqueInput[]
    update?: ItemRecomendationUpdateWithWhereUniqueWithoutProductInput | ItemRecomendationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ItemRecomendationUpdateManyWithWhereWithoutProductInput | ItemRecomendationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ItemRecomendationScalarWhereInput | ItemRecomendationScalarWhereInput[]
  }

  export type BundlingItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<BundlingItemCreateWithoutProductInput, BundlingItemUncheckedCreateWithoutProductInput> | BundlingItemCreateWithoutProductInput[] | BundlingItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BundlingItemCreateOrConnectWithoutProductInput | BundlingItemCreateOrConnectWithoutProductInput[]
    upsert?: BundlingItemUpsertWithWhereUniqueWithoutProductInput | BundlingItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BundlingItemCreateManyProductInputEnvelope
    set?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    disconnect?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    delete?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    connect?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    update?: BundlingItemUpdateWithWhereUniqueWithoutProductInput | BundlingItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BundlingItemUpdateManyWithWhereWithoutProductInput | BundlingItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BundlingItemScalarWhereInput | BundlingItemScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CalculationDataUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CalculationDataCreateWithoutProductInput, CalculationDataUncheckedCreateWithoutProductInput> | CalculationDataCreateWithoutProductInput[] | CalculationDataUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CalculationDataCreateOrConnectWithoutProductInput | CalculationDataCreateOrConnectWithoutProductInput[]
    upsert?: CalculationDataUpsertWithWhereUniqueWithoutProductInput | CalculationDataUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CalculationDataCreateManyProductInputEnvelope
    set?: CalculationDataWhereUniqueInput | CalculationDataWhereUniqueInput[]
    disconnect?: CalculationDataWhereUniqueInput | CalculationDataWhereUniqueInput[]
    delete?: CalculationDataWhereUniqueInput | CalculationDataWhereUniqueInput[]
    connect?: CalculationDataWhereUniqueInput | CalculationDataWhereUniqueInput[]
    update?: CalculationDataUpdateWithWhereUniqueWithoutProductInput | CalculationDataUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CalculationDataUpdateManyWithWhereWithoutProductInput | CalculationDataUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CalculationDataScalarWhereInput | CalculationDataScalarWhereInput[]
  }

  export type RatingsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<RatingsCreateWithoutProductInput, RatingsUncheckedCreateWithoutProductInput> | RatingsCreateWithoutProductInput[] | RatingsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutProductInput | RatingsCreateOrConnectWithoutProductInput[]
    upsert?: RatingsUpsertWithWhereUniqueWithoutProductInput | RatingsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RatingsCreateManyProductInputEnvelope
    set?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    disconnect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    delete?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    update?: RatingsUpdateWithWhereUniqueWithoutProductInput | RatingsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RatingsUpdateManyWithWhereWithoutProductInput | RatingsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RatingsScalarWhereInput | RatingsScalarWhereInput[]
  }

  export type ItemRecomendationUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ItemRecomendationCreateWithoutProductInput, ItemRecomendationUncheckedCreateWithoutProductInput> | ItemRecomendationCreateWithoutProductInput[] | ItemRecomendationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ItemRecomendationCreateOrConnectWithoutProductInput | ItemRecomendationCreateOrConnectWithoutProductInput[]
    upsert?: ItemRecomendationUpsertWithWhereUniqueWithoutProductInput | ItemRecomendationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ItemRecomendationCreateManyProductInputEnvelope
    set?: ItemRecomendationWhereUniqueInput | ItemRecomendationWhereUniqueInput[]
    disconnect?: ItemRecomendationWhereUniqueInput | ItemRecomendationWhereUniqueInput[]
    delete?: ItemRecomendationWhereUniqueInput | ItemRecomendationWhereUniqueInput[]
    connect?: ItemRecomendationWhereUniqueInput | ItemRecomendationWhereUniqueInput[]
    update?: ItemRecomendationUpdateWithWhereUniqueWithoutProductInput | ItemRecomendationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ItemRecomendationUpdateManyWithWhereWithoutProductInput | ItemRecomendationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ItemRecomendationScalarWhereInput | ItemRecomendationScalarWhereInput[]
  }

  export type BundlingItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<BundlingItemCreateWithoutProductInput, BundlingItemUncheckedCreateWithoutProductInput> | BundlingItemCreateWithoutProductInput[] | BundlingItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BundlingItemCreateOrConnectWithoutProductInput | BundlingItemCreateOrConnectWithoutProductInput[]
    upsert?: BundlingItemUpsertWithWhereUniqueWithoutProductInput | BundlingItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BundlingItemCreateManyProductInputEnvelope
    set?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    disconnect?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    delete?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    connect?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    update?: BundlingItemUpdateWithWhereUniqueWithoutProductInput | BundlingItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BundlingItemUpdateManyWithWhereWithoutProductInput | BundlingItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BundlingItemScalarWhereInput | BundlingItemScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutBenefitInput = {
    create?: XOR<ProductCreateWithoutBenefitInput, ProductUncheckedCreateWithoutBenefitInput> | ProductCreateWithoutBenefitInput[] | ProductUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBenefitInput | ProductCreateOrConnectWithoutBenefitInput[]
    createMany?: ProductCreateManyBenefitInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BundleCategoryCreateNestedManyWithoutBenefitInput = {
    create?: XOR<BundleCategoryCreateWithoutBenefitInput, BundleCategoryUncheckedCreateWithoutBenefitInput> | BundleCategoryCreateWithoutBenefitInput[] | BundleCategoryUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: BundleCategoryCreateOrConnectWithoutBenefitInput | BundleCategoryCreateOrConnectWithoutBenefitInput[]
    createMany?: BundleCategoryCreateManyBenefitInputEnvelope
    connect?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBenefitInput = {
    create?: XOR<ProductCreateWithoutBenefitInput, ProductUncheckedCreateWithoutBenefitInput> | ProductCreateWithoutBenefitInput[] | ProductUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBenefitInput | ProductCreateOrConnectWithoutBenefitInput[]
    createMany?: ProductCreateManyBenefitInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BundleCategoryUncheckedCreateNestedManyWithoutBenefitInput = {
    create?: XOR<BundleCategoryCreateWithoutBenefitInput, BundleCategoryUncheckedCreateWithoutBenefitInput> | BundleCategoryCreateWithoutBenefitInput[] | BundleCategoryUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: BundleCategoryCreateOrConnectWithoutBenefitInput | BundleCategoryCreateOrConnectWithoutBenefitInput[]
    createMany?: BundleCategoryCreateManyBenefitInputEnvelope
    connect?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutBenefitNestedInput = {
    create?: XOR<ProductCreateWithoutBenefitInput, ProductUncheckedCreateWithoutBenefitInput> | ProductCreateWithoutBenefitInput[] | ProductUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBenefitInput | ProductCreateOrConnectWithoutBenefitInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBenefitInput | ProductUpsertWithWhereUniqueWithoutBenefitInput[]
    createMany?: ProductCreateManyBenefitInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBenefitInput | ProductUpdateWithWhereUniqueWithoutBenefitInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBenefitInput | ProductUpdateManyWithWhereWithoutBenefitInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BundleCategoryUpdateManyWithoutBenefitNestedInput = {
    create?: XOR<BundleCategoryCreateWithoutBenefitInput, BundleCategoryUncheckedCreateWithoutBenefitInput> | BundleCategoryCreateWithoutBenefitInput[] | BundleCategoryUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: BundleCategoryCreateOrConnectWithoutBenefitInput | BundleCategoryCreateOrConnectWithoutBenefitInput[]
    upsert?: BundleCategoryUpsertWithWhereUniqueWithoutBenefitInput | BundleCategoryUpsertWithWhereUniqueWithoutBenefitInput[]
    createMany?: BundleCategoryCreateManyBenefitInputEnvelope
    set?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    disconnect?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    delete?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    connect?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    update?: BundleCategoryUpdateWithWhereUniqueWithoutBenefitInput | BundleCategoryUpdateWithWhereUniqueWithoutBenefitInput[]
    updateMany?: BundleCategoryUpdateManyWithWhereWithoutBenefitInput | BundleCategoryUpdateManyWithWhereWithoutBenefitInput[]
    deleteMany?: BundleCategoryScalarWhereInput | BundleCategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBenefitNestedInput = {
    create?: XOR<ProductCreateWithoutBenefitInput, ProductUncheckedCreateWithoutBenefitInput> | ProductCreateWithoutBenefitInput[] | ProductUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBenefitInput | ProductCreateOrConnectWithoutBenefitInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBenefitInput | ProductUpsertWithWhereUniqueWithoutBenefitInput[]
    createMany?: ProductCreateManyBenefitInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBenefitInput | ProductUpdateWithWhereUniqueWithoutBenefitInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBenefitInput | ProductUpdateManyWithWhereWithoutBenefitInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BundleCategoryUncheckedUpdateManyWithoutBenefitNestedInput = {
    create?: XOR<BundleCategoryCreateWithoutBenefitInput, BundleCategoryUncheckedCreateWithoutBenefitInput> | BundleCategoryCreateWithoutBenefitInput[] | BundleCategoryUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: BundleCategoryCreateOrConnectWithoutBenefitInput | BundleCategoryCreateOrConnectWithoutBenefitInput[]
    upsert?: BundleCategoryUpsertWithWhereUniqueWithoutBenefitInput | BundleCategoryUpsertWithWhereUniqueWithoutBenefitInput[]
    createMany?: BundleCategoryCreateManyBenefitInputEnvelope
    set?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    disconnect?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    delete?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    connect?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    update?: BundleCategoryUpdateWithWhereUniqueWithoutBenefitInput | BundleCategoryUpdateWithWhereUniqueWithoutBenefitInput[]
    updateMany?: BundleCategoryUpdateManyWithWhereWithoutBenefitInput | BundleCategoryUpdateManyWithWhereWithoutBenefitInput[]
    deleteMany?: BundleCategoryScalarWhereInput | BundleCategoryScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BundleCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BundleCategoryCreateWithoutCategoryInput, BundleCategoryUncheckedCreateWithoutCategoryInput> | BundleCategoryCreateWithoutCategoryInput[] | BundleCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BundleCategoryCreateOrConnectWithoutCategoryInput | BundleCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: BundleCategoryCreateManyCategoryInputEnvelope
    connect?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BundleCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BundleCategoryCreateWithoutCategoryInput, BundleCategoryUncheckedCreateWithoutCategoryInput> | BundleCategoryCreateWithoutCategoryInput[] | BundleCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BundleCategoryCreateOrConnectWithoutCategoryInput | BundleCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: BundleCategoryCreateManyCategoryInputEnvelope
    connect?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BundleCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BundleCategoryCreateWithoutCategoryInput, BundleCategoryUncheckedCreateWithoutCategoryInput> | BundleCategoryCreateWithoutCategoryInput[] | BundleCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BundleCategoryCreateOrConnectWithoutCategoryInput | BundleCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: BundleCategoryUpsertWithWhereUniqueWithoutCategoryInput | BundleCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BundleCategoryCreateManyCategoryInputEnvelope
    set?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    disconnect?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    delete?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    connect?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    update?: BundleCategoryUpdateWithWhereUniqueWithoutCategoryInput | BundleCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BundleCategoryUpdateManyWithWhereWithoutCategoryInput | BundleCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BundleCategoryScalarWhereInput | BundleCategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BundleCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BundleCategoryCreateWithoutCategoryInput, BundleCategoryUncheckedCreateWithoutCategoryInput> | BundleCategoryCreateWithoutCategoryInput[] | BundleCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BundleCategoryCreateOrConnectWithoutCategoryInput | BundleCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: BundleCategoryUpsertWithWhereUniqueWithoutCategoryInput | BundleCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BundleCategoryCreateManyCategoryInputEnvelope
    set?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    disconnect?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    delete?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    connect?: BundleCategoryWhereUniqueInput | BundleCategoryWhereUniqueInput[]
    update?: BundleCategoryUpdateWithWhereUniqueWithoutCategoryInput | BundleCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BundleCategoryUpdateManyWithWhereWithoutCategoryInput | BundleCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BundleCategoryScalarWhereInput | BundleCategoryScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutCalculationDataInput = {
    create?: XOR<ProductCreateWithoutCalculationDataInput, ProductUncheckedCreateWithoutCalculationDataInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCalculationDataInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutCalculationDataNestedInput = {
    create?: XOR<ProductCreateWithoutCalculationDataInput, ProductUncheckedCreateWithoutCalculationDataInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCalculationDataInput
    upsert?: ProductUpsertWithoutCalculationDataInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCalculationDataInput, ProductUpdateWithoutCalculationDataInput>, ProductUncheckedUpdateWithoutCalculationDataInput>
  }

  export type RatingsCreateNestedManyWithoutUsersInput = {
    create?: XOR<RatingsCreateWithoutUsersInput, RatingsUncheckedCreateWithoutUsersInput> | RatingsCreateWithoutUsersInput[] | RatingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutUsersInput | RatingsCreateOrConnectWithoutUsersInput[]
    createMany?: RatingsCreateManyUsersInputEnvelope
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUsersInput = {
    create?: XOR<TransactionCreateWithoutUsersInput, TransactionUncheckedCreateWithoutUsersInput> | TransactionCreateWithoutUsersInput[] | TransactionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUsersInput | TransactionCreateOrConnectWithoutUsersInput[]
    createMany?: TransactionCreateManyUsersInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type RatingsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<RatingsCreateWithoutUsersInput, RatingsUncheckedCreateWithoutUsersInput> | RatingsCreateWithoutUsersInput[] | RatingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutUsersInput | RatingsCreateOrConnectWithoutUsersInput[]
    createMany?: RatingsCreateManyUsersInputEnvelope
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<TransactionCreateWithoutUsersInput, TransactionUncheckedCreateWithoutUsersInput> | TransactionCreateWithoutUsersInput[] | TransactionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUsersInput | TransactionCreateOrConnectWithoutUsersInput[]
    createMany?: TransactionCreateManyUsersInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type RatingsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RatingsCreateWithoutUsersInput, RatingsUncheckedCreateWithoutUsersInput> | RatingsCreateWithoutUsersInput[] | RatingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutUsersInput | RatingsCreateOrConnectWithoutUsersInput[]
    upsert?: RatingsUpsertWithWhereUniqueWithoutUsersInput | RatingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: RatingsCreateManyUsersInputEnvelope
    set?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    disconnect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    delete?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    update?: RatingsUpdateWithWhereUniqueWithoutUsersInput | RatingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RatingsUpdateManyWithWhereWithoutUsersInput | RatingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RatingsScalarWhereInput | RatingsScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TransactionCreateWithoutUsersInput, TransactionUncheckedCreateWithoutUsersInput> | TransactionCreateWithoutUsersInput[] | TransactionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUsersInput | TransactionCreateOrConnectWithoutUsersInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUsersInput | TransactionUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TransactionCreateManyUsersInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUsersInput | TransactionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUsersInput | TransactionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type RatingsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RatingsCreateWithoutUsersInput, RatingsUncheckedCreateWithoutUsersInput> | RatingsCreateWithoutUsersInput[] | RatingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutUsersInput | RatingsCreateOrConnectWithoutUsersInput[]
    upsert?: RatingsUpsertWithWhereUniqueWithoutUsersInput | RatingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: RatingsCreateManyUsersInputEnvelope
    set?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    disconnect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    delete?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    update?: RatingsUpdateWithWhereUniqueWithoutUsersInput | RatingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RatingsUpdateManyWithWhereWithoutUsersInput | RatingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RatingsScalarWhereInput | RatingsScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TransactionCreateWithoutUsersInput, TransactionUncheckedCreateWithoutUsersInput> | TransactionCreateWithoutUsersInput[] | TransactionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUsersInput | TransactionCreateOrConnectWithoutUsersInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUsersInput | TransactionUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TransactionCreateManyUsersInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUsersInput | TransactionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUsersInput | TransactionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutBundleCategoryInput = {
    create?: XOR<CategoryCreateWithoutBundleCategoryInput, CategoryUncheckedCreateWithoutBundleCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBundleCategoryInput
    connect?: CategoryWhereUniqueInput
  }

  export type BenefitCreateNestedOneWithoutBundleCategoryInput = {
    create?: XOR<BenefitCreateWithoutBundleCategoryInput, BenefitUncheckedCreateWithoutBundleCategoryInput>
    connectOrCreate?: BenefitCreateOrConnectWithoutBundleCategoryInput
    connect?: BenefitWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutBundleCategoryNestedInput = {
    create?: XOR<CategoryCreateWithoutBundleCategoryInput, CategoryUncheckedCreateWithoutBundleCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBundleCategoryInput
    upsert?: CategoryUpsertWithoutBundleCategoryInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBundleCategoryInput, CategoryUpdateWithoutBundleCategoryInput>, CategoryUncheckedUpdateWithoutBundleCategoryInput>
  }

  export type BenefitUpdateOneRequiredWithoutBundleCategoryNestedInput = {
    create?: XOR<BenefitCreateWithoutBundleCategoryInput, BenefitUncheckedCreateWithoutBundleCategoryInput>
    connectOrCreate?: BenefitCreateOrConnectWithoutBundleCategoryInput
    upsert?: BenefitUpsertWithoutBundleCategoryInput
    connect?: BenefitWhereUniqueInput
    update?: XOR<XOR<BenefitUpdateToOneWithWhereWithoutBundleCategoryInput, BenefitUpdateWithoutBundleCategoryInput>, BenefitUncheckedUpdateWithoutBundleCategoryInput>
  }

  export type UsersCreateNestedOneWithoutRatingsInput = {
    create?: XOR<UsersCreateWithoutRatingsInput, UsersUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRatingsInput
    connect?: UsersWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutRatingsInput = {
    create?: XOR<ProductCreateWithoutRatingsInput, ProductUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRatingsInput
    connect?: ProductWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<UsersCreateWithoutRatingsInput, UsersUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRatingsInput
    upsert?: UsersUpsertWithoutRatingsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutRatingsInput, UsersUpdateWithoutRatingsInput>, UsersUncheckedUpdateWithoutRatingsInput>
  }

  export type ProductUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<ProductCreateWithoutRatingsInput, ProductUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRatingsInput
    upsert?: ProductUpsertWithoutRatingsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutRatingsInput, ProductUpdateWithoutRatingsInput>, ProductUncheckedUpdateWithoutRatingsInput>
  }

  export type ProductCreateNestedOneWithoutItemRecomendationInput = {
    create?: XOR<ProductCreateWithoutItemRecomendationInput, ProductUncheckedCreateWithoutItemRecomendationInput>
    connectOrCreate?: ProductCreateOrConnectWithoutItemRecomendationInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutItemRecomendationNestedInput = {
    create?: XOR<ProductCreateWithoutItemRecomendationInput, ProductUncheckedCreateWithoutItemRecomendationInput>
    connectOrCreate?: ProductCreateOrConnectWithoutItemRecomendationInput
    upsert?: ProductUpsertWithoutItemRecomendationInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutItemRecomendationInput, ProductUpdateWithoutItemRecomendationInput>, ProductUncheckedUpdateWithoutItemRecomendationInput>
  }

  export type BundlingPackageCreateNestedOneWithoutBundlingItemInput = {
    create?: XOR<BundlingPackageCreateWithoutBundlingItemInput, BundlingPackageUncheckedCreateWithoutBundlingItemInput>
    connectOrCreate?: BundlingPackageCreateOrConnectWithoutBundlingItemInput
    connect?: BundlingPackageWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutBundlingItemInput = {
    create?: XOR<ProductCreateWithoutBundlingItemInput, ProductUncheckedCreateWithoutBundlingItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBundlingItemInput
    connect?: ProductWhereUniqueInput
  }

  export type BundlingPackageUpdateOneRequiredWithoutBundlingItemNestedInput = {
    create?: XOR<BundlingPackageCreateWithoutBundlingItemInput, BundlingPackageUncheckedCreateWithoutBundlingItemInput>
    connectOrCreate?: BundlingPackageCreateOrConnectWithoutBundlingItemInput
    upsert?: BundlingPackageUpsertWithoutBundlingItemInput
    connect?: BundlingPackageWhereUniqueInput
    update?: XOR<XOR<BundlingPackageUpdateToOneWithWhereWithoutBundlingItemInput, BundlingPackageUpdateWithoutBundlingItemInput>, BundlingPackageUncheckedUpdateWithoutBundlingItemInput>
  }

  export type ProductUpdateOneRequiredWithoutBundlingItemNestedInput = {
    create?: XOR<ProductCreateWithoutBundlingItemInput, ProductUncheckedCreateWithoutBundlingItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBundlingItemInput
    upsert?: ProductUpsertWithoutBundlingItemInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutBundlingItemInput, ProductUpdateWithoutBundlingItemInput>, ProductUncheckedUpdateWithoutBundlingItemInput>
  }

  export type BundlingItemCreateNestedManyWithoutBundlingPackageInput = {
    create?: XOR<BundlingItemCreateWithoutBundlingPackageInput, BundlingItemUncheckedCreateWithoutBundlingPackageInput> | BundlingItemCreateWithoutBundlingPackageInput[] | BundlingItemUncheckedCreateWithoutBundlingPackageInput[]
    connectOrCreate?: BundlingItemCreateOrConnectWithoutBundlingPackageInput | BundlingItemCreateOrConnectWithoutBundlingPackageInput[]
    createMany?: BundlingItemCreateManyBundlingPackageInputEnvelope
    connect?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutBundlingPackageInput = {
    create?: XOR<TransactionCreateWithoutBundlingPackageInput, TransactionUncheckedCreateWithoutBundlingPackageInput> | TransactionCreateWithoutBundlingPackageInput[] | TransactionUncheckedCreateWithoutBundlingPackageInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBundlingPackageInput | TransactionCreateOrConnectWithoutBundlingPackageInput[]
    createMany?: TransactionCreateManyBundlingPackageInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BundlingItemUncheckedCreateNestedManyWithoutBundlingPackageInput = {
    create?: XOR<BundlingItemCreateWithoutBundlingPackageInput, BundlingItemUncheckedCreateWithoutBundlingPackageInput> | BundlingItemCreateWithoutBundlingPackageInput[] | BundlingItemUncheckedCreateWithoutBundlingPackageInput[]
    connectOrCreate?: BundlingItemCreateOrConnectWithoutBundlingPackageInput | BundlingItemCreateOrConnectWithoutBundlingPackageInput[]
    createMany?: BundlingItemCreateManyBundlingPackageInputEnvelope
    connect?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutBundlingPackageInput = {
    create?: XOR<TransactionCreateWithoutBundlingPackageInput, TransactionUncheckedCreateWithoutBundlingPackageInput> | TransactionCreateWithoutBundlingPackageInput[] | TransactionUncheckedCreateWithoutBundlingPackageInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBundlingPackageInput | TransactionCreateOrConnectWithoutBundlingPackageInput[]
    createMany?: TransactionCreateManyBundlingPackageInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BundlingItemUpdateManyWithoutBundlingPackageNestedInput = {
    create?: XOR<BundlingItemCreateWithoutBundlingPackageInput, BundlingItemUncheckedCreateWithoutBundlingPackageInput> | BundlingItemCreateWithoutBundlingPackageInput[] | BundlingItemUncheckedCreateWithoutBundlingPackageInput[]
    connectOrCreate?: BundlingItemCreateOrConnectWithoutBundlingPackageInput | BundlingItemCreateOrConnectWithoutBundlingPackageInput[]
    upsert?: BundlingItemUpsertWithWhereUniqueWithoutBundlingPackageInput | BundlingItemUpsertWithWhereUniqueWithoutBundlingPackageInput[]
    createMany?: BundlingItemCreateManyBundlingPackageInputEnvelope
    set?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    disconnect?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    delete?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    connect?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    update?: BundlingItemUpdateWithWhereUniqueWithoutBundlingPackageInput | BundlingItemUpdateWithWhereUniqueWithoutBundlingPackageInput[]
    updateMany?: BundlingItemUpdateManyWithWhereWithoutBundlingPackageInput | BundlingItemUpdateManyWithWhereWithoutBundlingPackageInput[]
    deleteMany?: BundlingItemScalarWhereInput | BundlingItemScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutBundlingPackageNestedInput = {
    create?: XOR<TransactionCreateWithoutBundlingPackageInput, TransactionUncheckedCreateWithoutBundlingPackageInput> | TransactionCreateWithoutBundlingPackageInput[] | TransactionUncheckedCreateWithoutBundlingPackageInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBundlingPackageInput | TransactionCreateOrConnectWithoutBundlingPackageInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBundlingPackageInput | TransactionUpsertWithWhereUniqueWithoutBundlingPackageInput[]
    createMany?: TransactionCreateManyBundlingPackageInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBundlingPackageInput | TransactionUpdateWithWhereUniqueWithoutBundlingPackageInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBundlingPackageInput | TransactionUpdateManyWithWhereWithoutBundlingPackageInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BundlingItemUncheckedUpdateManyWithoutBundlingPackageNestedInput = {
    create?: XOR<BundlingItemCreateWithoutBundlingPackageInput, BundlingItemUncheckedCreateWithoutBundlingPackageInput> | BundlingItemCreateWithoutBundlingPackageInput[] | BundlingItemUncheckedCreateWithoutBundlingPackageInput[]
    connectOrCreate?: BundlingItemCreateOrConnectWithoutBundlingPackageInput | BundlingItemCreateOrConnectWithoutBundlingPackageInput[]
    upsert?: BundlingItemUpsertWithWhereUniqueWithoutBundlingPackageInput | BundlingItemUpsertWithWhereUniqueWithoutBundlingPackageInput[]
    createMany?: BundlingItemCreateManyBundlingPackageInputEnvelope
    set?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    disconnect?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    delete?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    connect?: BundlingItemWhereUniqueInput | BundlingItemWhereUniqueInput[]
    update?: BundlingItemUpdateWithWhereUniqueWithoutBundlingPackageInput | BundlingItemUpdateWithWhereUniqueWithoutBundlingPackageInput[]
    updateMany?: BundlingItemUpdateManyWithWhereWithoutBundlingPackageInput | BundlingItemUpdateManyWithWhereWithoutBundlingPackageInput[]
    deleteMany?: BundlingItemScalarWhereInput | BundlingItemScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutBundlingPackageNestedInput = {
    create?: XOR<TransactionCreateWithoutBundlingPackageInput, TransactionUncheckedCreateWithoutBundlingPackageInput> | TransactionCreateWithoutBundlingPackageInput[] | TransactionUncheckedCreateWithoutBundlingPackageInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBundlingPackageInput | TransactionCreateOrConnectWithoutBundlingPackageInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBundlingPackageInput | TransactionUpsertWithWhereUniqueWithoutBundlingPackageInput[]
    createMany?: TransactionCreateManyBundlingPackageInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBundlingPackageInput | TransactionUpdateWithWhereUniqueWithoutBundlingPackageInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBundlingPackageInput | TransactionUpdateManyWithWhereWithoutBundlingPackageInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutTransactionInput = {
    create?: XOR<UsersCreateWithoutTransactionInput, UsersUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTransactionInput
    connect?: UsersWhereUniqueInput
  }

  export type BundlingPackageCreateNestedOneWithoutTransactionInput = {
    create?: XOR<BundlingPackageCreateWithoutTransactionInput, BundlingPackageUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: BundlingPackageCreateOrConnectWithoutTransactionInput
    connect?: BundlingPackageWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<UsersCreateWithoutTransactionInput, UsersUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTransactionInput
    upsert?: UsersUpsertWithoutTransactionInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTransactionInput, UsersUpdateWithoutTransactionInput>, UsersUncheckedUpdateWithoutTransactionInput>
  }

  export type BundlingPackageUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<BundlingPackageCreateWithoutTransactionInput, BundlingPackageUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: BundlingPackageCreateOrConnectWithoutTransactionInput
    upsert?: BundlingPackageUpsertWithoutTransactionInput
    connect?: BundlingPackageWhereUniqueInput
    update?: XOR<XOR<BundlingPackageUpdateToOneWithWhereWithoutTransactionInput, BundlingPackageUpdateWithoutTransactionInput>, BundlingPackageUncheckedUpdateWithoutTransactionInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BrandCreateWithoutProductInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandCreateOrConnectWithoutProductInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
  }

  export type CategoryCreateWithoutProductInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BundleCategory?: BundleCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BundleCategory?: BundleCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type BenefitCreateWithoutProductInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BundleCategory?: BundleCategoryCreateNestedManyWithoutBenefitInput
  }

  export type BenefitUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BundleCategory?: BundleCategoryUncheckedCreateNestedManyWithoutBenefitInput
  }

  export type BenefitCreateOrConnectWithoutProductInput = {
    where: BenefitWhereUniqueInput
    create: XOR<BenefitCreateWithoutProductInput, BenefitUncheckedCreateWithoutProductInput>
  }

  export type CalculationDataCreateWithoutProductInput = {
    transaction: string
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalculationDataUncheckedCreateWithoutProductInput = {
    id?: number
    transaction: string
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalculationDataCreateOrConnectWithoutProductInput = {
    where: CalculationDataWhereUniqueInput
    create: XOR<CalculationDataCreateWithoutProductInput, CalculationDataUncheckedCreateWithoutProductInput>
  }

  export type CalculationDataCreateManyProductInputEnvelope = {
    data: CalculationDataCreateManyProductInput | CalculationDataCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type RatingsCreateWithoutProductInput = {
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users: UsersCreateNestedOneWithoutRatingsInput
  }

  export type RatingsUncheckedCreateWithoutProductInput = {
    id?: number
    userId: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingsCreateOrConnectWithoutProductInput = {
    where: RatingsWhereUniqueInput
    create: XOR<RatingsCreateWithoutProductInput, RatingsUncheckedCreateWithoutProductInput>
  }

  export type RatingsCreateManyProductInputEnvelope = {
    data: RatingsCreateManyProductInput | RatingsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ItemRecomendationCreateWithoutProductInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemRecomendationUncheckedCreateWithoutProductInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemRecomendationCreateOrConnectWithoutProductInput = {
    where: ItemRecomendationWhereUniqueInput
    create: XOR<ItemRecomendationCreateWithoutProductInput, ItemRecomendationUncheckedCreateWithoutProductInput>
  }

  export type ItemRecomendationCreateManyProductInputEnvelope = {
    data: ItemRecomendationCreateManyProductInput | ItemRecomendationCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BundlingItemCreateWithoutProductInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    BundlingPackage: BundlingPackageCreateNestedOneWithoutBundlingItemInput
  }

  export type BundlingItemUncheckedCreateWithoutProductInput = {
    id?: number
    bundlingPackId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BundlingItemCreateOrConnectWithoutProductInput = {
    where: BundlingItemWhereUniqueInput
    create: XOR<BundlingItemCreateWithoutProductInput, BundlingItemUncheckedCreateWithoutProductInput>
  }

  export type BundlingItemCreateManyProductInputEnvelope = {
    data: BundlingItemCreateManyProductInput | BundlingItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BrandUpsertWithoutProductInput = {
    update: XOR<BrandUpdateWithoutProductInput, BrandUncheckedUpdateWithoutProductInput>
    create: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutProductInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutProductInput, BrandUncheckedUpdateWithoutProductInput>
  }

  export type BrandUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithoutProductInput = {
    update: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BundleCategory?: BundleCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BundleCategory?: BundleCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BenefitUpsertWithoutProductInput = {
    update: XOR<BenefitUpdateWithoutProductInput, BenefitUncheckedUpdateWithoutProductInput>
    create: XOR<BenefitCreateWithoutProductInput, BenefitUncheckedCreateWithoutProductInput>
    where?: BenefitWhereInput
  }

  export type BenefitUpdateToOneWithWhereWithoutProductInput = {
    where?: BenefitWhereInput
    data: XOR<BenefitUpdateWithoutProductInput, BenefitUncheckedUpdateWithoutProductInput>
  }

  export type BenefitUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BundleCategory?: BundleCategoryUpdateManyWithoutBenefitNestedInput
  }

  export type BenefitUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BundleCategory?: BundleCategoryUncheckedUpdateManyWithoutBenefitNestedInput
  }

  export type CalculationDataUpsertWithWhereUniqueWithoutProductInput = {
    where: CalculationDataWhereUniqueInput
    update: XOR<CalculationDataUpdateWithoutProductInput, CalculationDataUncheckedUpdateWithoutProductInput>
    create: XOR<CalculationDataCreateWithoutProductInput, CalculationDataUncheckedCreateWithoutProductInput>
  }

  export type CalculationDataUpdateWithWhereUniqueWithoutProductInput = {
    where: CalculationDataWhereUniqueInput
    data: XOR<CalculationDataUpdateWithoutProductInput, CalculationDataUncheckedUpdateWithoutProductInput>
  }

  export type CalculationDataUpdateManyWithWhereWithoutProductInput = {
    where: CalculationDataScalarWhereInput
    data: XOR<CalculationDataUpdateManyMutationInput, CalculationDataUncheckedUpdateManyWithoutProductInput>
  }

  export type CalculationDataScalarWhereInput = {
    AND?: CalculationDataScalarWhereInput | CalculationDataScalarWhereInput[]
    OR?: CalculationDataScalarWhereInput[]
    NOT?: CalculationDataScalarWhereInput | CalculationDataScalarWhereInput[]
    id?: IntFilter<"CalculationData"> | number
    transaction?: StringFilter<"CalculationData"> | string
    productId?: IntFilter<"CalculationData"> | number
    value?: IntFilter<"CalculationData"> | number
    createdAt?: DateTimeFilter<"CalculationData"> | Date | string
    updatedAt?: DateTimeFilter<"CalculationData"> | Date | string
  }

  export type RatingsUpsertWithWhereUniqueWithoutProductInput = {
    where: RatingsWhereUniqueInput
    update: XOR<RatingsUpdateWithoutProductInput, RatingsUncheckedUpdateWithoutProductInput>
    create: XOR<RatingsCreateWithoutProductInput, RatingsUncheckedCreateWithoutProductInput>
  }

  export type RatingsUpdateWithWhereUniqueWithoutProductInput = {
    where: RatingsWhereUniqueInput
    data: XOR<RatingsUpdateWithoutProductInput, RatingsUncheckedUpdateWithoutProductInput>
  }

  export type RatingsUpdateManyWithWhereWithoutProductInput = {
    where: RatingsScalarWhereInput
    data: XOR<RatingsUpdateManyMutationInput, RatingsUncheckedUpdateManyWithoutProductInput>
  }

  export type RatingsScalarWhereInput = {
    AND?: RatingsScalarWhereInput | RatingsScalarWhereInput[]
    OR?: RatingsScalarWhereInput[]
    NOT?: RatingsScalarWhereInput | RatingsScalarWhereInput[]
    id?: IntFilter<"Ratings"> | number
    userId?: IntFilter<"Ratings"> | number
    productId?: IntFilter<"Ratings"> | number
    rating?: IntFilter<"Ratings"> | number
    review?: StringFilter<"Ratings"> | string
    createdAt?: DateTimeFilter<"Ratings"> | Date | string
    updatedAt?: DateTimeFilter<"Ratings"> | Date | string
  }

  export type ItemRecomendationUpsertWithWhereUniqueWithoutProductInput = {
    where: ItemRecomendationWhereUniqueInput
    update: XOR<ItemRecomendationUpdateWithoutProductInput, ItemRecomendationUncheckedUpdateWithoutProductInput>
    create: XOR<ItemRecomendationCreateWithoutProductInput, ItemRecomendationUncheckedCreateWithoutProductInput>
  }

  export type ItemRecomendationUpdateWithWhereUniqueWithoutProductInput = {
    where: ItemRecomendationWhereUniqueInput
    data: XOR<ItemRecomendationUpdateWithoutProductInput, ItemRecomendationUncheckedUpdateWithoutProductInput>
  }

  export type ItemRecomendationUpdateManyWithWhereWithoutProductInput = {
    where: ItemRecomendationScalarWhereInput
    data: XOR<ItemRecomendationUpdateManyMutationInput, ItemRecomendationUncheckedUpdateManyWithoutProductInput>
  }

  export type ItemRecomendationScalarWhereInput = {
    AND?: ItemRecomendationScalarWhereInput | ItemRecomendationScalarWhereInput[]
    OR?: ItemRecomendationScalarWhereInput[]
    NOT?: ItemRecomendationScalarWhereInput | ItemRecomendationScalarWhereInput[]
    id?: IntFilter<"ItemRecomendation"> | number
    productId?: IntFilter<"ItemRecomendation"> | number
    createdAt?: DateTimeFilter<"ItemRecomendation"> | Date | string
    updatedAt?: DateTimeFilter<"ItemRecomendation"> | Date | string
  }

  export type BundlingItemUpsertWithWhereUniqueWithoutProductInput = {
    where: BundlingItemWhereUniqueInput
    update: XOR<BundlingItemUpdateWithoutProductInput, BundlingItemUncheckedUpdateWithoutProductInput>
    create: XOR<BundlingItemCreateWithoutProductInput, BundlingItemUncheckedCreateWithoutProductInput>
  }

  export type BundlingItemUpdateWithWhereUniqueWithoutProductInput = {
    where: BundlingItemWhereUniqueInput
    data: XOR<BundlingItemUpdateWithoutProductInput, BundlingItemUncheckedUpdateWithoutProductInput>
  }

  export type BundlingItemUpdateManyWithWhereWithoutProductInput = {
    where: BundlingItemScalarWhereInput
    data: XOR<BundlingItemUpdateManyMutationInput, BundlingItemUncheckedUpdateManyWithoutProductInput>
  }

  export type BundlingItemScalarWhereInput = {
    AND?: BundlingItemScalarWhereInput | BundlingItemScalarWhereInput[]
    OR?: BundlingItemScalarWhereInput[]
    NOT?: BundlingItemScalarWhereInput | BundlingItemScalarWhereInput[]
    id?: IntFilter<"BundlingItem"> | number
    bundlingPackId?: IntFilter<"BundlingItem"> | number
    productId?: IntFilter<"BundlingItem"> | number
    createdAt?: DateTimeFilter<"BundlingItem"> | Date | string
    updatedAt?: DateTimeFilter<"BundlingItem"> | Date | string
  }

  export type ProductCreateWithoutBenefitInput = {
    name: string
    itemCode: string
    price?: number | null
    stock?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Brand?: BrandCreateNestedOneWithoutProductInput
    Category?: CategoryCreateNestedOneWithoutProductInput
    CalculationData?: CalculationDataCreateNestedManyWithoutProductInput
    Ratings?: RatingsCreateNestedManyWithoutProductInput
    ItemRecomendation?: ItemRecomendationCreateNestedManyWithoutProductInput
    BundlingItem?: BundlingItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBenefitInput = {
    id?: number
    name: string
    brandId?: number | null
    itemCode: string
    price?: number | null
    stock?: number | null
    categoryId?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CalculationData?: CalculationDataUncheckedCreateNestedManyWithoutProductInput
    Ratings?: RatingsUncheckedCreateNestedManyWithoutProductInput
    ItemRecomendation?: ItemRecomendationUncheckedCreateNestedManyWithoutProductInput
    BundlingItem?: BundlingItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBenefitInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBenefitInput, ProductUncheckedCreateWithoutBenefitInput>
  }

  export type ProductCreateManyBenefitInputEnvelope = {
    data: ProductCreateManyBenefitInput | ProductCreateManyBenefitInput[]
    skipDuplicates?: boolean
  }

  export type BundleCategoryCreateWithoutBenefitInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    Category: CategoryCreateNestedOneWithoutBundleCategoryInput
  }

  export type BundleCategoryUncheckedCreateWithoutBenefitInput = {
    id?: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BundleCategoryCreateOrConnectWithoutBenefitInput = {
    where: BundleCategoryWhereUniqueInput
    create: XOR<BundleCategoryCreateWithoutBenefitInput, BundleCategoryUncheckedCreateWithoutBenefitInput>
  }

  export type BundleCategoryCreateManyBenefitInputEnvelope = {
    data: BundleCategoryCreateManyBenefitInput | BundleCategoryCreateManyBenefitInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBenefitInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBenefitInput, ProductUncheckedUpdateWithoutBenefitInput>
    create: XOR<ProductCreateWithoutBenefitInput, ProductUncheckedCreateWithoutBenefitInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBenefitInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBenefitInput, ProductUncheckedUpdateWithoutBenefitInput>
  }

  export type ProductUpdateManyWithWhereWithoutBenefitInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBenefitInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    brandId?: IntNullableFilter<"Product"> | number | null
    itemCode?: StringFilter<"Product"> | string
    price?: FloatNullableFilter<"Product"> | number | null
    stock?: IntNullableFilter<"Product"> | number | null
    categoryId?: IntNullableFilter<"Product"> | number | null
    benefitId?: IntNullableFilter<"Product"> | number | null
    imageId?: IntNullableFilter<"Product"> | number | null
    imageUrl?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type BundleCategoryUpsertWithWhereUniqueWithoutBenefitInput = {
    where: BundleCategoryWhereUniqueInput
    update: XOR<BundleCategoryUpdateWithoutBenefitInput, BundleCategoryUncheckedUpdateWithoutBenefitInput>
    create: XOR<BundleCategoryCreateWithoutBenefitInput, BundleCategoryUncheckedCreateWithoutBenefitInput>
  }

  export type BundleCategoryUpdateWithWhereUniqueWithoutBenefitInput = {
    where: BundleCategoryWhereUniqueInput
    data: XOR<BundleCategoryUpdateWithoutBenefitInput, BundleCategoryUncheckedUpdateWithoutBenefitInput>
  }

  export type BundleCategoryUpdateManyWithWhereWithoutBenefitInput = {
    where: BundleCategoryScalarWhereInput
    data: XOR<BundleCategoryUpdateManyMutationInput, BundleCategoryUncheckedUpdateManyWithoutBenefitInput>
  }

  export type BundleCategoryScalarWhereInput = {
    AND?: BundleCategoryScalarWhereInput | BundleCategoryScalarWhereInput[]
    OR?: BundleCategoryScalarWhereInput[]
    NOT?: BundleCategoryScalarWhereInput | BundleCategoryScalarWhereInput[]
    id?: IntFilter<"BundleCategory"> | number
    categoryId?: IntFilter<"BundleCategory"> | number
    benefitId?: IntFilter<"BundleCategory"> | number
    createdAt?: DateTimeFilter<"BundleCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BundleCategory"> | Date | string
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    itemCode: string
    price?: number | null
    stock?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Brand?: BrandCreateNestedOneWithoutProductInput
    Benefit?: BenefitCreateNestedOneWithoutProductInput
    CalculationData?: CalculationDataCreateNestedManyWithoutProductInput
    Ratings?: RatingsCreateNestedManyWithoutProductInput
    ItemRecomendation?: ItemRecomendationCreateNestedManyWithoutProductInput
    BundlingItem?: BundlingItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    brandId?: number | null
    itemCode: string
    price?: number | null
    stock?: number | null
    benefitId?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CalculationData?: CalculationDataUncheckedCreateNestedManyWithoutProductInput
    Ratings?: RatingsUncheckedCreateNestedManyWithoutProductInput
    ItemRecomendation?: ItemRecomendationUncheckedCreateNestedManyWithoutProductInput
    BundlingItem?: BundlingItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BundleCategoryCreateWithoutCategoryInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    Benefit: BenefitCreateNestedOneWithoutBundleCategoryInput
  }

  export type BundleCategoryUncheckedCreateWithoutCategoryInput = {
    id?: number
    benefitId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BundleCategoryCreateOrConnectWithoutCategoryInput = {
    where: BundleCategoryWhereUniqueInput
    create: XOR<BundleCategoryCreateWithoutCategoryInput, BundleCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type BundleCategoryCreateManyCategoryInputEnvelope = {
    data: BundleCategoryCreateManyCategoryInput | BundleCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BundleCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BundleCategoryWhereUniqueInput
    update: XOR<BundleCategoryUpdateWithoutCategoryInput, BundleCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<BundleCategoryCreateWithoutCategoryInput, BundleCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type BundleCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BundleCategoryWhereUniqueInput
    data: XOR<BundleCategoryUpdateWithoutCategoryInput, BundleCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type BundleCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: BundleCategoryScalarWhereInput
    data: XOR<BundleCategoryUpdateManyMutationInput, BundleCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductCreateWithoutBrandInput = {
    name: string
    itemCode: string
    price?: number | null
    stock?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Category?: CategoryCreateNestedOneWithoutProductInput
    Benefit?: BenefitCreateNestedOneWithoutProductInput
    CalculationData?: CalculationDataCreateNestedManyWithoutProductInput
    Ratings?: RatingsCreateNestedManyWithoutProductInput
    ItemRecomendation?: ItemRecomendationCreateNestedManyWithoutProductInput
    BundlingItem?: BundlingItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBrandInput = {
    id?: number
    name: string
    itemCode: string
    price?: number | null
    stock?: number | null
    categoryId?: number | null
    benefitId?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CalculationData?: CalculationDataUncheckedCreateNestedManyWithoutProductInput
    Ratings?: RatingsUncheckedCreateNestedManyWithoutProductInput
    ItemRecomendation?: ItemRecomendationUncheckedCreateNestedManyWithoutProductInput
    BundlingItem?: BundlingItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductCreateManyBrandInputEnvelope = {
    data: ProductCreateManyBrandInput | ProductCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBrandInput>
  }

  export type ProductCreateWithoutCalculationDataInput = {
    name: string
    itemCode: string
    price?: number | null
    stock?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Brand?: BrandCreateNestedOneWithoutProductInput
    Category?: CategoryCreateNestedOneWithoutProductInput
    Benefit?: BenefitCreateNestedOneWithoutProductInput
    Ratings?: RatingsCreateNestedManyWithoutProductInput
    ItemRecomendation?: ItemRecomendationCreateNestedManyWithoutProductInput
    BundlingItem?: BundlingItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCalculationDataInput = {
    id?: number
    name: string
    brandId?: number | null
    itemCode: string
    price?: number | null
    stock?: number | null
    categoryId?: number | null
    benefitId?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Ratings?: RatingsUncheckedCreateNestedManyWithoutProductInput
    ItemRecomendation?: ItemRecomendationUncheckedCreateNestedManyWithoutProductInput
    BundlingItem?: BundlingItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCalculationDataInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCalculationDataInput, ProductUncheckedCreateWithoutCalculationDataInput>
  }

  export type ProductUpsertWithoutCalculationDataInput = {
    update: XOR<ProductUpdateWithoutCalculationDataInput, ProductUncheckedUpdateWithoutCalculationDataInput>
    create: XOR<ProductCreateWithoutCalculationDataInput, ProductUncheckedCreateWithoutCalculationDataInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCalculationDataInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCalculationDataInput, ProductUncheckedUpdateWithoutCalculationDataInput>
  }

  export type ProductUpdateWithoutCalculationDataInput = {
    name?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Brand?: BrandUpdateOneWithoutProductNestedInput
    Category?: CategoryUpdateOneWithoutProductNestedInput
    Benefit?: BenefitUpdateOneWithoutProductNestedInput
    Ratings?: RatingsUpdateManyWithoutProductNestedInput
    ItemRecomendation?: ItemRecomendationUpdateManyWithoutProductNestedInput
    BundlingItem?: BundlingItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCalculationDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    benefitId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ratings?: RatingsUncheckedUpdateManyWithoutProductNestedInput
    ItemRecomendation?: ItemRecomendationUncheckedUpdateManyWithoutProductNestedInput
    BundlingItem?: BundlingItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type RatingsCreateWithoutUsersInput = {
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product: ProductCreateNestedOneWithoutRatingsInput
  }

  export type RatingsUncheckedCreateWithoutUsersInput = {
    id?: number
    productId: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingsCreateOrConnectWithoutUsersInput = {
    where: RatingsWhereUniqueInput
    create: XOR<RatingsCreateWithoutUsersInput, RatingsUncheckedCreateWithoutUsersInput>
  }

  export type RatingsCreateManyUsersInputEnvelope = {
    data: RatingsCreateManyUsersInput | RatingsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUsersInput = {
    totalPrice: number
    paymentStatus: string
    orderNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BundlingPackage: BundlingPackageCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutUsersInput = {
    id?: number
    bundlingPackId: number
    totalPrice: number
    paymentStatus: string
    orderNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUsersInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUsersInput, TransactionUncheckedCreateWithoutUsersInput>
  }

  export type TransactionCreateManyUsersInputEnvelope = {
    data: TransactionCreateManyUsersInput | TransactionCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type RatingsUpsertWithWhereUniqueWithoutUsersInput = {
    where: RatingsWhereUniqueInput
    update: XOR<RatingsUpdateWithoutUsersInput, RatingsUncheckedUpdateWithoutUsersInput>
    create: XOR<RatingsCreateWithoutUsersInput, RatingsUncheckedCreateWithoutUsersInput>
  }

  export type RatingsUpdateWithWhereUniqueWithoutUsersInput = {
    where: RatingsWhereUniqueInput
    data: XOR<RatingsUpdateWithoutUsersInput, RatingsUncheckedUpdateWithoutUsersInput>
  }

  export type RatingsUpdateManyWithWhereWithoutUsersInput = {
    where: RatingsScalarWhereInput
    data: XOR<RatingsUpdateManyMutationInput, RatingsUncheckedUpdateManyWithoutUsersInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutUsersInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUsersInput, TransactionUncheckedUpdateWithoutUsersInput>
    create: XOR<TransactionCreateWithoutUsersInput, TransactionUncheckedCreateWithoutUsersInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUsersInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUsersInput, TransactionUncheckedUpdateWithoutUsersInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUsersInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUsersInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    bundlingPackId?: IntFilter<"Transaction"> | number
    totalPrice?: FloatFilter<"Transaction"> | number
    paymentStatus?: StringFilter<"Transaction"> | string
    orderNumber?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type CategoryCreateWithoutBundleCategoryInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBundleCategoryInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBundleCategoryInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBundleCategoryInput, CategoryUncheckedCreateWithoutBundleCategoryInput>
  }

  export type BenefitCreateWithoutBundleCategoryInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductCreateNestedManyWithoutBenefitInput
  }

  export type BenefitUncheckedCreateWithoutBundleCategoryInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutBenefitInput
  }

  export type BenefitCreateOrConnectWithoutBundleCategoryInput = {
    where: BenefitWhereUniqueInput
    create: XOR<BenefitCreateWithoutBundleCategoryInput, BenefitUncheckedCreateWithoutBundleCategoryInput>
  }

  export type CategoryUpsertWithoutBundleCategoryInput = {
    update: XOR<CategoryUpdateWithoutBundleCategoryInput, CategoryUncheckedUpdateWithoutBundleCategoryInput>
    create: XOR<CategoryCreateWithoutBundleCategoryInput, CategoryUncheckedCreateWithoutBundleCategoryInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBundleCategoryInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBundleCategoryInput, CategoryUncheckedUpdateWithoutBundleCategoryInput>
  }

  export type CategoryUpdateWithoutBundleCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBundleCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BenefitUpsertWithoutBundleCategoryInput = {
    update: XOR<BenefitUpdateWithoutBundleCategoryInput, BenefitUncheckedUpdateWithoutBundleCategoryInput>
    create: XOR<BenefitCreateWithoutBundleCategoryInput, BenefitUncheckedCreateWithoutBundleCategoryInput>
    where?: BenefitWhereInput
  }

  export type BenefitUpdateToOneWithWhereWithoutBundleCategoryInput = {
    where?: BenefitWhereInput
    data: XOR<BenefitUpdateWithoutBundleCategoryInput, BenefitUncheckedUpdateWithoutBundleCategoryInput>
  }

  export type BenefitUpdateWithoutBundleCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateManyWithoutBenefitNestedInput
  }

  export type BenefitUncheckedUpdateWithoutBundleCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutBenefitNestedInput
  }

  export type UsersCreateWithoutRatingsInput = {
    name: string
    username: string
    password: string
    role?: string
    address: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Transaction?: TransactionCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutRatingsInput = {
    id?: number
    name: string
    username: string
    password: string
    role?: string
    address: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutRatingsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRatingsInput, UsersUncheckedCreateWithoutRatingsInput>
  }

  export type ProductCreateWithoutRatingsInput = {
    name: string
    itemCode: string
    price?: number | null
    stock?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Brand?: BrandCreateNestedOneWithoutProductInput
    Category?: CategoryCreateNestedOneWithoutProductInput
    Benefit?: BenefitCreateNestedOneWithoutProductInput
    CalculationData?: CalculationDataCreateNestedManyWithoutProductInput
    ItemRecomendation?: ItemRecomendationCreateNestedManyWithoutProductInput
    BundlingItem?: BundlingItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutRatingsInput = {
    id?: number
    name: string
    brandId?: number | null
    itemCode: string
    price?: number | null
    stock?: number | null
    categoryId?: number | null
    benefitId?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CalculationData?: CalculationDataUncheckedCreateNestedManyWithoutProductInput
    ItemRecomendation?: ItemRecomendationUncheckedCreateNestedManyWithoutProductInput
    BundlingItem?: BundlingItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutRatingsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRatingsInput, ProductUncheckedCreateWithoutRatingsInput>
  }

  export type UsersUpsertWithoutRatingsInput = {
    update: XOR<UsersUpdateWithoutRatingsInput, UsersUncheckedUpdateWithoutRatingsInput>
    create: XOR<UsersCreateWithoutRatingsInput, UsersUncheckedCreateWithoutRatingsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutRatingsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutRatingsInput, UsersUncheckedUpdateWithoutRatingsInput>
  }

  export type UsersUpdateWithoutRatingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ProductUpsertWithoutRatingsInput = {
    update: XOR<ProductUpdateWithoutRatingsInput, ProductUncheckedUpdateWithoutRatingsInput>
    create: XOR<ProductCreateWithoutRatingsInput, ProductUncheckedCreateWithoutRatingsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutRatingsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutRatingsInput, ProductUncheckedUpdateWithoutRatingsInput>
  }

  export type ProductUpdateWithoutRatingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Brand?: BrandUpdateOneWithoutProductNestedInput
    Category?: CategoryUpdateOneWithoutProductNestedInput
    Benefit?: BenefitUpdateOneWithoutProductNestedInput
    CalculationData?: CalculationDataUpdateManyWithoutProductNestedInput
    ItemRecomendation?: ItemRecomendationUpdateManyWithoutProductNestedInput
    BundlingItem?: BundlingItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    benefitId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CalculationData?: CalculationDataUncheckedUpdateManyWithoutProductNestedInput
    ItemRecomendation?: ItemRecomendationUncheckedUpdateManyWithoutProductNestedInput
    BundlingItem?: BundlingItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutItemRecomendationInput = {
    name: string
    itemCode: string
    price?: number | null
    stock?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Brand?: BrandCreateNestedOneWithoutProductInput
    Category?: CategoryCreateNestedOneWithoutProductInput
    Benefit?: BenefitCreateNestedOneWithoutProductInput
    CalculationData?: CalculationDataCreateNestedManyWithoutProductInput
    Ratings?: RatingsCreateNestedManyWithoutProductInput
    BundlingItem?: BundlingItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutItemRecomendationInput = {
    id?: number
    name: string
    brandId?: number | null
    itemCode: string
    price?: number | null
    stock?: number | null
    categoryId?: number | null
    benefitId?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CalculationData?: CalculationDataUncheckedCreateNestedManyWithoutProductInput
    Ratings?: RatingsUncheckedCreateNestedManyWithoutProductInput
    BundlingItem?: BundlingItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutItemRecomendationInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutItemRecomendationInput, ProductUncheckedCreateWithoutItemRecomendationInput>
  }

  export type ProductUpsertWithoutItemRecomendationInput = {
    update: XOR<ProductUpdateWithoutItemRecomendationInput, ProductUncheckedUpdateWithoutItemRecomendationInput>
    create: XOR<ProductCreateWithoutItemRecomendationInput, ProductUncheckedCreateWithoutItemRecomendationInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutItemRecomendationInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutItemRecomendationInput, ProductUncheckedUpdateWithoutItemRecomendationInput>
  }

  export type ProductUpdateWithoutItemRecomendationInput = {
    name?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Brand?: BrandUpdateOneWithoutProductNestedInput
    Category?: CategoryUpdateOneWithoutProductNestedInput
    Benefit?: BenefitUpdateOneWithoutProductNestedInput
    CalculationData?: CalculationDataUpdateManyWithoutProductNestedInput
    Ratings?: RatingsUpdateManyWithoutProductNestedInput
    BundlingItem?: BundlingItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutItemRecomendationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    benefitId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CalculationData?: CalculationDataUncheckedUpdateManyWithoutProductNestedInput
    Ratings?: RatingsUncheckedUpdateManyWithoutProductNestedInput
    BundlingItem?: BundlingItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type BundlingPackageCreateWithoutBundlingItemInput = {
    benefit: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Transaction?: TransactionCreateNestedManyWithoutBundlingPackageInput
  }

  export type BundlingPackageUncheckedCreateWithoutBundlingItemInput = {
    id?: number
    benefit: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutBundlingPackageInput
  }

  export type BundlingPackageCreateOrConnectWithoutBundlingItemInput = {
    where: BundlingPackageWhereUniqueInput
    create: XOR<BundlingPackageCreateWithoutBundlingItemInput, BundlingPackageUncheckedCreateWithoutBundlingItemInput>
  }

  export type ProductCreateWithoutBundlingItemInput = {
    name: string
    itemCode: string
    price?: number | null
    stock?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Brand?: BrandCreateNestedOneWithoutProductInput
    Category?: CategoryCreateNestedOneWithoutProductInput
    Benefit?: BenefitCreateNestedOneWithoutProductInput
    CalculationData?: CalculationDataCreateNestedManyWithoutProductInput
    Ratings?: RatingsCreateNestedManyWithoutProductInput
    ItemRecomendation?: ItemRecomendationCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBundlingItemInput = {
    id?: number
    name: string
    brandId?: number | null
    itemCode: string
    price?: number | null
    stock?: number | null
    categoryId?: number | null
    benefitId?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CalculationData?: CalculationDataUncheckedCreateNestedManyWithoutProductInput
    Ratings?: RatingsUncheckedCreateNestedManyWithoutProductInput
    ItemRecomendation?: ItemRecomendationUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBundlingItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBundlingItemInput, ProductUncheckedCreateWithoutBundlingItemInput>
  }

  export type BundlingPackageUpsertWithoutBundlingItemInput = {
    update: XOR<BundlingPackageUpdateWithoutBundlingItemInput, BundlingPackageUncheckedUpdateWithoutBundlingItemInput>
    create: XOR<BundlingPackageCreateWithoutBundlingItemInput, BundlingPackageUncheckedCreateWithoutBundlingItemInput>
    where?: BundlingPackageWhereInput
  }

  export type BundlingPackageUpdateToOneWithWhereWithoutBundlingItemInput = {
    where?: BundlingPackageWhereInput
    data: XOR<BundlingPackageUpdateWithoutBundlingItemInput, BundlingPackageUncheckedUpdateWithoutBundlingItemInput>
  }

  export type BundlingPackageUpdateWithoutBundlingItemInput = {
    benefit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUpdateManyWithoutBundlingPackageNestedInput
  }

  export type BundlingPackageUncheckedUpdateWithoutBundlingItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    benefit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutBundlingPackageNestedInput
  }

  export type ProductUpsertWithoutBundlingItemInput = {
    update: XOR<ProductUpdateWithoutBundlingItemInput, ProductUncheckedUpdateWithoutBundlingItemInput>
    create: XOR<ProductCreateWithoutBundlingItemInput, ProductUncheckedCreateWithoutBundlingItemInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutBundlingItemInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutBundlingItemInput, ProductUncheckedUpdateWithoutBundlingItemInput>
  }

  export type ProductUpdateWithoutBundlingItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Brand?: BrandUpdateOneWithoutProductNestedInput
    Category?: CategoryUpdateOneWithoutProductNestedInput
    Benefit?: BenefitUpdateOneWithoutProductNestedInput
    CalculationData?: CalculationDataUpdateManyWithoutProductNestedInput
    Ratings?: RatingsUpdateManyWithoutProductNestedInput
    ItemRecomendation?: ItemRecomendationUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBundlingItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    benefitId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CalculationData?: CalculationDataUncheckedUpdateManyWithoutProductNestedInput
    Ratings?: RatingsUncheckedUpdateManyWithoutProductNestedInput
    ItemRecomendation?: ItemRecomendationUncheckedUpdateManyWithoutProductNestedInput
  }

  export type BundlingItemCreateWithoutBundlingPackageInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    Product: ProductCreateNestedOneWithoutBundlingItemInput
  }

  export type BundlingItemUncheckedCreateWithoutBundlingPackageInput = {
    id?: number
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BundlingItemCreateOrConnectWithoutBundlingPackageInput = {
    where: BundlingItemWhereUniqueInput
    create: XOR<BundlingItemCreateWithoutBundlingPackageInput, BundlingItemUncheckedCreateWithoutBundlingPackageInput>
  }

  export type BundlingItemCreateManyBundlingPackageInputEnvelope = {
    data: BundlingItemCreateManyBundlingPackageInput | BundlingItemCreateManyBundlingPackageInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutBundlingPackageInput = {
    totalPrice: number
    paymentStatus: string
    orderNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users: UsersCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutBundlingPackageInput = {
    id?: number
    userId: number
    totalPrice: number
    paymentStatus: string
    orderNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutBundlingPackageInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutBundlingPackageInput, TransactionUncheckedCreateWithoutBundlingPackageInput>
  }

  export type TransactionCreateManyBundlingPackageInputEnvelope = {
    data: TransactionCreateManyBundlingPackageInput | TransactionCreateManyBundlingPackageInput[]
    skipDuplicates?: boolean
  }

  export type BundlingItemUpsertWithWhereUniqueWithoutBundlingPackageInput = {
    where: BundlingItemWhereUniqueInput
    update: XOR<BundlingItemUpdateWithoutBundlingPackageInput, BundlingItemUncheckedUpdateWithoutBundlingPackageInput>
    create: XOR<BundlingItemCreateWithoutBundlingPackageInput, BundlingItemUncheckedCreateWithoutBundlingPackageInput>
  }

  export type BundlingItemUpdateWithWhereUniqueWithoutBundlingPackageInput = {
    where: BundlingItemWhereUniqueInput
    data: XOR<BundlingItemUpdateWithoutBundlingPackageInput, BundlingItemUncheckedUpdateWithoutBundlingPackageInput>
  }

  export type BundlingItemUpdateManyWithWhereWithoutBundlingPackageInput = {
    where: BundlingItemScalarWhereInput
    data: XOR<BundlingItemUpdateManyMutationInput, BundlingItemUncheckedUpdateManyWithoutBundlingPackageInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutBundlingPackageInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutBundlingPackageInput, TransactionUncheckedUpdateWithoutBundlingPackageInput>
    create: XOR<TransactionCreateWithoutBundlingPackageInput, TransactionUncheckedCreateWithoutBundlingPackageInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutBundlingPackageInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutBundlingPackageInput, TransactionUncheckedUpdateWithoutBundlingPackageInput>
  }

  export type TransactionUpdateManyWithWhereWithoutBundlingPackageInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutBundlingPackageInput>
  }

  export type UsersCreateWithoutTransactionInput = {
    name: string
    username: string
    password: string
    role?: string
    address: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Ratings?: RatingsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutTransactionInput = {
    id?: number
    name: string
    username: string
    password: string
    role?: string
    address: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Ratings?: RatingsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutTransactionInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTransactionInput, UsersUncheckedCreateWithoutTransactionInput>
  }

  export type BundlingPackageCreateWithoutTransactionInput = {
    benefit: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BundlingItem?: BundlingItemCreateNestedManyWithoutBundlingPackageInput
  }

  export type BundlingPackageUncheckedCreateWithoutTransactionInput = {
    id?: number
    benefit: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BundlingItem?: BundlingItemUncheckedCreateNestedManyWithoutBundlingPackageInput
  }

  export type BundlingPackageCreateOrConnectWithoutTransactionInput = {
    where: BundlingPackageWhereUniqueInput
    create: XOR<BundlingPackageCreateWithoutTransactionInput, BundlingPackageUncheckedCreateWithoutTransactionInput>
  }

  export type UsersUpsertWithoutTransactionInput = {
    update: XOR<UsersUpdateWithoutTransactionInput, UsersUncheckedUpdateWithoutTransactionInput>
    create: XOR<UsersCreateWithoutTransactionInput, UsersUncheckedCreateWithoutTransactionInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTransactionInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTransactionInput, UsersUncheckedUpdateWithoutTransactionInput>
  }

  export type UsersUpdateWithoutTransactionInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ratings?: RatingsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ratings?: RatingsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type BundlingPackageUpsertWithoutTransactionInput = {
    update: XOR<BundlingPackageUpdateWithoutTransactionInput, BundlingPackageUncheckedUpdateWithoutTransactionInput>
    create: XOR<BundlingPackageCreateWithoutTransactionInput, BundlingPackageUncheckedCreateWithoutTransactionInput>
    where?: BundlingPackageWhereInput
  }

  export type BundlingPackageUpdateToOneWithWhereWithoutTransactionInput = {
    where?: BundlingPackageWhereInput
    data: XOR<BundlingPackageUpdateWithoutTransactionInput, BundlingPackageUncheckedUpdateWithoutTransactionInput>
  }

  export type BundlingPackageUpdateWithoutTransactionInput = {
    benefit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BundlingItem?: BundlingItemUpdateManyWithoutBundlingPackageNestedInput
  }

  export type BundlingPackageUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    benefit?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BundlingItem?: BundlingItemUncheckedUpdateManyWithoutBundlingPackageNestedInput
  }

  export type CalculationDataCreateManyProductInput = {
    id?: number
    transaction: string
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingsCreateManyProductInput = {
    id?: number
    userId: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemRecomendationCreateManyProductInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BundlingItemCreateManyProductInput = {
    id?: number
    bundlingPackId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalculationDataUpdateWithoutProductInput = {
    transaction?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalculationDataUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalculationDataUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingsUpdateWithoutProductInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingsUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingsUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemRecomendationUpdateWithoutProductInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemRecomendationUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemRecomendationUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundlingItemUpdateWithoutProductInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BundlingPackage?: BundlingPackageUpdateOneRequiredWithoutBundlingItemNestedInput
  }

  export type BundlingItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    bundlingPackId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundlingItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    bundlingPackId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyBenefitInput = {
    id?: number
    name: string
    brandId?: number | null
    itemCode: string
    price?: number | null
    stock?: number | null
    categoryId?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BundleCategoryCreateManyBenefitInput = {
    id?: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutBenefitInput = {
    name?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Brand?: BrandUpdateOneWithoutProductNestedInput
    Category?: CategoryUpdateOneWithoutProductNestedInput
    CalculationData?: CalculationDataUpdateManyWithoutProductNestedInput
    Ratings?: RatingsUpdateManyWithoutProductNestedInput
    ItemRecomendation?: ItemRecomendationUpdateManyWithoutProductNestedInput
    BundlingItem?: BundlingItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBenefitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CalculationData?: CalculationDataUncheckedUpdateManyWithoutProductNestedInput
    Ratings?: RatingsUncheckedUpdateManyWithoutProductNestedInput
    ItemRecomendation?: ItemRecomendationUncheckedUpdateManyWithoutProductNestedInput
    BundlingItem?: BundlingItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBenefitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundleCategoryUpdateWithoutBenefitInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneRequiredWithoutBundleCategoryNestedInput
  }

  export type BundleCategoryUncheckedUpdateWithoutBenefitInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundleCategoryUncheckedUpdateManyWithoutBenefitInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    name: string
    brandId?: number | null
    itemCode: string
    price?: number | null
    stock?: number | null
    benefitId?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BundleCategoryCreateManyCategoryInput = {
    id?: number
    benefitId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Brand?: BrandUpdateOneWithoutProductNestedInput
    Benefit?: BenefitUpdateOneWithoutProductNestedInput
    CalculationData?: CalculationDataUpdateManyWithoutProductNestedInput
    Ratings?: RatingsUpdateManyWithoutProductNestedInput
    ItemRecomendation?: ItemRecomendationUpdateManyWithoutProductNestedInput
    BundlingItem?: BundlingItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    benefitId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CalculationData?: CalculationDataUncheckedUpdateManyWithoutProductNestedInput
    Ratings?: RatingsUncheckedUpdateManyWithoutProductNestedInput
    ItemRecomendation?: ItemRecomendationUncheckedUpdateManyWithoutProductNestedInput
    BundlingItem?: BundlingItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    benefitId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundleCategoryUpdateWithoutCategoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Benefit?: BenefitUpdateOneRequiredWithoutBundleCategoryNestedInput
  }

  export type BundleCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    benefitId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundleCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    benefitId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyBrandInput = {
    id?: number
    name: string
    itemCode: string
    price?: number | null
    stock?: number | null
    categoryId?: number | null
    benefitId?: number | null
    imageId?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneWithoutProductNestedInput
    Benefit?: BenefitUpdateOneWithoutProductNestedInput
    CalculationData?: CalculationDataUpdateManyWithoutProductNestedInput
    Ratings?: RatingsUpdateManyWithoutProductNestedInput
    ItemRecomendation?: ItemRecomendationUpdateManyWithoutProductNestedInput
    BundlingItem?: BundlingItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    benefitId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CalculationData?: CalculationDataUncheckedUpdateManyWithoutProductNestedInput
    Ratings?: RatingsUncheckedUpdateManyWithoutProductNestedInput
    ItemRecomendation?: ItemRecomendationUncheckedUpdateManyWithoutProductNestedInput
    BundlingItem?: BundlingItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    benefitId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingsCreateManyUsersInput = {
    id?: number
    productId: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyUsersInput = {
    id?: number
    bundlingPackId: number
    totalPrice: number
    paymentStatus: string
    orderNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingsUpdateWithoutUsersInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUsersInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BundlingPackage?: BundlingPackageUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    bundlingPackId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    bundlingPackId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundlingItemCreateManyBundlingPackageInput = {
    id?: number
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyBundlingPackageInput = {
    id?: number
    userId: number
    totalPrice: number
    paymentStatus: string
    orderNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BundlingItemUpdateWithoutBundlingPackageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateOneRequiredWithoutBundlingItemNestedInput
  }

  export type BundlingItemUncheckedUpdateWithoutBundlingPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BundlingItemUncheckedUpdateManyWithoutBundlingPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutBundlingPackageInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutBundlingPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutBundlingPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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