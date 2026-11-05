
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
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TestCase
 * 
 */
export type TestCase = $Result.DefaultSelection<Prisma.$TestCasePayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model SubmissionVerdict
 * 
 */
export type SubmissionVerdict = $Result.DefaultSelection<Prisma.$SubmissionVerdictPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const SubmissionStatus: {
  WAITING: 'WAITING',
  GRADING: 'GRADING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus]


export const CaseVerdict: {
  P: 'P',
  W: 'W',
  T: 'T',
  X: 'X',
  M: 'M'
};

export type CaseVerdict = (typeof CaseVerdict)[keyof typeof CaseVerdict]

}

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type SubmissionStatus = $Enums.SubmissionStatus

export const SubmissionStatus: typeof $Enums.SubmissionStatus

export type CaseVerdict = $Enums.CaseVerdict

export const CaseVerdict: typeof $Enums.CaseVerdict

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tasks
 * const tasks = await prisma.task.findMany()
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
   * // Fetch zero or more Tasks
   * const tasks = await prisma.task.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.testCase`: Exposes CRUD operations for the **TestCase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestCases
    * const testCases = await prisma.testCase.findMany()
    * ```
    */
  get testCase(): Prisma.TestCaseDelegate<ExtArgs>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs>;

  /**
   * `prisma.submissionVerdict`: Exposes CRUD operations for the **SubmissionVerdict** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubmissionVerdicts
    * const submissionVerdicts = await prisma.submissionVerdict.findMany()
    * ```
    */
  get submissionVerdict(): Prisma.SubmissionVerdictDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Task: 'Task',
    TestCase: 'TestCase',
    Submission: 'Submission',
    SubmissionVerdict: 'SubmissionVerdict'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "task" | "testCase" | "submission" | "submissionVerdict"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TestCase: {
        payload: Prisma.$TestCasePayload<ExtArgs>
        fields: Prisma.TestCaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestCaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestCaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          findFirst: {
            args: Prisma.TestCaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestCaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          findMany: {
            args: Prisma.TestCaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>[]
          }
          create: {
            args: Prisma.TestCaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          createMany: {
            args: Prisma.TestCaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>[]
          }
          delete: {
            args: Prisma.TestCaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          update: {
            args: Prisma.TestCaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          deleteMany: {
            args: Prisma.TestCaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestCaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestCaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          aggregate: {
            args: Prisma.TestCaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestCase>
          }
          groupBy: {
            args: Prisma.TestCaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestCaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCaseCountArgs<ExtArgs>
            result: $Utils.Optional<TestCaseCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      SubmissionVerdict: {
        payload: Prisma.$SubmissionVerdictPayload<ExtArgs>
        fields: Prisma.SubmissionVerdictFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionVerdictFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionVerdictPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionVerdictFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionVerdictPayload>
          }
          findFirst: {
            args: Prisma.SubmissionVerdictFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionVerdictPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionVerdictFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionVerdictPayload>
          }
          findMany: {
            args: Prisma.SubmissionVerdictFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionVerdictPayload>[]
          }
          create: {
            args: Prisma.SubmissionVerdictCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionVerdictPayload>
          }
          createMany: {
            args: Prisma.SubmissionVerdictCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionVerdictCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionVerdictPayload>[]
          }
          delete: {
            args: Prisma.SubmissionVerdictDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionVerdictPayload>
          }
          update: {
            args: Prisma.SubmissionVerdictUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionVerdictPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionVerdictDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionVerdictUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubmissionVerdictUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionVerdictPayload>
          }
          aggregate: {
            args: Prisma.SubmissionVerdictAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmissionVerdict>
          }
          groupBy: {
            args: Prisma.SubmissionVerdictGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionVerdictGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionVerdictCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionVerdictCountAggregateOutputType> | number
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
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    testCases: number
    submissions: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testCases?: boolean | TaskCountOutputTypeCountTestCasesArgs
    submissions?: boolean | TaskCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTestCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type TestCaseCountOutputType
   */

  export type TestCaseCountOutputType = {
    verdicts: number
  }

  export type TestCaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verdicts?: boolean | TestCaseCountOutputTypeCountVerdictsArgs
  }

  // Custom InputTypes
  /**
   * TestCaseCountOutputType without action
   */
  export type TestCaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseCountOutputType
     */
    select?: TestCaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestCaseCountOutputType without action
   */
  export type TestCaseCountOutputTypeCountVerdictsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionVerdictWhereInput
  }


  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    caseVerdicts: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caseVerdicts?: boolean | SubmissionCountOutputTypeCountCaseVerdictsArgs
  }

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountCaseVerdictsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionVerdictWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    timeLimitMs: number | null
    memoryLimitMb: number | null
  }

  export type TaskSumAggregateOutputType = {
    timeLimitMs: number | null
    memoryLimitMb: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    trackId: string | null
    difficulty: $Enums.Difficulty | null
    timeLimitMs: number | null
    memoryLimitMb: number | null
    statementMarkdown: string | null
    inputFormat: string | null
    outputFormat: string | null
    sampleInput: string | null
    sampleOutput: string | null
    constraints: string | null
    hints: string | null
    hasTracingQuiz: boolean | null
    tracingSnippet: string | null
    tracingQuestion: string | null
    tracingExpectedOutput: string | null
    tracingExplanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    trackId: string | null
    difficulty: $Enums.Difficulty | null
    timeLimitMs: number | null
    memoryLimitMb: number | null
    statementMarkdown: string | null
    inputFormat: string | null
    outputFormat: string | null
    sampleInput: string | null
    sampleOutput: string | null
    constraints: string | null
    hints: string | null
    hasTracingQuiz: boolean | null
    tracingSnippet: string | null
    tracingQuestion: string | null
    tracingExpectedOutput: string | null
    tracingExplanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    trackId: number
    difficulty: number
    timeLimitMs: number
    memoryLimitMb: number
    tags: number
    statementMarkdown: number
    inputFormat: number
    outputFormat: number
    sampleInput: number
    sampleOutput: number
    constraints: number
    hints: number
    hasTracingQuiz: number
    tracingSnippet: number
    tracingQuestion: number
    tracingExpectedOutput: number
    tracingExplanation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    timeLimitMs?: true
    memoryLimitMb?: true
  }

  export type TaskSumAggregateInputType = {
    timeLimitMs?: true
    memoryLimitMb?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    trackId?: true
    difficulty?: true
    timeLimitMs?: true
    memoryLimitMb?: true
    statementMarkdown?: true
    inputFormat?: true
    outputFormat?: true
    sampleInput?: true
    sampleOutput?: true
    constraints?: true
    hints?: true
    hasTracingQuiz?: true
    tracingSnippet?: true
    tracingQuestion?: true
    tracingExpectedOutput?: true
    tracingExplanation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    trackId?: true
    difficulty?: true
    timeLimitMs?: true
    memoryLimitMb?: true
    statementMarkdown?: true
    inputFormat?: true
    outputFormat?: true
    sampleInput?: true
    sampleOutput?: true
    constraints?: true
    hints?: true
    hasTracingQuiz?: true
    tracingSnippet?: true
    tracingQuestion?: true
    tracingExpectedOutput?: true
    tracingExplanation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    trackId?: true
    difficulty?: true
    timeLimitMs?: true
    memoryLimitMb?: true
    tags?: true
    statementMarkdown?: true
    inputFormat?: true
    outputFormat?: true
    sampleInput?: true
    sampleOutput?: true
    constraints?: true
    hints?: true
    hasTracingQuiz?: true
    tracingSnippet?: true
    tracingQuestion?: true
    tracingExpectedOutput?: true
    tracingExplanation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    slug: string
    trackId: string
    difficulty: $Enums.Difficulty
    timeLimitMs: number
    memoryLimitMb: number
    tags: string[]
    statementMarkdown: string
    inputFormat: string
    outputFormat: string
    sampleInput: string
    sampleOutput: string
    constraints: string
    hints: string | null
    hasTracingQuiz: boolean
    tracingSnippet: string | null
    tracingQuestion: string | null
    tracingExpectedOutput: string | null
    tracingExplanation: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    trackId?: boolean
    difficulty?: boolean
    timeLimitMs?: boolean
    memoryLimitMb?: boolean
    tags?: boolean
    statementMarkdown?: boolean
    inputFormat?: boolean
    outputFormat?: boolean
    sampleInput?: boolean
    sampleOutput?: boolean
    constraints?: boolean
    hints?: boolean
    hasTracingQuiz?: boolean
    tracingSnippet?: boolean
    tracingQuestion?: boolean
    tracingExpectedOutput?: boolean
    tracingExplanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    testCases?: boolean | Task$testCasesArgs<ExtArgs>
    submissions?: boolean | Task$submissionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    trackId?: boolean
    difficulty?: boolean
    timeLimitMs?: boolean
    memoryLimitMb?: boolean
    tags?: boolean
    statementMarkdown?: boolean
    inputFormat?: boolean
    outputFormat?: boolean
    sampleInput?: boolean
    sampleOutput?: boolean
    constraints?: boolean
    hints?: boolean
    hasTracingQuiz?: boolean
    tracingSnippet?: boolean
    tracingQuestion?: boolean
    tracingExpectedOutput?: boolean
    tracingExplanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    trackId?: boolean
    difficulty?: boolean
    timeLimitMs?: boolean
    memoryLimitMb?: boolean
    tags?: boolean
    statementMarkdown?: boolean
    inputFormat?: boolean
    outputFormat?: boolean
    sampleInput?: boolean
    sampleOutput?: boolean
    constraints?: boolean
    hints?: boolean
    hasTracingQuiz?: boolean
    tracingSnippet?: boolean
    tracingQuestion?: boolean
    tracingExpectedOutput?: boolean
    tracingExplanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testCases?: boolean | Task$testCasesArgs<ExtArgs>
    submissions?: boolean | Task$submissionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      testCases: Prisma.$TestCasePayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      trackId: string
      difficulty: $Enums.Difficulty
      timeLimitMs: number
      memoryLimitMb: number
      tags: string[]
      statementMarkdown: string
      inputFormat: string
      outputFormat: string
      sampleInput: string
      sampleOutput: string
      constraints: string
      hints: string | null
      hasTracingQuiz: boolean
      tracingSnippet: string | null
      tracingQuestion: string | null
      tracingExpectedOutput: string | null
      tracingExplanation: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testCases<T extends Task$testCasesArgs<ExtArgs> = {}>(args?: Subset<T, Task$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany"> | Null>
    submissions<T extends Task$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Task$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly slug: FieldRef<"Task", 'String'>
    readonly trackId: FieldRef<"Task", 'String'>
    readonly difficulty: FieldRef<"Task", 'Difficulty'>
    readonly timeLimitMs: FieldRef<"Task", 'Int'>
    readonly memoryLimitMb: FieldRef<"Task", 'Int'>
    readonly tags: FieldRef<"Task", 'String[]'>
    readonly statementMarkdown: FieldRef<"Task", 'String'>
    readonly inputFormat: FieldRef<"Task", 'String'>
    readonly outputFormat: FieldRef<"Task", 'String'>
    readonly sampleInput: FieldRef<"Task", 'String'>
    readonly sampleOutput: FieldRef<"Task", 'String'>
    readonly constraints: FieldRef<"Task", 'String'>
    readonly hints: FieldRef<"Task", 'String'>
    readonly hasTracingQuiz: FieldRef<"Task", 'Boolean'>
    readonly tracingSnippet: FieldRef<"Task", 'String'>
    readonly tracingQuestion: FieldRef<"Task", 'String'>
    readonly tracingExpectedOutput: FieldRef<"Task", 'String'>
    readonly tracingExplanation: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task.testCases
   */
  export type Task$testCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    where?: TestCaseWhereInput
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    cursor?: TestCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * Task.submissions
   */
  export type Task$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TestCase
   */

  export type AggregateTestCase = {
    _count: TestCaseCountAggregateOutputType | null
    _avg: TestCaseAvgAggregateOutputType | null
    _sum: TestCaseSumAggregateOutputType | null
    _min: TestCaseMinAggregateOutputType | null
    _max: TestCaseMaxAggregateOutputType | null
  }

  export type TestCaseAvgAggregateOutputType = {
    order: number | null
    scoreWeight: number | null
  }

  export type TestCaseSumAggregateOutputType = {
    order: number | null
    scoreWeight: number | null
  }

  export type TestCaseMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    order: number | null
    input: string | null
    expectedOutput: string | null
    isSample: boolean | null
    scoreWeight: number | null
  }

  export type TestCaseMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    order: number | null
    input: string | null
    expectedOutput: string | null
    isSample: boolean | null
    scoreWeight: number | null
  }

  export type TestCaseCountAggregateOutputType = {
    id: number
    taskId: number
    order: number
    input: number
    expectedOutput: number
    isSample: number
    scoreWeight: number
    _all: number
  }


  export type TestCaseAvgAggregateInputType = {
    order?: true
    scoreWeight?: true
  }

  export type TestCaseSumAggregateInputType = {
    order?: true
    scoreWeight?: true
  }

  export type TestCaseMinAggregateInputType = {
    id?: true
    taskId?: true
    order?: true
    input?: true
    expectedOutput?: true
    isSample?: true
    scoreWeight?: true
  }

  export type TestCaseMaxAggregateInputType = {
    id?: true
    taskId?: true
    order?: true
    input?: true
    expectedOutput?: true
    isSample?: true
    scoreWeight?: true
  }

  export type TestCaseCountAggregateInputType = {
    id?: true
    taskId?: true
    order?: true
    input?: true
    expectedOutput?: true
    isSample?: true
    scoreWeight?: true
    _all?: true
  }

  export type TestCaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCase to aggregate.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestCases
    **/
    _count?: true | TestCaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestCaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestCaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestCaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestCaseMaxAggregateInputType
  }

  export type GetTestCaseAggregateType<T extends TestCaseAggregateArgs> = {
        [P in keyof T & keyof AggregateTestCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestCase[P]>
      : GetScalarType<T[P], AggregateTestCase[P]>
  }




  export type TestCaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseWhereInput
    orderBy?: TestCaseOrderByWithAggregationInput | TestCaseOrderByWithAggregationInput[]
    by: TestCaseScalarFieldEnum[] | TestCaseScalarFieldEnum
    having?: TestCaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCaseCountAggregateInputType | true
    _avg?: TestCaseAvgAggregateInputType
    _sum?: TestCaseSumAggregateInputType
    _min?: TestCaseMinAggregateInputType
    _max?: TestCaseMaxAggregateInputType
  }

  export type TestCaseGroupByOutputType = {
    id: string
    taskId: string
    order: number
    input: string
    expectedOutput: string
    isSample: boolean
    scoreWeight: number
    _count: TestCaseCountAggregateOutputType | null
    _avg: TestCaseAvgAggregateOutputType | null
    _sum: TestCaseSumAggregateOutputType | null
    _min: TestCaseMinAggregateOutputType | null
    _max: TestCaseMaxAggregateOutputType | null
  }

  type GetTestCaseGroupByPayload<T extends TestCaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestCaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestCaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestCaseGroupByOutputType[P]>
            : GetScalarType<T[P], TestCaseGroupByOutputType[P]>
        }
      >
    >


  export type TestCaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    order?: boolean
    input?: boolean
    expectedOutput?: boolean
    isSample?: boolean
    scoreWeight?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    verdicts?: boolean | TestCase$verdictsArgs<ExtArgs>
    _count?: boolean | TestCaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCase"]>

  export type TestCaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    order?: boolean
    input?: boolean
    expectedOutput?: boolean
    isSample?: boolean
    scoreWeight?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCase"]>

  export type TestCaseSelectScalar = {
    id?: boolean
    taskId?: boolean
    order?: boolean
    input?: boolean
    expectedOutput?: boolean
    isSample?: boolean
    scoreWeight?: boolean
  }

  export type TestCaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    verdicts?: boolean | TestCase$verdictsArgs<ExtArgs>
    _count?: boolean | TestCaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestCaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TestCasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestCase"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      verdicts: Prisma.$SubmissionVerdictPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      order: number
      input: string
      expectedOutput: string
      isSample: boolean
      scoreWeight: number
    }, ExtArgs["result"]["testCase"]>
    composites: {}
  }

  type TestCaseGetPayload<S extends boolean | null | undefined | TestCaseDefaultArgs> = $Result.GetResult<Prisma.$TestCasePayload, S>

  type TestCaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TestCaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestCaseCountAggregateInputType | true
    }

  export interface TestCaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestCase'], meta: { name: 'TestCase' } }
    /**
     * Find zero or one TestCase that matches the filter.
     * @param {TestCaseFindUniqueArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestCaseFindUniqueArgs>(args: SelectSubset<T, TestCaseFindUniqueArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TestCase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TestCaseFindUniqueOrThrowArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestCaseFindUniqueOrThrowArgs>(args: SelectSubset<T, TestCaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TestCase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindFirstArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestCaseFindFirstArgs>(args?: SelectSubset<T, TestCaseFindFirstArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TestCase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindFirstOrThrowArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestCaseFindFirstOrThrowArgs>(args?: SelectSubset<T, TestCaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TestCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestCases
     * const testCases = await prisma.testCase.findMany()
     * 
     * // Get first 10 TestCases
     * const testCases = await prisma.testCase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testCaseWithIdOnly = await prisma.testCase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestCaseFindManyArgs>(args?: SelectSubset<T, TestCaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TestCase.
     * @param {TestCaseCreateArgs} args - Arguments to create a TestCase.
     * @example
     * // Create one TestCase
     * const TestCase = await prisma.testCase.create({
     *   data: {
     *     // ... data to create a TestCase
     *   }
     * })
     * 
     */
    create<T extends TestCaseCreateArgs>(args: SelectSubset<T, TestCaseCreateArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TestCases.
     * @param {TestCaseCreateManyArgs} args - Arguments to create many TestCases.
     * @example
     * // Create many TestCases
     * const testCase = await prisma.testCase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCaseCreateManyArgs>(args?: SelectSubset<T, TestCaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestCases and returns the data saved in the database.
     * @param {TestCaseCreateManyAndReturnArgs} args - Arguments to create many TestCases.
     * @example
     * // Create many TestCases
     * const testCase = await prisma.testCase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestCases and only return the `id`
     * const testCaseWithIdOnly = await prisma.testCase.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCaseCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TestCase.
     * @param {TestCaseDeleteArgs} args - Arguments to delete one TestCase.
     * @example
     * // Delete one TestCase
     * const TestCase = await prisma.testCase.delete({
     *   where: {
     *     // ... filter to delete one TestCase
     *   }
     * })
     * 
     */
    delete<T extends TestCaseDeleteArgs>(args: SelectSubset<T, TestCaseDeleteArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TestCase.
     * @param {TestCaseUpdateArgs} args - Arguments to update one TestCase.
     * @example
     * // Update one TestCase
     * const testCase = await prisma.testCase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestCaseUpdateArgs>(args: SelectSubset<T, TestCaseUpdateArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TestCases.
     * @param {TestCaseDeleteManyArgs} args - Arguments to filter TestCases to delete.
     * @example
     * // Delete a few TestCases
     * const { count } = await prisma.testCase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestCaseDeleteManyArgs>(args?: SelectSubset<T, TestCaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestCases
     * const testCase = await prisma.testCase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestCaseUpdateManyArgs>(args: SelectSubset<T, TestCaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestCase.
     * @param {TestCaseUpsertArgs} args - Arguments to update or create a TestCase.
     * @example
     * // Update or create a TestCase
     * const testCase = await prisma.testCase.upsert({
     *   create: {
     *     // ... data to create a TestCase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestCase we want to update
     *   }
     * })
     */
    upsert<T extends TestCaseUpsertArgs>(args: SelectSubset<T, TestCaseUpsertArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseCountArgs} args - Arguments to filter TestCases to count.
     * @example
     * // Count the number of TestCases
     * const count = await prisma.testCase.count({
     *   where: {
     *     // ... the filter for the TestCases we want to count
     *   }
     * })
    **/
    count<T extends TestCaseCountArgs>(
      args?: Subset<T, TestCaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestCaseAggregateArgs>(args: Subset<T, TestCaseAggregateArgs>): Prisma.PrismaPromise<GetTestCaseAggregateType<T>>

    /**
     * Group by TestCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseGroupByArgs} args - Group by arguments.
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
      T extends TestCaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestCaseGroupByArgs['orderBy'] }
        : { orderBy?: TestCaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestCaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestCase model
   */
  readonly fields: TestCaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestCase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestCaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    verdicts<T extends TestCase$verdictsArgs<ExtArgs> = {}>(args?: Subset<T, TestCase$verdictsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionVerdictPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the TestCase model
   */ 
  interface TestCaseFieldRefs {
    readonly id: FieldRef<"TestCase", 'String'>
    readonly taskId: FieldRef<"TestCase", 'String'>
    readonly order: FieldRef<"TestCase", 'Int'>
    readonly input: FieldRef<"TestCase", 'String'>
    readonly expectedOutput: FieldRef<"TestCase", 'String'>
    readonly isSample: FieldRef<"TestCase", 'Boolean'>
    readonly scoreWeight: FieldRef<"TestCase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TestCase findUnique
   */
  export type TestCaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase findUniqueOrThrow
   */
  export type TestCaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase findFirst
   */
  export type TestCaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCases.
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCases.
     */
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestCase findFirstOrThrow
   */
  export type TestCaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCases.
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCases.
     */
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestCase findMany
   */
  export type TestCaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCases to fetch.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestCases.
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestCase create
   */
  export type TestCaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * The data needed to create a TestCase.
     */
    data: XOR<TestCaseCreateInput, TestCaseUncheckedCreateInput>
  }

  /**
   * TestCase createMany
   */
  export type TestCaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestCases.
     */
    data: TestCaseCreateManyInput | TestCaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestCase createManyAndReturn
   */
  export type TestCaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TestCases.
     */
    data: TestCaseCreateManyInput | TestCaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCase update
   */
  export type TestCaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * The data needed to update a TestCase.
     */
    data: XOR<TestCaseUpdateInput, TestCaseUncheckedUpdateInput>
    /**
     * Choose, which TestCase to update.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase updateMany
   */
  export type TestCaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestCases.
     */
    data: XOR<TestCaseUpdateManyMutationInput, TestCaseUncheckedUpdateManyInput>
    /**
     * Filter which TestCases to update
     */
    where?: TestCaseWhereInput
  }

  /**
   * TestCase upsert
   */
  export type TestCaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * The filter to search for the TestCase to update in case it exists.
     */
    where: TestCaseWhereUniqueInput
    /**
     * In case the TestCase found by the `where` argument doesn't exist, create a new TestCase with this data.
     */
    create: XOR<TestCaseCreateInput, TestCaseUncheckedCreateInput>
    /**
     * In case the TestCase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestCaseUpdateInput, TestCaseUncheckedUpdateInput>
  }

  /**
   * TestCase delete
   */
  export type TestCaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter which TestCase to delete.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase deleteMany
   */
  export type TestCaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCases to delete
     */
    where?: TestCaseWhereInput
  }

  /**
   * TestCase.verdicts
   */
  export type TestCase$verdictsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionVerdict
     */
    select?: SubmissionVerdictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionVerdictInclude<ExtArgs> | null
    where?: SubmissionVerdictWhereInput
    orderBy?: SubmissionVerdictOrderByWithRelationInput | SubmissionVerdictOrderByWithRelationInput[]
    cursor?: SubmissionVerdictWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionVerdictScalarFieldEnum | SubmissionVerdictScalarFieldEnum[]
  }

  /**
   * TestCase without action
   */
  export type TestCaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    score: number | null
    executionTimeMs: number | null
    memoryUsedKb: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    score: number | null
    executionTimeMs: number | null
    memoryUsedKb: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    language: string | null
    code: string | null
    status: $Enums.SubmissionStatus | null
    verdictString: string | null
    score: number | null
    executionTimeMs: number | null
    memoryUsedKb: number | null
    errorMessage: string | null
    submittedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    language: string | null
    code: string | null
    status: $Enums.SubmissionStatus | null
    verdictString: string | null
    score: number | null
    executionTimeMs: number | null
    memoryUsedKb: number | null
    errorMessage: string | null
    submittedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    taskId: number
    userId: number
    language: number
    code: number
    status: number
    verdictString: number
    score: number
    executionTimeMs: number
    memoryUsedKb: number
    errorMessage: number
    submittedAt: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    score?: true
    executionTimeMs?: true
    memoryUsedKb?: true
  }

  export type SubmissionSumAggregateInputType = {
    score?: true
    executionTimeMs?: true
    memoryUsedKb?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    language?: true
    code?: true
    status?: true
    verdictString?: true
    score?: true
    executionTimeMs?: true
    memoryUsedKb?: true
    errorMessage?: true
    submittedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    language?: true
    code?: true
    status?: true
    verdictString?: true
    score?: true
    executionTimeMs?: true
    memoryUsedKb?: true
    errorMessage?: true
    submittedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    language?: true
    code?: true
    status?: true
    verdictString?: true
    score?: true
    executionTimeMs?: true
    memoryUsedKb?: true
    errorMessage?: true
    submittedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    taskId: string
    userId: string
    language: string
    code: string
    status: $Enums.SubmissionStatus
    verdictString: string
    score: number
    executionTimeMs: number | null
    memoryUsedKb: number | null
    errorMessage: string | null
    submittedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    language?: boolean
    code?: boolean
    status?: boolean
    verdictString?: boolean
    score?: boolean
    executionTimeMs?: boolean
    memoryUsedKb?: boolean
    errorMessage?: boolean
    submittedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    caseVerdicts?: boolean | Submission$caseVerdictsArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    language?: boolean
    code?: boolean
    status?: boolean
    verdictString?: boolean
    score?: boolean
    executionTimeMs?: boolean
    memoryUsedKb?: boolean
    errorMessage?: boolean
    submittedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    taskId?: boolean
    userId?: boolean
    language?: boolean
    code?: boolean
    status?: boolean
    verdictString?: boolean
    score?: boolean
    executionTimeMs?: boolean
    memoryUsedKb?: boolean
    errorMessage?: boolean
    submittedAt?: boolean
  }

  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    caseVerdicts?: boolean | Submission$caseVerdictsArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      caseVerdicts: Prisma.$SubmissionVerdictPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      userId: string
      language: string
      code: string
      status: $Enums.SubmissionStatus
      verdictString: string
      score: number
      executionTimeMs: number | null
      memoryUsedKb: number | null
      errorMessage: string | null
      submittedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    caseVerdicts<T extends Submission$caseVerdictsArgs<ExtArgs> = {}>(args?: Subset<T, Submission$caseVerdictsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionVerdictPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Submission model
   */ 
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly taskId: FieldRef<"Submission", 'String'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly language: FieldRef<"Submission", 'String'>
    readonly code: FieldRef<"Submission", 'String'>
    readonly status: FieldRef<"Submission", 'SubmissionStatus'>
    readonly verdictString: FieldRef<"Submission", 'String'>
    readonly score: FieldRef<"Submission", 'Int'>
    readonly executionTimeMs: FieldRef<"Submission", 'Int'>
    readonly memoryUsedKb: FieldRef<"Submission", 'Int'>
    readonly errorMessage: FieldRef<"Submission", 'String'>
    readonly submittedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
  }

  /**
   * Submission.caseVerdicts
   */
  export type Submission$caseVerdictsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionVerdict
     */
    select?: SubmissionVerdictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionVerdictInclude<ExtArgs> | null
    where?: SubmissionVerdictWhereInput
    orderBy?: SubmissionVerdictOrderByWithRelationInput | SubmissionVerdictOrderByWithRelationInput[]
    cursor?: SubmissionVerdictWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionVerdictScalarFieldEnum | SubmissionVerdictScalarFieldEnum[]
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model SubmissionVerdict
   */

  export type AggregateSubmissionVerdict = {
    _count: SubmissionVerdictCountAggregateOutputType | null
    _avg: SubmissionVerdictAvgAggregateOutputType | null
    _sum: SubmissionVerdictSumAggregateOutputType | null
    _min: SubmissionVerdictMinAggregateOutputType | null
    _max: SubmissionVerdictMaxAggregateOutputType | null
  }

  export type SubmissionVerdictAvgAggregateOutputType = {
    order: number | null
    executionTimeMs: number | null
    memoryUsedKb: number | null
  }

  export type SubmissionVerdictSumAggregateOutputType = {
    order: number | null
    executionTimeMs: number | null
    memoryUsedKb: number | null
  }

  export type SubmissionVerdictMinAggregateOutputType = {
    id: string | null
    submissionId: string | null
    testCaseId: string | null
    order: number | null
    verdict: $Enums.CaseVerdict | null
    verdictChar: string | null
    executionTimeMs: number | null
    memoryUsedKb: number | null
    stdout: string | null
    stderr: string | null
  }

  export type SubmissionVerdictMaxAggregateOutputType = {
    id: string | null
    submissionId: string | null
    testCaseId: string | null
    order: number | null
    verdict: $Enums.CaseVerdict | null
    verdictChar: string | null
    executionTimeMs: number | null
    memoryUsedKb: number | null
    stdout: string | null
    stderr: string | null
  }

  export type SubmissionVerdictCountAggregateOutputType = {
    id: number
    submissionId: number
    testCaseId: number
    order: number
    verdict: number
    verdictChar: number
    executionTimeMs: number
    memoryUsedKb: number
    stdout: number
    stderr: number
    _all: number
  }


  export type SubmissionVerdictAvgAggregateInputType = {
    order?: true
    executionTimeMs?: true
    memoryUsedKb?: true
  }

  export type SubmissionVerdictSumAggregateInputType = {
    order?: true
    executionTimeMs?: true
    memoryUsedKb?: true
  }

  export type SubmissionVerdictMinAggregateInputType = {
    id?: true
    submissionId?: true
    testCaseId?: true
    order?: true
    verdict?: true
    verdictChar?: true
    executionTimeMs?: true
    memoryUsedKb?: true
    stdout?: true
    stderr?: true
  }

  export type SubmissionVerdictMaxAggregateInputType = {
    id?: true
    submissionId?: true
    testCaseId?: true
    order?: true
    verdict?: true
    verdictChar?: true
    executionTimeMs?: true
    memoryUsedKb?: true
    stdout?: true
    stderr?: true
  }

  export type SubmissionVerdictCountAggregateInputType = {
    id?: true
    submissionId?: true
    testCaseId?: true
    order?: true
    verdict?: true
    verdictChar?: true
    executionTimeMs?: true
    memoryUsedKb?: true
    stdout?: true
    stderr?: true
    _all?: true
  }

  export type SubmissionVerdictAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubmissionVerdict to aggregate.
     */
    where?: SubmissionVerdictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubmissionVerdicts to fetch.
     */
    orderBy?: SubmissionVerdictOrderByWithRelationInput | SubmissionVerdictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionVerdictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubmissionVerdicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubmissionVerdicts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubmissionVerdicts
    **/
    _count?: true | SubmissionVerdictCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionVerdictAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionVerdictSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionVerdictMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionVerdictMaxAggregateInputType
  }

  export type GetSubmissionVerdictAggregateType<T extends SubmissionVerdictAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmissionVerdict]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmissionVerdict[P]>
      : GetScalarType<T[P], AggregateSubmissionVerdict[P]>
  }




  export type SubmissionVerdictGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionVerdictWhereInput
    orderBy?: SubmissionVerdictOrderByWithAggregationInput | SubmissionVerdictOrderByWithAggregationInput[]
    by: SubmissionVerdictScalarFieldEnum[] | SubmissionVerdictScalarFieldEnum
    having?: SubmissionVerdictScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionVerdictCountAggregateInputType | true
    _avg?: SubmissionVerdictAvgAggregateInputType
    _sum?: SubmissionVerdictSumAggregateInputType
    _min?: SubmissionVerdictMinAggregateInputType
    _max?: SubmissionVerdictMaxAggregateInputType
  }

  export type SubmissionVerdictGroupByOutputType = {
    id: string
    submissionId: string
    testCaseId: string
    order: number
    verdict: $Enums.CaseVerdict
    verdictChar: string
    executionTimeMs: number
    memoryUsedKb: number
    stdout: string | null
    stderr: string | null
    _count: SubmissionVerdictCountAggregateOutputType | null
    _avg: SubmissionVerdictAvgAggregateOutputType | null
    _sum: SubmissionVerdictSumAggregateOutputType | null
    _min: SubmissionVerdictMinAggregateOutputType | null
    _max: SubmissionVerdictMaxAggregateOutputType | null
  }

  type GetSubmissionVerdictGroupByPayload<T extends SubmissionVerdictGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionVerdictGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionVerdictGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionVerdictGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionVerdictGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionVerdictSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testCaseId?: boolean
    order?: boolean
    verdict?: boolean
    verdictChar?: boolean
    executionTimeMs?: boolean
    memoryUsedKb?: boolean
    stdout?: boolean
    stderr?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    testCase?: boolean | TestCaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submissionVerdict"]>

  export type SubmissionVerdictSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testCaseId?: boolean
    order?: boolean
    verdict?: boolean
    verdictChar?: boolean
    executionTimeMs?: boolean
    memoryUsedKb?: boolean
    stdout?: boolean
    stderr?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    testCase?: boolean | TestCaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submissionVerdict"]>

  export type SubmissionVerdictSelectScalar = {
    id?: boolean
    submissionId?: boolean
    testCaseId?: boolean
    order?: boolean
    verdict?: boolean
    verdictChar?: boolean
    executionTimeMs?: boolean
    memoryUsedKb?: boolean
    stdout?: boolean
    stderr?: boolean
  }

  export type SubmissionVerdictInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    testCase?: boolean | TestCaseDefaultArgs<ExtArgs>
  }
  export type SubmissionVerdictIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    testCase?: boolean | TestCaseDefaultArgs<ExtArgs>
  }

  export type $SubmissionVerdictPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubmissionVerdict"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
      testCase: Prisma.$TestCasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionId: string
      testCaseId: string
      order: number
      verdict: $Enums.CaseVerdict
      verdictChar: string
      executionTimeMs: number
      memoryUsedKb: number
      stdout: string | null
      stderr: string | null
    }, ExtArgs["result"]["submissionVerdict"]>
    composites: {}
  }

  type SubmissionVerdictGetPayload<S extends boolean | null | undefined | SubmissionVerdictDefaultArgs> = $Result.GetResult<Prisma.$SubmissionVerdictPayload, S>

  type SubmissionVerdictCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubmissionVerdictFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubmissionVerdictCountAggregateInputType | true
    }

  export interface SubmissionVerdictDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubmissionVerdict'], meta: { name: 'SubmissionVerdict' } }
    /**
     * Find zero or one SubmissionVerdict that matches the filter.
     * @param {SubmissionVerdictFindUniqueArgs} args - Arguments to find a SubmissionVerdict
     * @example
     * // Get one SubmissionVerdict
     * const submissionVerdict = await prisma.submissionVerdict.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionVerdictFindUniqueArgs>(args: SelectSubset<T, SubmissionVerdictFindUniqueArgs<ExtArgs>>): Prisma__SubmissionVerdictClient<$Result.GetResult<Prisma.$SubmissionVerdictPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SubmissionVerdict that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubmissionVerdictFindUniqueOrThrowArgs} args - Arguments to find a SubmissionVerdict
     * @example
     * // Get one SubmissionVerdict
     * const submissionVerdict = await prisma.submissionVerdict.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionVerdictFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionVerdictFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionVerdictClient<$Result.GetResult<Prisma.$SubmissionVerdictPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SubmissionVerdict that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionVerdictFindFirstArgs} args - Arguments to find a SubmissionVerdict
     * @example
     * // Get one SubmissionVerdict
     * const submissionVerdict = await prisma.submissionVerdict.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionVerdictFindFirstArgs>(args?: SelectSubset<T, SubmissionVerdictFindFirstArgs<ExtArgs>>): Prisma__SubmissionVerdictClient<$Result.GetResult<Prisma.$SubmissionVerdictPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SubmissionVerdict that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionVerdictFindFirstOrThrowArgs} args - Arguments to find a SubmissionVerdict
     * @example
     * // Get one SubmissionVerdict
     * const submissionVerdict = await prisma.submissionVerdict.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionVerdictFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionVerdictFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionVerdictClient<$Result.GetResult<Prisma.$SubmissionVerdictPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SubmissionVerdicts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionVerdictFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubmissionVerdicts
     * const submissionVerdicts = await prisma.submissionVerdict.findMany()
     * 
     * // Get first 10 SubmissionVerdicts
     * const submissionVerdicts = await prisma.submissionVerdict.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionVerdictWithIdOnly = await prisma.submissionVerdict.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionVerdictFindManyArgs>(args?: SelectSubset<T, SubmissionVerdictFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionVerdictPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SubmissionVerdict.
     * @param {SubmissionVerdictCreateArgs} args - Arguments to create a SubmissionVerdict.
     * @example
     * // Create one SubmissionVerdict
     * const SubmissionVerdict = await prisma.submissionVerdict.create({
     *   data: {
     *     // ... data to create a SubmissionVerdict
     *   }
     * })
     * 
     */
    create<T extends SubmissionVerdictCreateArgs>(args: SelectSubset<T, SubmissionVerdictCreateArgs<ExtArgs>>): Prisma__SubmissionVerdictClient<$Result.GetResult<Prisma.$SubmissionVerdictPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SubmissionVerdicts.
     * @param {SubmissionVerdictCreateManyArgs} args - Arguments to create many SubmissionVerdicts.
     * @example
     * // Create many SubmissionVerdicts
     * const submissionVerdict = await prisma.submissionVerdict.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionVerdictCreateManyArgs>(args?: SelectSubset<T, SubmissionVerdictCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubmissionVerdicts and returns the data saved in the database.
     * @param {SubmissionVerdictCreateManyAndReturnArgs} args - Arguments to create many SubmissionVerdicts.
     * @example
     * // Create many SubmissionVerdicts
     * const submissionVerdict = await prisma.submissionVerdict.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubmissionVerdicts and only return the `id`
     * const submissionVerdictWithIdOnly = await prisma.submissionVerdict.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionVerdictCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionVerdictCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionVerdictPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SubmissionVerdict.
     * @param {SubmissionVerdictDeleteArgs} args - Arguments to delete one SubmissionVerdict.
     * @example
     * // Delete one SubmissionVerdict
     * const SubmissionVerdict = await prisma.submissionVerdict.delete({
     *   where: {
     *     // ... filter to delete one SubmissionVerdict
     *   }
     * })
     * 
     */
    delete<T extends SubmissionVerdictDeleteArgs>(args: SelectSubset<T, SubmissionVerdictDeleteArgs<ExtArgs>>): Prisma__SubmissionVerdictClient<$Result.GetResult<Prisma.$SubmissionVerdictPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SubmissionVerdict.
     * @param {SubmissionVerdictUpdateArgs} args - Arguments to update one SubmissionVerdict.
     * @example
     * // Update one SubmissionVerdict
     * const submissionVerdict = await prisma.submissionVerdict.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionVerdictUpdateArgs>(args: SelectSubset<T, SubmissionVerdictUpdateArgs<ExtArgs>>): Prisma__SubmissionVerdictClient<$Result.GetResult<Prisma.$SubmissionVerdictPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SubmissionVerdicts.
     * @param {SubmissionVerdictDeleteManyArgs} args - Arguments to filter SubmissionVerdicts to delete.
     * @example
     * // Delete a few SubmissionVerdicts
     * const { count } = await prisma.submissionVerdict.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionVerdictDeleteManyArgs>(args?: SelectSubset<T, SubmissionVerdictDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubmissionVerdicts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionVerdictUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubmissionVerdicts
     * const submissionVerdict = await prisma.submissionVerdict.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionVerdictUpdateManyArgs>(args: SelectSubset<T, SubmissionVerdictUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubmissionVerdict.
     * @param {SubmissionVerdictUpsertArgs} args - Arguments to update or create a SubmissionVerdict.
     * @example
     * // Update or create a SubmissionVerdict
     * const submissionVerdict = await prisma.submissionVerdict.upsert({
     *   create: {
     *     // ... data to create a SubmissionVerdict
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubmissionVerdict we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionVerdictUpsertArgs>(args: SelectSubset<T, SubmissionVerdictUpsertArgs<ExtArgs>>): Prisma__SubmissionVerdictClient<$Result.GetResult<Prisma.$SubmissionVerdictPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SubmissionVerdicts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionVerdictCountArgs} args - Arguments to filter SubmissionVerdicts to count.
     * @example
     * // Count the number of SubmissionVerdicts
     * const count = await prisma.submissionVerdict.count({
     *   where: {
     *     // ... the filter for the SubmissionVerdicts we want to count
     *   }
     * })
    **/
    count<T extends SubmissionVerdictCountArgs>(
      args?: Subset<T, SubmissionVerdictCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionVerdictCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubmissionVerdict.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionVerdictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionVerdictAggregateArgs>(args: Subset<T, SubmissionVerdictAggregateArgs>): Prisma.PrismaPromise<GetSubmissionVerdictAggregateType<T>>

    /**
     * Group by SubmissionVerdict.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionVerdictGroupByArgs} args - Group by arguments.
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
      T extends SubmissionVerdictGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionVerdictGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionVerdictGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionVerdictGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionVerdictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubmissionVerdict model
   */
  readonly fields: SubmissionVerdictFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubmissionVerdict.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionVerdictClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    testCase<T extends TestCaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestCaseDefaultArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SubmissionVerdict model
   */ 
  interface SubmissionVerdictFieldRefs {
    readonly id: FieldRef<"SubmissionVerdict", 'String'>
    readonly submissionId: FieldRef<"SubmissionVerdict", 'String'>
    readonly testCaseId: FieldRef<"SubmissionVerdict", 'String'>
    readonly order: FieldRef<"SubmissionVerdict", 'Int'>
    readonly verdict: FieldRef<"SubmissionVerdict", 'CaseVerdict'>
    readonly verdictChar: FieldRef<"SubmissionVerdict", 'String'>
    readonly executionTimeMs: FieldRef<"SubmissionVerdict", 'Int'>
    readonly memoryUsedKb: FieldRef<"SubmissionVerdict", 'Int'>
    readonly stdout: FieldRef<"SubmissionVerdict", 'String'>
    readonly stderr: FieldRef<"SubmissionVerdict", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubmissionVerdict findUnique
   */
  export type SubmissionVerdictFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionVerdict
     */
    select?: SubmissionVerdictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionVerdictInclude<ExtArgs> | null
    /**
     * Filter, which SubmissionVerdict to fetch.
     */
    where: SubmissionVerdictWhereUniqueInput
  }

  /**
   * SubmissionVerdict findUniqueOrThrow
   */
  export type SubmissionVerdictFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionVerdict
     */
    select?: SubmissionVerdictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionVerdictInclude<ExtArgs> | null
    /**
     * Filter, which SubmissionVerdict to fetch.
     */
    where: SubmissionVerdictWhereUniqueInput
  }

  /**
   * SubmissionVerdict findFirst
   */
  export type SubmissionVerdictFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionVerdict
     */
    select?: SubmissionVerdictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionVerdictInclude<ExtArgs> | null
    /**
     * Filter, which SubmissionVerdict to fetch.
     */
    where?: SubmissionVerdictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubmissionVerdicts to fetch.
     */
    orderBy?: SubmissionVerdictOrderByWithRelationInput | SubmissionVerdictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubmissionVerdicts.
     */
    cursor?: SubmissionVerdictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubmissionVerdicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubmissionVerdicts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubmissionVerdicts.
     */
    distinct?: SubmissionVerdictScalarFieldEnum | SubmissionVerdictScalarFieldEnum[]
  }

  /**
   * SubmissionVerdict findFirstOrThrow
   */
  export type SubmissionVerdictFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionVerdict
     */
    select?: SubmissionVerdictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionVerdictInclude<ExtArgs> | null
    /**
     * Filter, which SubmissionVerdict to fetch.
     */
    where?: SubmissionVerdictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubmissionVerdicts to fetch.
     */
    orderBy?: SubmissionVerdictOrderByWithRelationInput | SubmissionVerdictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubmissionVerdicts.
     */
    cursor?: SubmissionVerdictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubmissionVerdicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubmissionVerdicts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubmissionVerdicts.
     */
    distinct?: SubmissionVerdictScalarFieldEnum | SubmissionVerdictScalarFieldEnum[]
  }

  /**
   * SubmissionVerdict findMany
   */
  export type SubmissionVerdictFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionVerdict
     */
    select?: SubmissionVerdictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionVerdictInclude<ExtArgs> | null
    /**
     * Filter, which SubmissionVerdicts to fetch.
     */
    where?: SubmissionVerdictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubmissionVerdicts to fetch.
     */
    orderBy?: SubmissionVerdictOrderByWithRelationInput | SubmissionVerdictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubmissionVerdicts.
     */
    cursor?: SubmissionVerdictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubmissionVerdicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubmissionVerdicts.
     */
    skip?: number
    distinct?: SubmissionVerdictScalarFieldEnum | SubmissionVerdictScalarFieldEnum[]
  }

  /**
   * SubmissionVerdict create
   */
  export type SubmissionVerdictCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionVerdict
     */
    select?: SubmissionVerdictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionVerdictInclude<ExtArgs> | null
    /**
     * The data needed to create a SubmissionVerdict.
     */
    data: XOR<SubmissionVerdictCreateInput, SubmissionVerdictUncheckedCreateInput>
  }

  /**
   * SubmissionVerdict createMany
   */
  export type SubmissionVerdictCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubmissionVerdicts.
     */
    data: SubmissionVerdictCreateManyInput | SubmissionVerdictCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubmissionVerdict createManyAndReturn
   */
  export type SubmissionVerdictCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionVerdict
     */
    select?: SubmissionVerdictSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SubmissionVerdicts.
     */
    data: SubmissionVerdictCreateManyInput | SubmissionVerdictCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionVerdictIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubmissionVerdict update
   */
  export type SubmissionVerdictUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionVerdict
     */
    select?: SubmissionVerdictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionVerdictInclude<ExtArgs> | null
    /**
     * The data needed to update a SubmissionVerdict.
     */
    data: XOR<SubmissionVerdictUpdateInput, SubmissionVerdictUncheckedUpdateInput>
    /**
     * Choose, which SubmissionVerdict to update.
     */
    where: SubmissionVerdictWhereUniqueInput
  }

  /**
   * SubmissionVerdict updateMany
   */
  export type SubmissionVerdictUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubmissionVerdicts.
     */
    data: XOR<SubmissionVerdictUpdateManyMutationInput, SubmissionVerdictUncheckedUpdateManyInput>
    /**
     * Filter which SubmissionVerdicts to update
     */
    where?: SubmissionVerdictWhereInput
  }

  /**
   * SubmissionVerdict upsert
   */
  export type SubmissionVerdictUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionVerdict
     */
    select?: SubmissionVerdictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionVerdictInclude<ExtArgs> | null
    /**
     * The filter to search for the SubmissionVerdict to update in case it exists.
     */
    where: SubmissionVerdictWhereUniqueInput
    /**
     * In case the SubmissionVerdict found by the `where` argument doesn't exist, create a new SubmissionVerdict with this data.
     */
    create: XOR<SubmissionVerdictCreateInput, SubmissionVerdictUncheckedCreateInput>
    /**
     * In case the SubmissionVerdict was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionVerdictUpdateInput, SubmissionVerdictUncheckedUpdateInput>
  }

  /**
   * SubmissionVerdict delete
   */
  export type SubmissionVerdictDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionVerdict
     */
    select?: SubmissionVerdictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionVerdictInclude<ExtArgs> | null
    /**
     * Filter which SubmissionVerdict to delete.
     */
    where: SubmissionVerdictWhereUniqueInput
  }

  /**
   * SubmissionVerdict deleteMany
   */
  export type SubmissionVerdictDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubmissionVerdicts to delete
     */
    where?: SubmissionVerdictWhereInput
  }

  /**
   * SubmissionVerdict without action
   */
  export type SubmissionVerdictDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionVerdict
     */
    select?: SubmissionVerdictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionVerdictInclude<ExtArgs> | null
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


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    trackId: 'trackId',
    difficulty: 'difficulty',
    timeLimitMs: 'timeLimitMs',
    memoryLimitMb: 'memoryLimitMb',
    tags: 'tags',
    statementMarkdown: 'statementMarkdown',
    inputFormat: 'inputFormat',
    outputFormat: 'outputFormat',
    sampleInput: 'sampleInput',
    sampleOutput: 'sampleOutput',
    constraints: 'constraints',
    hints: 'hints',
    hasTracingQuiz: 'hasTracingQuiz',
    tracingSnippet: 'tracingSnippet',
    tracingQuestion: 'tracingQuestion',
    tracingExpectedOutput: 'tracingExpectedOutput',
    tracingExplanation: 'tracingExplanation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TestCaseScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    order: 'order',
    input: 'input',
    expectedOutput: 'expectedOutput',
    isSample: 'isSample',
    scoreWeight: 'scoreWeight'
  };

  export type TestCaseScalarFieldEnum = (typeof TestCaseScalarFieldEnum)[keyof typeof TestCaseScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    userId: 'userId',
    language: 'language',
    code: 'code',
    status: 'status',
    verdictString: 'verdictString',
    score: 'score',
    executionTimeMs: 'executionTimeMs',
    memoryUsedKb: 'memoryUsedKb',
    errorMessage: 'errorMessage',
    submittedAt: 'submittedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const SubmissionVerdictScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    testCaseId: 'testCaseId',
    order: 'order',
    verdict: 'verdict',
    verdictChar: 'verdictChar',
    executionTimeMs: 'executionTimeMs',
    memoryUsedKb: 'memoryUsedKb',
    stdout: 'stdout',
    stderr: 'stderr'
  };

  export type SubmissionVerdictScalarFieldEnum = (typeof SubmissionVerdictScalarFieldEnum)[keyof typeof SubmissionVerdictScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SubmissionStatus'
   */
  export type EnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus'>
    


  /**
   * Reference to a field of type 'SubmissionStatus[]'
   */
  export type ListEnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus[]'>
    


  /**
   * Reference to a field of type 'CaseVerdict'
   */
  export type EnumCaseVerdictFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseVerdict'>
    


  /**
   * Reference to a field of type 'CaseVerdict[]'
   */
  export type ListEnumCaseVerdictFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseVerdict[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    slug?: StringFilter<"Task"> | string
    trackId?: StringFilter<"Task"> | string
    difficulty?: EnumDifficultyFilter<"Task"> | $Enums.Difficulty
    timeLimitMs?: IntFilter<"Task"> | number
    memoryLimitMb?: IntFilter<"Task"> | number
    tags?: StringNullableListFilter<"Task">
    statementMarkdown?: StringFilter<"Task"> | string
    inputFormat?: StringFilter<"Task"> | string
    outputFormat?: StringFilter<"Task"> | string
    sampleInput?: StringFilter<"Task"> | string
    sampleOutput?: StringFilter<"Task"> | string
    constraints?: StringFilter<"Task"> | string
    hints?: StringNullableFilter<"Task"> | string | null
    hasTracingQuiz?: BoolFilter<"Task"> | boolean
    tracingSnippet?: StringNullableFilter<"Task"> | string | null
    tracingQuestion?: StringNullableFilter<"Task"> | string | null
    tracingExpectedOutput?: StringNullableFilter<"Task"> | string | null
    tracingExplanation?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    testCases?: TestCaseListRelationFilter
    submissions?: SubmissionListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    trackId?: SortOrder
    difficulty?: SortOrder
    timeLimitMs?: SortOrder
    memoryLimitMb?: SortOrder
    tags?: SortOrder
    statementMarkdown?: SortOrder
    inputFormat?: SortOrder
    outputFormat?: SortOrder
    sampleInput?: SortOrder
    sampleOutput?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    hasTracingQuiz?: SortOrder
    tracingSnippet?: SortOrderInput | SortOrder
    tracingQuestion?: SortOrderInput | SortOrder
    tracingExpectedOutput?: SortOrderInput | SortOrder
    tracingExplanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testCases?: TestCaseOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    trackId?: StringFilter<"Task"> | string
    difficulty?: EnumDifficultyFilter<"Task"> | $Enums.Difficulty
    timeLimitMs?: IntFilter<"Task"> | number
    memoryLimitMb?: IntFilter<"Task"> | number
    tags?: StringNullableListFilter<"Task">
    statementMarkdown?: StringFilter<"Task"> | string
    inputFormat?: StringFilter<"Task"> | string
    outputFormat?: StringFilter<"Task"> | string
    sampleInput?: StringFilter<"Task"> | string
    sampleOutput?: StringFilter<"Task"> | string
    constraints?: StringFilter<"Task"> | string
    hints?: StringNullableFilter<"Task"> | string | null
    hasTracingQuiz?: BoolFilter<"Task"> | boolean
    tracingSnippet?: StringNullableFilter<"Task"> | string | null
    tracingQuestion?: StringNullableFilter<"Task"> | string | null
    tracingExpectedOutput?: StringNullableFilter<"Task"> | string | null
    tracingExplanation?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    testCases?: TestCaseListRelationFilter
    submissions?: SubmissionListRelationFilter
  }, "id" | "slug">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    trackId?: SortOrder
    difficulty?: SortOrder
    timeLimitMs?: SortOrder
    memoryLimitMb?: SortOrder
    tags?: SortOrder
    statementMarkdown?: SortOrder
    inputFormat?: SortOrder
    outputFormat?: SortOrder
    sampleInput?: SortOrder
    sampleOutput?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    hasTracingQuiz?: SortOrder
    tracingSnippet?: SortOrderInput | SortOrder
    tracingQuestion?: SortOrderInput | SortOrder
    tracingExpectedOutput?: SortOrderInput | SortOrder
    tracingExplanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    slug?: StringWithAggregatesFilter<"Task"> | string
    trackId?: StringWithAggregatesFilter<"Task"> | string
    difficulty?: EnumDifficultyWithAggregatesFilter<"Task"> | $Enums.Difficulty
    timeLimitMs?: IntWithAggregatesFilter<"Task"> | number
    memoryLimitMb?: IntWithAggregatesFilter<"Task"> | number
    tags?: StringNullableListFilter<"Task">
    statementMarkdown?: StringWithAggregatesFilter<"Task"> | string
    inputFormat?: StringWithAggregatesFilter<"Task"> | string
    outputFormat?: StringWithAggregatesFilter<"Task"> | string
    sampleInput?: StringWithAggregatesFilter<"Task"> | string
    sampleOutput?: StringWithAggregatesFilter<"Task"> | string
    constraints?: StringWithAggregatesFilter<"Task"> | string
    hints?: StringNullableWithAggregatesFilter<"Task"> | string | null
    hasTracingQuiz?: BoolWithAggregatesFilter<"Task"> | boolean
    tracingSnippet?: StringNullableWithAggregatesFilter<"Task"> | string | null
    tracingQuestion?: StringNullableWithAggregatesFilter<"Task"> | string | null
    tracingExpectedOutput?: StringNullableWithAggregatesFilter<"Task"> | string | null
    tracingExplanation?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type TestCaseWhereInput = {
    AND?: TestCaseWhereInput | TestCaseWhereInput[]
    OR?: TestCaseWhereInput[]
    NOT?: TestCaseWhereInput | TestCaseWhereInput[]
    id?: StringFilter<"TestCase"> | string
    taskId?: StringFilter<"TestCase"> | string
    order?: IntFilter<"TestCase"> | number
    input?: StringFilter<"TestCase"> | string
    expectedOutput?: StringFilter<"TestCase"> | string
    isSample?: BoolFilter<"TestCase"> | boolean
    scoreWeight?: IntFilter<"TestCase"> | number
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    verdicts?: SubmissionVerdictListRelationFilter
  }

  export type TestCaseOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    order?: SortOrder
    input?: SortOrder
    expectedOutput?: SortOrder
    isSample?: SortOrder
    scoreWeight?: SortOrder
    task?: TaskOrderByWithRelationInput
    verdicts?: SubmissionVerdictOrderByRelationAggregateInput
  }

  export type TestCaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestCaseWhereInput | TestCaseWhereInput[]
    OR?: TestCaseWhereInput[]
    NOT?: TestCaseWhereInput | TestCaseWhereInput[]
    taskId?: StringFilter<"TestCase"> | string
    order?: IntFilter<"TestCase"> | number
    input?: StringFilter<"TestCase"> | string
    expectedOutput?: StringFilter<"TestCase"> | string
    isSample?: BoolFilter<"TestCase"> | boolean
    scoreWeight?: IntFilter<"TestCase"> | number
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    verdicts?: SubmissionVerdictListRelationFilter
  }, "id">

  export type TestCaseOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    order?: SortOrder
    input?: SortOrder
    expectedOutput?: SortOrder
    isSample?: SortOrder
    scoreWeight?: SortOrder
    _count?: TestCaseCountOrderByAggregateInput
    _avg?: TestCaseAvgOrderByAggregateInput
    _max?: TestCaseMaxOrderByAggregateInput
    _min?: TestCaseMinOrderByAggregateInput
    _sum?: TestCaseSumOrderByAggregateInput
  }

  export type TestCaseScalarWhereWithAggregatesInput = {
    AND?: TestCaseScalarWhereWithAggregatesInput | TestCaseScalarWhereWithAggregatesInput[]
    OR?: TestCaseScalarWhereWithAggregatesInput[]
    NOT?: TestCaseScalarWhereWithAggregatesInput | TestCaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestCase"> | string
    taskId?: StringWithAggregatesFilter<"TestCase"> | string
    order?: IntWithAggregatesFilter<"TestCase"> | number
    input?: StringWithAggregatesFilter<"TestCase"> | string
    expectedOutput?: StringWithAggregatesFilter<"TestCase"> | string
    isSample?: BoolWithAggregatesFilter<"TestCase"> | boolean
    scoreWeight?: IntWithAggregatesFilter<"TestCase"> | number
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    taskId?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    language?: StringFilter<"Submission"> | string
    code?: StringFilter<"Submission"> | string
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    verdictString?: StringFilter<"Submission"> | string
    score?: IntFilter<"Submission"> | number
    executionTimeMs?: IntNullableFilter<"Submission"> | number | null
    memoryUsedKb?: IntNullableFilter<"Submission"> | number | null
    errorMessage?: StringNullableFilter<"Submission"> | string | null
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    caseVerdicts?: SubmissionVerdictListRelationFilter
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    code?: SortOrder
    status?: SortOrder
    verdictString?: SortOrder
    score?: SortOrder
    executionTimeMs?: SortOrderInput | SortOrder
    memoryUsedKb?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    caseVerdicts?: SubmissionVerdictOrderByRelationAggregateInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    taskId?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    language?: StringFilter<"Submission"> | string
    code?: StringFilter<"Submission"> | string
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    verdictString?: StringFilter<"Submission"> | string
    score?: IntFilter<"Submission"> | number
    executionTimeMs?: IntNullableFilter<"Submission"> | number | null
    memoryUsedKb?: IntNullableFilter<"Submission"> | number | null
    errorMessage?: StringNullableFilter<"Submission"> | string | null
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    caseVerdicts?: SubmissionVerdictListRelationFilter
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    code?: SortOrder
    status?: SortOrder
    verdictString?: SortOrder
    score?: SortOrder
    executionTimeMs?: SortOrderInput | SortOrder
    memoryUsedKb?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    taskId?: StringWithAggregatesFilter<"Submission"> | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    language?: StringWithAggregatesFilter<"Submission"> | string
    code?: StringWithAggregatesFilter<"Submission"> | string
    status?: EnumSubmissionStatusWithAggregatesFilter<"Submission"> | $Enums.SubmissionStatus
    verdictString?: StringWithAggregatesFilter<"Submission"> | string
    score?: IntWithAggregatesFilter<"Submission"> | number
    executionTimeMs?: IntNullableWithAggregatesFilter<"Submission"> | number | null
    memoryUsedKb?: IntNullableWithAggregatesFilter<"Submission"> | number | null
    errorMessage?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    submittedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type SubmissionVerdictWhereInput = {
    AND?: SubmissionVerdictWhereInput | SubmissionVerdictWhereInput[]
    OR?: SubmissionVerdictWhereInput[]
    NOT?: SubmissionVerdictWhereInput | SubmissionVerdictWhereInput[]
    id?: StringFilter<"SubmissionVerdict"> | string
    submissionId?: StringFilter<"SubmissionVerdict"> | string
    testCaseId?: StringFilter<"SubmissionVerdict"> | string
    order?: IntFilter<"SubmissionVerdict"> | number
    verdict?: EnumCaseVerdictFilter<"SubmissionVerdict"> | $Enums.CaseVerdict
    verdictChar?: StringFilter<"SubmissionVerdict"> | string
    executionTimeMs?: IntFilter<"SubmissionVerdict"> | number
    memoryUsedKb?: IntFilter<"SubmissionVerdict"> | number
    stdout?: StringNullableFilter<"SubmissionVerdict"> | string | null
    stderr?: StringNullableFilter<"SubmissionVerdict"> | string | null
    submission?: XOR<SubmissionRelationFilter, SubmissionWhereInput>
    testCase?: XOR<TestCaseRelationFilter, TestCaseWhereInput>
  }

  export type SubmissionVerdictOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCaseId?: SortOrder
    order?: SortOrder
    verdict?: SortOrder
    verdictChar?: SortOrder
    executionTimeMs?: SortOrder
    memoryUsedKb?: SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    submission?: SubmissionOrderByWithRelationInput
    testCase?: TestCaseOrderByWithRelationInput
  }

  export type SubmissionVerdictWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionVerdictWhereInput | SubmissionVerdictWhereInput[]
    OR?: SubmissionVerdictWhereInput[]
    NOT?: SubmissionVerdictWhereInput | SubmissionVerdictWhereInput[]
    submissionId?: StringFilter<"SubmissionVerdict"> | string
    testCaseId?: StringFilter<"SubmissionVerdict"> | string
    order?: IntFilter<"SubmissionVerdict"> | number
    verdict?: EnumCaseVerdictFilter<"SubmissionVerdict"> | $Enums.CaseVerdict
    verdictChar?: StringFilter<"SubmissionVerdict"> | string
    executionTimeMs?: IntFilter<"SubmissionVerdict"> | number
    memoryUsedKb?: IntFilter<"SubmissionVerdict"> | number
    stdout?: StringNullableFilter<"SubmissionVerdict"> | string | null
    stderr?: StringNullableFilter<"SubmissionVerdict"> | string | null
    submission?: XOR<SubmissionRelationFilter, SubmissionWhereInput>
    testCase?: XOR<TestCaseRelationFilter, TestCaseWhereInput>
  }, "id">

  export type SubmissionVerdictOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCaseId?: SortOrder
    order?: SortOrder
    verdict?: SortOrder
    verdictChar?: SortOrder
    executionTimeMs?: SortOrder
    memoryUsedKb?: SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    _count?: SubmissionVerdictCountOrderByAggregateInput
    _avg?: SubmissionVerdictAvgOrderByAggregateInput
    _max?: SubmissionVerdictMaxOrderByAggregateInput
    _min?: SubmissionVerdictMinOrderByAggregateInput
    _sum?: SubmissionVerdictSumOrderByAggregateInput
  }

  export type SubmissionVerdictScalarWhereWithAggregatesInput = {
    AND?: SubmissionVerdictScalarWhereWithAggregatesInput | SubmissionVerdictScalarWhereWithAggregatesInput[]
    OR?: SubmissionVerdictScalarWhereWithAggregatesInput[]
    NOT?: SubmissionVerdictScalarWhereWithAggregatesInput | SubmissionVerdictScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubmissionVerdict"> | string
    submissionId?: StringWithAggregatesFilter<"SubmissionVerdict"> | string
    testCaseId?: StringWithAggregatesFilter<"SubmissionVerdict"> | string
    order?: IntWithAggregatesFilter<"SubmissionVerdict"> | number
    verdict?: EnumCaseVerdictWithAggregatesFilter<"SubmissionVerdict"> | $Enums.CaseVerdict
    verdictChar?: StringWithAggregatesFilter<"SubmissionVerdict"> | string
    executionTimeMs?: IntWithAggregatesFilter<"SubmissionVerdict"> | number
    memoryUsedKb?: IntWithAggregatesFilter<"SubmissionVerdict"> | number
    stdout?: StringNullableWithAggregatesFilter<"SubmissionVerdict"> | string | null
    stderr?: StringNullableWithAggregatesFilter<"SubmissionVerdict"> | string | null
  }

  export type TaskCreateInput = {
    id: string
    title: string
    slug: string
    trackId: string
    difficulty?: $Enums.Difficulty
    timeLimitMs?: number
    memoryLimitMb?: number
    tags?: TaskCreatetagsInput | string[]
    statementMarkdown: string
    inputFormat: string
    outputFormat: string
    sampleInput: string
    sampleOutput: string
    constraints: string
    hints?: string | null
    hasTracingQuiz?: boolean
    tracingSnippet?: string | null
    tracingQuestion?: string | null
    tracingExpectedOutput?: string | null
    tracingExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCaseCreateNestedManyWithoutTaskInput
    submissions?: SubmissionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id: string
    title: string
    slug: string
    trackId: string
    difficulty?: $Enums.Difficulty
    timeLimitMs?: number
    memoryLimitMb?: number
    tags?: TaskCreatetagsInput | string[]
    statementMarkdown: string
    inputFormat: string
    outputFormat: string
    sampleInput: string
    sampleOutput: string
    constraints: string
    hints?: string | null
    hasTracingQuiz?: boolean
    tracingSnippet?: string | null
    tracingQuestion?: string | null
    tracingExpectedOutput?: string | null
    tracingExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCaseUncheckedCreateNestedManyWithoutTaskInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeLimitMs?: IntFieldUpdateOperationsInput | number
    memoryLimitMb?: IntFieldUpdateOperationsInput | number
    tags?: TaskUpdatetagsInput | string[]
    statementMarkdown?: StringFieldUpdateOperationsInput | string
    inputFormat?: StringFieldUpdateOperationsInput | string
    outputFormat?: StringFieldUpdateOperationsInput | string
    sampleInput?: StringFieldUpdateOperationsInput | string
    sampleOutput?: StringFieldUpdateOperationsInput | string
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    hasTracingQuiz?: BoolFieldUpdateOperationsInput | boolean
    tracingSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    tracingQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExpectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCaseUpdateManyWithoutTaskNestedInput
    submissions?: SubmissionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeLimitMs?: IntFieldUpdateOperationsInput | number
    memoryLimitMb?: IntFieldUpdateOperationsInput | number
    tags?: TaskUpdatetagsInput | string[]
    statementMarkdown?: StringFieldUpdateOperationsInput | string
    inputFormat?: StringFieldUpdateOperationsInput | string
    outputFormat?: StringFieldUpdateOperationsInput | string
    sampleInput?: StringFieldUpdateOperationsInput | string
    sampleOutput?: StringFieldUpdateOperationsInput | string
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    hasTracingQuiz?: BoolFieldUpdateOperationsInput | boolean
    tracingSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    tracingQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExpectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCaseUncheckedUpdateManyWithoutTaskNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id: string
    title: string
    slug: string
    trackId: string
    difficulty?: $Enums.Difficulty
    timeLimitMs?: number
    memoryLimitMb?: number
    tags?: TaskCreatetagsInput | string[]
    statementMarkdown: string
    inputFormat: string
    outputFormat: string
    sampleInput: string
    sampleOutput: string
    constraints: string
    hints?: string | null
    hasTracingQuiz?: boolean
    tracingSnippet?: string | null
    tracingQuestion?: string | null
    tracingExpectedOutput?: string | null
    tracingExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeLimitMs?: IntFieldUpdateOperationsInput | number
    memoryLimitMb?: IntFieldUpdateOperationsInput | number
    tags?: TaskUpdatetagsInput | string[]
    statementMarkdown?: StringFieldUpdateOperationsInput | string
    inputFormat?: StringFieldUpdateOperationsInput | string
    outputFormat?: StringFieldUpdateOperationsInput | string
    sampleInput?: StringFieldUpdateOperationsInput | string
    sampleOutput?: StringFieldUpdateOperationsInput | string
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    hasTracingQuiz?: BoolFieldUpdateOperationsInput | boolean
    tracingSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    tracingQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExpectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeLimitMs?: IntFieldUpdateOperationsInput | number
    memoryLimitMb?: IntFieldUpdateOperationsInput | number
    tags?: TaskUpdatetagsInput | string[]
    statementMarkdown?: StringFieldUpdateOperationsInput | string
    inputFormat?: StringFieldUpdateOperationsInput | string
    outputFormat?: StringFieldUpdateOperationsInput | string
    sampleInput?: StringFieldUpdateOperationsInput | string
    sampleOutput?: StringFieldUpdateOperationsInput | string
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    hasTracingQuiz?: BoolFieldUpdateOperationsInput | boolean
    tracingSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    tracingQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExpectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseCreateInput = {
    id?: string
    order?: number
    input: string
    expectedOutput: string
    isSample?: boolean
    scoreWeight?: number
    task: TaskCreateNestedOneWithoutTestCasesInput
    verdicts?: SubmissionVerdictCreateNestedManyWithoutTestCaseInput
  }

  export type TestCaseUncheckedCreateInput = {
    id?: string
    taskId: string
    order?: number
    input: string
    expectedOutput: string
    isSample?: boolean
    scoreWeight?: number
    verdicts?: SubmissionVerdictUncheckedCreateNestedManyWithoutTestCaseInput
  }

  export type TestCaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    input?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    isSample?: BoolFieldUpdateOperationsInput | boolean
    scoreWeight?: IntFieldUpdateOperationsInput | number
    task?: TaskUpdateOneRequiredWithoutTestCasesNestedInput
    verdicts?: SubmissionVerdictUpdateManyWithoutTestCaseNestedInput
  }

  export type TestCaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    input?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    isSample?: BoolFieldUpdateOperationsInput | boolean
    scoreWeight?: IntFieldUpdateOperationsInput | number
    verdicts?: SubmissionVerdictUncheckedUpdateManyWithoutTestCaseNestedInput
  }

  export type TestCaseCreateManyInput = {
    id?: string
    taskId: string
    order?: number
    input: string
    expectedOutput: string
    isSample?: boolean
    scoreWeight?: number
  }

  export type TestCaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    input?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    isSample?: BoolFieldUpdateOperationsInput | boolean
    scoreWeight?: IntFieldUpdateOperationsInput | number
  }

  export type TestCaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    input?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    isSample?: BoolFieldUpdateOperationsInput | boolean
    scoreWeight?: IntFieldUpdateOperationsInput | number
  }

  export type SubmissionCreateInput = {
    id?: string
    userId: string
    language?: string
    code: string
    status?: $Enums.SubmissionStatus
    verdictString?: string
    score?: number
    executionTimeMs?: number | null
    memoryUsedKb?: number | null
    errorMessage?: string | null
    submittedAt?: Date | string
    task: TaskCreateNestedOneWithoutSubmissionsInput
    caseVerdicts?: SubmissionVerdictCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    taskId: string
    userId: string
    language?: string
    code: string
    status?: $Enums.SubmissionStatus
    verdictString?: string
    score?: number
    executionTimeMs?: number | null
    memoryUsedKb?: number | null
    errorMessage?: string | null
    submittedAt?: Date | string
    caseVerdicts?: SubmissionVerdictUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    verdictString?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    executionTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    memoryUsedKb?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutSubmissionsNestedInput
    caseVerdicts?: SubmissionVerdictUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    verdictString?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    executionTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    memoryUsedKb?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseVerdicts?: SubmissionVerdictUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: string
    taskId: string
    userId: string
    language?: string
    code: string
    status?: $Enums.SubmissionStatus
    verdictString?: string
    score?: number
    executionTimeMs?: number | null
    memoryUsedKb?: number | null
    errorMessage?: string | null
    submittedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    verdictString?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    executionTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    memoryUsedKb?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    verdictString?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    executionTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    memoryUsedKb?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionVerdictCreateInput = {
    id?: string
    order?: number
    verdict?: $Enums.CaseVerdict
    verdictChar?: string
    executionTimeMs?: number
    memoryUsedKb?: number
    stdout?: string | null
    stderr?: string | null
    submission: SubmissionCreateNestedOneWithoutCaseVerdictsInput
    testCase: TestCaseCreateNestedOneWithoutVerdictsInput
  }

  export type SubmissionVerdictUncheckedCreateInput = {
    id?: string
    submissionId: string
    testCaseId: string
    order?: number
    verdict?: $Enums.CaseVerdict
    verdictChar?: string
    executionTimeMs?: number
    memoryUsedKb?: number
    stdout?: string | null
    stderr?: string | null
  }

  export type SubmissionVerdictUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    verdict?: EnumCaseVerdictFieldUpdateOperationsInput | $Enums.CaseVerdict
    verdictChar?: StringFieldUpdateOperationsInput | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    memoryUsedKb?: IntFieldUpdateOperationsInput | number
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    submission?: SubmissionUpdateOneRequiredWithoutCaseVerdictsNestedInput
    testCase?: TestCaseUpdateOneRequiredWithoutVerdictsNestedInput
  }

  export type SubmissionVerdictUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    testCaseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    verdict?: EnumCaseVerdictFieldUpdateOperationsInput | $Enums.CaseVerdict
    verdictChar?: StringFieldUpdateOperationsInput | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    memoryUsedKb?: IntFieldUpdateOperationsInput | number
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionVerdictCreateManyInput = {
    id?: string
    submissionId: string
    testCaseId: string
    order?: number
    verdict?: $Enums.CaseVerdict
    verdictChar?: string
    executionTimeMs?: number
    memoryUsedKb?: number
    stdout?: string | null
    stderr?: string | null
  }

  export type SubmissionVerdictUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    verdict?: EnumCaseVerdictFieldUpdateOperationsInput | $Enums.CaseVerdict
    verdictChar?: StringFieldUpdateOperationsInput | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    memoryUsedKb?: IntFieldUpdateOperationsInput | number
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionVerdictUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    testCaseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    verdict?: EnumCaseVerdictFieldUpdateOperationsInput | $Enums.CaseVerdict
    verdictChar?: StringFieldUpdateOperationsInput | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    memoryUsedKb?: IntFieldUpdateOperationsInput | number
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type TestCaseListRelationFilter = {
    every?: TestCaseWhereInput
    some?: TestCaseWhereInput
    none?: TestCaseWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TestCaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    trackId?: SortOrder
    difficulty?: SortOrder
    timeLimitMs?: SortOrder
    memoryLimitMb?: SortOrder
    tags?: SortOrder
    statementMarkdown?: SortOrder
    inputFormat?: SortOrder
    outputFormat?: SortOrder
    sampleInput?: SortOrder
    sampleOutput?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    hasTracingQuiz?: SortOrder
    tracingSnippet?: SortOrder
    tracingQuestion?: SortOrder
    tracingExpectedOutput?: SortOrder
    tracingExplanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    timeLimitMs?: SortOrder
    memoryLimitMb?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    trackId?: SortOrder
    difficulty?: SortOrder
    timeLimitMs?: SortOrder
    memoryLimitMb?: SortOrder
    statementMarkdown?: SortOrder
    inputFormat?: SortOrder
    outputFormat?: SortOrder
    sampleInput?: SortOrder
    sampleOutput?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    hasTracingQuiz?: SortOrder
    tracingSnippet?: SortOrder
    tracingQuestion?: SortOrder
    tracingExpectedOutput?: SortOrder
    tracingExplanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    trackId?: SortOrder
    difficulty?: SortOrder
    timeLimitMs?: SortOrder
    memoryLimitMb?: SortOrder
    statementMarkdown?: SortOrder
    inputFormat?: SortOrder
    outputFormat?: SortOrder
    sampleInput?: SortOrder
    sampleOutput?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    hasTracingQuiz?: SortOrder
    tracingSnippet?: SortOrder
    tracingQuestion?: SortOrder
    tracingExpectedOutput?: SortOrder
    tracingExplanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    timeLimitMs?: SortOrder
    memoryLimitMb?: SortOrder
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

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TaskRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type SubmissionVerdictListRelationFilter = {
    every?: SubmissionVerdictWhereInput
    some?: SubmissionVerdictWhereInput
    none?: SubmissionVerdictWhereInput
  }

  export type SubmissionVerdictOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestCaseCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    order?: SortOrder
    input?: SortOrder
    expectedOutput?: SortOrder
    isSample?: SortOrder
    scoreWeight?: SortOrder
  }

  export type TestCaseAvgOrderByAggregateInput = {
    order?: SortOrder
    scoreWeight?: SortOrder
  }

  export type TestCaseMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    order?: SortOrder
    input?: SortOrder
    expectedOutput?: SortOrder
    isSample?: SortOrder
    scoreWeight?: SortOrder
  }

  export type TestCaseMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    order?: SortOrder
    input?: SortOrder
    expectedOutput?: SortOrder
    isSample?: SortOrder
    scoreWeight?: SortOrder
  }

  export type TestCaseSumOrderByAggregateInput = {
    order?: SortOrder
    scoreWeight?: SortOrder
  }

  export type EnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
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

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    code?: SortOrder
    status?: SortOrder
    verdictString?: SortOrder
    score?: SortOrder
    executionTimeMs?: SortOrder
    memoryUsedKb?: SortOrder
    errorMessage?: SortOrder
    submittedAt?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    score?: SortOrder
    executionTimeMs?: SortOrder
    memoryUsedKb?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    code?: SortOrder
    status?: SortOrder
    verdictString?: SortOrder
    score?: SortOrder
    executionTimeMs?: SortOrder
    memoryUsedKb?: SortOrder
    errorMessage?: SortOrder
    submittedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    code?: SortOrder
    status?: SortOrder
    verdictString?: SortOrder
    score?: SortOrder
    executionTimeMs?: SortOrder
    memoryUsedKb?: SortOrder
    errorMessage?: SortOrder
    submittedAt?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    score?: SortOrder
    executionTimeMs?: SortOrder
    memoryUsedKb?: SortOrder
  }

  export type EnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
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

  export type EnumCaseVerdictFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseVerdict | EnumCaseVerdictFieldRefInput<$PrismaModel>
    in?: $Enums.CaseVerdict[] | ListEnumCaseVerdictFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseVerdict[] | ListEnumCaseVerdictFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseVerdictFilter<$PrismaModel> | $Enums.CaseVerdict
  }

  export type SubmissionRelationFilter = {
    is?: SubmissionWhereInput
    isNot?: SubmissionWhereInput
  }

  export type TestCaseRelationFilter = {
    is?: TestCaseWhereInput
    isNot?: TestCaseWhereInput
  }

  export type SubmissionVerdictCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCaseId?: SortOrder
    order?: SortOrder
    verdict?: SortOrder
    verdictChar?: SortOrder
    executionTimeMs?: SortOrder
    memoryUsedKb?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
  }

  export type SubmissionVerdictAvgOrderByAggregateInput = {
    order?: SortOrder
    executionTimeMs?: SortOrder
    memoryUsedKb?: SortOrder
  }

  export type SubmissionVerdictMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCaseId?: SortOrder
    order?: SortOrder
    verdict?: SortOrder
    verdictChar?: SortOrder
    executionTimeMs?: SortOrder
    memoryUsedKb?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
  }

  export type SubmissionVerdictMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCaseId?: SortOrder
    order?: SortOrder
    verdict?: SortOrder
    verdictChar?: SortOrder
    executionTimeMs?: SortOrder
    memoryUsedKb?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
  }

  export type SubmissionVerdictSumOrderByAggregateInput = {
    order?: SortOrder
    executionTimeMs?: SortOrder
    memoryUsedKb?: SortOrder
  }

  export type EnumCaseVerdictWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseVerdict | EnumCaseVerdictFieldRefInput<$PrismaModel>
    in?: $Enums.CaseVerdict[] | ListEnumCaseVerdictFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseVerdict[] | ListEnumCaseVerdictFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseVerdictWithAggregatesFilter<$PrismaModel> | $Enums.CaseVerdict
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseVerdictFilter<$PrismaModel>
    _max?: NestedEnumCaseVerdictFilter<$PrismaModel>
  }

  export type TaskCreatetagsInput = {
    set: string[]
  }

  export type TestCaseCreateNestedManyWithoutTaskInput = {
    create?: XOR<TestCaseCreateWithoutTaskInput, TestCaseUncheckedCreateWithoutTaskInput> | TestCaseCreateWithoutTaskInput[] | TestCaseUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutTaskInput | TestCaseCreateOrConnectWithoutTaskInput[]
    createMany?: TestCaseCreateManyTaskInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutTaskInput = {
    create?: XOR<SubmissionCreateWithoutTaskInput, SubmissionUncheckedCreateWithoutTaskInput> | SubmissionCreateWithoutTaskInput[] | SubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTaskInput | SubmissionCreateOrConnectWithoutTaskInput[]
    createMany?: SubmissionCreateManyTaskInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type TestCaseUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TestCaseCreateWithoutTaskInput, TestCaseUncheckedCreateWithoutTaskInput> | TestCaseCreateWithoutTaskInput[] | TestCaseUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutTaskInput | TestCaseCreateOrConnectWithoutTaskInput[]
    createMany?: TestCaseCreateManyTaskInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<SubmissionCreateWithoutTaskInput, SubmissionUncheckedCreateWithoutTaskInput> | SubmissionCreateWithoutTaskInput[] | SubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTaskInput | SubmissionCreateOrConnectWithoutTaskInput[]
    createMany?: SubmissionCreateManyTaskInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TestCaseUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TestCaseCreateWithoutTaskInput, TestCaseUncheckedCreateWithoutTaskInput> | TestCaseCreateWithoutTaskInput[] | TestCaseUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutTaskInput | TestCaseCreateOrConnectWithoutTaskInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutTaskInput | TestCaseUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TestCaseCreateManyTaskInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutTaskInput | TestCaseUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutTaskInput | TestCaseUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutTaskNestedInput = {
    create?: XOR<SubmissionCreateWithoutTaskInput, SubmissionUncheckedCreateWithoutTaskInput> | SubmissionCreateWithoutTaskInput[] | SubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTaskInput | SubmissionCreateOrConnectWithoutTaskInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutTaskInput | SubmissionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: SubmissionCreateManyTaskInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutTaskInput | SubmissionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutTaskInput | SubmissionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type TestCaseUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TestCaseCreateWithoutTaskInput, TestCaseUncheckedCreateWithoutTaskInput> | TestCaseCreateWithoutTaskInput[] | TestCaseUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutTaskInput | TestCaseCreateOrConnectWithoutTaskInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutTaskInput | TestCaseUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TestCaseCreateManyTaskInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutTaskInput | TestCaseUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutTaskInput | TestCaseUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<SubmissionCreateWithoutTaskInput, SubmissionUncheckedCreateWithoutTaskInput> | SubmissionCreateWithoutTaskInput[] | SubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTaskInput | SubmissionCreateOrConnectWithoutTaskInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutTaskInput | SubmissionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: SubmissionCreateManyTaskInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutTaskInput | SubmissionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutTaskInput | SubmissionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutTestCasesInput = {
    create?: XOR<TaskCreateWithoutTestCasesInput, TaskUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTestCasesInput
    connect?: TaskWhereUniqueInput
  }

  export type SubmissionVerdictCreateNestedManyWithoutTestCaseInput = {
    create?: XOR<SubmissionVerdictCreateWithoutTestCaseInput, SubmissionVerdictUncheckedCreateWithoutTestCaseInput> | SubmissionVerdictCreateWithoutTestCaseInput[] | SubmissionVerdictUncheckedCreateWithoutTestCaseInput[]
    connectOrCreate?: SubmissionVerdictCreateOrConnectWithoutTestCaseInput | SubmissionVerdictCreateOrConnectWithoutTestCaseInput[]
    createMany?: SubmissionVerdictCreateManyTestCaseInputEnvelope
    connect?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
  }

  export type SubmissionVerdictUncheckedCreateNestedManyWithoutTestCaseInput = {
    create?: XOR<SubmissionVerdictCreateWithoutTestCaseInput, SubmissionVerdictUncheckedCreateWithoutTestCaseInput> | SubmissionVerdictCreateWithoutTestCaseInput[] | SubmissionVerdictUncheckedCreateWithoutTestCaseInput[]
    connectOrCreate?: SubmissionVerdictCreateOrConnectWithoutTestCaseInput | SubmissionVerdictCreateOrConnectWithoutTestCaseInput[]
    createMany?: SubmissionVerdictCreateManyTestCaseInputEnvelope
    connect?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
  }

  export type TaskUpdateOneRequiredWithoutTestCasesNestedInput = {
    create?: XOR<TaskCreateWithoutTestCasesInput, TaskUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTestCasesInput
    upsert?: TaskUpsertWithoutTestCasesInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutTestCasesInput, TaskUpdateWithoutTestCasesInput>, TaskUncheckedUpdateWithoutTestCasesInput>
  }

  export type SubmissionVerdictUpdateManyWithoutTestCaseNestedInput = {
    create?: XOR<SubmissionVerdictCreateWithoutTestCaseInput, SubmissionVerdictUncheckedCreateWithoutTestCaseInput> | SubmissionVerdictCreateWithoutTestCaseInput[] | SubmissionVerdictUncheckedCreateWithoutTestCaseInput[]
    connectOrCreate?: SubmissionVerdictCreateOrConnectWithoutTestCaseInput | SubmissionVerdictCreateOrConnectWithoutTestCaseInput[]
    upsert?: SubmissionVerdictUpsertWithWhereUniqueWithoutTestCaseInput | SubmissionVerdictUpsertWithWhereUniqueWithoutTestCaseInput[]
    createMany?: SubmissionVerdictCreateManyTestCaseInputEnvelope
    set?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    disconnect?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    delete?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    connect?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    update?: SubmissionVerdictUpdateWithWhereUniqueWithoutTestCaseInput | SubmissionVerdictUpdateWithWhereUniqueWithoutTestCaseInput[]
    updateMany?: SubmissionVerdictUpdateManyWithWhereWithoutTestCaseInput | SubmissionVerdictUpdateManyWithWhereWithoutTestCaseInput[]
    deleteMany?: SubmissionVerdictScalarWhereInput | SubmissionVerdictScalarWhereInput[]
  }

  export type SubmissionVerdictUncheckedUpdateManyWithoutTestCaseNestedInput = {
    create?: XOR<SubmissionVerdictCreateWithoutTestCaseInput, SubmissionVerdictUncheckedCreateWithoutTestCaseInput> | SubmissionVerdictCreateWithoutTestCaseInput[] | SubmissionVerdictUncheckedCreateWithoutTestCaseInput[]
    connectOrCreate?: SubmissionVerdictCreateOrConnectWithoutTestCaseInput | SubmissionVerdictCreateOrConnectWithoutTestCaseInput[]
    upsert?: SubmissionVerdictUpsertWithWhereUniqueWithoutTestCaseInput | SubmissionVerdictUpsertWithWhereUniqueWithoutTestCaseInput[]
    createMany?: SubmissionVerdictCreateManyTestCaseInputEnvelope
    set?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    disconnect?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    delete?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    connect?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    update?: SubmissionVerdictUpdateWithWhereUniqueWithoutTestCaseInput | SubmissionVerdictUpdateWithWhereUniqueWithoutTestCaseInput[]
    updateMany?: SubmissionVerdictUpdateManyWithWhereWithoutTestCaseInput | SubmissionVerdictUpdateManyWithWhereWithoutTestCaseInput[]
    deleteMany?: SubmissionVerdictScalarWhereInput | SubmissionVerdictScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubmissionsInput
    connect?: TaskWhereUniqueInput
  }

  export type SubmissionVerdictCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<SubmissionVerdictCreateWithoutSubmissionInput, SubmissionVerdictUncheckedCreateWithoutSubmissionInput> | SubmissionVerdictCreateWithoutSubmissionInput[] | SubmissionVerdictUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: SubmissionVerdictCreateOrConnectWithoutSubmissionInput | SubmissionVerdictCreateOrConnectWithoutSubmissionInput[]
    createMany?: SubmissionVerdictCreateManySubmissionInputEnvelope
    connect?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
  }

  export type SubmissionVerdictUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<SubmissionVerdictCreateWithoutSubmissionInput, SubmissionVerdictUncheckedCreateWithoutSubmissionInput> | SubmissionVerdictCreateWithoutSubmissionInput[] | SubmissionVerdictUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: SubmissionVerdictCreateOrConnectWithoutSubmissionInput | SubmissionVerdictCreateOrConnectWithoutSubmissionInput[]
    createMany?: SubmissionVerdictCreateManySubmissionInputEnvelope
    connect?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
  }

  export type EnumSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubmissionsInput
    upsert?: TaskUpsertWithoutSubmissionsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutSubmissionsInput, TaskUpdateWithoutSubmissionsInput>, TaskUncheckedUpdateWithoutSubmissionsInput>
  }

  export type SubmissionVerdictUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<SubmissionVerdictCreateWithoutSubmissionInput, SubmissionVerdictUncheckedCreateWithoutSubmissionInput> | SubmissionVerdictCreateWithoutSubmissionInput[] | SubmissionVerdictUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: SubmissionVerdictCreateOrConnectWithoutSubmissionInput | SubmissionVerdictCreateOrConnectWithoutSubmissionInput[]
    upsert?: SubmissionVerdictUpsertWithWhereUniqueWithoutSubmissionInput | SubmissionVerdictUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: SubmissionVerdictCreateManySubmissionInputEnvelope
    set?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    disconnect?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    delete?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    connect?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    update?: SubmissionVerdictUpdateWithWhereUniqueWithoutSubmissionInput | SubmissionVerdictUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: SubmissionVerdictUpdateManyWithWhereWithoutSubmissionInput | SubmissionVerdictUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: SubmissionVerdictScalarWhereInput | SubmissionVerdictScalarWhereInput[]
  }

  export type SubmissionVerdictUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<SubmissionVerdictCreateWithoutSubmissionInput, SubmissionVerdictUncheckedCreateWithoutSubmissionInput> | SubmissionVerdictCreateWithoutSubmissionInput[] | SubmissionVerdictUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: SubmissionVerdictCreateOrConnectWithoutSubmissionInput | SubmissionVerdictCreateOrConnectWithoutSubmissionInput[]
    upsert?: SubmissionVerdictUpsertWithWhereUniqueWithoutSubmissionInput | SubmissionVerdictUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: SubmissionVerdictCreateManySubmissionInputEnvelope
    set?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    disconnect?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    delete?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    connect?: SubmissionVerdictWhereUniqueInput | SubmissionVerdictWhereUniqueInput[]
    update?: SubmissionVerdictUpdateWithWhereUniqueWithoutSubmissionInput | SubmissionVerdictUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: SubmissionVerdictUpdateManyWithWhereWithoutSubmissionInput | SubmissionVerdictUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: SubmissionVerdictScalarWhereInput | SubmissionVerdictScalarWhereInput[]
  }

  export type SubmissionCreateNestedOneWithoutCaseVerdictsInput = {
    create?: XOR<SubmissionCreateWithoutCaseVerdictsInput, SubmissionUncheckedCreateWithoutCaseVerdictsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutCaseVerdictsInput
    connect?: SubmissionWhereUniqueInput
  }

  export type TestCaseCreateNestedOneWithoutVerdictsInput = {
    create?: XOR<TestCaseCreateWithoutVerdictsInput, TestCaseUncheckedCreateWithoutVerdictsInput>
    connectOrCreate?: TestCaseCreateOrConnectWithoutVerdictsInput
    connect?: TestCaseWhereUniqueInput
  }

  export type EnumCaseVerdictFieldUpdateOperationsInput = {
    set?: $Enums.CaseVerdict
  }

  export type SubmissionUpdateOneRequiredWithoutCaseVerdictsNestedInput = {
    create?: XOR<SubmissionCreateWithoutCaseVerdictsInput, SubmissionUncheckedCreateWithoutCaseVerdictsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutCaseVerdictsInput
    upsert?: SubmissionUpsertWithoutCaseVerdictsInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutCaseVerdictsInput, SubmissionUpdateWithoutCaseVerdictsInput>, SubmissionUncheckedUpdateWithoutCaseVerdictsInput>
  }

  export type TestCaseUpdateOneRequiredWithoutVerdictsNestedInput = {
    create?: XOR<TestCaseCreateWithoutVerdictsInput, TestCaseUncheckedCreateWithoutVerdictsInput>
    connectOrCreate?: TestCaseCreateOrConnectWithoutVerdictsInput
    upsert?: TestCaseUpsertWithoutVerdictsInput
    connect?: TestCaseWhereUniqueInput
    update?: XOR<XOR<TestCaseUpdateToOneWithWhereWithoutVerdictsInput, TestCaseUpdateWithoutVerdictsInput>, TestCaseUncheckedUpdateWithoutVerdictsInput>
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

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
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

  export type NestedEnumCaseVerdictFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseVerdict | EnumCaseVerdictFieldRefInput<$PrismaModel>
    in?: $Enums.CaseVerdict[] | ListEnumCaseVerdictFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseVerdict[] | ListEnumCaseVerdictFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseVerdictFilter<$PrismaModel> | $Enums.CaseVerdict
  }

  export type NestedEnumCaseVerdictWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseVerdict | EnumCaseVerdictFieldRefInput<$PrismaModel>
    in?: $Enums.CaseVerdict[] | ListEnumCaseVerdictFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseVerdict[] | ListEnumCaseVerdictFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseVerdictWithAggregatesFilter<$PrismaModel> | $Enums.CaseVerdict
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseVerdictFilter<$PrismaModel>
    _max?: NestedEnumCaseVerdictFilter<$PrismaModel>
  }

  export type TestCaseCreateWithoutTaskInput = {
    id?: string
    order?: number
    input: string
    expectedOutput: string
    isSample?: boolean
    scoreWeight?: number
    verdicts?: SubmissionVerdictCreateNestedManyWithoutTestCaseInput
  }

  export type TestCaseUncheckedCreateWithoutTaskInput = {
    id?: string
    order?: number
    input: string
    expectedOutput: string
    isSample?: boolean
    scoreWeight?: number
    verdicts?: SubmissionVerdictUncheckedCreateNestedManyWithoutTestCaseInput
  }

  export type TestCaseCreateOrConnectWithoutTaskInput = {
    where: TestCaseWhereUniqueInput
    create: XOR<TestCaseCreateWithoutTaskInput, TestCaseUncheckedCreateWithoutTaskInput>
  }

  export type TestCaseCreateManyTaskInputEnvelope = {
    data: TestCaseCreateManyTaskInput | TestCaseCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutTaskInput = {
    id?: string
    userId: string
    language?: string
    code: string
    status?: $Enums.SubmissionStatus
    verdictString?: string
    score?: number
    executionTimeMs?: number | null
    memoryUsedKb?: number | null
    errorMessage?: string | null
    submittedAt?: Date | string
    caseVerdicts?: SubmissionVerdictCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutTaskInput = {
    id?: string
    userId: string
    language?: string
    code: string
    status?: $Enums.SubmissionStatus
    verdictString?: string
    score?: number
    executionTimeMs?: number | null
    memoryUsedKb?: number | null
    errorMessage?: string | null
    submittedAt?: Date | string
    caseVerdicts?: SubmissionVerdictUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutTaskInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutTaskInput, SubmissionUncheckedCreateWithoutTaskInput>
  }

  export type SubmissionCreateManyTaskInputEnvelope = {
    data: SubmissionCreateManyTaskInput | SubmissionCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TestCaseUpsertWithWhereUniqueWithoutTaskInput = {
    where: TestCaseWhereUniqueInput
    update: XOR<TestCaseUpdateWithoutTaskInput, TestCaseUncheckedUpdateWithoutTaskInput>
    create: XOR<TestCaseCreateWithoutTaskInput, TestCaseUncheckedCreateWithoutTaskInput>
  }

  export type TestCaseUpdateWithWhereUniqueWithoutTaskInput = {
    where: TestCaseWhereUniqueInput
    data: XOR<TestCaseUpdateWithoutTaskInput, TestCaseUncheckedUpdateWithoutTaskInput>
  }

  export type TestCaseUpdateManyWithWhereWithoutTaskInput = {
    where: TestCaseScalarWhereInput
    data: XOR<TestCaseUpdateManyMutationInput, TestCaseUncheckedUpdateManyWithoutTaskInput>
  }

  export type TestCaseScalarWhereInput = {
    AND?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
    OR?: TestCaseScalarWhereInput[]
    NOT?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
    id?: StringFilter<"TestCase"> | string
    taskId?: StringFilter<"TestCase"> | string
    order?: IntFilter<"TestCase"> | number
    input?: StringFilter<"TestCase"> | string
    expectedOutput?: StringFilter<"TestCase"> | string
    isSample?: BoolFilter<"TestCase"> | boolean
    scoreWeight?: IntFilter<"TestCase"> | number
  }

  export type SubmissionUpsertWithWhereUniqueWithoutTaskInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutTaskInput, SubmissionUncheckedUpdateWithoutTaskInput>
    create: XOR<SubmissionCreateWithoutTaskInput, SubmissionUncheckedCreateWithoutTaskInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutTaskInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutTaskInput, SubmissionUncheckedUpdateWithoutTaskInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutTaskInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutTaskInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    taskId?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    language?: StringFilter<"Submission"> | string
    code?: StringFilter<"Submission"> | string
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    verdictString?: StringFilter<"Submission"> | string
    score?: IntFilter<"Submission"> | number
    executionTimeMs?: IntNullableFilter<"Submission"> | number | null
    memoryUsedKb?: IntNullableFilter<"Submission"> | number | null
    errorMessage?: StringNullableFilter<"Submission"> | string | null
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type TaskCreateWithoutTestCasesInput = {
    id: string
    title: string
    slug: string
    trackId: string
    difficulty?: $Enums.Difficulty
    timeLimitMs?: number
    memoryLimitMb?: number
    tags?: TaskCreatetagsInput | string[]
    statementMarkdown: string
    inputFormat: string
    outputFormat: string
    sampleInput: string
    sampleOutput: string
    constraints: string
    hints?: string | null
    hasTracingQuiz?: boolean
    tracingSnippet?: string | null
    tracingQuestion?: string | null
    tracingExpectedOutput?: string | null
    tracingExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutTestCasesInput = {
    id: string
    title: string
    slug: string
    trackId: string
    difficulty?: $Enums.Difficulty
    timeLimitMs?: number
    memoryLimitMb?: number
    tags?: TaskCreatetagsInput | string[]
    statementMarkdown: string
    inputFormat: string
    outputFormat: string
    sampleInput: string
    sampleOutput: string
    constraints: string
    hints?: string | null
    hasTracingQuiz?: boolean
    tracingSnippet?: string | null
    tracingQuestion?: string | null
    tracingExpectedOutput?: string | null
    tracingExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutTestCasesInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTestCasesInput, TaskUncheckedCreateWithoutTestCasesInput>
  }

  export type SubmissionVerdictCreateWithoutTestCaseInput = {
    id?: string
    order?: number
    verdict?: $Enums.CaseVerdict
    verdictChar?: string
    executionTimeMs?: number
    memoryUsedKb?: number
    stdout?: string | null
    stderr?: string | null
    submission: SubmissionCreateNestedOneWithoutCaseVerdictsInput
  }

  export type SubmissionVerdictUncheckedCreateWithoutTestCaseInput = {
    id?: string
    submissionId: string
    order?: number
    verdict?: $Enums.CaseVerdict
    verdictChar?: string
    executionTimeMs?: number
    memoryUsedKb?: number
    stdout?: string | null
    stderr?: string | null
  }

  export type SubmissionVerdictCreateOrConnectWithoutTestCaseInput = {
    where: SubmissionVerdictWhereUniqueInput
    create: XOR<SubmissionVerdictCreateWithoutTestCaseInput, SubmissionVerdictUncheckedCreateWithoutTestCaseInput>
  }

  export type SubmissionVerdictCreateManyTestCaseInputEnvelope = {
    data: SubmissionVerdictCreateManyTestCaseInput | SubmissionVerdictCreateManyTestCaseInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithoutTestCasesInput = {
    update: XOR<TaskUpdateWithoutTestCasesInput, TaskUncheckedUpdateWithoutTestCasesInput>
    create: XOR<TaskCreateWithoutTestCasesInput, TaskUncheckedCreateWithoutTestCasesInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutTestCasesInput, TaskUncheckedUpdateWithoutTestCasesInput>
  }

  export type TaskUpdateWithoutTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeLimitMs?: IntFieldUpdateOperationsInput | number
    memoryLimitMb?: IntFieldUpdateOperationsInput | number
    tags?: TaskUpdatetagsInput | string[]
    statementMarkdown?: StringFieldUpdateOperationsInput | string
    inputFormat?: StringFieldUpdateOperationsInput | string
    outputFormat?: StringFieldUpdateOperationsInput | string
    sampleInput?: StringFieldUpdateOperationsInput | string
    sampleOutput?: StringFieldUpdateOperationsInput | string
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    hasTracingQuiz?: BoolFieldUpdateOperationsInput | boolean
    tracingSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    tracingQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExpectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeLimitMs?: IntFieldUpdateOperationsInput | number
    memoryLimitMb?: IntFieldUpdateOperationsInput | number
    tags?: TaskUpdatetagsInput | string[]
    statementMarkdown?: StringFieldUpdateOperationsInput | string
    inputFormat?: StringFieldUpdateOperationsInput | string
    outputFormat?: StringFieldUpdateOperationsInput | string
    sampleInput?: StringFieldUpdateOperationsInput | string
    sampleOutput?: StringFieldUpdateOperationsInput | string
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    hasTracingQuiz?: BoolFieldUpdateOperationsInput | boolean
    tracingSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    tracingQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExpectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type SubmissionVerdictUpsertWithWhereUniqueWithoutTestCaseInput = {
    where: SubmissionVerdictWhereUniqueInput
    update: XOR<SubmissionVerdictUpdateWithoutTestCaseInput, SubmissionVerdictUncheckedUpdateWithoutTestCaseInput>
    create: XOR<SubmissionVerdictCreateWithoutTestCaseInput, SubmissionVerdictUncheckedCreateWithoutTestCaseInput>
  }

  export type SubmissionVerdictUpdateWithWhereUniqueWithoutTestCaseInput = {
    where: SubmissionVerdictWhereUniqueInput
    data: XOR<SubmissionVerdictUpdateWithoutTestCaseInput, SubmissionVerdictUncheckedUpdateWithoutTestCaseInput>
  }

  export type SubmissionVerdictUpdateManyWithWhereWithoutTestCaseInput = {
    where: SubmissionVerdictScalarWhereInput
    data: XOR<SubmissionVerdictUpdateManyMutationInput, SubmissionVerdictUncheckedUpdateManyWithoutTestCaseInput>
  }

  export type SubmissionVerdictScalarWhereInput = {
    AND?: SubmissionVerdictScalarWhereInput | SubmissionVerdictScalarWhereInput[]
    OR?: SubmissionVerdictScalarWhereInput[]
    NOT?: SubmissionVerdictScalarWhereInput | SubmissionVerdictScalarWhereInput[]
    id?: StringFilter<"SubmissionVerdict"> | string
    submissionId?: StringFilter<"SubmissionVerdict"> | string
    testCaseId?: StringFilter<"SubmissionVerdict"> | string
    order?: IntFilter<"SubmissionVerdict"> | number
    verdict?: EnumCaseVerdictFilter<"SubmissionVerdict"> | $Enums.CaseVerdict
    verdictChar?: StringFilter<"SubmissionVerdict"> | string
    executionTimeMs?: IntFilter<"SubmissionVerdict"> | number
    memoryUsedKb?: IntFilter<"SubmissionVerdict"> | number
    stdout?: StringNullableFilter<"SubmissionVerdict"> | string | null
    stderr?: StringNullableFilter<"SubmissionVerdict"> | string | null
  }

  export type TaskCreateWithoutSubmissionsInput = {
    id: string
    title: string
    slug: string
    trackId: string
    difficulty?: $Enums.Difficulty
    timeLimitMs?: number
    memoryLimitMb?: number
    tags?: TaskCreatetagsInput | string[]
    statementMarkdown: string
    inputFormat: string
    outputFormat: string
    sampleInput: string
    sampleOutput: string
    constraints: string
    hints?: string | null
    hasTracingQuiz?: boolean
    tracingSnippet?: string | null
    tracingQuestion?: string | null
    tracingExpectedOutput?: string | null
    tracingExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCaseCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSubmissionsInput = {
    id: string
    title: string
    slug: string
    trackId: string
    difficulty?: $Enums.Difficulty
    timeLimitMs?: number
    memoryLimitMb?: number
    tags?: TaskCreatetagsInput | string[]
    statementMarkdown: string
    inputFormat: string
    outputFormat: string
    sampleInput: string
    sampleOutput: string
    constraints: string
    hints?: string | null
    hasTracingQuiz?: boolean
    tracingSnippet?: string | null
    tracingQuestion?: string | null
    tracingExpectedOutput?: string | null
    tracingExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCaseUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSubmissionsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
  }

  export type SubmissionVerdictCreateWithoutSubmissionInput = {
    id?: string
    order?: number
    verdict?: $Enums.CaseVerdict
    verdictChar?: string
    executionTimeMs?: number
    memoryUsedKb?: number
    stdout?: string | null
    stderr?: string | null
    testCase: TestCaseCreateNestedOneWithoutVerdictsInput
  }

  export type SubmissionVerdictUncheckedCreateWithoutSubmissionInput = {
    id?: string
    testCaseId: string
    order?: number
    verdict?: $Enums.CaseVerdict
    verdictChar?: string
    executionTimeMs?: number
    memoryUsedKb?: number
    stdout?: string | null
    stderr?: string | null
  }

  export type SubmissionVerdictCreateOrConnectWithoutSubmissionInput = {
    where: SubmissionVerdictWhereUniqueInput
    create: XOR<SubmissionVerdictCreateWithoutSubmissionInput, SubmissionVerdictUncheckedCreateWithoutSubmissionInput>
  }

  export type SubmissionVerdictCreateManySubmissionInputEnvelope = {
    data: SubmissionVerdictCreateManySubmissionInput | SubmissionVerdictCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithoutSubmissionsInput = {
    update: XOR<TaskUpdateWithoutSubmissionsInput, TaskUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutSubmissionsInput, TaskUncheckedUpdateWithoutSubmissionsInput>
  }

  export type TaskUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeLimitMs?: IntFieldUpdateOperationsInput | number
    memoryLimitMb?: IntFieldUpdateOperationsInput | number
    tags?: TaskUpdatetagsInput | string[]
    statementMarkdown?: StringFieldUpdateOperationsInput | string
    inputFormat?: StringFieldUpdateOperationsInput | string
    outputFormat?: StringFieldUpdateOperationsInput | string
    sampleInput?: StringFieldUpdateOperationsInput | string
    sampleOutput?: StringFieldUpdateOperationsInput | string
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    hasTracingQuiz?: BoolFieldUpdateOperationsInput | boolean
    tracingSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    tracingQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExpectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCaseUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeLimitMs?: IntFieldUpdateOperationsInput | number
    memoryLimitMb?: IntFieldUpdateOperationsInput | number
    tags?: TaskUpdatetagsInput | string[]
    statementMarkdown?: StringFieldUpdateOperationsInput | string
    inputFormat?: StringFieldUpdateOperationsInput | string
    outputFormat?: StringFieldUpdateOperationsInput | string
    sampleInput?: StringFieldUpdateOperationsInput | string
    sampleOutput?: StringFieldUpdateOperationsInput | string
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    hasTracingQuiz?: BoolFieldUpdateOperationsInput | boolean
    tracingSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    tracingQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExpectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    tracingExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCaseUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type SubmissionVerdictUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: SubmissionVerdictWhereUniqueInput
    update: XOR<SubmissionVerdictUpdateWithoutSubmissionInput, SubmissionVerdictUncheckedUpdateWithoutSubmissionInput>
    create: XOR<SubmissionVerdictCreateWithoutSubmissionInput, SubmissionVerdictUncheckedCreateWithoutSubmissionInput>
  }

  export type SubmissionVerdictUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: SubmissionVerdictWhereUniqueInput
    data: XOR<SubmissionVerdictUpdateWithoutSubmissionInput, SubmissionVerdictUncheckedUpdateWithoutSubmissionInput>
  }

  export type SubmissionVerdictUpdateManyWithWhereWithoutSubmissionInput = {
    where: SubmissionVerdictScalarWhereInput
    data: XOR<SubmissionVerdictUpdateManyMutationInput, SubmissionVerdictUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type SubmissionCreateWithoutCaseVerdictsInput = {
    id?: string
    userId: string
    language?: string
    code: string
    status?: $Enums.SubmissionStatus
    verdictString?: string
    score?: number
    executionTimeMs?: number | null
    memoryUsedKb?: number | null
    errorMessage?: string | null
    submittedAt?: Date | string
    task: TaskCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutCaseVerdictsInput = {
    id?: string
    taskId: string
    userId: string
    language?: string
    code: string
    status?: $Enums.SubmissionStatus
    verdictString?: string
    score?: number
    executionTimeMs?: number | null
    memoryUsedKb?: number | null
    errorMessage?: string | null
    submittedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutCaseVerdictsInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutCaseVerdictsInput, SubmissionUncheckedCreateWithoutCaseVerdictsInput>
  }

  export type TestCaseCreateWithoutVerdictsInput = {
    id?: string
    order?: number
    input: string
    expectedOutput: string
    isSample?: boolean
    scoreWeight?: number
    task: TaskCreateNestedOneWithoutTestCasesInput
  }

  export type TestCaseUncheckedCreateWithoutVerdictsInput = {
    id?: string
    taskId: string
    order?: number
    input: string
    expectedOutput: string
    isSample?: boolean
    scoreWeight?: number
  }

  export type TestCaseCreateOrConnectWithoutVerdictsInput = {
    where: TestCaseWhereUniqueInput
    create: XOR<TestCaseCreateWithoutVerdictsInput, TestCaseUncheckedCreateWithoutVerdictsInput>
  }

  export type SubmissionUpsertWithoutCaseVerdictsInput = {
    update: XOR<SubmissionUpdateWithoutCaseVerdictsInput, SubmissionUncheckedUpdateWithoutCaseVerdictsInput>
    create: XOR<SubmissionCreateWithoutCaseVerdictsInput, SubmissionUncheckedCreateWithoutCaseVerdictsInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutCaseVerdictsInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutCaseVerdictsInput, SubmissionUncheckedUpdateWithoutCaseVerdictsInput>
  }

  export type SubmissionUpdateWithoutCaseVerdictsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    verdictString?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    executionTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    memoryUsedKb?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutCaseVerdictsInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    verdictString?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    executionTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    memoryUsedKb?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseUpsertWithoutVerdictsInput = {
    update: XOR<TestCaseUpdateWithoutVerdictsInput, TestCaseUncheckedUpdateWithoutVerdictsInput>
    create: XOR<TestCaseCreateWithoutVerdictsInput, TestCaseUncheckedCreateWithoutVerdictsInput>
    where?: TestCaseWhereInput
  }

  export type TestCaseUpdateToOneWithWhereWithoutVerdictsInput = {
    where?: TestCaseWhereInput
    data: XOR<TestCaseUpdateWithoutVerdictsInput, TestCaseUncheckedUpdateWithoutVerdictsInput>
  }

  export type TestCaseUpdateWithoutVerdictsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    input?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    isSample?: BoolFieldUpdateOperationsInput | boolean
    scoreWeight?: IntFieldUpdateOperationsInput | number
    task?: TaskUpdateOneRequiredWithoutTestCasesNestedInput
  }

  export type TestCaseUncheckedUpdateWithoutVerdictsInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    input?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    isSample?: BoolFieldUpdateOperationsInput | boolean
    scoreWeight?: IntFieldUpdateOperationsInput | number
  }

  export type TestCaseCreateManyTaskInput = {
    id?: string
    order?: number
    input: string
    expectedOutput: string
    isSample?: boolean
    scoreWeight?: number
  }

  export type SubmissionCreateManyTaskInput = {
    id?: string
    userId: string
    language?: string
    code: string
    status?: $Enums.SubmissionStatus
    verdictString?: string
    score?: number
    executionTimeMs?: number | null
    memoryUsedKb?: number | null
    errorMessage?: string | null
    submittedAt?: Date | string
  }

  export type TestCaseUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    input?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    isSample?: BoolFieldUpdateOperationsInput | boolean
    scoreWeight?: IntFieldUpdateOperationsInput | number
    verdicts?: SubmissionVerdictUpdateManyWithoutTestCaseNestedInput
  }

  export type TestCaseUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    input?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    isSample?: BoolFieldUpdateOperationsInput | boolean
    scoreWeight?: IntFieldUpdateOperationsInput | number
    verdicts?: SubmissionVerdictUncheckedUpdateManyWithoutTestCaseNestedInput
  }

  export type TestCaseUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    input?: StringFieldUpdateOperationsInput | string
    expectedOutput?: StringFieldUpdateOperationsInput | string
    isSample?: BoolFieldUpdateOperationsInput | boolean
    scoreWeight?: IntFieldUpdateOperationsInput | number
  }

  export type SubmissionUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    verdictString?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    executionTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    memoryUsedKb?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseVerdicts?: SubmissionVerdictUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    verdictString?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    executionTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    memoryUsedKb?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseVerdicts?: SubmissionVerdictUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    verdictString?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    executionTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    memoryUsedKb?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionVerdictCreateManyTestCaseInput = {
    id?: string
    submissionId: string
    order?: number
    verdict?: $Enums.CaseVerdict
    verdictChar?: string
    executionTimeMs?: number
    memoryUsedKb?: number
    stdout?: string | null
    stderr?: string | null
  }

  export type SubmissionVerdictUpdateWithoutTestCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    verdict?: EnumCaseVerdictFieldUpdateOperationsInput | $Enums.CaseVerdict
    verdictChar?: StringFieldUpdateOperationsInput | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    memoryUsedKb?: IntFieldUpdateOperationsInput | number
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    submission?: SubmissionUpdateOneRequiredWithoutCaseVerdictsNestedInput
  }

  export type SubmissionVerdictUncheckedUpdateWithoutTestCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    verdict?: EnumCaseVerdictFieldUpdateOperationsInput | $Enums.CaseVerdict
    verdictChar?: StringFieldUpdateOperationsInput | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    memoryUsedKb?: IntFieldUpdateOperationsInput | number
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionVerdictUncheckedUpdateManyWithoutTestCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    verdict?: EnumCaseVerdictFieldUpdateOperationsInput | $Enums.CaseVerdict
    verdictChar?: StringFieldUpdateOperationsInput | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    memoryUsedKb?: IntFieldUpdateOperationsInput | number
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionVerdictCreateManySubmissionInput = {
    id?: string
    testCaseId: string
    order?: number
    verdict?: $Enums.CaseVerdict
    verdictChar?: string
    executionTimeMs?: number
    memoryUsedKb?: number
    stdout?: string | null
    stderr?: string | null
  }

  export type SubmissionVerdictUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    verdict?: EnumCaseVerdictFieldUpdateOperationsInput | $Enums.CaseVerdict
    verdictChar?: StringFieldUpdateOperationsInput | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    memoryUsedKb?: IntFieldUpdateOperationsInput | number
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    testCase?: TestCaseUpdateOneRequiredWithoutVerdictsNestedInput
  }

  export type SubmissionVerdictUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCaseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    verdict?: EnumCaseVerdictFieldUpdateOperationsInput | $Enums.CaseVerdict
    verdictChar?: StringFieldUpdateOperationsInput | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    memoryUsedKb?: IntFieldUpdateOperationsInput | number
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionVerdictUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCaseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    verdict?: EnumCaseVerdictFieldUpdateOperationsInput | $Enums.CaseVerdict
    verdictChar?: StringFieldUpdateOperationsInput | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    memoryUsedKb?: IntFieldUpdateOperationsInput | number
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TaskCountOutputTypeDefaultArgs instead
     */
    export type TaskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestCaseCountOutputTypeDefaultArgs instead
     */
    export type TestCaseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestCaseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubmissionCountOutputTypeDefaultArgs instead
     */
    export type SubmissionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubmissionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestCaseDefaultArgs instead
     */
    export type TestCaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestCaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubmissionDefaultArgs instead
     */
    export type SubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubmissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubmissionVerdictDefaultArgs instead
     */
    export type SubmissionVerdictArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubmissionVerdictDefaultArgs<ExtArgs>

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