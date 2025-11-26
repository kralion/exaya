
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Sede
 * 
 */
export type Sede = $Result.DefaultSelection<Prisma.$SedePayload>
/**
 * Model Boleto
 * 
 */
export type Boleto = $Result.DefaultSelection<Prisma.$BoletoPayload>
/**
 * Model Bus
 * 
 */
export type Bus = $Result.DefaultSelection<Prisma.$BusPayload>
/**
 * Model Conductor
 * 
 */
export type Conductor = $Result.DefaultSelection<Prisma.$ConductorPayload>
/**
 * Model Encomienda
 * 
 */
export type Encomienda = $Result.DefaultSelection<Prisma.$EncomiendaPayload>
/**
 * Model Ruta
 * 
 */
export type Ruta = $Result.DefaultSelection<Prisma.$RutaPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Viaje
 * 
 */
export type Viaje = $Result.DefaultSelection<Prisma.$ViajePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BoletoEstado: {
  DISPONIBLE: 'DISPONIBLE',
  RESERVADO: 'RESERVADO',
  PAGADO: 'PAGADO'
};

export type BoletoEstado = (typeof BoletoEstado)[keyof typeof BoletoEstado]


export const SerieFactura: {
  F001: 'F001',
  F002: 'F002',
  F003: 'F003',
  F004: 'F004'
};

export type SerieFactura = (typeof SerieFactura)[keyof typeof SerieFactura]


export const SerieBoleto: {
  B001: 'B001',
  B002: 'B002',
  B003: 'B003',
  B004: 'B004'
};

export type SerieBoleto = (typeof SerieBoleto)[keyof typeof SerieBoleto]


export const SerieEncomienda: {
  B001: 'B001',
  F001: 'F001'
};

export type SerieEncomienda = (typeof SerieEncomienda)[keyof typeof SerieEncomienda]


export const Rol: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  GUEST: 'GUEST'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const ViajeEstado: {
  DISPONIBLE: 'DISPONIBLE',
  CANCELADO: 'CANCELADO',
  LLENO: 'LLENO'
};

export type ViajeEstado = (typeof ViajeEstado)[keyof typeof ViajeEstado]

}

export type BoletoEstado = $Enums.BoletoEstado

export const BoletoEstado: typeof $Enums.BoletoEstado

export type SerieFactura = $Enums.SerieFactura

export const SerieFactura: typeof $Enums.SerieFactura

export type SerieBoleto = $Enums.SerieBoleto

export const SerieBoleto: typeof $Enums.SerieBoleto

export type SerieEncomienda = $Enums.SerieEncomienda

export const SerieEncomienda: typeof $Enums.SerieEncomienda

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type ViajeEstado = $Enums.ViajeEstado

export const ViajeEstado: typeof $Enums.ViajeEstado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sedes
 * const sedes = await prisma.sede.findMany()
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
   * // Fetch zero or more Sedes
   * const sedes = await prisma.sede.findMany()
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
   * `prisma.sede`: Exposes CRUD operations for the **Sede** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sedes
    * const sedes = await prisma.sede.findMany()
    * ```
    */
  get sede(): Prisma.SedeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boleto`: Exposes CRUD operations for the **Boleto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boletos
    * const boletos = await prisma.boleto.findMany()
    * ```
    */
  get boleto(): Prisma.BoletoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bus`: Exposes CRUD operations for the **Bus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buses
    * const buses = await prisma.bus.findMany()
    * ```
    */
  get bus(): Prisma.BusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conductor`: Exposes CRUD operations for the **Conductor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conductors
    * const conductors = await prisma.conductor.findMany()
    * ```
    */
  get conductor(): Prisma.ConductorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.encomienda`: Exposes CRUD operations for the **Encomienda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Encomiendas
    * const encomiendas = await prisma.encomienda.findMany()
    * ```
    */
  get encomienda(): Prisma.EncomiendaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ruta`: Exposes CRUD operations for the **Ruta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rutas
    * const rutas = await prisma.ruta.findMany()
    * ```
    */
  get ruta(): Prisma.RutaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viaje`: Exposes CRUD operations for the **Viaje** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Viajes
    * const viajes = await prisma.viaje.findMany()
    * ```
    */
  get viaje(): Prisma.ViajeDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Sede: 'Sede',
    Boleto: 'Boleto',
    Bus: 'Bus',
    Conductor: 'Conductor',
    Encomienda: 'Encomienda',
    Ruta: 'Ruta',
    Usuario: 'Usuario',
    Viaje: 'Viaje'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sede" | "boleto" | "bus" | "conductor" | "encomienda" | "ruta" | "usuario" | "viaje"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Sede: {
        payload: Prisma.$SedePayload<ExtArgs>
        fields: Prisma.SedeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SedeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SedePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SedeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SedePayload>
          }
          findFirst: {
            args: Prisma.SedeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SedePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SedeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SedePayload>
          }
          findMany: {
            args: Prisma.SedeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SedePayload>[]
          }
          create: {
            args: Prisma.SedeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SedePayload>
          }
          createMany: {
            args: Prisma.SedeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SedeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SedePayload>[]
          }
          delete: {
            args: Prisma.SedeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SedePayload>
          }
          update: {
            args: Prisma.SedeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SedePayload>
          }
          deleteMany: {
            args: Prisma.SedeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SedeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SedeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SedePayload>[]
          }
          upsert: {
            args: Prisma.SedeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SedePayload>
          }
          aggregate: {
            args: Prisma.SedeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSede>
          }
          groupBy: {
            args: Prisma.SedeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SedeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SedeCountArgs<ExtArgs>
            result: $Utils.Optional<SedeCountAggregateOutputType> | number
          }
        }
      }
      Boleto: {
        payload: Prisma.$BoletoPayload<ExtArgs>
        fields: Prisma.BoletoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoletoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoletoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          findFirst: {
            args: Prisma.BoletoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoletoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          findMany: {
            args: Prisma.BoletoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>[]
          }
          create: {
            args: Prisma.BoletoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          createMany: {
            args: Prisma.BoletoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoletoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>[]
          }
          delete: {
            args: Prisma.BoletoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          update: {
            args: Prisma.BoletoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          deleteMany: {
            args: Prisma.BoletoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoletoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoletoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>[]
          }
          upsert: {
            args: Prisma.BoletoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          aggregate: {
            args: Prisma.BoletoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoleto>
          }
          groupBy: {
            args: Prisma.BoletoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoletoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoletoCountArgs<ExtArgs>
            result: $Utils.Optional<BoletoCountAggregateOutputType> | number
          }
        }
      }
      Bus: {
        payload: Prisma.$BusPayload<ExtArgs>
        fields: Prisma.BusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findFirst: {
            args: Prisma.BusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findMany: {
            args: Prisma.BusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          create: {
            args: Prisma.BusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          createMany: {
            args: Prisma.BusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          delete: {
            args: Prisma.BusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          update: {
            args: Prisma.BusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          deleteMany: {
            args: Prisma.BusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          upsert: {
            args: Prisma.BusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          aggregate: {
            args: Prisma.BusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBus>
          }
          groupBy: {
            args: Prisma.BusGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusCountArgs<ExtArgs>
            result: $Utils.Optional<BusCountAggregateOutputType> | number
          }
        }
      }
      Conductor: {
        payload: Prisma.$ConductorPayload<ExtArgs>
        fields: Prisma.ConductorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConductorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConductorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          findFirst: {
            args: Prisma.ConductorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConductorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          findMany: {
            args: Prisma.ConductorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>[]
          }
          create: {
            args: Prisma.ConductorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          createMany: {
            args: Prisma.ConductorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConductorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>[]
          }
          delete: {
            args: Prisma.ConductorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          update: {
            args: Prisma.ConductorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          deleteMany: {
            args: Prisma.ConductorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConductorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConductorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>[]
          }
          upsert: {
            args: Prisma.ConductorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          aggregate: {
            args: Prisma.ConductorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConductor>
          }
          groupBy: {
            args: Prisma.ConductorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConductorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConductorCountArgs<ExtArgs>
            result: $Utils.Optional<ConductorCountAggregateOutputType> | number
          }
        }
      }
      Encomienda: {
        payload: Prisma.$EncomiendaPayload<ExtArgs>
        fields: Prisma.EncomiendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EncomiendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncomiendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EncomiendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncomiendaPayload>
          }
          findFirst: {
            args: Prisma.EncomiendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncomiendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EncomiendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncomiendaPayload>
          }
          findMany: {
            args: Prisma.EncomiendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncomiendaPayload>[]
          }
          create: {
            args: Prisma.EncomiendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncomiendaPayload>
          }
          createMany: {
            args: Prisma.EncomiendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EncomiendaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncomiendaPayload>[]
          }
          delete: {
            args: Prisma.EncomiendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncomiendaPayload>
          }
          update: {
            args: Prisma.EncomiendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncomiendaPayload>
          }
          deleteMany: {
            args: Prisma.EncomiendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EncomiendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EncomiendaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncomiendaPayload>[]
          }
          upsert: {
            args: Prisma.EncomiendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncomiendaPayload>
          }
          aggregate: {
            args: Prisma.EncomiendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEncomienda>
          }
          groupBy: {
            args: Prisma.EncomiendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EncomiendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EncomiendaCountArgs<ExtArgs>
            result: $Utils.Optional<EncomiendaCountAggregateOutputType> | number
          }
        }
      }
      Ruta: {
        payload: Prisma.$RutaPayload<ExtArgs>
        fields: Prisma.RutaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          findFirst: {
            args: Prisma.RutaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          findMany: {
            args: Prisma.RutaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>[]
          }
          create: {
            args: Prisma.RutaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          createMany: {
            args: Prisma.RutaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RutaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>[]
          }
          delete: {
            args: Prisma.RutaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          update: {
            args: Prisma.RutaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          deleteMany: {
            args: Prisma.RutaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RutaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>[]
          }
          upsert: {
            args: Prisma.RutaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          aggregate: {
            args: Prisma.RutaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRuta>
          }
          groupBy: {
            args: Prisma.RutaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutaCountArgs<ExtArgs>
            result: $Utils.Optional<RutaCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Viaje: {
        payload: Prisma.$ViajePayload<ExtArgs>
        fields: Prisma.ViajeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViajeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViajeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          findFirst: {
            args: Prisma.ViajeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViajeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          findMany: {
            args: Prisma.ViajeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>[]
          }
          create: {
            args: Prisma.ViajeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          createMany: {
            args: Prisma.ViajeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViajeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>[]
          }
          delete: {
            args: Prisma.ViajeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          update: {
            args: Prisma.ViajeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          deleteMany: {
            args: Prisma.ViajeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViajeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViajeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>[]
          }
          upsert: {
            args: Prisma.ViajeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          aggregate: {
            args: Prisma.ViajeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViaje>
          }
          groupBy: {
            args: Prisma.ViajeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViajeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViajeCountArgs<ExtArgs>
            result: $Utils.Optional<ViajeCountAggregateOutputType> | number
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    sede?: SedeOmit
    boleto?: BoletoOmit
    bus?: BusOmit
    conductor?: ConductorOmit
    encomienda?: EncomiendaOmit
    ruta?: RutaOmit
    usuario?: UsuarioOmit
    viaje?: ViajeOmit
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
   * Count Type SedeCountOutputType
   */

  export type SedeCountOutputType = {
    usuarios: number
  }

  export type SedeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | SedeCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * SedeCountOutputType without action
   */
  export type SedeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SedeCountOutputType
     */
    select?: SedeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SedeCountOutputType without action
   */
  export type SedeCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type BusCountOutputType
   */

  export type BusCountOutputType = {
    viaje: number
  }

  export type BusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viaje?: boolean | BusCountOutputTypeCountViajeArgs
  }

  // Custom InputTypes
  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusCountOutputType
     */
    select?: BusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountViajeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajeWhereInput
  }


  /**
   * Count Type RutaCountOutputType
   */

  export type RutaCountOutputType = {
    viaje: number
  }

  export type RutaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viaje?: boolean | RutaCountOutputTypeCountViajeArgs
  }

  // Custom InputTypes
  /**
   * RutaCountOutputType without action
   */
  export type RutaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCountOutputType
     */
    select?: RutaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RutaCountOutputType without action
   */
  export type RutaCountOutputTypeCountViajeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajeWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    encomienda: number
    boleto: number
    viaje: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encomienda?: boolean | UsuarioCountOutputTypeCountEncomiendaArgs
    boleto?: boolean | UsuarioCountOutputTypeCountBoletoArgs
    viaje?: boolean | UsuarioCountOutputTypeCountViajeArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEncomiendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EncomiendaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountBoletoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoletoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountViajeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajeWhereInput
  }


  /**
   * Count Type ViajeCountOutputType
   */

  export type ViajeCountOutputType = {
    boletos: number
    conductores: number
    encomiendas: number
  }

  export type ViajeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boletos?: boolean | ViajeCountOutputTypeCountBoletosArgs
    conductores?: boolean | ViajeCountOutputTypeCountConductoresArgs
    encomiendas?: boolean | ViajeCountOutputTypeCountEncomiendasArgs
  }

  // Custom InputTypes
  /**
   * ViajeCountOutputType without action
   */
  export type ViajeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViajeCountOutputType
     */
    select?: ViajeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ViajeCountOutputType without action
   */
  export type ViajeCountOutputTypeCountBoletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoletoWhereInput
  }

  /**
   * ViajeCountOutputType without action
   */
  export type ViajeCountOutputTypeCountConductoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConductorWhereInput
  }

  /**
   * ViajeCountOutputType without action
   */
  export type ViajeCountOutputTypeCountEncomiendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EncomiendaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Sede
   */

  export type AggregateSede = {
    _count: SedeCountAggregateOutputType | null
    _avg: SedeAvgAggregateOutputType | null
    _sum: SedeSumAggregateOutputType | null
    _min: SedeMinAggregateOutputType | null
    _max: SedeMaxAggregateOutputType | null
  }

  export type SedeAvgAggregateOutputType = {
    contadorBoletos: number | null
    contadorFacturas: number | null
  }

  export type SedeSumAggregateOutputType = {
    contadorBoletos: number | null
    contadorFacturas: number | null
  }

  export type SedeMinAggregateOutputType = {
    id: string | null
    agenciaUbicacion: string | null
    agencia: string | null
    serieBoleto: $Enums.SerieBoleto | null
    serieFactura: $Enums.SerieFactura | null
    contadorBoletos: number | null
    contadorFacturas: number | null
  }

  export type SedeMaxAggregateOutputType = {
    id: string | null
    agenciaUbicacion: string | null
    agencia: string | null
    serieBoleto: $Enums.SerieBoleto | null
    serieFactura: $Enums.SerieFactura | null
    contadorBoletos: number | null
    contadorFacturas: number | null
  }

  export type SedeCountAggregateOutputType = {
    id: number
    agenciaUbicacion: number
    agencia: number
    serieBoleto: number
    serieFactura: number
    contadorBoletos: number
    contadorFacturas: number
    _all: number
  }


  export type SedeAvgAggregateInputType = {
    contadorBoletos?: true
    contadorFacturas?: true
  }

  export type SedeSumAggregateInputType = {
    contadorBoletos?: true
    contadorFacturas?: true
  }

  export type SedeMinAggregateInputType = {
    id?: true
    agenciaUbicacion?: true
    agencia?: true
    serieBoleto?: true
    serieFactura?: true
    contadorBoletos?: true
    contadorFacturas?: true
  }

  export type SedeMaxAggregateInputType = {
    id?: true
    agenciaUbicacion?: true
    agencia?: true
    serieBoleto?: true
    serieFactura?: true
    contadorBoletos?: true
    contadorFacturas?: true
  }

  export type SedeCountAggregateInputType = {
    id?: true
    agenciaUbicacion?: true
    agencia?: true
    serieBoleto?: true
    serieFactura?: true
    contadorBoletos?: true
    contadorFacturas?: true
    _all?: true
  }

  export type SedeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sede to aggregate.
     */
    where?: SedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sedes to fetch.
     */
    orderBy?: SedeOrderByWithRelationInput | SedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sedes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sedes
    **/
    _count?: true | SedeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SedeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SedeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SedeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SedeMaxAggregateInputType
  }

  export type GetSedeAggregateType<T extends SedeAggregateArgs> = {
        [P in keyof T & keyof AggregateSede]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSede[P]>
      : GetScalarType<T[P], AggregateSede[P]>
  }




  export type SedeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SedeWhereInput
    orderBy?: SedeOrderByWithAggregationInput | SedeOrderByWithAggregationInput[]
    by: SedeScalarFieldEnum[] | SedeScalarFieldEnum
    having?: SedeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SedeCountAggregateInputType | true
    _avg?: SedeAvgAggregateInputType
    _sum?: SedeSumAggregateInputType
    _min?: SedeMinAggregateInputType
    _max?: SedeMaxAggregateInputType
  }

  export type SedeGroupByOutputType = {
    id: string
    agenciaUbicacion: string
    agencia: string
    serieBoleto: $Enums.SerieBoleto
    serieFactura: $Enums.SerieFactura
    contadorBoletos: number
    contadorFacturas: number
    _count: SedeCountAggregateOutputType | null
    _avg: SedeAvgAggregateOutputType | null
    _sum: SedeSumAggregateOutputType | null
    _min: SedeMinAggregateOutputType | null
    _max: SedeMaxAggregateOutputType | null
  }

  type GetSedeGroupByPayload<T extends SedeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SedeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SedeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SedeGroupByOutputType[P]>
            : GetScalarType<T[P], SedeGroupByOutputType[P]>
        }
      >
    >


  export type SedeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agenciaUbicacion?: boolean
    agencia?: boolean
    serieBoleto?: boolean
    serieFactura?: boolean
    contadorBoletos?: boolean
    contadorFacturas?: boolean
    usuarios?: boolean | Sede$usuariosArgs<ExtArgs>
    _count?: boolean | SedeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sede"]>

  export type SedeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agenciaUbicacion?: boolean
    agencia?: boolean
    serieBoleto?: boolean
    serieFactura?: boolean
    contadorBoletos?: boolean
    contadorFacturas?: boolean
  }, ExtArgs["result"]["sede"]>

  export type SedeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agenciaUbicacion?: boolean
    agencia?: boolean
    serieBoleto?: boolean
    serieFactura?: boolean
    contadorBoletos?: boolean
    contadorFacturas?: boolean
  }, ExtArgs["result"]["sede"]>

  export type SedeSelectScalar = {
    id?: boolean
    agenciaUbicacion?: boolean
    agencia?: boolean
    serieBoleto?: boolean
    serieFactura?: boolean
    contadorBoletos?: boolean
    contadorFacturas?: boolean
  }

  export type SedeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agenciaUbicacion" | "agencia" | "serieBoleto" | "serieFactura" | "contadorBoletos" | "contadorFacturas", ExtArgs["result"]["sede"]>
  export type SedeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Sede$usuariosArgs<ExtArgs>
    _count?: boolean | SedeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SedeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SedeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SedePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sede"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agenciaUbicacion: string
      agencia: string
      serieBoleto: $Enums.SerieBoleto
      serieFactura: $Enums.SerieFactura
      contadorBoletos: number
      contadorFacturas: number
    }, ExtArgs["result"]["sede"]>
    composites: {}
  }

  type SedeGetPayload<S extends boolean | null | undefined | SedeDefaultArgs> = $Result.GetResult<Prisma.$SedePayload, S>

  type SedeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SedeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SedeCountAggregateInputType | true
    }

  export interface SedeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sede'], meta: { name: 'Sede' } }
    /**
     * Find zero or one Sede that matches the filter.
     * @param {SedeFindUniqueArgs} args - Arguments to find a Sede
     * @example
     * // Get one Sede
     * const sede = await prisma.sede.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SedeFindUniqueArgs>(args: SelectSubset<T, SedeFindUniqueArgs<ExtArgs>>): Prisma__SedeClient<$Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sede that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SedeFindUniqueOrThrowArgs} args - Arguments to find a Sede
     * @example
     * // Get one Sede
     * const sede = await prisma.sede.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SedeFindUniqueOrThrowArgs>(args: SelectSubset<T, SedeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SedeClient<$Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sede that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SedeFindFirstArgs} args - Arguments to find a Sede
     * @example
     * // Get one Sede
     * const sede = await prisma.sede.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SedeFindFirstArgs>(args?: SelectSubset<T, SedeFindFirstArgs<ExtArgs>>): Prisma__SedeClient<$Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sede that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SedeFindFirstOrThrowArgs} args - Arguments to find a Sede
     * @example
     * // Get one Sede
     * const sede = await prisma.sede.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SedeFindFirstOrThrowArgs>(args?: SelectSubset<T, SedeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SedeClient<$Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sedes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SedeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sedes
     * const sedes = await prisma.sede.findMany()
     * 
     * // Get first 10 Sedes
     * const sedes = await prisma.sede.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sedeWithIdOnly = await prisma.sede.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SedeFindManyArgs>(args?: SelectSubset<T, SedeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sede.
     * @param {SedeCreateArgs} args - Arguments to create a Sede.
     * @example
     * // Create one Sede
     * const Sede = await prisma.sede.create({
     *   data: {
     *     // ... data to create a Sede
     *   }
     * })
     * 
     */
    create<T extends SedeCreateArgs>(args: SelectSubset<T, SedeCreateArgs<ExtArgs>>): Prisma__SedeClient<$Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sedes.
     * @param {SedeCreateManyArgs} args - Arguments to create many Sedes.
     * @example
     * // Create many Sedes
     * const sede = await prisma.sede.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SedeCreateManyArgs>(args?: SelectSubset<T, SedeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sedes and returns the data saved in the database.
     * @param {SedeCreateManyAndReturnArgs} args - Arguments to create many Sedes.
     * @example
     * // Create many Sedes
     * const sede = await prisma.sede.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sedes and only return the `id`
     * const sedeWithIdOnly = await prisma.sede.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SedeCreateManyAndReturnArgs>(args?: SelectSubset<T, SedeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sede.
     * @param {SedeDeleteArgs} args - Arguments to delete one Sede.
     * @example
     * // Delete one Sede
     * const Sede = await prisma.sede.delete({
     *   where: {
     *     // ... filter to delete one Sede
     *   }
     * })
     * 
     */
    delete<T extends SedeDeleteArgs>(args: SelectSubset<T, SedeDeleteArgs<ExtArgs>>): Prisma__SedeClient<$Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sede.
     * @param {SedeUpdateArgs} args - Arguments to update one Sede.
     * @example
     * // Update one Sede
     * const sede = await prisma.sede.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SedeUpdateArgs>(args: SelectSubset<T, SedeUpdateArgs<ExtArgs>>): Prisma__SedeClient<$Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sedes.
     * @param {SedeDeleteManyArgs} args - Arguments to filter Sedes to delete.
     * @example
     * // Delete a few Sedes
     * const { count } = await prisma.sede.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SedeDeleteManyArgs>(args?: SelectSubset<T, SedeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sedes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SedeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sedes
     * const sede = await prisma.sede.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SedeUpdateManyArgs>(args: SelectSubset<T, SedeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sedes and returns the data updated in the database.
     * @param {SedeUpdateManyAndReturnArgs} args - Arguments to update many Sedes.
     * @example
     * // Update many Sedes
     * const sede = await prisma.sede.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sedes and only return the `id`
     * const sedeWithIdOnly = await prisma.sede.updateManyAndReturn({
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
    updateManyAndReturn<T extends SedeUpdateManyAndReturnArgs>(args: SelectSubset<T, SedeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sede.
     * @param {SedeUpsertArgs} args - Arguments to update or create a Sede.
     * @example
     * // Update or create a Sede
     * const sede = await prisma.sede.upsert({
     *   create: {
     *     // ... data to create a Sede
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sede we want to update
     *   }
     * })
     */
    upsert<T extends SedeUpsertArgs>(args: SelectSubset<T, SedeUpsertArgs<ExtArgs>>): Prisma__SedeClient<$Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sedes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SedeCountArgs} args - Arguments to filter Sedes to count.
     * @example
     * // Count the number of Sedes
     * const count = await prisma.sede.count({
     *   where: {
     *     // ... the filter for the Sedes we want to count
     *   }
     * })
    **/
    count<T extends SedeCountArgs>(
      args?: Subset<T, SedeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SedeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sede.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SedeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SedeAggregateArgs>(args: Subset<T, SedeAggregateArgs>): Prisma.PrismaPromise<GetSedeAggregateType<T>>

    /**
     * Group by Sede.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SedeGroupByArgs} args - Group by arguments.
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
      T extends SedeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SedeGroupByArgs['orderBy'] }
        : { orderBy?: SedeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SedeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSedeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sede model
   */
  readonly fields: SedeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sede.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SedeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Sede$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Sede$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sede model
   */
  interface SedeFieldRefs {
    readonly id: FieldRef<"Sede", 'String'>
    readonly agenciaUbicacion: FieldRef<"Sede", 'String'>
    readonly agencia: FieldRef<"Sede", 'String'>
    readonly serieBoleto: FieldRef<"Sede", 'SerieBoleto'>
    readonly serieFactura: FieldRef<"Sede", 'SerieFactura'>
    readonly contadorBoletos: FieldRef<"Sede", 'Int'>
    readonly contadorFacturas: FieldRef<"Sede", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sede findUnique
   */
  export type SedeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sede
     */
    select?: SedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sede
     */
    omit?: SedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SedeInclude<ExtArgs> | null
    /**
     * Filter, which Sede to fetch.
     */
    where: SedeWhereUniqueInput
  }

  /**
   * Sede findUniqueOrThrow
   */
  export type SedeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sede
     */
    select?: SedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sede
     */
    omit?: SedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SedeInclude<ExtArgs> | null
    /**
     * Filter, which Sede to fetch.
     */
    where: SedeWhereUniqueInput
  }

  /**
   * Sede findFirst
   */
  export type SedeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sede
     */
    select?: SedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sede
     */
    omit?: SedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SedeInclude<ExtArgs> | null
    /**
     * Filter, which Sede to fetch.
     */
    where?: SedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sedes to fetch.
     */
    orderBy?: SedeOrderByWithRelationInput | SedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sedes.
     */
    cursor?: SedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sedes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sedes.
     */
    distinct?: SedeScalarFieldEnum | SedeScalarFieldEnum[]
  }

  /**
   * Sede findFirstOrThrow
   */
  export type SedeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sede
     */
    select?: SedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sede
     */
    omit?: SedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SedeInclude<ExtArgs> | null
    /**
     * Filter, which Sede to fetch.
     */
    where?: SedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sedes to fetch.
     */
    orderBy?: SedeOrderByWithRelationInput | SedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sedes.
     */
    cursor?: SedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sedes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sedes.
     */
    distinct?: SedeScalarFieldEnum | SedeScalarFieldEnum[]
  }

  /**
   * Sede findMany
   */
  export type SedeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sede
     */
    select?: SedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sede
     */
    omit?: SedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SedeInclude<ExtArgs> | null
    /**
     * Filter, which Sedes to fetch.
     */
    where?: SedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sedes to fetch.
     */
    orderBy?: SedeOrderByWithRelationInput | SedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sedes.
     */
    cursor?: SedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sedes.
     */
    skip?: number
    distinct?: SedeScalarFieldEnum | SedeScalarFieldEnum[]
  }

  /**
   * Sede create
   */
  export type SedeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sede
     */
    select?: SedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sede
     */
    omit?: SedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SedeInclude<ExtArgs> | null
    /**
     * The data needed to create a Sede.
     */
    data: XOR<SedeCreateInput, SedeUncheckedCreateInput>
  }

  /**
   * Sede createMany
   */
  export type SedeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sedes.
     */
    data: SedeCreateManyInput | SedeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sede createManyAndReturn
   */
  export type SedeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sede
     */
    select?: SedeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sede
     */
    omit?: SedeOmit<ExtArgs> | null
    /**
     * The data used to create many Sedes.
     */
    data: SedeCreateManyInput | SedeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sede update
   */
  export type SedeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sede
     */
    select?: SedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sede
     */
    omit?: SedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SedeInclude<ExtArgs> | null
    /**
     * The data needed to update a Sede.
     */
    data: XOR<SedeUpdateInput, SedeUncheckedUpdateInput>
    /**
     * Choose, which Sede to update.
     */
    where: SedeWhereUniqueInput
  }

  /**
   * Sede updateMany
   */
  export type SedeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sedes.
     */
    data: XOR<SedeUpdateManyMutationInput, SedeUncheckedUpdateManyInput>
    /**
     * Filter which Sedes to update
     */
    where?: SedeWhereInput
    /**
     * Limit how many Sedes to update.
     */
    limit?: number
  }

  /**
   * Sede updateManyAndReturn
   */
  export type SedeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sede
     */
    select?: SedeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sede
     */
    omit?: SedeOmit<ExtArgs> | null
    /**
     * The data used to update Sedes.
     */
    data: XOR<SedeUpdateManyMutationInput, SedeUncheckedUpdateManyInput>
    /**
     * Filter which Sedes to update
     */
    where?: SedeWhereInput
    /**
     * Limit how many Sedes to update.
     */
    limit?: number
  }

  /**
   * Sede upsert
   */
  export type SedeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sede
     */
    select?: SedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sede
     */
    omit?: SedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SedeInclude<ExtArgs> | null
    /**
     * The filter to search for the Sede to update in case it exists.
     */
    where: SedeWhereUniqueInput
    /**
     * In case the Sede found by the `where` argument doesn't exist, create a new Sede with this data.
     */
    create: XOR<SedeCreateInput, SedeUncheckedCreateInput>
    /**
     * In case the Sede was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SedeUpdateInput, SedeUncheckedUpdateInput>
  }

  /**
   * Sede delete
   */
  export type SedeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sede
     */
    select?: SedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sede
     */
    omit?: SedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SedeInclude<ExtArgs> | null
    /**
     * Filter which Sede to delete.
     */
    where: SedeWhereUniqueInput
  }

  /**
   * Sede deleteMany
   */
  export type SedeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sedes to delete
     */
    where?: SedeWhereInput
    /**
     * Limit how many Sedes to delete.
     */
    limit?: number
  }

  /**
   * Sede.usuarios
   */
  export type Sede$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Sede without action
   */
  export type SedeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sede
     */
    select?: SedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sede
     */
    omit?: SedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SedeInclude<ExtArgs> | null
  }


  /**
   * Model Boleto
   */

  export type AggregateBoleto = {
    _count: BoletoCountAggregateOutputType | null
    _avg: BoletoAvgAggregateOutputType | null
    _sum: BoletoSumAggregateOutputType | null
    _min: BoletoMinAggregateOutputType | null
    _max: BoletoMaxAggregateOutputType | null
  }

  export type BoletoAvgAggregateOutputType = {
    asiento: number | null
    precio: number | null
  }

  export type BoletoSumAggregateOutputType = {
    asiento: number | null
    precio: number | null
  }

  export type BoletoMinAggregateOutputType = {
    asiento: number | null
    metodoPago: string | null
    pasajeroDni: string | null
    estado: $Enums.BoletoEstado | null
    pasajeroNombres: string | null
    pasajeroApellidos: string | null
    usuarioId: string | null
    codigo: string | null
    destino: string | null
    fechaRegistro: Date | null
    id: string | null
    precio: number | null
    viajeId: string | null
  }

  export type BoletoMaxAggregateOutputType = {
    asiento: number | null
    metodoPago: string | null
    pasajeroDni: string | null
    estado: $Enums.BoletoEstado | null
    pasajeroNombres: string | null
    pasajeroApellidos: string | null
    usuarioId: string | null
    codigo: string | null
    destino: string | null
    fechaRegistro: Date | null
    id: string | null
    precio: number | null
    viajeId: string | null
  }

  export type BoletoCountAggregateOutputType = {
    asiento: number
    metodoPago: number
    pasajeroDni: number
    estado: number
    pasajeroNombres: number
    pasajeroApellidos: number
    usuarioId: number
    codigo: number
    destino: number
    fechaRegistro: number
    id: number
    precio: number
    viajeId: number
    _all: number
  }


  export type BoletoAvgAggregateInputType = {
    asiento?: true
    precio?: true
  }

  export type BoletoSumAggregateInputType = {
    asiento?: true
    precio?: true
  }

  export type BoletoMinAggregateInputType = {
    asiento?: true
    metodoPago?: true
    pasajeroDni?: true
    estado?: true
    pasajeroNombres?: true
    pasajeroApellidos?: true
    usuarioId?: true
    codigo?: true
    destino?: true
    fechaRegistro?: true
    id?: true
    precio?: true
    viajeId?: true
  }

  export type BoletoMaxAggregateInputType = {
    asiento?: true
    metodoPago?: true
    pasajeroDni?: true
    estado?: true
    pasajeroNombres?: true
    pasajeroApellidos?: true
    usuarioId?: true
    codigo?: true
    destino?: true
    fechaRegistro?: true
    id?: true
    precio?: true
    viajeId?: true
  }

  export type BoletoCountAggregateInputType = {
    asiento?: true
    metodoPago?: true
    pasajeroDni?: true
    estado?: true
    pasajeroNombres?: true
    pasajeroApellidos?: true
    usuarioId?: true
    codigo?: true
    destino?: true
    fechaRegistro?: true
    id?: true
    precio?: true
    viajeId?: true
    _all?: true
  }

  export type BoletoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boleto to aggregate.
     */
    where?: BoletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boletos to fetch.
     */
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boletos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boletos
    **/
    _count?: true | BoletoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoletoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoletoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoletoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoletoMaxAggregateInputType
  }

  export type GetBoletoAggregateType<T extends BoletoAggregateArgs> = {
        [P in keyof T & keyof AggregateBoleto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoleto[P]>
      : GetScalarType<T[P], AggregateBoleto[P]>
  }




  export type BoletoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoletoWhereInput
    orderBy?: BoletoOrderByWithAggregationInput | BoletoOrderByWithAggregationInput[]
    by: BoletoScalarFieldEnum[] | BoletoScalarFieldEnum
    having?: BoletoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoletoCountAggregateInputType | true
    _avg?: BoletoAvgAggregateInputType
    _sum?: BoletoSumAggregateInputType
    _min?: BoletoMinAggregateInputType
    _max?: BoletoMaxAggregateInputType
  }

  export type BoletoGroupByOutputType = {
    asiento: number
    metodoPago: string
    pasajeroDni: string
    estado: $Enums.BoletoEstado
    pasajeroNombres: string
    pasajeroApellidos: string
    usuarioId: string
    codigo: string
    destino: string
    fechaRegistro: Date
    id: string
    precio: number
    viajeId: string
    _count: BoletoCountAggregateOutputType | null
    _avg: BoletoAvgAggregateOutputType | null
    _sum: BoletoSumAggregateOutputType | null
    _min: BoletoMinAggregateOutputType | null
    _max: BoletoMaxAggregateOutputType | null
  }

  type GetBoletoGroupByPayload<T extends BoletoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoletoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoletoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoletoGroupByOutputType[P]>
            : GetScalarType<T[P], BoletoGroupByOutputType[P]>
        }
      >
    >


  export type BoletoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    asiento?: boolean
    metodoPago?: boolean
    pasajeroDni?: boolean
    estado?: boolean
    pasajeroNombres?: boolean
    pasajeroApellidos?: boolean
    usuarioId?: boolean
    codigo?: boolean
    destino?: boolean
    fechaRegistro?: boolean
    id?: boolean
    precio?: boolean
    viajeId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boleto"]>

  export type BoletoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    asiento?: boolean
    metodoPago?: boolean
    pasajeroDni?: boolean
    estado?: boolean
    pasajeroNombres?: boolean
    pasajeroApellidos?: boolean
    usuarioId?: boolean
    codigo?: boolean
    destino?: boolean
    fechaRegistro?: boolean
    id?: boolean
    precio?: boolean
    viajeId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boleto"]>

  export type BoletoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    asiento?: boolean
    metodoPago?: boolean
    pasajeroDni?: boolean
    estado?: boolean
    pasajeroNombres?: boolean
    pasajeroApellidos?: boolean
    usuarioId?: boolean
    codigo?: boolean
    destino?: boolean
    fechaRegistro?: boolean
    id?: boolean
    precio?: boolean
    viajeId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boleto"]>

  export type BoletoSelectScalar = {
    asiento?: boolean
    metodoPago?: boolean
    pasajeroDni?: boolean
    estado?: boolean
    pasajeroNombres?: boolean
    pasajeroApellidos?: boolean
    usuarioId?: boolean
    codigo?: boolean
    destino?: boolean
    fechaRegistro?: boolean
    id?: boolean
    precio?: boolean
    viajeId?: boolean
  }

  export type BoletoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"asiento" | "metodoPago" | "pasajeroDni" | "estado" | "pasajeroNombres" | "pasajeroApellidos" | "usuarioId" | "codigo" | "destino" | "fechaRegistro" | "id" | "precio" | "viajeId", ExtArgs["result"]["boleto"]>
  export type BoletoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }
  export type BoletoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }
  export type BoletoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }

  export type $BoletoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Boleto"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      viaje: Prisma.$ViajePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      asiento: number
      metodoPago: string
      pasajeroDni: string
      estado: $Enums.BoletoEstado
      pasajeroNombres: string
      pasajeroApellidos: string
      usuarioId: string
      codigo: string
      destino: string
      fechaRegistro: Date
      id: string
      precio: number
      viajeId: string
    }, ExtArgs["result"]["boleto"]>
    composites: {}
  }

  type BoletoGetPayload<S extends boolean | null | undefined | BoletoDefaultArgs> = $Result.GetResult<Prisma.$BoletoPayload, S>

  type BoletoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoletoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoletoCountAggregateInputType | true
    }

  export interface BoletoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Boleto'], meta: { name: 'Boleto' } }
    /**
     * Find zero or one Boleto that matches the filter.
     * @param {BoletoFindUniqueArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoletoFindUniqueArgs>(args: SelectSubset<T, BoletoFindUniqueArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Boleto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoletoFindUniqueOrThrowArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoletoFindUniqueOrThrowArgs>(args: SelectSubset<T, BoletoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boleto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoFindFirstArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoletoFindFirstArgs>(args?: SelectSubset<T, BoletoFindFirstArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boleto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoFindFirstOrThrowArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoletoFindFirstOrThrowArgs>(args?: SelectSubset<T, BoletoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boletos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boletos
     * const boletos = await prisma.boleto.findMany()
     * 
     * // Get first 10 Boletos
     * const boletos = await prisma.boleto.findMany({ take: 10 })
     * 
     * // Only select the `asiento`
     * const boletoWithAsientoOnly = await prisma.boleto.findMany({ select: { asiento: true } })
     * 
     */
    findMany<T extends BoletoFindManyArgs>(args?: SelectSubset<T, BoletoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Boleto.
     * @param {BoletoCreateArgs} args - Arguments to create a Boleto.
     * @example
     * // Create one Boleto
     * const Boleto = await prisma.boleto.create({
     *   data: {
     *     // ... data to create a Boleto
     *   }
     * })
     * 
     */
    create<T extends BoletoCreateArgs>(args: SelectSubset<T, BoletoCreateArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boletos.
     * @param {BoletoCreateManyArgs} args - Arguments to create many Boletos.
     * @example
     * // Create many Boletos
     * const boleto = await prisma.boleto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoletoCreateManyArgs>(args?: SelectSubset<T, BoletoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boletos and returns the data saved in the database.
     * @param {BoletoCreateManyAndReturnArgs} args - Arguments to create many Boletos.
     * @example
     * // Create many Boletos
     * const boleto = await prisma.boleto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boletos and only return the `asiento`
     * const boletoWithAsientoOnly = await prisma.boleto.createManyAndReturn({
     *   select: { asiento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoletoCreateManyAndReturnArgs>(args?: SelectSubset<T, BoletoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Boleto.
     * @param {BoletoDeleteArgs} args - Arguments to delete one Boleto.
     * @example
     * // Delete one Boleto
     * const Boleto = await prisma.boleto.delete({
     *   where: {
     *     // ... filter to delete one Boleto
     *   }
     * })
     * 
     */
    delete<T extends BoletoDeleteArgs>(args: SelectSubset<T, BoletoDeleteArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Boleto.
     * @param {BoletoUpdateArgs} args - Arguments to update one Boleto.
     * @example
     * // Update one Boleto
     * const boleto = await prisma.boleto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoletoUpdateArgs>(args: SelectSubset<T, BoletoUpdateArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boletos.
     * @param {BoletoDeleteManyArgs} args - Arguments to filter Boletos to delete.
     * @example
     * // Delete a few Boletos
     * const { count } = await prisma.boleto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoletoDeleteManyArgs>(args?: SelectSubset<T, BoletoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boletos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boletos
     * const boleto = await prisma.boleto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoletoUpdateManyArgs>(args: SelectSubset<T, BoletoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boletos and returns the data updated in the database.
     * @param {BoletoUpdateManyAndReturnArgs} args - Arguments to update many Boletos.
     * @example
     * // Update many Boletos
     * const boleto = await prisma.boleto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Boletos and only return the `asiento`
     * const boletoWithAsientoOnly = await prisma.boleto.updateManyAndReturn({
     *   select: { asiento: true },
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
    updateManyAndReturn<T extends BoletoUpdateManyAndReturnArgs>(args: SelectSubset<T, BoletoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Boleto.
     * @param {BoletoUpsertArgs} args - Arguments to update or create a Boleto.
     * @example
     * // Update or create a Boleto
     * const boleto = await prisma.boleto.upsert({
     *   create: {
     *     // ... data to create a Boleto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boleto we want to update
     *   }
     * })
     */
    upsert<T extends BoletoUpsertArgs>(args: SelectSubset<T, BoletoUpsertArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boletos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoCountArgs} args - Arguments to filter Boletos to count.
     * @example
     * // Count the number of Boletos
     * const count = await prisma.boleto.count({
     *   where: {
     *     // ... the filter for the Boletos we want to count
     *   }
     * })
    **/
    count<T extends BoletoCountArgs>(
      args?: Subset<T, BoletoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoletoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boleto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoletoAggregateArgs>(args: Subset<T, BoletoAggregateArgs>): Prisma.PrismaPromise<GetBoletoAggregateType<T>>

    /**
     * Group by Boleto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoGroupByArgs} args - Group by arguments.
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
      T extends BoletoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoletoGroupByArgs['orderBy'] }
        : { orderBy?: BoletoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoletoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoletoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Boleto model
   */
  readonly fields: BoletoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Boleto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoletoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    viaje<T extends ViajeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViajeDefaultArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Boleto model
   */
  interface BoletoFieldRefs {
    readonly asiento: FieldRef<"Boleto", 'Int'>
    readonly metodoPago: FieldRef<"Boleto", 'String'>
    readonly pasajeroDni: FieldRef<"Boleto", 'String'>
    readonly estado: FieldRef<"Boleto", 'BoletoEstado'>
    readonly pasajeroNombres: FieldRef<"Boleto", 'String'>
    readonly pasajeroApellidos: FieldRef<"Boleto", 'String'>
    readonly usuarioId: FieldRef<"Boleto", 'String'>
    readonly codigo: FieldRef<"Boleto", 'String'>
    readonly destino: FieldRef<"Boleto", 'String'>
    readonly fechaRegistro: FieldRef<"Boleto", 'DateTime'>
    readonly id: FieldRef<"Boleto", 'String'>
    readonly precio: FieldRef<"Boleto", 'Int'>
    readonly viajeId: FieldRef<"Boleto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Boleto findUnique
   */
  export type BoletoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter, which Boleto to fetch.
     */
    where: BoletoWhereUniqueInput
  }

  /**
   * Boleto findUniqueOrThrow
   */
  export type BoletoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter, which Boleto to fetch.
     */
    where: BoletoWhereUniqueInput
  }

  /**
   * Boleto findFirst
   */
  export type BoletoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter, which Boleto to fetch.
     */
    where?: BoletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boletos to fetch.
     */
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boletos.
     */
    cursor?: BoletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boletos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boletos.
     */
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * Boleto findFirstOrThrow
   */
  export type BoletoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter, which Boleto to fetch.
     */
    where?: BoletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boletos to fetch.
     */
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boletos.
     */
    cursor?: BoletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boletos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boletos.
     */
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * Boleto findMany
   */
  export type BoletoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter, which Boletos to fetch.
     */
    where?: BoletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boletos to fetch.
     */
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boletos.
     */
    cursor?: BoletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boletos.
     */
    skip?: number
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * Boleto create
   */
  export type BoletoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * The data needed to create a Boleto.
     */
    data: XOR<BoletoCreateInput, BoletoUncheckedCreateInput>
  }

  /**
   * Boleto createMany
   */
  export type BoletoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boletos.
     */
    data: BoletoCreateManyInput | BoletoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Boleto createManyAndReturn
   */
  export type BoletoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * The data used to create many Boletos.
     */
    data: BoletoCreateManyInput | BoletoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Boleto update
   */
  export type BoletoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * The data needed to update a Boleto.
     */
    data: XOR<BoletoUpdateInput, BoletoUncheckedUpdateInput>
    /**
     * Choose, which Boleto to update.
     */
    where: BoletoWhereUniqueInput
  }

  /**
   * Boleto updateMany
   */
  export type BoletoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boletos.
     */
    data: XOR<BoletoUpdateManyMutationInput, BoletoUncheckedUpdateManyInput>
    /**
     * Filter which Boletos to update
     */
    where?: BoletoWhereInput
    /**
     * Limit how many Boletos to update.
     */
    limit?: number
  }

  /**
   * Boleto updateManyAndReturn
   */
  export type BoletoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * The data used to update Boletos.
     */
    data: XOR<BoletoUpdateManyMutationInput, BoletoUncheckedUpdateManyInput>
    /**
     * Filter which Boletos to update
     */
    where?: BoletoWhereInput
    /**
     * Limit how many Boletos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Boleto upsert
   */
  export type BoletoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * The filter to search for the Boleto to update in case it exists.
     */
    where: BoletoWhereUniqueInput
    /**
     * In case the Boleto found by the `where` argument doesn't exist, create a new Boleto with this data.
     */
    create: XOR<BoletoCreateInput, BoletoUncheckedCreateInput>
    /**
     * In case the Boleto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoletoUpdateInput, BoletoUncheckedUpdateInput>
  }

  /**
   * Boleto delete
   */
  export type BoletoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter which Boleto to delete.
     */
    where: BoletoWhereUniqueInput
  }

  /**
   * Boleto deleteMany
   */
  export type BoletoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boletos to delete
     */
    where?: BoletoWhereInput
    /**
     * Limit how many Boletos to delete.
     */
    limit?: number
  }

  /**
   * Boleto without action
   */
  export type BoletoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
  }


  /**
   * Model Bus
   */

  export type AggregateBus = {
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  export type BusAvgAggregateOutputType = {
    asientos: number | null
  }

  export type BusSumAggregateOutputType = {
    asientos: number | null
  }

  export type BusMinAggregateOutputType = {
    id: string | null
    asientos: number | null
    fechaRegistro: Date | null
    foto: string | null
    modelo: string | null
    placa: string | null
  }

  export type BusMaxAggregateOutputType = {
    id: string | null
    asientos: number | null
    fechaRegistro: Date | null
    foto: string | null
    modelo: string | null
    placa: string | null
  }

  export type BusCountAggregateOutputType = {
    id: number
    asientos: number
    fechaRegistro: number
    foto: number
    modelo: number
    placa: number
    _all: number
  }


  export type BusAvgAggregateInputType = {
    asientos?: true
  }

  export type BusSumAggregateInputType = {
    asientos?: true
  }

  export type BusMinAggregateInputType = {
    id?: true
    asientos?: true
    fechaRegistro?: true
    foto?: true
    modelo?: true
    placa?: true
  }

  export type BusMaxAggregateInputType = {
    id?: true
    asientos?: true
    fechaRegistro?: true
    foto?: true
    modelo?: true
    placa?: true
  }

  export type BusCountAggregateInputType = {
    id?: true
    asientos?: true
    fechaRegistro?: true
    foto?: true
    modelo?: true
    placa?: true
    _all?: true
  }

  export type BusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bus to aggregate.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buses
    **/
    _count?: true | BusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusMaxAggregateInputType
  }

  export type GetBusAggregateType<T extends BusAggregateArgs> = {
        [P in keyof T & keyof AggregateBus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBus[P]>
      : GetScalarType<T[P], AggregateBus[P]>
  }




  export type BusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
    orderBy?: BusOrderByWithAggregationInput | BusOrderByWithAggregationInput[]
    by: BusScalarFieldEnum[] | BusScalarFieldEnum
    having?: BusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusCountAggregateInputType | true
    _avg?: BusAvgAggregateInputType
    _sum?: BusSumAggregateInputType
    _min?: BusMinAggregateInputType
    _max?: BusMaxAggregateInputType
  }

  export type BusGroupByOutputType = {
    id: string
    asientos: number
    fechaRegistro: Date
    foto: string
    modelo: string
    placa: string
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  type GetBusGroupByPayload<T extends BusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusGroupByOutputType[P]>
            : GetScalarType<T[P], BusGroupByOutputType[P]>
        }
      >
    >


  export type BusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asientos?: boolean
    fechaRegistro?: boolean
    foto?: boolean
    modelo?: boolean
    placa?: boolean
    viaje?: boolean | Bus$viajeArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>

  export type BusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asientos?: boolean
    fechaRegistro?: boolean
    foto?: boolean
    modelo?: boolean
    placa?: boolean
  }, ExtArgs["result"]["bus"]>

  export type BusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asientos?: boolean
    fechaRegistro?: boolean
    foto?: boolean
    modelo?: boolean
    placa?: boolean
  }, ExtArgs["result"]["bus"]>

  export type BusSelectScalar = {
    id?: boolean
    asientos?: boolean
    fechaRegistro?: boolean
    foto?: boolean
    modelo?: boolean
    placa?: boolean
  }

  export type BusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "asientos" | "fechaRegistro" | "foto" | "modelo" | "placa", ExtArgs["result"]["bus"]>
  export type BusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viaje?: boolean | Bus$viajeArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bus"
    objects: {
      viaje: Prisma.$ViajePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      asientos: number
      fechaRegistro: Date
      foto: string
      modelo: string
      placa: string
    }, ExtArgs["result"]["bus"]>
    composites: {}
  }

  type BusGetPayload<S extends boolean | null | undefined | BusDefaultArgs> = $Result.GetResult<Prisma.$BusPayload, S>

  type BusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusCountAggregateInputType | true
    }

  export interface BusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bus'], meta: { name: 'Bus' } }
    /**
     * Find zero or one Bus that matches the filter.
     * @param {BusFindUniqueArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusFindUniqueArgs>(args: SelectSubset<T, BusFindUniqueArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusFindUniqueOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusFindUniqueOrThrowArgs>(args: SelectSubset<T, BusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusFindFirstArgs>(args?: SelectSubset<T, BusFindFirstArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusFindFirstOrThrowArgs>(args?: SelectSubset<T, BusFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buses
     * const buses = await prisma.bus.findMany()
     * 
     * // Get first 10 Buses
     * const buses = await prisma.bus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const busWithIdOnly = await prisma.bus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusFindManyArgs>(args?: SelectSubset<T, BusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bus.
     * @param {BusCreateArgs} args - Arguments to create a Bus.
     * @example
     * // Create one Bus
     * const Bus = await prisma.bus.create({
     *   data: {
     *     // ... data to create a Bus
     *   }
     * })
     * 
     */
    create<T extends BusCreateArgs>(args: SelectSubset<T, BusCreateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buses.
     * @param {BusCreateManyArgs} args - Arguments to create many Buses.
     * @example
     * // Create many Buses
     * const bus = await prisma.bus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusCreateManyArgs>(args?: SelectSubset<T, BusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Buses and returns the data saved in the database.
     * @param {BusCreateManyAndReturnArgs} args - Arguments to create many Buses.
     * @example
     * // Create many Buses
     * const bus = await prisma.bus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Buses and only return the `id`
     * const busWithIdOnly = await prisma.bus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusCreateManyAndReturnArgs>(args?: SelectSubset<T, BusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bus.
     * @param {BusDeleteArgs} args - Arguments to delete one Bus.
     * @example
     * // Delete one Bus
     * const Bus = await prisma.bus.delete({
     *   where: {
     *     // ... filter to delete one Bus
     *   }
     * })
     * 
     */
    delete<T extends BusDeleteArgs>(args: SelectSubset<T, BusDeleteArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bus.
     * @param {BusUpdateArgs} args - Arguments to update one Bus.
     * @example
     * // Update one Bus
     * const bus = await prisma.bus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusUpdateArgs>(args: SelectSubset<T, BusUpdateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buses.
     * @param {BusDeleteManyArgs} args - Arguments to filter Buses to delete.
     * @example
     * // Delete a few Buses
     * const { count } = await prisma.bus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusDeleteManyArgs>(args?: SelectSubset<T, BusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buses
     * const bus = await prisma.bus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusUpdateManyArgs>(args: SelectSubset<T, BusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buses and returns the data updated in the database.
     * @param {BusUpdateManyAndReturnArgs} args - Arguments to update many Buses.
     * @example
     * // Update many Buses
     * const bus = await prisma.bus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Buses and only return the `id`
     * const busWithIdOnly = await prisma.bus.updateManyAndReturn({
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
    updateManyAndReturn<T extends BusUpdateManyAndReturnArgs>(args: SelectSubset<T, BusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bus.
     * @param {BusUpsertArgs} args - Arguments to update or create a Bus.
     * @example
     * // Update or create a Bus
     * const bus = await prisma.bus.upsert({
     *   create: {
     *     // ... data to create a Bus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bus we want to update
     *   }
     * })
     */
    upsert<T extends BusUpsertArgs>(args: SelectSubset<T, BusUpsertArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusCountArgs} args - Arguments to filter Buses to count.
     * @example
     * // Count the number of Buses
     * const count = await prisma.bus.count({
     *   where: {
     *     // ... the filter for the Buses we want to count
     *   }
     * })
    **/
    count<T extends BusCountArgs>(
      args?: Subset<T, BusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusAggregateArgs>(args: Subset<T, BusAggregateArgs>): Prisma.PrismaPromise<GetBusAggregateType<T>>

    /**
     * Group by Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusGroupByArgs} args - Group by arguments.
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
      T extends BusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusGroupByArgs['orderBy'] }
        : { orderBy?: BusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bus model
   */
  readonly fields: BusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    viaje<T extends Bus$viajeArgs<ExtArgs> = {}>(args?: Subset<T, Bus$viajeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Bus model
   */
  interface BusFieldRefs {
    readonly id: FieldRef<"Bus", 'String'>
    readonly asientos: FieldRef<"Bus", 'Int'>
    readonly fechaRegistro: FieldRef<"Bus", 'DateTime'>
    readonly foto: FieldRef<"Bus", 'String'>
    readonly modelo: FieldRef<"Bus", 'String'>
    readonly placa: FieldRef<"Bus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bus findUnique
   */
  export type BusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findUniqueOrThrow
   */
  export type BusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findFirst
   */
  export type BusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findFirstOrThrow
   */
  export type BusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findMany
   */
  export type BusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Buses to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus create
   */
  export type BusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to create a Bus.
     */
    data: XOR<BusCreateInput, BusUncheckedCreateInput>
  }

  /**
   * Bus createMany
   */
  export type BusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buses.
     */
    data: BusCreateManyInput | BusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bus createManyAndReturn
   */
  export type BusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * The data used to create many Buses.
     */
    data: BusCreateManyInput | BusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bus update
   */
  export type BusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to update a Bus.
     */
    data: XOR<BusUpdateInput, BusUncheckedUpdateInput>
    /**
     * Choose, which Bus to update.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus updateMany
   */
  export type BusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buses.
     */
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyInput>
    /**
     * Filter which Buses to update
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to update.
     */
    limit?: number
  }

  /**
   * Bus updateManyAndReturn
   */
  export type BusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * The data used to update Buses.
     */
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyInput>
    /**
     * Filter which Buses to update
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to update.
     */
    limit?: number
  }

  /**
   * Bus upsert
   */
  export type BusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The filter to search for the Bus to update in case it exists.
     */
    where: BusWhereUniqueInput
    /**
     * In case the Bus found by the `where` argument doesn't exist, create a new Bus with this data.
     */
    create: XOR<BusCreateInput, BusUncheckedCreateInput>
    /**
     * In case the Bus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusUpdateInput, BusUncheckedUpdateInput>
  }

  /**
   * Bus delete
   */
  export type BusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter which Bus to delete.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus deleteMany
   */
  export type BusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buses to delete
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to delete.
     */
    limit?: number
  }

  /**
   * Bus.viaje
   */
  export type Bus$viajeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    where?: ViajeWhereInput
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    cursor?: ViajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Bus without action
   */
  export type BusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
  }


  /**
   * Model Conductor
   */

  export type AggregateConductor = {
    _count: ConductorCountAggregateOutputType | null
    _min: ConductorMinAggregateOutputType | null
    _max: ConductorMaxAggregateOutputType | null
  }

  export type ConductorMinAggregateOutputType = {
    claseLicencia: string | null
    conductorDni: string | null
    nombres: string | null
    apellidos: string | null
    disponibilidad: boolean | null
    foto: string | null
    id: string | null
    numeroLicencia: string | null
    telefono: string | null
    viajeId: string | null
  }

  export type ConductorMaxAggregateOutputType = {
    claseLicencia: string | null
    conductorDni: string | null
    nombres: string | null
    apellidos: string | null
    disponibilidad: boolean | null
    foto: string | null
    id: string | null
    numeroLicencia: string | null
    telefono: string | null
    viajeId: string | null
  }

  export type ConductorCountAggregateOutputType = {
    claseLicencia: number
    conductorDni: number
    nombres: number
    apellidos: number
    disponibilidad: number
    foto: number
    id: number
    numeroLicencia: number
    telefono: number
    viajeId: number
    _all: number
  }


  export type ConductorMinAggregateInputType = {
    claseLicencia?: true
    conductorDni?: true
    nombres?: true
    apellidos?: true
    disponibilidad?: true
    foto?: true
    id?: true
    numeroLicencia?: true
    telefono?: true
    viajeId?: true
  }

  export type ConductorMaxAggregateInputType = {
    claseLicencia?: true
    conductorDni?: true
    nombres?: true
    apellidos?: true
    disponibilidad?: true
    foto?: true
    id?: true
    numeroLicencia?: true
    telefono?: true
    viajeId?: true
  }

  export type ConductorCountAggregateInputType = {
    claseLicencia?: true
    conductorDni?: true
    nombres?: true
    apellidos?: true
    disponibilidad?: true
    foto?: true
    id?: true
    numeroLicencia?: true
    telefono?: true
    viajeId?: true
    _all?: true
  }

  export type ConductorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conductor to aggregate.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conductors
    **/
    _count?: true | ConductorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConductorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConductorMaxAggregateInputType
  }

  export type GetConductorAggregateType<T extends ConductorAggregateArgs> = {
        [P in keyof T & keyof AggregateConductor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConductor[P]>
      : GetScalarType<T[P], AggregateConductor[P]>
  }




  export type ConductorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConductorWhereInput
    orderBy?: ConductorOrderByWithAggregationInput | ConductorOrderByWithAggregationInput[]
    by: ConductorScalarFieldEnum[] | ConductorScalarFieldEnum
    having?: ConductorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConductorCountAggregateInputType | true
    _min?: ConductorMinAggregateInputType
    _max?: ConductorMaxAggregateInputType
  }

  export type ConductorGroupByOutputType = {
    claseLicencia: string
    conductorDni: string
    nombres: string
    apellidos: string
    disponibilidad: boolean
    foto: string
    id: string
    numeroLicencia: string
    telefono: string
    viajeId: string | null
    _count: ConductorCountAggregateOutputType | null
    _min: ConductorMinAggregateOutputType | null
    _max: ConductorMaxAggregateOutputType | null
  }

  type GetConductorGroupByPayload<T extends ConductorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConductorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConductorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConductorGroupByOutputType[P]>
            : GetScalarType<T[P], ConductorGroupByOutputType[P]>
        }
      >
    >


  export type ConductorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    claseLicencia?: boolean
    conductorDni?: boolean
    nombres?: boolean
    apellidos?: boolean
    disponibilidad?: boolean
    foto?: boolean
    id?: boolean
    numeroLicencia?: boolean
    telefono?: boolean
    viajeId?: boolean
    viaje?: boolean | Conductor$viajeArgs<ExtArgs>
  }, ExtArgs["result"]["conductor"]>

  export type ConductorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    claseLicencia?: boolean
    conductorDni?: boolean
    nombres?: boolean
    apellidos?: boolean
    disponibilidad?: boolean
    foto?: boolean
    id?: boolean
    numeroLicencia?: boolean
    telefono?: boolean
    viajeId?: boolean
    viaje?: boolean | Conductor$viajeArgs<ExtArgs>
  }, ExtArgs["result"]["conductor"]>

  export type ConductorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    claseLicencia?: boolean
    conductorDni?: boolean
    nombres?: boolean
    apellidos?: boolean
    disponibilidad?: boolean
    foto?: boolean
    id?: boolean
    numeroLicencia?: boolean
    telefono?: boolean
    viajeId?: boolean
    viaje?: boolean | Conductor$viajeArgs<ExtArgs>
  }, ExtArgs["result"]["conductor"]>

  export type ConductorSelectScalar = {
    claseLicencia?: boolean
    conductorDni?: boolean
    nombres?: boolean
    apellidos?: boolean
    disponibilidad?: boolean
    foto?: boolean
    id?: boolean
    numeroLicencia?: boolean
    telefono?: boolean
    viajeId?: boolean
  }

  export type ConductorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"claseLicencia" | "conductorDni" | "nombres" | "apellidos" | "disponibilidad" | "foto" | "id" | "numeroLicencia" | "telefono" | "viajeId", ExtArgs["result"]["conductor"]>
  export type ConductorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viaje?: boolean | Conductor$viajeArgs<ExtArgs>
  }
  export type ConductorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viaje?: boolean | Conductor$viajeArgs<ExtArgs>
  }
  export type ConductorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viaje?: boolean | Conductor$viajeArgs<ExtArgs>
  }

  export type $ConductorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conductor"
    objects: {
      viaje: Prisma.$ViajePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      claseLicencia: string
      conductorDni: string
      nombres: string
      apellidos: string
      disponibilidad: boolean
      foto: string
      id: string
      numeroLicencia: string
      telefono: string
      viajeId: string | null
    }, ExtArgs["result"]["conductor"]>
    composites: {}
  }

  type ConductorGetPayload<S extends boolean | null | undefined | ConductorDefaultArgs> = $Result.GetResult<Prisma.$ConductorPayload, S>

  type ConductorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConductorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConductorCountAggregateInputType | true
    }

  export interface ConductorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conductor'], meta: { name: 'Conductor' } }
    /**
     * Find zero or one Conductor that matches the filter.
     * @param {ConductorFindUniqueArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConductorFindUniqueArgs>(args: SelectSubset<T, ConductorFindUniqueArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conductor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConductorFindUniqueOrThrowArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConductorFindUniqueOrThrowArgs>(args: SelectSubset<T, ConductorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conductor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorFindFirstArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConductorFindFirstArgs>(args?: SelectSubset<T, ConductorFindFirstArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conductor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorFindFirstOrThrowArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConductorFindFirstOrThrowArgs>(args?: SelectSubset<T, ConductorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conductors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conductors
     * const conductors = await prisma.conductor.findMany()
     * 
     * // Get first 10 Conductors
     * const conductors = await prisma.conductor.findMany({ take: 10 })
     * 
     * // Only select the `claseLicencia`
     * const conductorWithClaseLicenciaOnly = await prisma.conductor.findMany({ select: { claseLicencia: true } })
     * 
     */
    findMany<T extends ConductorFindManyArgs>(args?: SelectSubset<T, ConductorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conductor.
     * @param {ConductorCreateArgs} args - Arguments to create a Conductor.
     * @example
     * // Create one Conductor
     * const Conductor = await prisma.conductor.create({
     *   data: {
     *     // ... data to create a Conductor
     *   }
     * })
     * 
     */
    create<T extends ConductorCreateArgs>(args: SelectSubset<T, ConductorCreateArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conductors.
     * @param {ConductorCreateManyArgs} args - Arguments to create many Conductors.
     * @example
     * // Create many Conductors
     * const conductor = await prisma.conductor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConductorCreateManyArgs>(args?: SelectSubset<T, ConductorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conductors and returns the data saved in the database.
     * @param {ConductorCreateManyAndReturnArgs} args - Arguments to create many Conductors.
     * @example
     * // Create many Conductors
     * const conductor = await prisma.conductor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conductors and only return the `claseLicencia`
     * const conductorWithClaseLicenciaOnly = await prisma.conductor.createManyAndReturn({
     *   select: { claseLicencia: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConductorCreateManyAndReturnArgs>(args?: SelectSubset<T, ConductorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conductor.
     * @param {ConductorDeleteArgs} args - Arguments to delete one Conductor.
     * @example
     * // Delete one Conductor
     * const Conductor = await prisma.conductor.delete({
     *   where: {
     *     // ... filter to delete one Conductor
     *   }
     * })
     * 
     */
    delete<T extends ConductorDeleteArgs>(args: SelectSubset<T, ConductorDeleteArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conductor.
     * @param {ConductorUpdateArgs} args - Arguments to update one Conductor.
     * @example
     * // Update one Conductor
     * const conductor = await prisma.conductor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConductorUpdateArgs>(args: SelectSubset<T, ConductorUpdateArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conductors.
     * @param {ConductorDeleteManyArgs} args - Arguments to filter Conductors to delete.
     * @example
     * // Delete a few Conductors
     * const { count } = await prisma.conductor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConductorDeleteManyArgs>(args?: SelectSubset<T, ConductorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conductors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conductors
     * const conductor = await prisma.conductor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConductorUpdateManyArgs>(args: SelectSubset<T, ConductorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conductors and returns the data updated in the database.
     * @param {ConductorUpdateManyAndReturnArgs} args - Arguments to update many Conductors.
     * @example
     * // Update many Conductors
     * const conductor = await prisma.conductor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conductors and only return the `claseLicencia`
     * const conductorWithClaseLicenciaOnly = await prisma.conductor.updateManyAndReturn({
     *   select: { claseLicencia: true },
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
    updateManyAndReturn<T extends ConductorUpdateManyAndReturnArgs>(args: SelectSubset<T, ConductorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conductor.
     * @param {ConductorUpsertArgs} args - Arguments to update or create a Conductor.
     * @example
     * // Update or create a Conductor
     * const conductor = await prisma.conductor.upsert({
     *   create: {
     *     // ... data to create a Conductor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conductor we want to update
     *   }
     * })
     */
    upsert<T extends ConductorUpsertArgs>(args: SelectSubset<T, ConductorUpsertArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conductors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorCountArgs} args - Arguments to filter Conductors to count.
     * @example
     * // Count the number of Conductors
     * const count = await prisma.conductor.count({
     *   where: {
     *     // ... the filter for the Conductors we want to count
     *   }
     * })
    **/
    count<T extends ConductorCountArgs>(
      args?: Subset<T, ConductorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConductorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conductor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConductorAggregateArgs>(args: Subset<T, ConductorAggregateArgs>): Prisma.PrismaPromise<GetConductorAggregateType<T>>

    /**
     * Group by Conductor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorGroupByArgs} args - Group by arguments.
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
      T extends ConductorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConductorGroupByArgs['orderBy'] }
        : { orderBy?: ConductorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConductorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConductorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conductor model
   */
  readonly fields: ConductorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conductor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConductorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    viaje<T extends Conductor$viajeArgs<ExtArgs> = {}>(args?: Subset<T, Conductor$viajeArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Conductor model
   */
  interface ConductorFieldRefs {
    readonly claseLicencia: FieldRef<"Conductor", 'String'>
    readonly conductorDni: FieldRef<"Conductor", 'String'>
    readonly nombres: FieldRef<"Conductor", 'String'>
    readonly apellidos: FieldRef<"Conductor", 'String'>
    readonly disponibilidad: FieldRef<"Conductor", 'Boolean'>
    readonly foto: FieldRef<"Conductor", 'String'>
    readonly id: FieldRef<"Conductor", 'String'>
    readonly numeroLicencia: FieldRef<"Conductor", 'String'>
    readonly telefono: FieldRef<"Conductor", 'String'>
    readonly viajeId: FieldRef<"Conductor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Conductor findUnique
   */
  export type ConductorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor findUniqueOrThrow
   */
  export type ConductorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor findFirst
   */
  export type ConductorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conductors.
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conductors.
     */
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Conductor findFirstOrThrow
   */
  export type ConductorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conductors.
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conductors.
     */
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Conductor findMany
   */
  export type ConductorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductors to fetch.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conductors.
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Conductor create
   */
  export type ConductorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * The data needed to create a Conductor.
     */
    data: XOR<ConductorCreateInput, ConductorUncheckedCreateInput>
  }

  /**
   * Conductor createMany
   */
  export type ConductorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conductors.
     */
    data: ConductorCreateManyInput | ConductorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conductor createManyAndReturn
   */
  export type ConductorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * The data used to create many Conductors.
     */
    data: ConductorCreateManyInput | ConductorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conductor update
   */
  export type ConductorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * The data needed to update a Conductor.
     */
    data: XOR<ConductorUpdateInput, ConductorUncheckedUpdateInput>
    /**
     * Choose, which Conductor to update.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor updateMany
   */
  export type ConductorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conductors.
     */
    data: XOR<ConductorUpdateManyMutationInput, ConductorUncheckedUpdateManyInput>
    /**
     * Filter which Conductors to update
     */
    where?: ConductorWhereInput
    /**
     * Limit how many Conductors to update.
     */
    limit?: number
  }

  /**
   * Conductor updateManyAndReturn
   */
  export type ConductorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * The data used to update Conductors.
     */
    data: XOR<ConductorUpdateManyMutationInput, ConductorUncheckedUpdateManyInput>
    /**
     * Filter which Conductors to update
     */
    where?: ConductorWhereInput
    /**
     * Limit how many Conductors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conductor upsert
   */
  export type ConductorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * The filter to search for the Conductor to update in case it exists.
     */
    where: ConductorWhereUniqueInput
    /**
     * In case the Conductor found by the `where` argument doesn't exist, create a new Conductor with this data.
     */
    create: XOR<ConductorCreateInput, ConductorUncheckedCreateInput>
    /**
     * In case the Conductor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConductorUpdateInput, ConductorUncheckedUpdateInput>
  }

  /**
   * Conductor delete
   */
  export type ConductorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter which Conductor to delete.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor deleteMany
   */
  export type ConductorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conductors to delete
     */
    where?: ConductorWhereInput
    /**
     * Limit how many Conductors to delete.
     */
    limit?: number
  }

  /**
   * Conductor.viaje
   */
  export type Conductor$viajeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    where?: ViajeWhereInput
  }

  /**
   * Conductor without action
   */
  export type ConductorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
  }


  /**
   * Model Encomienda
   */

  export type AggregateEncomienda = {
    _count: EncomiendaCountAggregateOutputType | null
    _avg: EncomiendaAvgAggregateOutputType | null
    _sum: EncomiendaSumAggregateOutputType | null
    _min: EncomiendaMinAggregateOutputType | null
    _max: EncomiendaMaxAggregateOutputType | null
  }

  export type EncomiendaAvgAggregateOutputType = {
    numero: number | null
    precio: number | null
  }

  export type EncomiendaSumAggregateOutputType = {
    numero: number | null
    precio: number | null
  }

  export type EncomiendaMinAggregateOutputType = {
    destino: string | null
    numero: number | null
    serie: $Enums.SerieEncomienda | null
    descripcion: string | null
    usuarioId: string | null
    codigoRastreo: string | null
    destinatarioDni: string | null
    destinatarioNombres: string | null
    destinatarioApellidos: string | null
    remitenteNombres: string | null
    remitenteDni: string | null
    remitenteApellidos: string | null
    factura: boolean | null
    razonSocial: string | null
    ruc: string | null
    fechaEnvio: Date | null
    fechaRecepcion: Date | null
    id: string | null
    pagado: boolean | null
    precio: number | null
    viajeId: string | null
  }

  export type EncomiendaMaxAggregateOutputType = {
    destino: string | null
    numero: number | null
    serie: $Enums.SerieEncomienda | null
    descripcion: string | null
    usuarioId: string | null
    codigoRastreo: string | null
    destinatarioDni: string | null
    destinatarioNombres: string | null
    destinatarioApellidos: string | null
    remitenteNombres: string | null
    remitenteDni: string | null
    remitenteApellidos: string | null
    factura: boolean | null
    razonSocial: string | null
    ruc: string | null
    fechaEnvio: Date | null
    fechaRecepcion: Date | null
    id: string | null
    pagado: boolean | null
    precio: number | null
    viajeId: string | null
  }

  export type EncomiendaCountAggregateOutputType = {
    destino: number
    numero: number
    serie: number
    descripcion: number
    usuarioId: number
    codigoRastreo: number
    destinatarioDni: number
    destinatarioNombres: number
    destinatarioApellidos: number
    remitenteNombres: number
    remitenteDni: number
    remitenteApellidos: number
    factura: number
    razonSocial: number
    ruc: number
    fechaEnvio: number
    fechaRecepcion: number
    id: number
    pagado: number
    precio: number
    viajeId: number
    _all: number
  }


  export type EncomiendaAvgAggregateInputType = {
    numero?: true
    precio?: true
  }

  export type EncomiendaSumAggregateInputType = {
    numero?: true
    precio?: true
  }

  export type EncomiendaMinAggregateInputType = {
    destino?: true
    numero?: true
    serie?: true
    descripcion?: true
    usuarioId?: true
    codigoRastreo?: true
    destinatarioDni?: true
    destinatarioNombres?: true
    destinatarioApellidos?: true
    remitenteNombres?: true
    remitenteDni?: true
    remitenteApellidos?: true
    factura?: true
    razonSocial?: true
    ruc?: true
    fechaEnvio?: true
    fechaRecepcion?: true
    id?: true
    pagado?: true
    precio?: true
    viajeId?: true
  }

  export type EncomiendaMaxAggregateInputType = {
    destino?: true
    numero?: true
    serie?: true
    descripcion?: true
    usuarioId?: true
    codigoRastreo?: true
    destinatarioDni?: true
    destinatarioNombres?: true
    destinatarioApellidos?: true
    remitenteNombres?: true
    remitenteDni?: true
    remitenteApellidos?: true
    factura?: true
    razonSocial?: true
    ruc?: true
    fechaEnvio?: true
    fechaRecepcion?: true
    id?: true
    pagado?: true
    precio?: true
    viajeId?: true
  }

  export type EncomiendaCountAggregateInputType = {
    destino?: true
    numero?: true
    serie?: true
    descripcion?: true
    usuarioId?: true
    codigoRastreo?: true
    destinatarioDni?: true
    destinatarioNombres?: true
    destinatarioApellidos?: true
    remitenteNombres?: true
    remitenteDni?: true
    remitenteApellidos?: true
    factura?: true
    razonSocial?: true
    ruc?: true
    fechaEnvio?: true
    fechaRecepcion?: true
    id?: true
    pagado?: true
    precio?: true
    viajeId?: true
    _all?: true
  }

  export type EncomiendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Encomienda to aggregate.
     */
    where?: EncomiendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encomiendas to fetch.
     */
    orderBy?: EncomiendaOrderByWithRelationInput | EncomiendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EncomiendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encomiendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encomiendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Encomiendas
    **/
    _count?: true | EncomiendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EncomiendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EncomiendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EncomiendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EncomiendaMaxAggregateInputType
  }

  export type GetEncomiendaAggregateType<T extends EncomiendaAggregateArgs> = {
        [P in keyof T & keyof AggregateEncomienda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEncomienda[P]>
      : GetScalarType<T[P], AggregateEncomienda[P]>
  }




  export type EncomiendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EncomiendaWhereInput
    orderBy?: EncomiendaOrderByWithAggregationInput | EncomiendaOrderByWithAggregationInput[]
    by: EncomiendaScalarFieldEnum[] | EncomiendaScalarFieldEnum
    having?: EncomiendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EncomiendaCountAggregateInputType | true
    _avg?: EncomiendaAvgAggregateInputType
    _sum?: EncomiendaSumAggregateInputType
    _min?: EncomiendaMinAggregateInputType
    _max?: EncomiendaMaxAggregateInputType
  }

  export type EncomiendaGroupByOutputType = {
    destino: string
    numero: number
    serie: $Enums.SerieEncomienda
    descripcion: string
    usuarioId: string
    codigoRastreo: string
    destinatarioDni: string
    destinatarioNombres: string
    destinatarioApellidos: string
    remitenteNombres: string
    remitenteDni: string
    remitenteApellidos: string
    factura: boolean
    razonSocial: string | null
    ruc: string | null
    fechaEnvio: Date
    fechaRecepcion: Date
    id: string
    pagado: boolean
    precio: number
    viajeId: string
    _count: EncomiendaCountAggregateOutputType | null
    _avg: EncomiendaAvgAggregateOutputType | null
    _sum: EncomiendaSumAggregateOutputType | null
    _min: EncomiendaMinAggregateOutputType | null
    _max: EncomiendaMaxAggregateOutputType | null
  }

  type GetEncomiendaGroupByPayload<T extends EncomiendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EncomiendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EncomiendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EncomiendaGroupByOutputType[P]>
            : GetScalarType<T[P], EncomiendaGroupByOutputType[P]>
        }
      >
    >


  export type EncomiendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    destino?: boolean
    numero?: boolean
    serie?: boolean
    descripcion?: boolean
    usuarioId?: boolean
    codigoRastreo?: boolean
    destinatarioDni?: boolean
    destinatarioNombres?: boolean
    destinatarioApellidos?: boolean
    remitenteNombres?: boolean
    remitenteDni?: boolean
    remitenteApellidos?: boolean
    factura?: boolean
    razonSocial?: boolean
    ruc?: boolean
    fechaEnvio?: boolean
    fechaRecepcion?: boolean
    id?: boolean
    pagado?: boolean
    precio?: boolean
    viajeId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["encomienda"]>

  export type EncomiendaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    destino?: boolean
    numero?: boolean
    serie?: boolean
    descripcion?: boolean
    usuarioId?: boolean
    codigoRastreo?: boolean
    destinatarioDni?: boolean
    destinatarioNombres?: boolean
    destinatarioApellidos?: boolean
    remitenteNombres?: boolean
    remitenteDni?: boolean
    remitenteApellidos?: boolean
    factura?: boolean
    razonSocial?: boolean
    ruc?: boolean
    fechaEnvio?: boolean
    fechaRecepcion?: boolean
    id?: boolean
    pagado?: boolean
    precio?: boolean
    viajeId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["encomienda"]>

  export type EncomiendaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    destino?: boolean
    numero?: boolean
    serie?: boolean
    descripcion?: boolean
    usuarioId?: boolean
    codigoRastreo?: boolean
    destinatarioDni?: boolean
    destinatarioNombres?: boolean
    destinatarioApellidos?: boolean
    remitenteNombres?: boolean
    remitenteDni?: boolean
    remitenteApellidos?: boolean
    factura?: boolean
    razonSocial?: boolean
    ruc?: boolean
    fechaEnvio?: boolean
    fechaRecepcion?: boolean
    id?: boolean
    pagado?: boolean
    precio?: boolean
    viajeId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["encomienda"]>

  export type EncomiendaSelectScalar = {
    destino?: boolean
    numero?: boolean
    serie?: boolean
    descripcion?: boolean
    usuarioId?: boolean
    codigoRastreo?: boolean
    destinatarioDni?: boolean
    destinatarioNombres?: boolean
    destinatarioApellidos?: boolean
    remitenteNombres?: boolean
    remitenteDni?: boolean
    remitenteApellidos?: boolean
    factura?: boolean
    razonSocial?: boolean
    ruc?: boolean
    fechaEnvio?: boolean
    fechaRecepcion?: boolean
    id?: boolean
    pagado?: boolean
    precio?: boolean
    viajeId?: boolean
  }

  export type EncomiendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"destino" | "numero" | "serie" | "descripcion" | "usuarioId" | "codigoRastreo" | "destinatarioDni" | "destinatarioNombres" | "destinatarioApellidos" | "remitenteNombres" | "remitenteDni" | "remitenteApellidos" | "factura" | "razonSocial" | "ruc" | "fechaEnvio" | "fechaRecepcion" | "id" | "pagado" | "precio" | "viajeId", ExtArgs["result"]["encomienda"]>
  export type EncomiendaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }
  export type EncomiendaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }
  export type EncomiendaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }

  export type $EncomiendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Encomienda"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      viaje: Prisma.$ViajePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      destino: string
      numero: number
      serie: $Enums.SerieEncomienda
      descripcion: string
      usuarioId: string
      codigoRastreo: string
      destinatarioDni: string
      destinatarioNombres: string
      destinatarioApellidos: string
      remitenteNombres: string
      remitenteDni: string
      remitenteApellidos: string
      factura: boolean
      razonSocial: string | null
      ruc: string | null
      fechaEnvio: Date
      fechaRecepcion: Date
      id: string
      pagado: boolean
      precio: number
      viajeId: string
    }, ExtArgs["result"]["encomienda"]>
    composites: {}
  }

  type EncomiendaGetPayload<S extends boolean | null | undefined | EncomiendaDefaultArgs> = $Result.GetResult<Prisma.$EncomiendaPayload, S>

  type EncomiendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EncomiendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EncomiendaCountAggregateInputType | true
    }

  export interface EncomiendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Encomienda'], meta: { name: 'Encomienda' } }
    /**
     * Find zero or one Encomienda that matches the filter.
     * @param {EncomiendaFindUniqueArgs} args - Arguments to find a Encomienda
     * @example
     * // Get one Encomienda
     * const encomienda = await prisma.encomienda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EncomiendaFindUniqueArgs>(args: SelectSubset<T, EncomiendaFindUniqueArgs<ExtArgs>>): Prisma__EncomiendaClient<$Result.GetResult<Prisma.$EncomiendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Encomienda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EncomiendaFindUniqueOrThrowArgs} args - Arguments to find a Encomienda
     * @example
     * // Get one Encomienda
     * const encomienda = await prisma.encomienda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EncomiendaFindUniqueOrThrowArgs>(args: SelectSubset<T, EncomiendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EncomiendaClient<$Result.GetResult<Prisma.$EncomiendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Encomienda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncomiendaFindFirstArgs} args - Arguments to find a Encomienda
     * @example
     * // Get one Encomienda
     * const encomienda = await prisma.encomienda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EncomiendaFindFirstArgs>(args?: SelectSubset<T, EncomiendaFindFirstArgs<ExtArgs>>): Prisma__EncomiendaClient<$Result.GetResult<Prisma.$EncomiendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Encomienda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncomiendaFindFirstOrThrowArgs} args - Arguments to find a Encomienda
     * @example
     * // Get one Encomienda
     * const encomienda = await prisma.encomienda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EncomiendaFindFirstOrThrowArgs>(args?: SelectSubset<T, EncomiendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EncomiendaClient<$Result.GetResult<Prisma.$EncomiendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Encomiendas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncomiendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Encomiendas
     * const encomiendas = await prisma.encomienda.findMany()
     * 
     * // Get first 10 Encomiendas
     * const encomiendas = await prisma.encomienda.findMany({ take: 10 })
     * 
     * // Only select the `destino`
     * const encomiendaWithDestinoOnly = await prisma.encomienda.findMany({ select: { destino: true } })
     * 
     */
    findMany<T extends EncomiendaFindManyArgs>(args?: SelectSubset<T, EncomiendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncomiendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Encomienda.
     * @param {EncomiendaCreateArgs} args - Arguments to create a Encomienda.
     * @example
     * // Create one Encomienda
     * const Encomienda = await prisma.encomienda.create({
     *   data: {
     *     // ... data to create a Encomienda
     *   }
     * })
     * 
     */
    create<T extends EncomiendaCreateArgs>(args: SelectSubset<T, EncomiendaCreateArgs<ExtArgs>>): Prisma__EncomiendaClient<$Result.GetResult<Prisma.$EncomiendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Encomiendas.
     * @param {EncomiendaCreateManyArgs} args - Arguments to create many Encomiendas.
     * @example
     * // Create many Encomiendas
     * const encomienda = await prisma.encomienda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EncomiendaCreateManyArgs>(args?: SelectSubset<T, EncomiendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Encomiendas and returns the data saved in the database.
     * @param {EncomiendaCreateManyAndReturnArgs} args - Arguments to create many Encomiendas.
     * @example
     * // Create many Encomiendas
     * const encomienda = await prisma.encomienda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Encomiendas and only return the `destino`
     * const encomiendaWithDestinoOnly = await prisma.encomienda.createManyAndReturn({
     *   select: { destino: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EncomiendaCreateManyAndReturnArgs>(args?: SelectSubset<T, EncomiendaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncomiendaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Encomienda.
     * @param {EncomiendaDeleteArgs} args - Arguments to delete one Encomienda.
     * @example
     * // Delete one Encomienda
     * const Encomienda = await prisma.encomienda.delete({
     *   where: {
     *     // ... filter to delete one Encomienda
     *   }
     * })
     * 
     */
    delete<T extends EncomiendaDeleteArgs>(args: SelectSubset<T, EncomiendaDeleteArgs<ExtArgs>>): Prisma__EncomiendaClient<$Result.GetResult<Prisma.$EncomiendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Encomienda.
     * @param {EncomiendaUpdateArgs} args - Arguments to update one Encomienda.
     * @example
     * // Update one Encomienda
     * const encomienda = await prisma.encomienda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EncomiendaUpdateArgs>(args: SelectSubset<T, EncomiendaUpdateArgs<ExtArgs>>): Prisma__EncomiendaClient<$Result.GetResult<Prisma.$EncomiendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Encomiendas.
     * @param {EncomiendaDeleteManyArgs} args - Arguments to filter Encomiendas to delete.
     * @example
     * // Delete a few Encomiendas
     * const { count } = await prisma.encomienda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EncomiendaDeleteManyArgs>(args?: SelectSubset<T, EncomiendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Encomiendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncomiendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Encomiendas
     * const encomienda = await prisma.encomienda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EncomiendaUpdateManyArgs>(args: SelectSubset<T, EncomiendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Encomiendas and returns the data updated in the database.
     * @param {EncomiendaUpdateManyAndReturnArgs} args - Arguments to update many Encomiendas.
     * @example
     * // Update many Encomiendas
     * const encomienda = await prisma.encomienda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Encomiendas and only return the `destino`
     * const encomiendaWithDestinoOnly = await prisma.encomienda.updateManyAndReturn({
     *   select: { destino: true },
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
    updateManyAndReturn<T extends EncomiendaUpdateManyAndReturnArgs>(args: SelectSubset<T, EncomiendaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncomiendaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Encomienda.
     * @param {EncomiendaUpsertArgs} args - Arguments to update or create a Encomienda.
     * @example
     * // Update or create a Encomienda
     * const encomienda = await prisma.encomienda.upsert({
     *   create: {
     *     // ... data to create a Encomienda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Encomienda we want to update
     *   }
     * })
     */
    upsert<T extends EncomiendaUpsertArgs>(args: SelectSubset<T, EncomiendaUpsertArgs<ExtArgs>>): Prisma__EncomiendaClient<$Result.GetResult<Prisma.$EncomiendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Encomiendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncomiendaCountArgs} args - Arguments to filter Encomiendas to count.
     * @example
     * // Count the number of Encomiendas
     * const count = await prisma.encomienda.count({
     *   where: {
     *     // ... the filter for the Encomiendas we want to count
     *   }
     * })
    **/
    count<T extends EncomiendaCountArgs>(
      args?: Subset<T, EncomiendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EncomiendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Encomienda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncomiendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EncomiendaAggregateArgs>(args: Subset<T, EncomiendaAggregateArgs>): Prisma.PrismaPromise<GetEncomiendaAggregateType<T>>

    /**
     * Group by Encomienda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncomiendaGroupByArgs} args - Group by arguments.
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
      T extends EncomiendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EncomiendaGroupByArgs['orderBy'] }
        : { orderBy?: EncomiendaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EncomiendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEncomiendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Encomienda model
   */
  readonly fields: EncomiendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Encomienda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EncomiendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    viaje<T extends ViajeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViajeDefaultArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Encomienda model
   */
  interface EncomiendaFieldRefs {
    readonly destino: FieldRef<"Encomienda", 'String'>
    readonly numero: FieldRef<"Encomienda", 'Int'>
    readonly serie: FieldRef<"Encomienda", 'SerieEncomienda'>
    readonly descripcion: FieldRef<"Encomienda", 'String'>
    readonly usuarioId: FieldRef<"Encomienda", 'String'>
    readonly codigoRastreo: FieldRef<"Encomienda", 'String'>
    readonly destinatarioDni: FieldRef<"Encomienda", 'String'>
    readonly destinatarioNombres: FieldRef<"Encomienda", 'String'>
    readonly destinatarioApellidos: FieldRef<"Encomienda", 'String'>
    readonly remitenteNombres: FieldRef<"Encomienda", 'String'>
    readonly remitenteDni: FieldRef<"Encomienda", 'String'>
    readonly remitenteApellidos: FieldRef<"Encomienda", 'String'>
    readonly factura: FieldRef<"Encomienda", 'Boolean'>
    readonly razonSocial: FieldRef<"Encomienda", 'String'>
    readonly ruc: FieldRef<"Encomienda", 'String'>
    readonly fechaEnvio: FieldRef<"Encomienda", 'DateTime'>
    readonly fechaRecepcion: FieldRef<"Encomienda", 'DateTime'>
    readonly id: FieldRef<"Encomienda", 'String'>
    readonly pagado: FieldRef<"Encomienda", 'Boolean'>
    readonly precio: FieldRef<"Encomienda", 'Int'>
    readonly viajeId: FieldRef<"Encomienda", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Encomienda findUnique
   */
  export type EncomiendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encomienda
     */
    select?: EncomiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encomienda
     */
    omit?: EncomiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncomiendaInclude<ExtArgs> | null
    /**
     * Filter, which Encomienda to fetch.
     */
    where: EncomiendaWhereUniqueInput
  }

  /**
   * Encomienda findUniqueOrThrow
   */
  export type EncomiendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encomienda
     */
    select?: EncomiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encomienda
     */
    omit?: EncomiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncomiendaInclude<ExtArgs> | null
    /**
     * Filter, which Encomienda to fetch.
     */
    where: EncomiendaWhereUniqueInput
  }

  /**
   * Encomienda findFirst
   */
  export type EncomiendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encomienda
     */
    select?: EncomiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encomienda
     */
    omit?: EncomiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncomiendaInclude<ExtArgs> | null
    /**
     * Filter, which Encomienda to fetch.
     */
    where?: EncomiendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encomiendas to fetch.
     */
    orderBy?: EncomiendaOrderByWithRelationInput | EncomiendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Encomiendas.
     */
    cursor?: EncomiendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encomiendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encomiendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Encomiendas.
     */
    distinct?: EncomiendaScalarFieldEnum | EncomiendaScalarFieldEnum[]
  }

  /**
   * Encomienda findFirstOrThrow
   */
  export type EncomiendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encomienda
     */
    select?: EncomiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encomienda
     */
    omit?: EncomiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncomiendaInclude<ExtArgs> | null
    /**
     * Filter, which Encomienda to fetch.
     */
    where?: EncomiendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encomiendas to fetch.
     */
    orderBy?: EncomiendaOrderByWithRelationInput | EncomiendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Encomiendas.
     */
    cursor?: EncomiendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encomiendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encomiendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Encomiendas.
     */
    distinct?: EncomiendaScalarFieldEnum | EncomiendaScalarFieldEnum[]
  }

  /**
   * Encomienda findMany
   */
  export type EncomiendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encomienda
     */
    select?: EncomiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encomienda
     */
    omit?: EncomiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncomiendaInclude<ExtArgs> | null
    /**
     * Filter, which Encomiendas to fetch.
     */
    where?: EncomiendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encomiendas to fetch.
     */
    orderBy?: EncomiendaOrderByWithRelationInput | EncomiendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Encomiendas.
     */
    cursor?: EncomiendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encomiendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encomiendas.
     */
    skip?: number
    distinct?: EncomiendaScalarFieldEnum | EncomiendaScalarFieldEnum[]
  }

  /**
   * Encomienda create
   */
  export type EncomiendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encomienda
     */
    select?: EncomiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encomienda
     */
    omit?: EncomiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncomiendaInclude<ExtArgs> | null
    /**
     * The data needed to create a Encomienda.
     */
    data: XOR<EncomiendaCreateInput, EncomiendaUncheckedCreateInput>
  }

  /**
   * Encomienda createMany
   */
  export type EncomiendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Encomiendas.
     */
    data: EncomiendaCreateManyInput | EncomiendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Encomienda createManyAndReturn
   */
  export type EncomiendaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encomienda
     */
    select?: EncomiendaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Encomienda
     */
    omit?: EncomiendaOmit<ExtArgs> | null
    /**
     * The data used to create many Encomiendas.
     */
    data: EncomiendaCreateManyInput | EncomiendaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncomiendaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Encomienda update
   */
  export type EncomiendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encomienda
     */
    select?: EncomiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encomienda
     */
    omit?: EncomiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncomiendaInclude<ExtArgs> | null
    /**
     * The data needed to update a Encomienda.
     */
    data: XOR<EncomiendaUpdateInput, EncomiendaUncheckedUpdateInput>
    /**
     * Choose, which Encomienda to update.
     */
    where: EncomiendaWhereUniqueInput
  }

  /**
   * Encomienda updateMany
   */
  export type EncomiendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Encomiendas.
     */
    data: XOR<EncomiendaUpdateManyMutationInput, EncomiendaUncheckedUpdateManyInput>
    /**
     * Filter which Encomiendas to update
     */
    where?: EncomiendaWhereInput
    /**
     * Limit how many Encomiendas to update.
     */
    limit?: number
  }

  /**
   * Encomienda updateManyAndReturn
   */
  export type EncomiendaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encomienda
     */
    select?: EncomiendaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Encomienda
     */
    omit?: EncomiendaOmit<ExtArgs> | null
    /**
     * The data used to update Encomiendas.
     */
    data: XOR<EncomiendaUpdateManyMutationInput, EncomiendaUncheckedUpdateManyInput>
    /**
     * Filter which Encomiendas to update
     */
    where?: EncomiendaWhereInput
    /**
     * Limit how many Encomiendas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncomiendaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Encomienda upsert
   */
  export type EncomiendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encomienda
     */
    select?: EncomiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encomienda
     */
    omit?: EncomiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncomiendaInclude<ExtArgs> | null
    /**
     * The filter to search for the Encomienda to update in case it exists.
     */
    where: EncomiendaWhereUniqueInput
    /**
     * In case the Encomienda found by the `where` argument doesn't exist, create a new Encomienda with this data.
     */
    create: XOR<EncomiendaCreateInput, EncomiendaUncheckedCreateInput>
    /**
     * In case the Encomienda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EncomiendaUpdateInput, EncomiendaUncheckedUpdateInput>
  }

  /**
   * Encomienda delete
   */
  export type EncomiendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encomienda
     */
    select?: EncomiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encomienda
     */
    omit?: EncomiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncomiendaInclude<ExtArgs> | null
    /**
     * Filter which Encomienda to delete.
     */
    where: EncomiendaWhereUniqueInput
  }

  /**
   * Encomienda deleteMany
   */
  export type EncomiendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Encomiendas to delete
     */
    where?: EncomiendaWhereInput
    /**
     * Limit how many Encomiendas to delete.
     */
    limit?: number
  }

  /**
   * Encomienda without action
   */
  export type EncomiendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encomienda
     */
    select?: EncomiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encomienda
     */
    omit?: EncomiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncomiendaInclude<ExtArgs> | null
  }


  /**
   * Model Ruta
   */

  export type AggregateRuta = {
    _count: RutaCountAggregateOutputType | null
    _avg: RutaAvgAggregateOutputType | null
    _sum: RutaSumAggregateOutputType | null
    _min: RutaMinAggregateOutputType | null
    _max: RutaMaxAggregateOutputType | null
  }

  export type RutaAvgAggregateOutputType = {
    duracionEstimada: number | null
  }

  export type RutaSumAggregateOutputType = {
    duracionEstimada: number | null
  }

  export type RutaMinAggregateOutputType = {
    ciudadDestino: string | null
    ciudadOrigen: string | null
    duracionEstimada: number | null
    id: string | null
    terminalDestino: string | null
    terminalOrigen: string | null
  }

  export type RutaMaxAggregateOutputType = {
    ciudadDestino: string | null
    ciudadOrigen: string | null
    duracionEstimada: number | null
    id: string | null
    terminalDestino: string | null
    terminalOrigen: string | null
  }

  export type RutaCountAggregateOutputType = {
    ciudadDestino: number
    ciudadOrigen: number
    duracionEstimada: number
    id: number
    terminalDestino: number
    terminalOrigen: number
    _all: number
  }


  export type RutaAvgAggregateInputType = {
    duracionEstimada?: true
  }

  export type RutaSumAggregateInputType = {
    duracionEstimada?: true
  }

  export type RutaMinAggregateInputType = {
    ciudadDestino?: true
    ciudadOrigen?: true
    duracionEstimada?: true
    id?: true
    terminalDestino?: true
    terminalOrigen?: true
  }

  export type RutaMaxAggregateInputType = {
    ciudadDestino?: true
    ciudadOrigen?: true
    duracionEstimada?: true
    id?: true
    terminalDestino?: true
    terminalOrigen?: true
  }

  export type RutaCountAggregateInputType = {
    ciudadDestino?: true
    ciudadOrigen?: true
    duracionEstimada?: true
    id?: true
    terminalDestino?: true
    terminalOrigen?: true
    _all?: true
  }

  export type RutaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ruta to aggregate.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rutas
    **/
    _count?: true | RutaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RutaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RutaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutaMaxAggregateInputType
  }

  export type GetRutaAggregateType<T extends RutaAggregateArgs> = {
        [P in keyof T & keyof AggregateRuta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRuta[P]>
      : GetScalarType<T[P], AggregateRuta[P]>
  }




  export type RutaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutaWhereInput
    orderBy?: RutaOrderByWithAggregationInput | RutaOrderByWithAggregationInput[]
    by: RutaScalarFieldEnum[] | RutaScalarFieldEnum
    having?: RutaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutaCountAggregateInputType | true
    _avg?: RutaAvgAggregateInputType
    _sum?: RutaSumAggregateInputType
    _min?: RutaMinAggregateInputType
    _max?: RutaMaxAggregateInputType
  }

  export type RutaGroupByOutputType = {
    ciudadDestino: string
    ciudadOrigen: string
    duracionEstimada: number
    id: string
    terminalDestino: string
    terminalOrigen: string
    _count: RutaCountAggregateOutputType | null
    _avg: RutaAvgAggregateOutputType | null
    _sum: RutaSumAggregateOutputType | null
    _min: RutaMinAggregateOutputType | null
    _max: RutaMaxAggregateOutputType | null
  }

  type GetRutaGroupByPayload<T extends RutaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutaGroupByOutputType[P]>
            : GetScalarType<T[P], RutaGroupByOutputType[P]>
        }
      >
    >


  export type RutaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ciudadDestino?: boolean
    ciudadOrigen?: boolean
    duracionEstimada?: boolean
    id?: boolean
    terminalDestino?: boolean
    terminalOrigen?: boolean
    viaje?: boolean | Ruta$viajeArgs<ExtArgs>
    _count?: boolean | RutaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruta"]>

  export type RutaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ciudadDestino?: boolean
    ciudadOrigen?: boolean
    duracionEstimada?: boolean
    id?: boolean
    terminalDestino?: boolean
    terminalOrigen?: boolean
  }, ExtArgs["result"]["ruta"]>

  export type RutaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ciudadDestino?: boolean
    ciudadOrigen?: boolean
    duracionEstimada?: boolean
    id?: boolean
    terminalDestino?: boolean
    terminalOrigen?: boolean
  }, ExtArgs["result"]["ruta"]>

  export type RutaSelectScalar = {
    ciudadDestino?: boolean
    ciudadOrigen?: boolean
    duracionEstimada?: boolean
    id?: boolean
    terminalDestino?: boolean
    terminalOrigen?: boolean
  }

  export type RutaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ciudadDestino" | "ciudadOrigen" | "duracionEstimada" | "id" | "terminalDestino" | "terminalOrigen", ExtArgs["result"]["ruta"]>
  export type RutaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viaje?: boolean | Ruta$viajeArgs<ExtArgs>
    _count?: boolean | RutaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RutaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RutaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RutaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ruta"
    objects: {
      viaje: Prisma.$ViajePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ciudadDestino: string
      ciudadOrigen: string
      duracionEstimada: number
      id: string
      terminalDestino: string
      terminalOrigen: string
    }, ExtArgs["result"]["ruta"]>
    composites: {}
  }

  type RutaGetPayload<S extends boolean | null | undefined | RutaDefaultArgs> = $Result.GetResult<Prisma.$RutaPayload, S>

  type RutaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RutaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RutaCountAggregateInputType | true
    }

  export interface RutaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ruta'], meta: { name: 'Ruta' } }
    /**
     * Find zero or one Ruta that matches the filter.
     * @param {RutaFindUniqueArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutaFindUniqueArgs>(args: SelectSubset<T, RutaFindUniqueArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ruta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RutaFindUniqueOrThrowArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutaFindUniqueOrThrowArgs>(args: SelectSubset<T, RutaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaFindFirstArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutaFindFirstArgs>(args?: SelectSubset<T, RutaFindFirstArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaFindFirstOrThrowArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutaFindFirstOrThrowArgs>(args?: SelectSubset<T, RutaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rutas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rutas
     * const rutas = await prisma.ruta.findMany()
     * 
     * // Get first 10 Rutas
     * const rutas = await prisma.ruta.findMany({ take: 10 })
     * 
     * // Only select the `ciudadDestino`
     * const rutaWithCiudadDestinoOnly = await prisma.ruta.findMany({ select: { ciudadDestino: true } })
     * 
     */
    findMany<T extends RutaFindManyArgs>(args?: SelectSubset<T, RutaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ruta.
     * @param {RutaCreateArgs} args - Arguments to create a Ruta.
     * @example
     * // Create one Ruta
     * const Ruta = await prisma.ruta.create({
     *   data: {
     *     // ... data to create a Ruta
     *   }
     * })
     * 
     */
    create<T extends RutaCreateArgs>(args: SelectSubset<T, RutaCreateArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rutas.
     * @param {RutaCreateManyArgs} args - Arguments to create many Rutas.
     * @example
     * // Create many Rutas
     * const ruta = await prisma.ruta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutaCreateManyArgs>(args?: SelectSubset<T, RutaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rutas and returns the data saved in the database.
     * @param {RutaCreateManyAndReturnArgs} args - Arguments to create many Rutas.
     * @example
     * // Create many Rutas
     * const ruta = await prisma.ruta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rutas and only return the `ciudadDestino`
     * const rutaWithCiudadDestinoOnly = await prisma.ruta.createManyAndReturn({
     *   select: { ciudadDestino: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RutaCreateManyAndReturnArgs>(args?: SelectSubset<T, RutaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ruta.
     * @param {RutaDeleteArgs} args - Arguments to delete one Ruta.
     * @example
     * // Delete one Ruta
     * const Ruta = await prisma.ruta.delete({
     *   where: {
     *     // ... filter to delete one Ruta
     *   }
     * })
     * 
     */
    delete<T extends RutaDeleteArgs>(args: SelectSubset<T, RutaDeleteArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ruta.
     * @param {RutaUpdateArgs} args - Arguments to update one Ruta.
     * @example
     * // Update one Ruta
     * const ruta = await prisma.ruta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutaUpdateArgs>(args: SelectSubset<T, RutaUpdateArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rutas.
     * @param {RutaDeleteManyArgs} args - Arguments to filter Rutas to delete.
     * @example
     * // Delete a few Rutas
     * const { count } = await prisma.ruta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutaDeleteManyArgs>(args?: SelectSubset<T, RutaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rutas
     * const ruta = await prisma.ruta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutaUpdateManyArgs>(args: SelectSubset<T, RutaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutas and returns the data updated in the database.
     * @param {RutaUpdateManyAndReturnArgs} args - Arguments to update many Rutas.
     * @example
     * // Update many Rutas
     * const ruta = await prisma.ruta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rutas and only return the `ciudadDestino`
     * const rutaWithCiudadDestinoOnly = await prisma.ruta.updateManyAndReturn({
     *   select: { ciudadDestino: true },
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
    updateManyAndReturn<T extends RutaUpdateManyAndReturnArgs>(args: SelectSubset<T, RutaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ruta.
     * @param {RutaUpsertArgs} args - Arguments to update or create a Ruta.
     * @example
     * // Update or create a Ruta
     * const ruta = await prisma.ruta.upsert({
     *   create: {
     *     // ... data to create a Ruta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ruta we want to update
     *   }
     * })
     */
    upsert<T extends RutaUpsertArgs>(args: SelectSubset<T, RutaUpsertArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaCountArgs} args - Arguments to filter Rutas to count.
     * @example
     * // Count the number of Rutas
     * const count = await prisma.ruta.count({
     *   where: {
     *     // ... the filter for the Rutas we want to count
     *   }
     * })
    **/
    count<T extends RutaCountArgs>(
      args?: Subset<T, RutaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ruta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RutaAggregateArgs>(args: Subset<T, RutaAggregateArgs>): Prisma.PrismaPromise<GetRutaAggregateType<T>>

    /**
     * Group by Ruta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaGroupByArgs} args - Group by arguments.
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
      T extends RutaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutaGroupByArgs['orderBy'] }
        : { orderBy?: RutaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RutaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ruta model
   */
  readonly fields: RutaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ruta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    viaje<T extends Ruta$viajeArgs<ExtArgs> = {}>(args?: Subset<T, Ruta$viajeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ruta model
   */
  interface RutaFieldRefs {
    readonly ciudadDestino: FieldRef<"Ruta", 'String'>
    readonly ciudadOrigen: FieldRef<"Ruta", 'String'>
    readonly duracionEstimada: FieldRef<"Ruta", 'Int'>
    readonly id: FieldRef<"Ruta", 'String'>
    readonly terminalDestino: FieldRef<"Ruta", 'String'>
    readonly terminalOrigen: FieldRef<"Ruta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ruta findUnique
   */
  export type RutaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta findUniqueOrThrow
   */
  export type RutaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta findFirst
   */
  export type RutaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutas.
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutas.
     */
    distinct?: RutaScalarFieldEnum | RutaScalarFieldEnum[]
  }

  /**
   * Ruta findFirstOrThrow
   */
  export type RutaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutas.
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutas.
     */
    distinct?: RutaScalarFieldEnum | RutaScalarFieldEnum[]
  }

  /**
   * Ruta findMany
   */
  export type RutaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Rutas to fetch.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rutas.
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    distinct?: RutaScalarFieldEnum | RutaScalarFieldEnum[]
  }

  /**
   * Ruta create
   */
  export type RutaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * The data needed to create a Ruta.
     */
    data: XOR<RutaCreateInput, RutaUncheckedCreateInput>
  }

  /**
   * Ruta createMany
   */
  export type RutaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rutas.
     */
    data: RutaCreateManyInput | RutaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ruta createManyAndReturn
   */
  export type RutaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * The data used to create many Rutas.
     */
    data: RutaCreateManyInput | RutaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ruta update
   */
  export type RutaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * The data needed to update a Ruta.
     */
    data: XOR<RutaUpdateInput, RutaUncheckedUpdateInput>
    /**
     * Choose, which Ruta to update.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta updateMany
   */
  export type RutaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rutas.
     */
    data: XOR<RutaUpdateManyMutationInput, RutaUncheckedUpdateManyInput>
    /**
     * Filter which Rutas to update
     */
    where?: RutaWhereInput
    /**
     * Limit how many Rutas to update.
     */
    limit?: number
  }

  /**
   * Ruta updateManyAndReturn
   */
  export type RutaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * The data used to update Rutas.
     */
    data: XOR<RutaUpdateManyMutationInput, RutaUncheckedUpdateManyInput>
    /**
     * Filter which Rutas to update
     */
    where?: RutaWhereInput
    /**
     * Limit how many Rutas to update.
     */
    limit?: number
  }

  /**
   * Ruta upsert
   */
  export type RutaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * The filter to search for the Ruta to update in case it exists.
     */
    where: RutaWhereUniqueInput
    /**
     * In case the Ruta found by the `where` argument doesn't exist, create a new Ruta with this data.
     */
    create: XOR<RutaCreateInput, RutaUncheckedCreateInput>
    /**
     * In case the Ruta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutaUpdateInput, RutaUncheckedUpdateInput>
  }

  /**
   * Ruta delete
   */
  export type RutaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter which Ruta to delete.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta deleteMany
   */
  export type RutaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutas to delete
     */
    where?: RutaWhereInput
    /**
     * Limit how many Rutas to delete.
     */
    limit?: number
  }

  /**
   * Ruta.viaje
   */
  export type Ruta$viajeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    where?: ViajeWhereInput
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    cursor?: ViajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Ruta without action
   */
  export type RutaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    username: string | null
    sedeId: string | null
    usuarioDni: string | null
    id: string | null
    foto: string | null
    telefono: string | null
    password: string | null
    nombres: string | null
    apellidos: string | null
    rol: $Enums.Rol | null
    isDeleted: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    username: string | null
    sedeId: string | null
    usuarioDni: string | null
    id: string | null
    foto: string | null
    telefono: string | null
    password: string | null
    nombres: string | null
    apellidos: string | null
    rol: $Enums.Rol | null
    isDeleted: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    username: number
    sedeId: number
    usuarioDni: number
    id: number
    foto: number
    telefono: number
    password: number
    nombres: number
    apellidos: number
    rol: number
    isDeleted: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    username?: true
    sedeId?: true
    usuarioDni?: true
    id?: true
    foto?: true
    telefono?: true
    password?: true
    nombres?: true
    apellidos?: true
    rol?: true
    isDeleted?: true
  }

  export type UsuarioMaxAggregateInputType = {
    username?: true
    sedeId?: true
    usuarioDni?: true
    id?: true
    foto?: true
    telefono?: true
    password?: true
    nombres?: true
    apellidos?: true
    rol?: true
    isDeleted?: true
  }

  export type UsuarioCountAggregateInputType = {
    username?: true
    sedeId?: true
    usuarioDni?: true
    id?: true
    foto?: true
    telefono?: true
    password?: true
    nombres?: true
    apellidos?: true
    rol?: true
    isDeleted?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    username: string
    sedeId: string
    usuarioDni: string
    id: string
    foto: string
    telefono: string
    password: string
    nombres: string
    apellidos: string
    rol: $Enums.Rol
    isDeleted: boolean
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    sedeId?: boolean
    usuarioDni?: boolean
    id?: boolean
    foto?: boolean
    telefono?: boolean
    password?: boolean
    nombres?: boolean
    apellidos?: boolean
    rol?: boolean
    isDeleted?: boolean
    sede?: boolean | SedeDefaultArgs<ExtArgs>
    encomienda?: boolean | Usuario$encomiendaArgs<ExtArgs>
    boleto?: boolean | Usuario$boletoArgs<ExtArgs>
    viaje?: boolean | Usuario$viajeArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    sedeId?: boolean
    usuarioDni?: boolean
    id?: boolean
    foto?: boolean
    telefono?: boolean
    password?: boolean
    nombres?: boolean
    apellidos?: boolean
    rol?: boolean
    isDeleted?: boolean
    sede?: boolean | SedeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    sedeId?: boolean
    usuarioDni?: boolean
    id?: boolean
    foto?: boolean
    telefono?: boolean
    password?: boolean
    nombres?: boolean
    apellidos?: boolean
    rol?: boolean
    isDeleted?: boolean
    sede?: boolean | SedeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    username?: boolean
    sedeId?: boolean
    usuarioDni?: boolean
    id?: boolean
    foto?: boolean
    telefono?: boolean
    password?: boolean
    nombres?: boolean
    apellidos?: boolean
    rol?: boolean
    isDeleted?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"username" | "sedeId" | "usuarioDni" | "id" | "foto" | "telefono" | "password" | "nombres" | "apellidos" | "rol" | "isDeleted", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sede?: boolean | SedeDefaultArgs<ExtArgs>
    encomienda?: boolean | Usuario$encomiendaArgs<ExtArgs>
    boleto?: boolean | Usuario$boletoArgs<ExtArgs>
    viaje?: boolean | Usuario$viajeArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sede?: boolean | SedeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sede?: boolean | SedeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      sede: Prisma.$SedePayload<ExtArgs>
      encomienda: Prisma.$EncomiendaPayload<ExtArgs>[]
      boleto: Prisma.$BoletoPayload<ExtArgs>[]
      viaje: Prisma.$ViajePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      username: string
      sedeId: string
      usuarioDni: string
      id: string
      foto: string
      telefono: string
      password: string
      nombres: string
      apellidos: string
      rol: $Enums.Rol
      isDeleted: boolean
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `username`
     * const usuarioWithUsernameOnly = await prisma.usuario.findMany({ select: { username: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `username`
     * const usuarioWithUsernameOnly = await prisma.usuario.createManyAndReturn({
     *   select: { username: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `username`
     * const usuarioWithUsernameOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { username: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sede<T extends SedeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SedeDefaultArgs<ExtArgs>>): Prisma__SedeClient<$Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    encomienda<T extends Usuario$encomiendaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$encomiendaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncomiendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    boleto<T extends Usuario$boletoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$boletoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viaje<T extends Usuario$viajeArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$viajeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly username: FieldRef<"Usuario", 'String'>
    readonly sedeId: FieldRef<"Usuario", 'String'>
    readonly usuarioDni: FieldRef<"Usuario", 'String'>
    readonly id: FieldRef<"Usuario", 'String'>
    readonly foto: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly nombres: FieldRef<"Usuario", 'String'>
    readonly apellidos: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly isDeleted: FieldRef<"Usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.encomienda
   */
  export type Usuario$encomiendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encomienda
     */
    select?: EncomiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encomienda
     */
    omit?: EncomiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncomiendaInclude<ExtArgs> | null
    where?: EncomiendaWhereInput
    orderBy?: EncomiendaOrderByWithRelationInput | EncomiendaOrderByWithRelationInput[]
    cursor?: EncomiendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EncomiendaScalarFieldEnum | EncomiendaScalarFieldEnum[]
  }

  /**
   * Usuario.boleto
   */
  export type Usuario$boletoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    where?: BoletoWhereInput
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    cursor?: BoletoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * Usuario.viaje
   */
  export type Usuario$viajeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    where?: ViajeWhereInput
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    cursor?: ViajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Viaje
   */

  export type AggregateViaje = {
    _count: ViajeCountAggregateOutputType | null
    _avg: ViajeAvgAggregateOutputType | null
    _sum: ViajeSumAggregateOutputType | null
    _min: ViajeMinAggregateOutputType | null
    _max: ViajeMaxAggregateOutputType | null
  }

  export type ViajeAvgAggregateOutputType = {
    tarifas: number | null
    tarifaGeneral: number | null
  }

  export type ViajeSumAggregateOutputType = {
    tarifas: number[]
    tarifaGeneral: number | null
  }

  export type ViajeMinAggregateOutputType = {
    busId: string | null
    usuarioId: string | null
    estado: $Enums.ViajeEstado | null
    salida: Date | null
    id: string | null
    rutaId: string | null
    tarifaGeneral: number | null
  }

  export type ViajeMaxAggregateOutputType = {
    busId: string | null
    usuarioId: string | null
    estado: $Enums.ViajeEstado | null
    salida: Date | null
    id: string | null
    rutaId: string | null
    tarifaGeneral: number | null
  }

  export type ViajeCountAggregateOutputType = {
    busId: number
    usuarioId: number
    estado: number
    salida: number
    id: number
    rutaId: number
    tarifas: number
    tarifaGeneral: number
    _all: number
  }


  export type ViajeAvgAggregateInputType = {
    tarifas?: true
    tarifaGeneral?: true
  }

  export type ViajeSumAggregateInputType = {
    tarifas?: true
    tarifaGeneral?: true
  }

  export type ViajeMinAggregateInputType = {
    busId?: true
    usuarioId?: true
    estado?: true
    salida?: true
    id?: true
    rutaId?: true
    tarifaGeneral?: true
  }

  export type ViajeMaxAggregateInputType = {
    busId?: true
    usuarioId?: true
    estado?: true
    salida?: true
    id?: true
    rutaId?: true
    tarifaGeneral?: true
  }

  export type ViajeCountAggregateInputType = {
    busId?: true
    usuarioId?: true
    estado?: true
    salida?: true
    id?: true
    rutaId?: true
    tarifas?: true
    tarifaGeneral?: true
    _all?: true
  }

  export type ViajeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viaje to aggregate.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Viajes
    **/
    _count?: true | ViajeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViajeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViajeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViajeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViajeMaxAggregateInputType
  }

  export type GetViajeAggregateType<T extends ViajeAggregateArgs> = {
        [P in keyof T & keyof AggregateViaje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViaje[P]>
      : GetScalarType<T[P], AggregateViaje[P]>
  }




  export type ViajeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajeWhereInput
    orderBy?: ViajeOrderByWithAggregationInput | ViajeOrderByWithAggregationInput[]
    by: ViajeScalarFieldEnum[] | ViajeScalarFieldEnum
    having?: ViajeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViajeCountAggregateInputType | true
    _avg?: ViajeAvgAggregateInputType
    _sum?: ViajeSumAggregateInputType
    _min?: ViajeMinAggregateInputType
    _max?: ViajeMaxAggregateInputType
  }

  export type ViajeGroupByOutputType = {
    busId: string
    usuarioId: string
    estado: $Enums.ViajeEstado
    salida: Date
    id: string
    rutaId: string
    tarifas: number[]
    tarifaGeneral: number
    _count: ViajeCountAggregateOutputType | null
    _avg: ViajeAvgAggregateOutputType | null
    _sum: ViajeSumAggregateOutputType | null
    _min: ViajeMinAggregateOutputType | null
    _max: ViajeMaxAggregateOutputType | null
  }

  type GetViajeGroupByPayload<T extends ViajeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViajeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViajeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViajeGroupByOutputType[P]>
            : GetScalarType<T[P], ViajeGroupByOutputType[P]>
        }
      >
    >


  export type ViajeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    busId?: boolean
    usuarioId?: boolean
    estado?: boolean
    salida?: boolean
    id?: boolean
    rutaId?: boolean
    tarifas?: boolean
    tarifaGeneral?: boolean
    boletos?: boolean | Viaje$boletosArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    conductores?: boolean | Viaje$conductoresArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    encomiendas?: boolean | Viaje$encomiendasArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    _count?: boolean | ViajeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viaje"]>

  export type ViajeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    busId?: boolean
    usuarioId?: boolean
    estado?: boolean
    salida?: boolean
    id?: boolean
    rutaId?: boolean
    tarifas?: boolean
    tarifaGeneral?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viaje"]>

  export type ViajeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    busId?: boolean
    usuarioId?: boolean
    estado?: boolean
    salida?: boolean
    id?: boolean
    rutaId?: boolean
    tarifas?: boolean
    tarifaGeneral?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viaje"]>

  export type ViajeSelectScalar = {
    busId?: boolean
    usuarioId?: boolean
    estado?: boolean
    salida?: boolean
    id?: boolean
    rutaId?: boolean
    tarifas?: boolean
    tarifaGeneral?: boolean
  }

  export type ViajeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"busId" | "usuarioId" | "estado" | "salida" | "id" | "rutaId" | "tarifas" | "tarifaGeneral", ExtArgs["result"]["viaje"]>
  export type ViajeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boletos?: boolean | Viaje$boletosArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    conductores?: boolean | Viaje$conductoresArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    encomiendas?: boolean | Viaje$encomiendasArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    _count?: boolean | ViajeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ViajeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
  }
  export type ViajeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
  }

  export type $ViajePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Viaje"
    objects: {
      boletos: Prisma.$BoletoPayload<ExtArgs>[]
      bus: Prisma.$BusPayload<ExtArgs>
      conductores: Prisma.$ConductorPayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      encomiendas: Prisma.$EncomiendaPayload<ExtArgs>[]
      ruta: Prisma.$RutaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      busId: string
      usuarioId: string
      estado: $Enums.ViajeEstado
      salida: Date
      id: string
      rutaId: string
      tarifas: number[]
      tarifaGeneral: number
    }, ExtArgs["result"]["viaje"]>
    composites: {}
  }

  type ViajeGetPayload<S extends boolean | null | undefined | ViajeDefaultArgs> = $Result.GetResult<Prisma.$ViajePayload, S>

  type ViajeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViajeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViajeCountAggregateInputType | true
    }

  export interface ViajeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Viaje'], meta: { name: 'Viaje' } }
    /**
     * Find zero or one Viaje that matches the filter.
     * @param {ViajeFindUniqueArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViajeFindUniqueArgs>(args: SelectSubset<T, ViajeFindUniqueArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Viaje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViajeFindUniqueOrThrowArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViajeFindUniqueOrThrowArgs>(args: SelectSubset<T, ViajeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viaje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeFindFirstArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViajeFindFirstArgs>(args?: SelectSubset<T, ViajeFindFirstArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viaje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeFindFirstOrThrowArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViajeFindFirstOrThrowArgs>(args?: SelectSubset<T, ViajeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Viajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Viajes
     * const viajes = await prisma.viaje.findMany()
     * 
     * // Get first 10 Viajes
     * const viajes = await prisma.viaje.findMany({ take: 10 })
     * 
     * // Only select the `busId`
     * const viajeWithBusIdOnly = await prisma.viaje.findMany({ select: { busId: true } })
     * 
     */
    findMany<T extends ViajeFindManyArgs>(args?: SelectSubset<T, ViajeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Viaje.
     * @param {ViajeCreateArgs} args - Arguments to create a Viaje.
     * @example
     * // Create one Viaje
     * const Viaje = await prisma.viaje.create({
     *   data: {
     *     // ... data to create a Viaje
     *   }
     * })
     * 
     */
    create<T extends ViajeCreateArgs>(args: SelectSubset<T, ViajeCreateArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Viajes.
     * @param {ViajeCreateManyArgs} args - Arguments to create many Viajes.
     * @example
     * // Create many Viajes
     * const viaje = await prisma.viaje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViajeCreateManyArgs>(args?: SelectSubset<T, ViajeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Viajes and returns the data saved in the database.
     * @param {ViajeCreateManyAndReturnArgs} args - Arguments to create many Viajes.
     * @example
     * // Create many Viajes
     * const viaje = await prisma.viaje.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Viajes and only return the `busId`
     * const viajeWithBusIdOnly = await prisma.viaje.createManyAndReturn({
     *   select: { busId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViajeCreateManyAndReturnArgs>(args?: SelectSubset<T, ViajeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Viaje.
     * @param {ViajeDeleteArgs} args - Arguments to delete one Viaje.
     * @example
     * // Delete one Viaje
     * const Viaje = await prisma.viaje.delete({
     *   where: {
     *     // ... filter to delete one Viaje
     *   }
     * })
     * 
     */
    delete<T extends ViajeDeleteArgs>(args: SelectSubset<T, ViajeDeleteArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Viaje.
     * @param {ViajeUpdateArgs} args - Arguments to update one Viaje.
     * @example
     * // Update one Viaje
     * const viaje = await prisma.viaje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViajeUpdateArgs>(args: SelectSubset<T, ViajeUpdateArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Viajes.
     * @param {ViajeDeleteManyArgs} args - Arguments to filter Viajes to delete.
     * @example
     * // Delete a few Viajes
     * const { count } = await prisma.viaje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViajeDeleteManyArgs>(args?: SelectSubset<T, ViajeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Viajes
     * const viaje = await prisma.viaje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViajeUpdateManyArgs>(args: SelectSubset<T, ViajeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viajes and returns the data updated in the database.
     * @param {ViajeUpdateManyAndReturnArgs} args - Arguments to update many Viajes.
     * @example
     * // Update many Viajes
     * const viaje = await prisma.viaje.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Viajes and only return the `busId`
     * const viajeWithBusIdOnly = await prisma.viaje.updateManyAndReturn({
     *   select: { busId: true },
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
    updateManyAndReturn<T extends ViajeUpdateManyAndReturnArgs>(args: SelectSubset<T, ViajeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Viaje.
     * @param {ViajeUpsertArgs} args - Arguments to update or create a Viaje.
     * @example
     * // Update or create a Viaje
     * const viaje = await prisma.viaje.upsert({
     *   create: {
     *     // ... data to create a Viaje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Viaje we want to update
     *   }
     * })
     */
    upsert<T extends ViajeUpsertArgs>(args: SelectSubset<T, ViajeUpsertArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Viajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeCountArgs} args - Arguments to filter Viajes to count.
     * @example
     * // Count the number of Viajes
     * const count = await prisma.viaje.count({
     *   where: {
     *     // ... the filter for the Viajes we want to count
     *   }
     * })
    **/
    count<T extends ViajeCountArgs>(
      args?: Subset<T, ViajeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViajeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Viaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViajeAggregateArgs>(args: Subset<T, ViajeAggregateArgs>): Prisma.PrismaPromise<GetViajeAggregateType<T>>

    /**
     * Group by Viaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeGroupByArgs} args - Group by arguments.
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
      T extends ViajeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViajeGroupByArgs['orderBy'] }
        : { orderBy?: ViajeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViajeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViajeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Viaje model
   */
  readonly fields: ViajeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Viaje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViajeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boletos<T extends Viaje$boletosArgs<ExtArgs> = {}>(args?: Subset<T, Viaje$boletosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conductores<T extends Viaje$conductoresArgs<ExtArgs> = {}>(args?: Subset<T, Viaje$conductoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    encomiendas<T extends Viaje$encomiendasArgs<ExtArgs> = {}>(args?: Subset<T, Viaje$encomiendasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncomiendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ruta<T extends RutaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RutaDefaultArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Viaje model
   */
  interface ViajeFieldRefs {
    readonly busId: FieldRef<"Viaje", 'String'>
    readonly usuarioId: FieldRef<"Viaje", 'String'>
    readonly estado: FieldRef<"Viaje", 'ViajeEstado'>
    readonly salida: FieldRef<"Viaje", 'DateTime'>
    readonly id: FieldRef<"Viaje", 'String'>
    readonly rutaId: FieldRef<"Viaje", 'String'>
    readonly tarifas: FieldRef<"Viaje", 'Int[]'>
    readonly tarifaGeneral: FieldRef<"Viaje", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Viaje findUnique
   */
  export type ViajeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje findUniqueOrThrow
   */
  export type ViajeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje findFirst
   */
  export type ViajeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viajes.
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viajes.
     */
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Viaje findFirstOrThrow
   */
  export type ViajeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viajes.
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viajes.
     */
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Viaje findMany
   */
  export type ViajeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viajes to fetch.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Viajes.
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Viaje create
   */
  export type ViajeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * The data needed to create a Viaje.
     */
    data: XOR<ViajeCreateInput, ViajeUncheckedCreateInput>
  }

  /**
   * Viaje createMany
   */
  export type ViajeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Viajes.
     */
    data: ViajeCreateManyInput | ViajeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Viaje createManyAndReturn
   */
  export type ViajeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * The data used to create many Viajes.
     */
    data: ViajeCreateManyInput | ViajeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Viaje update
   */
  export type ViajeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * The data needed to update a Viaje.
     */
    data: XOR<ViajeUpdateInput, ViajeUncheckedUpdateInput>
    /**
     * Choose, which Viaje to update.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje updateMany
   */
  export type ViajeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Viajes.
     */
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyInput>
    /**
     * Filter which Viajes to update
     */
    where?: ViajeWhereInput
    /**
     * Limit how many Viajes to update.
     */
    limit?: number
  }

  /**
   * Viaje updateManyAndReturn
   */
  export type ViajeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * The data used to update Viajes.
     */
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyInput>
    /**
     * Filter which Viajes to update
     */
    where?: ViajeWhereInput
    /**
     * Limit how many Viajes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Viaje upsert
   */
  export type ViajeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * The filter to search for the Viaje to update in case it exists.
     */
    where: ViajeWhereUniqueInput
    /**
     * In case the Viaje found by the `where` argument doesn't exist, create a new Viaje with this data.
     */
    create: XOR<ViajeCreateInput, ViajeUncheckedCreateInput>
    /**
     * In case the Viaje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViajeUpdateInput, ViajeUncheckedUpdateInput>
  }

  /**
   * Viaje delete
   */
  export type ViajeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter which Viaje to delete.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje deleteMany
   */
  export type ViajeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viajes to delete
     */
    where?: ViajeWhereInput
    /**
     * Limit how many Viajes to delete.
     */
    limit?: number
  }

  /**
   * Viaje.boletos
   */
  export type Viaje$boletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    where?: BoletoWhereInput
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    cursor?: BoletoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * Viaje.conductores
   */
  export type Viaje$conductoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    where?: ConductorWhereInput
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    cursor?: ConductorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Viaje.encomiendas
   */
  export type Viaje$encomiendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encomienda
     */
    select?: EncomiendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encomienda
     */
    omit?: EncomiendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncomiendaInclude<ExtArgs> | null
    where?: EncomiendaWhereInput
    orderBy?: EncomiendaOrderByWithRelationInput | EncomiendaOrderByWithRelationInput[]
    cursor?: EncomiendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EncomiendaScalarFieldEnum | EncomiendaScalarFieldEnum[]
  }

  /**
   * Viaje without action
   */
  export type ViajeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
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


  export const SedeScalarFieldEnum: {
    id: 'id',
    agenciaUbicacion: 'agenciaUbicacion',
    agencia: 'agencia',
    serieBoleto: 'serieBoleto',
    serieFactura: 'serieFactura',
    contadorBoletos: 'contadorBoletos',
    contadorFacturas: 'contadorFacturas'
  };

  export type SedeScalarFieldEnum = (typeof SedeScalarFieldEnum)[keyof typeof SedeScalarFieldEnum]


  export const BoletoScalarFieldEnum: {
    asiento: 'asiento',
    metodoPago: 'metodoPago',
    pasajeroDni: 'pasajeroDni',
    estado: 'estado',
    pasajeroNombres: 'pasajeroNombres',
    pasajeroApellidos: 'pasajeroApellidos',
    usuarioId: 'usuarioId',
    codigo: 'codigo',
    destino: 'destino',
    fechaRegistro: 'fechaRegistro',
    id: 'id',
    precio: 'precio',
    viajeId: 'viajeId'
  };

  export type BoletoScalarFieldEnum = (typeof BoletoScalarFieldEnum)[keyof typeof BoletoScalarFieldEnum]


  export const BusScalarFieldEnum: {
    id: 'id',
    asientos: 'asientos',
    fechaRegistro: 'fechaRegistro',
    foto: 'foto',
    modelo: 'modelo',
    placa: 'placa'
  };

  export type BusScalarFieldEnum = (typeof BusScalarFieldEnum)[keyof typeof BusScalarFieldEnum]


  export const ConductorScalarFieldEnum: {
    claseLicencia: 'claseLicencia',
    conductorDni: 'conductorDni',
    nombres: 'nombres',
    apellidos: 'apellidos',
    disponibilidad: 'disponibilidad',
    foto: 'foto',
    id: 'id',
    numeroLicencia: 'numeroLicencia',
    telefono: 'telefono',
    viajeId: 'viajeId'
  };

  export type ConductorScalarFieldEnum = (typeof ConductorScalarFieldEnum)[keyof typeof ConductorScalarFieldEnum]


  export const EncomiendaScalarFieldEnum: {
    destino: 'destino',
    numero: 'numero',
    serie: 'serie',
    descripcion: 'descripcion',
    usuarioId: 'usuarioId',
    codigoRastreo: 'codigoRastreo',
    destinatarioDni: 'destinatarioDni',
    destinatarioNombres: 'destinatarioNombres',
    destinatarioApellidos: 'destinatarioApellidos',
    remitenteNombres: 'remitenteNombres',
    remitenteDni: 'remitenteDni',
    remitenteApellidos: 'remitenteApellidos',
    factura: 'factura',
    razonSocial: 'razonSocial',
    ruc: 'ruc',
    fechaEnvio: 'fechaEnvio',
    fechaRecepcion: 'fechaRecepcion',
    id: 'id',
    pagado: 'pagado',
    precio: 'precio',
    viajeId: 'viajeId'
  };

  export type EncomiendaScalarFieldEnum = (typeof EncomiendaScalarFieldEnum)[keyof typeof EncomiendaScalarFieldEnum]


  export const RutaScalarFieldEnum: {
    ciudadDestino: 'ciudadDestino',
    ciudadOrigen: 'ciudadOrigen',
    duracionEstimada: 'duracionEstimada',
    id: 'id',
    terminalDestino: 'terminalDestino',
    terminalOrigen: 'terminalOrigen'
  };

  export type RutaScalarFieldEnum = (typeof RutaScalarFieldEnum)[keyof typeof RutaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    username: 'username',
    sedeId: 'sedeId',
    usuarioDni: 'usuarioDni',
    id: 'id',
    foto: 'foto',
    telefono: 'telefono',
    password: 'password',
    nombres: 'nombres',
    apellidos: 'apellidos',
    rol: 'rol',
    isDeleted: 'isDeleted'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ViajeScalarFieldEnum: {
    busId: 'busId',
    usuarioId: 'usuarioId',
    estado: 'estado',
    salida: 'salida',
    id: 'id',
    rutaId: 'rutaId',
    tarifas: 'tarifas',
    tarifaGeneral: 'tarifaGeneral'
  };

  export type ViajeScalarFieldEnum = (typeof ViajeScalarFieldEnum)[keyof typeof ViajeScalarFieldEnum]


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
   * Reference to a field of type 'SerieBoleto'
   */
  export type EnumSerieBoletoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SerieBoleto'>
    


  /**
   * Reference to a field of type 'SerieBoleto[]'
   */
  export type ListEnumSerieBoletoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SerieBoleto[]'>
    


  /**
   * Reference to a field of type 'SerieFactura'
   */
  export type EnumSerieFacturaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SerieFactura'>
    


  /**
   * Reference to a field of type 'SerieFactura[]'
   */
  export type ListEnumSerieFacturaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SerieFactura[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BoletoEstado'
   */
  export type EnumBoletoEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BoletoEstado'>
    


  /**
   * Reference to a field of type 'BoletoEstado[]'
   */
  export type ListEnumBoletoEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BoletoEstado[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SerieEncomienda'
   */
  export type EnumSerieEncomiendaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SerieEncomienda'>
    


  /**
   * Reference to a field of type 'SerieEncomienda[]'
   */
  export type ListEnumSerieEncomiendaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SerieEncomienda[]'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'ViajeEstado'
   */
  export type EnumViajeEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViajeEstado'>
    


  /**
   * Reference to a field of type 'ViajeEstado[]'
   */
  export type ListEnumViajeEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViajeEstado[]'>
    


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


  export type SedeWhereInput = {
    AND?: SedeWhereInput | SedeWhereInput[]
    OR?: SedeWhereInput[]
    NOT?: SedeWhereInput | SedeWhereInput[]
    id?: StringFilter<"Sede"> | string
    agenciaUbicacion?: StringFilter<"Sede"> | string
    agencia?: StringFilter<"Sede"> | string
    serieBoleto?: EnumSerieBoletoFilter<"Sede"> | $Enums.SerieBoleto
    serieFactura?: EnumSerieFacturaFilter<"Sede"> | $Enums.SerieFactura
    contadorBoletos?: IntFilter<"Sede"> | number
    contadorFacturas?: IntFilter<"Sede"> | number
    usuarios?: UsuarioListRelationFilter
  }

  export type SedeOrderByWithRelationInput = {
    id?: SortOrder
    agenciaUbicacion?: SortOrder
    agencia?: SortOrder
    serieBoleto?: SortOrder
    serieFactura?: SortOrder
    contadorBoletos?: SortOrder
    contadorFacturas?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type SedeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SedeWhereInput | SedeWhereInput[]
    OR?: SedeWhereInput[]
    NOT?: SedeWhereInput | SedeWhereInput[]
    agenciaUbicacion?: StringFilter<"Sede"> | string
    agencia?: StringFilter<"Sede"> | string
    serieBoleto?: EnumSerieBoletoFilter<"Sede"> | $Enums.SerieBoleto
    serieFactura?: EnumSerieFacturaFilter<"Sede"> | $Enums.SerieFactura
    contadorBoletos?: IntFilter<"Sede"> | number
    contadorFacturas?: IntFilter<"Sede"> | number
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type SedeOrderByWithAggregationInput = {
    id?: SortOrder
    agenciaUbicacion?: SortOrder
    agencia?: SortOrder
    serieBoleto?: SortOrder
    serieFactura?: SortOrder
    contadorBoletos?: SortOrder
    contadorFacturas?: SortOrder
    _count?: SedeCountOrderByAggregateInput
    _avg?: SedeAvgOrderByAggregateInput
    _max?: SedeMaxOrderByAggregateInput
    _min?: SedeMinOrderByAggregateInput
    _sum?: SedeSumOrderByAggregateInput
  }

  export type SedeScalarWhereWithAggregatesInput = {
    AND?: SedeScalarWhereWithAggregatesInput | SedeScalarWhereWithAggregatesInput[]
    OR?: SedeScalarWhereWithAggregatesInput[]
    NOT?: SedeScalarWhereWithAggregatesInput | SedeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sede"> | string
    agenciaUbicacion?: StringWithAggregatesFilter<"Sede"> | string
    agencia?: StringWithAggregatesFilter<"Sede"> | string
    serieBoleto?: EnumSerieBoletoWithAggregatesFilter<"Sede"> | $Enums.SerieBoleto
    serieFactura?: EnumSerieFacturaWithAggregatesFilter<"Sede"> | $Enums.SerieFactura
    contadorBoletos?: IntWithAggregatesFilter<"Sede"> | number
    contadorFacturas?: IntWithAggregatesFilter<"Sede"> | number
  }

  export type BoletoWhereInput = {
    AND?: BoletoWhereInput | BoletoWhereInput[]
    OR?: BoletoWhereInput[]
    NOT?: BoletoWhereInput | BoletoWhereInput[]
    asiento?: IntFilter<"Boleto"> | number
    metodoPago?: StringFilter<"Boleto"> | string
    pasajeroDni?: StringFilter<"Boleto"> | string
    estado?: EnumBoletoEstadoFilter<"Boleto"> | $Enums.BoletoEstado
    pasajeroNombres?: StringFilter<"Boleto"> | string
    pasajeroApellidos?: StringFilter<"Boleto"> | string
    usuarioId?: StringFilter<"Boleto"> | string
    codigo?: StringFilter<"Boleto"> | string
    destino?: StringFilter<"Boleto"> | string
    fechaRegistro?: DateTimeFilter<"Boleto"> | Date | string
    id?: StringFilter<"Boleto"> | string
    precio?: IntFilter<"Boleto"> | number
    viajeId?: StringFilter<"Boleto"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }

  export type BoletoOrderByWithRelationInput = {
    asiento?: SortOrder
    metodoPago?: SortOrder
    pasajeroDni?: SortOrder
    estado?: SortOrder
    pasajeroNombres?: SortOrder
    pasajeroApellidos?: SortOrder
    usuarioId?: SortOrder
    codigo?: SortOrder
    destino?: SortOrder
    fechaRegistro?: SortOrder
    id?: SortOrder
    precio?: SortOrder
    viajeId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    viaje?: ViajeOrderByWithRelationInput
  }

  export type BoletoWhereUniqueInput = Prisma.AtLeast<{
    codigo?: string
    id?: string
    AND?: BoletoWhereInput | BoletoWhereInput[]
    OR?: BoletoWhereInput[]
    NOT?: BoletoWhereInput | BoletoWhereInput[]
    asiento?: IntFilter<"Boleto"> | number
    metodoPago?: StringFilter<"Boleto"> | string
    pasajeroDni?: StringFilter<"Boleto"> | string
    estado?: EnumBoletoEstadoFilter<"Boleto"> | $Enums.BoletoEstado
    pasajeroNombres?: StringFilter<"Boleto"> | string
    pasajeroApellidos?: StringFilter<"Boleto"> | string
    usuarioId?: StringFilter<"Boleto"> | string
    destino?: StringFilter<"Boleto"> | string
    fechaRegistro?: DateTimeFilter<"Boleto"> | Date | string
    precio?: IntFilter<"Boleto"> | number
    viajeId?: StringFilter<"Boleto"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }, "id" | "codigo">

  export type BoletoOrderByWithAggregationInput = {
    asiento?: SortOrder
    metodoPago?: SortOrder
    pasajeroDni?: SortOrder
    estado?: SortOrder
    pasajeroNombres?: SortOrder
    pasajeroApellidos?: SortOrder
    usuarioId?: SortOrder
    codigo?: SortOrder
    destino?: SortOrder
    fechaRegistro?: SortOrder
    id?: SortOrder
    precio?: SortOrder
    viajeId?: SortOrder
    _count?: BoletoCountOrderByAggregateInput
    _avg?: BoletoAvgOrderByAggregateInput
    _max?: BoletoMaxOrderByAggregateInput
    _min?: BoletoMinOrderByAggregateInput
    _sum?: BoletoSumOrderByAggregateInput
  }

  export type BoletoScalarWhereWithAggregatesInput = {
    AND?: BoletoScalarWhereWithAggregatesInput | BoletoScalarWhereWithAggregatesInput[]
    OR?: BoletoScalarWhereWithAggregatesInput[]
    NOT?: BoletoScalarWhereWithAggregatesInput | BoletoScalarWhereWithAggregatesInput[]
    asiento?: IntWithAggregatesFilter<"Boleto"> | number
    metodoPago?: StringWithAggregatesFilter<"Boleto"> | string
    pasajeroDni?: StringWithAggregatesFilter<"Boleto"> | string
    estado?: EnumBoletoEstadoWithAggregatesFilter<"Boleto"> | $Enums.BoletoEstado
    pasajeroNombres?: StringWithAggregatesFilter<"Boleto"> | string
    pasajeroApellidos?: StringWithAggregatesFilter<"Boleto"> | string
    usuarioId?: StringWithAggregatesFilter<"Boleto"> | string
    codigo?: StringWithAggregatesFilter<"Boleto"> | string
    destino?: StringWithAggregatesFilter<"Boleto"> | string
    fechaRegistro?: DateTimeWithAggregatesFilter<"Boleto"> | Date | string
    id?: StringWithAggregatesFilter<"Boleto"> | string
    precio?: IntWithAggregatesFilter<"Boleto"> | number
    viajeId?: StringWithAggregatesFilter<"Boleto"> | string
  }

  export type BusWhereInput = {
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    id?: StringFilter<"Bus"> | string
    asientos?: IntFilter<"Bus"> | number
    fechaRegistro?: DateTimeFilter<"Bus"> | Date | string
    foto?: StringFilter<"Bus"> | string
    modelo?: StringFilter<"Bus"> | string
    placa?: StringFilter<"Bus"> | string
    viaje?: ViajeListRelationFilter
  }

  export type BusOrderByWithRelationInput = {
    id?: SortOrder
    asientos?: SortOrder
    fechaRegistro?: SortOrder
    foto?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
    viaje?: ViajeOrderByRelationAggregateInput
  }

  export type BusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    placa?: string
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    asientos?: IntFilter<"Bus"> | number
    fechaRegistro?: DateTimeFilter<"Bus"> | Date | string
    foto?: StringFilter<"Bus"> | string
    modelo?: StringFilter<"Bus"> | string
    viaje?: ViajeListRelationFilter
  }, "id" | "placa">

  export type BusOrderByWithAggregationInput = {
    id?: SortOrder
    asientos?: SortOrder
    fechaRegistro?: SortOrder
    foto?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
    _count?: BusCountOrderByAggregateInput
    _avg?: BusAvgOrderByAggregateInput
    _max?: BusMaxOrderByAggregateInput
    _min?: BusMinOrderByAggregateInput
    _sum?: BusSumOrderByAggregateInput
  }

  export type BusScalarWhereWithAggregatesInput = {
    AND?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    OR?: BusScalarWhereWithAggregatesInput[]
    NOT?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bus"> | string
    asientos?: IntWithAggregatesFilter<"Bus"> | number
    fechaRegistro?: DateTimeWithAggregatesFilter<"Bus"> | Date | string
    foto?: StringWithAggregatesFilter<"Bus"> | string
    modelo?: StringWithAggregatesFilter<"Bus"> | string
    placa?: StringWithAggregatesFilter<"Bus"> | string
  }

  export type ConductorWhereInput = {
    AND?: ConductorWhereInput | ConductorWhereInput[]
    OR?: ConductorWhereInput[]
    NOT?: ConductorWhereInput | ConductorWhereInput[]
    claseLicencia?: StringFilter<"Conductor"> | string
    conductorDni?: StringFilter<"Conductor"> | string
    nombres?: StringFilter<"Conductor"> | string
    apellidos?: StringFilter<"Conductor"> | string
    disponibilidad?: BoolFilter<"Conductor"> | boolean
    foto?: StringFilter<"Conductor"> | string
    id?: StringFilter<"Conductor"> | string
    numeroLicencia?: StringFilter<"Conductor"> | string
    telefono?: StringFilter<"Conductor"> | string
    viajeId?: StringNullableFilter<"Conductor"> | string | null
    viaje?: XOR<ViajeNullableScalarRelationFilter, ViajeWhereInput> | null
  }

  export type ConductorOrderByWithRelationInput = {
    claseLicencia?: SortOrder
    conductorDni?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    disponibilidad?: SortOrder
    foto?: SortOrder
    id?: SortOrder
    numeroLicencia?: SortOrder
    telefono?: SortOrder
    viajeId?: SortOrderInput | SortOrder
    viaje?: ViajeOrderByWithRelationInput
  }

  export type ConductorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConductorWhereInput | ConductorWhereInput[]
    OR?: ConductorWhereInput[]
    NOT?: ConductorWhereInput | ConductorWhereInput[]
    claseLicencia?: StringFilter<"Conductor"> | string
    conductorDni?: StringFilter<"Conductor"> | string
    nombres?: StringFilter<"Conductor"> | string
    apellidos?: StringFilter<"Conductor"> | string
    disponibilidad?: BoolFilter<"Conductor"> | boolean
    foto?: StringFilter<"Conductor"> | string
    numeroLicencia?: StringFilter<"Conductor"> | string
    telefono?: StringFilter<"Conductor"> | string
    viajeId?: StringNullableFilter<"Conductor"> | string | null
    viaje?: XOR<ViajeNullableScalarRelationFilter, ViajeWhereInput> | null
  }, "id">

  export type ConductorOrderByWithAggregationInput = {
    claseLicencia?: SortOrder
    conductorDni?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    disponibilidad?: SortOrder
    foto?: SortOrder
    id?: SortOrder
    numeroLicencia?: SortOrder
    telefono?: SortOrder
    viajeId?: SortOrderInput | SortOrder
    _count?: ConductorCountOrderByAggregateInput
    _max?: ConductorMaxOrderByAggregateInput
    _min?: ConductorMinOrderByAggregateInput
  }

  export type ConductorScalarWhereWithAggregatesInput = {
    AND?: ConductorScalarWhereWithAggregatesInput | ConductorScalarWhereWithAggregatesInput[]
    OR?: ConductorScalarWhereWithAggregatesInput[]
    NOT?: ConductorScalarWhereWithAggregatesInput | ConductorScalarWhereWithAggregatesInput[]
    claseLicencia?: StringWithAggregatesFilter<"Conductor"> | string
    conductorDni?: StringWithAggregatesFilter<"Conductor"> | string
    nombres?: StringWithAggregatesFilter<"Conductor"> | string
    apellidos?: StringWithAggregatesFilter<"Conductor"> | string
    disponibilidad?: BoolWithAggregatesFilter<"Conductor"> | boolean
    foto?: StringWithAggregatesFilter<"Conductor"> | string
    id?: StringWithAggregatesFilter<"Conductor"> | string
    numeroLicencia?: StringWithAggregatesFilter<"Conductor"> | string
    telefono?: StringWithAggregatesFilter<"Conductor"> | string
    viajeId?: StringNullableWithAggregatesFilter<"Conductor"> | string | null
  }

  export type EncomiendaWhereInput = {
    AND?: EncomiendaWhereInput | EncomiendaWhereInput[]
    OR?: EncomiendaWhereInput[]
    NOT?: EncomiendaWhereInput | EncomiendaWhereInput[]
    destino?: StringFilter<"Encomienda"> | string
    numero?: IntFilter<"Encomienda"> | number
    serie?: EnumSerieEncomiendaFilter<"Encomienda"> | $Enums.SerieEncomienda
    descripcion?: StringFilter<"Encomienda"> | string
    usuarioId?: StringFilter<"Encomienda"> | string
    codigoRastreo?: StringFilter<"Encomienda"> | string
    destinatarioDni?: StringFilter<"Encomienda"> | string
    destinatarioNombres?: StringFilter<"Encomienda"> | string
    destinatarioApellidos?: StringFilter<"Encomienda"> | string
    remitenteNombres?: StringFilter<"Encomienda"> | string
    remitenteDni?: StringFilter<"Encomienda"> | string
    remitenteApellidos?: StringFilter<"Encomienda"> | string
    factura?: BoolFilter<"Encomienda"> | boolean
    razonSocial?: StringNullableFilter<"Encomienda"> | string | null
    ruc?: StringNullableFilter<"Encomienda"> | string | null
    fechaEnvio?: DateTimeFilter<"Encomienda"> | Date | string
    fechaRecepcion?: DateTimeFilter<"Encomienda"> | Date | string
    id?: StringFilter<"Encomienda"> | string
    pagado?: BoolFilter<"Encomienda"> | boolean
    precio?: IntFilter<"Encomienda"> | number
    viajeId?: StringFilter<"Encomienda"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }

  export type EncomiendaOrderByWithRelationInput = {
    destino?: SortOrder
    numero?: SortOrder
    serie?: SortOrder
    descripcion?: SortOrder
    usuarioId?: SortOrder
    codigoRastreo?: SortOrder
    destinatarioDni?: SortOrder
    destinatarioNombres?: SortOrder
    destinatarioApellidos?: SortOrder
    remitenteNombres?: SortOrder
    remitenteDni?: SortOrder
    remitenteApellidos?: SortOrder
    factura?: SortOrder
    razonSocial?: SortOrderInput | SortOrder
    ruc?: SortOrderInput | SortOrder
    fechaEnvio?: SortOrder
    fechaRecepcion?: SortOrder
    id?: SortOrder
    pagado?: SortOrder
    precio?: SortOrder
    viajeId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    viaje?: ViajeOrderByWithRelationInput
  }

  export type EncomiendaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EncomiendaWhereInput | EncomiendaWhereInput[]
    OR?: EncomiendaWhereInput[]
    NOT?: EncomiendaWhereInput | EncomiendaWhereInput[]
    destino?: StringFilter<"Encomienda"> | string
    numero?: IntFilter<"Encomienda"> | number
    serie?: EnumSerieEncomiendaFilter<"Encomienda"> | $Enums.SerieEncomienda
    descripcion?: StringFilter<"Encomienda"> | string
    usuarioId?: StringFilter<"Encomienda"> | string
    codigoRastreo?: StringFilter<"Encomienda"> | string
    destinatarioDni?: StringFilter<"Encomienda"> | string
    destinatarioNombres?: StringFilter<"Encomienda"> | string
    destinatarioApellidos?: StringFilter<"Encomienda"> | string
    remitenteNombres?: StringFilter<"Encomienda"> | string
    remitenteDni?: StringFilter<"Encomienda"> | string
    remitenteApellidos?: StringFilter<"Encomienda"> | string
    factura?: BoolFilter<"Encomienda"> | boolean
    razonSocial?: StringNullableFilter<"Encomienda"> | string | null
    ruc?: StringNullableFilter<"Encomienda"> | string | null
    fechaEnvio?: DateTimeFilter<"Encomienda"> | Date | string
    fechaRecepcion?: DateTimeFilter<"Encomienda"> | Date | string
    pagado?: BoolFilter<"Encomienda"> | boolean
    precio?: IntFilter<"Encomienda"> | number
    viajeId?: StringFilter<"Encomienda"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }, "id">

  export type EncomiendaOrderByWithAggregationInput = {
    destino?: SortOrder
    numero?: SortOrder
    serie?: SortOrder
    descripcion?: SortOrder
    usuarioId?: SortOrder
    codigoRastreo?: SortOrder
    destinatarioDni?: SortOrder
    destinatarioNombres?: SortOrder
    destinatarioApellidos?: SortOrder
    remitenteNombres?: SortOrder
    remitenteDni?: SortOrder
    remitenteApellidos?: SortOrder
    factura?: SortOrder
    razonSocial?: SortOrderInput | SortOrder
    ruc?: SortOrderInput | SortOrder
    fechaEnvio?: SortOrder
    fechaRecepcion?: SortOrder
    id?: SortOrder
    pagado?: SortOrder
    precio?: SortOrder
    viajeId?: SortOrder
    _count?: EncomiendaCountOrderByAggregateInput
    _avg?: EncomiendaAvgOrderByAggregateInput
    _max?: EncomiendaMaxOrderByAggregateInput
    _min?: EncomiendaMinOrderByAggregateInput
    _sum?: EncomiendaSumOrderByAggregateInput
  }

  export type EncomiendaScalarWhereWithAggregatesInput = {
    AND?: EncomiendaScalarWhereWithAggregatesInput | EncomiendaScalarWhereWithAggregatesInput[]
    OR?: EncomiendaScalarWhereWithAggregatesInput[]
    NOT?: EncomiendaScalarWhereWithAggregatesInput | EncomiendaScalarWhereWithAggregatesInput[]
    destino?: StringWithAggregatesFilter<"Encomienda"> | string
    numero?: IntWithAggregatesFilter<"Encomienda"> | number
    serie?: EnumSerieEncomiendaWithAggregatesFilter<"Encomienda"> | $Enums.SerieEncomienda
    descripcion?: StringWithAggregatesFilter<"Encomienda"> | string
    usuarioId?: StringWithAggregatesFilter<"Encomienda"> | string
    codigoRastreo?: StringWithAggregatesFilter<"Encomienda"> | string
    destinatarioDni?: StringWithAggregatesFilter<"Encomienda"> | string
    destinatarioNombres?: StringWithAggregatesFilter<"Encomienda"> | string
    destinatarioApellidos?: StringWithAggregatesFilter<"Encomienda"> | string
    remitenteNombres?: StringWithAggregatesFilter<"Encomienda"> | string
    remitenteDni?: StringWithAggregatesFilter<"Encomienda"> | string
    remitenteApellidos?: StringWithAggregatesFilter<"Encomienda"> | string
    factura?: BoolWithAggregatesFilter<"Encomienda"> | boolean
    razonSocial?: StringNullableWithAggregatesFilter<"Encomienda"> | string | null
    ruc?: StringNullableWithAggregatesFilter<"Encomienda"> | string | null
    fechaEnvio?: DateTimeWithAggregatesFilter<"Encomienda"> | Date | string
    fechaRecepcion?: DateTimeWithAggregatesFilter<"Encomienda"> | Date | string
    id?: StringWithAggregatesFilter<"Encomienda"> | string
    pagado?: BoolWithAggregatesFilter<"Encomienda"> | boolean
    precio?: IntWithAggregatesFilter<"Encomienda"> | number
    viajeId?: StringWithAggregatesFilter<"Encomienda"> | string
  }

  export type RutaWhereInput = {
    AND?: RutaWhereInput | RutaWhereInput[]
    OR?: RutaWhereInput[]
    NOT?: RutaWhereInput | RutaWhereInput[]
    ciudadDestino?: StringFilter<"Ruta"> | string
    ciudadOrigen?: StringFilter<"Ruta"> | string
    duracionEstimada?: IntFilter<"Ruta"> | number
    id?: StringFilter<"Ruta"> | string
    terminalDestino?: StringFilter<"Ruta"> | string
    terminalOrigen?: StringFilter<"Ruta"> | string
    viaje?: ViajeListRelationFilter
  }

  export type RutaOrderByWithRelationInput = {
    ciudadDestino?: SortOrder
    ciudadOrigen?: SortOrder
    duracionEstimada?: SortOrder
    id?: SortOrder
    terminalDestino?: SortOrder
    terminalOrigen?: SortOrder
    viaje?: ViajeOrderByRelationAggregateInput
  }

  export type RutaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RutaWhereInput | RutaWhereInput[]
    OR?: RutaWhereInput[]
    NOT?: RutaWhereInput | RutaWhereInput[]
    ciudadDestino?: StringFilter<"Ruta"> | string
    ciudadOrigen?: StringFilter<"Ruta"> | string
    duracionEstimada?: IntFilter<"Ruta"> | number
    terminalDestino?: StringFilter<"Ruta"> | string
    terminalOrigen?: StringFilter<"Ruta"> | string
    viaje?: ViajeListRelationFilter
  }, "id">

  export type RutaOrderByWithAggregationInput = {
    ciudadDestino?: SortOrder
    ciudadOrigen?: SortOrder
    duracionEstimada?: SortOrder
    id?: SortOrder
    terminalDestino?: SortOrder
    terminalOrigen?: SortOrder
    _count?: RutaCountOrderByAggregateInput
    _avg?: RutaAvgOrderByAggregateInput
    _max?: RutaMaxOrderByAggregateInput
    _min?: RutaMinOrderByAggregateInput
    _sum?: RutaSumOrderByAggregateInput
  }

  export type RutaScalarWhereWithAggregatesInput = {
    AND?: RutaScalarWhereWithAggregatesInput | RutaScalarWhereWithAggregatesInput[]
    OR?: RutaScalarWhereWithAggregatesInput[]
    NOT?: RutaScalarWhereWithAggregatesInput | RutaScalarWhereWithAggregatesInput[]
    ciudadDestino?: StringWithAggregatesFilter<"Ruta"> | string
    ciudadOrigen?: StringWithAggregatesFilter<"Ruta"> | string
    duracionEstimada?: IntWithAggregatesFilter<"Ruta"> | number
    id?: StringWithAggregatesFilter<"Ruta"> | string
    terminalDestino?: StringWithAggregatesFilter<"Ruta"> | string
    terminalOrigen?: StringWithAggregatesFilter<"Ruta"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    username?: StringFilter<"Usuario"> | string
    sedeId?: StringFilter<"Usuario"> | string
    usuarioDni?: StringFilter<"Usuario"> | string
    id?: StringFilter<"Usuario"> | string
    foto?: StringFilter<"Usuario"> | string
    telefono?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    nombres?: StringFilter<"Usuario"> | string
    apellidos?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    isDeleted?: BoolFilter<"Usuario"> | boolean
    sede?: XOR<SedeScalarRelationFilter, SedeWhereInput>
    encomienda?: EncomiendaListRelationFilter
    boleto?: BoletoListRelationFilter
    viaje?: ViajeListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    username?: SortOrder
    sedeId?: SortOrder
    usuarioDni?: SortOrder
    id?: SortOrder
    foto?: SortOrder
    telefono?: SortOrder
    password?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    rol?: SortOrder
    isDeleted?: SortOrder
    sede?: SedeOrderByWithRelationInput
    encomienda?: EncomiendaOrderByRelationAggregateInput
    boleto?: BoletoOrderByRelationAggregateInput
    viaje?: ViajeOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    username?: string
    usuarioDni?: string
    id?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    sedeId?: StringFilter<"Usuario"> | string
    foto?: StringFilter<"Usuario"> | string
    telefono?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    nombres?: StringFilter<"Usuario"> | string
    apellidos?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    isDeleted?: BoolFilter<"Usuario"> | boolean
    sede?: XOR<SedeScalarRelationFilter, SedeWhereInput>
    encomienda?: EncomiendaListRelationFilter
    boleto?: BoletoListRelationFilter
    viaje?: ViajeListRelationFilter
  }, "id" | "username" | "usuarioDni">

  export type UsuarioOrderByWithAggregationInput = {
    username?: SortOrder
    sedeId?: SortOrder
    usuarioDni?: SortOrder
    id?: SortOrder
    foto?: SortOrder
    telefono?: SortOrder
    password?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    rol?: SortOrder
    isDeleted?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    username?: StringWithAggregatesFilter<"Usuario"> | string
    sedeId?: StringWithAggregatesFilter<"Usuario"> | string
    usuarioDni?: StringWithAggregatesFilter<"Usuario"> | string
    id?: StringWithAggregatesFilter<"Usuario"> | string
    foto?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    nombres?: StringWithAggregatesFilter<"Usuario"> | string
    apellidos?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    isDeleted?: BoolWithAggregatesFilter<"Usuario"> | boolean
  }

  export type ViajeWhereInput = {
    AND?: ViajeWhereInput | ViajeWhereInput[]
    OR?: ViajeWhereInput[]
    NOT?: ViajeWhereInput | ViajeWhereInput[]
    busId?: StringFilter<"Viaje"> | string
    usuarioId?: StringFilter<"Viaje"> | string
    estado?: EnumViajeEstadoFilter<"Viaje"> | $Enums.ViajeEstado
    salida?: DateTimeFilter<"Viaje"> | Date | string
    id?: StringFilter<"Viaje"> | string
    rutaId?: StringFilter<"Viaje"> | string
    tarifas?: IntNullableListFilter<"Viaje">
    tarifaGeneral?: IntFilter<"Viaje"> | number
    boletos?: BoletoListRelationFilter
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    conductores?: ConductorListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    encomiendas?: EncomiendaListRelationFilter
    ruta?: XOR<RutaScalarRelationFilter, RutaWhereInput>
  }

  export type ViajeOrderByWithRelationInput = {
    busId?: SortOrder
    usuarioId?: SortOrder
    estado?: SortOrder
    salida?: SortOrder
    id?: SortOrder
    rutaId?: SortOrder
    tarifas?: SortOrder
    tarifaGeneral?: SortOrder
    boletos?: BoletoOrderByRelationAggregateInput
    bus?: BusOrderByWithRelationInput
    conductores?: ConductorOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
    encomiendas?: EncomiendaOrderByRelationAggregateInput
    ruta?: RutaOrderByWithRelationInput
  }

  export type ViajeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViajeWhereInput | ViajeWhereInput[]
    OR?: ViajeWhereInput[]
    NOT?: ViajeWhereInput | ViajeWhereInput[]
    busId?: StringFilter<"Viaje"> | string
    usuarioId?: StringFilter<"Viaje"> | string
    estado?: EnumViajeEstadoFilter<"Viaje"> | $Enums.ViajeEstado
    salida?: DateTimeFilter<"Viaje"> | Date | string
    rutaId?: StringFilter<"Viaje"> | string
    tarifas?: IntNullableListFilter<"Viaje">
    tarifaGeneral?: IntFilter<"Viaje"> | number
    boletos?: BoletoListRelationFilter
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    conductores?: ConductorListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    encomiendas?: EncomiendaListRelationFilter
    ruta?: XOR<RutaScalarRelationFilter, RutaWhereInput>
  }, "id">

  export type ViajeOrderByWithAggregationInput = {
    busId?: SortOrder
    usuarioId?: SortOrder
    estado?: SortOrder
    salida?: SortOrder
    id?: SortOrder
    rutaId?: SortOrder
    tarifas?: SortOrder
    tarifaGeneral?: SortOrder
    _count?: ViajeCountOrderByAggregateInput
    _avg?: ViajeAvgOrderByAggregateInput
    _max?: ViajeMaxOrderByAggregateInput
    _min?: ViajeMinOrderByAggregateInput
    _sum?: ViajeSumOrderByAggregateInput
  }

  export type ViajeScalarWhereWithAggregatesInput = {
    AND?: ViajeScalarWhereWithAggregatesInput | ViajeScalarWhereWithAggregatesInput[]
    OR?: ViajeScalarWhereWithAggregatesInput[]
    NOT?: ViajeScalarWhereWithAggregatesInput | ViajeScalarWhereWithAggregatesInput[]
    busId?: StringWithAggregatesFilter<"Viaje"> | string
    usuarioId?: StringWithAggregatesFilter<"Viaje"> | string
    estado?: EnumViajeEstadoWithAggregatesFilter<"Viaje"> | $Enums.ViajeEstado
    salida?: DateTimeWithAggregatesFilter<"Viaje"> | Date | string
    id?: StringWithAggregatesFilter<"Viaje"> | string
    rutaId?: StringWithAggregatesFilter<"Viaje"> | string
    tarifas?: IntNullableListFilter<"Viaje">
    tarifaGeneral?: IntWithAggregatesFilter<"Viaje"> | number
  }

  export type SedeCreateInput = {
    id?: string
    agenciaUbicacion: string
    agencia: string
    serieBoleto: $Enums.SerieBoleto
    serieFactura: $Enums.SerieFactura
    contadorBoletos: number
    contadorFacturas: number
    usuarios?: UsuarioCreateNestedManyWithoutSedeInput
  }

  export type SedeUncheckedCreateInput = {
    id?: string
    agenciaUbicacion: string
    agencia: string
    serieBoleto: $Enums.SerieBoleto
    serieFactura: $Enums.SerieFactura
    contadorBoletos: number
    contadorFacturas: number
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutSedeInput
  }

  export type SedeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agenciaUbicacion?: StringFieldUpdateOperationsInput | string
    agencia?: StringFieldUpdateOperationsInput | string
    serieBoleto?: EnumSerieBoletoFieldUpdateOperationsInput | $Enums.SerieBoleto
    serieFactura?: EnumSerieFacturaFieldUpdateOperationsInput | $Enums.SerieFactura
    contadorBoletos?: IntFieldUpdateOperationsInput | number
    contadorFacturas?: IntFieldUpdateOperationsInput | number
    usuarios?: UsuarioUpdateManyWithoutSedeNestedInput
  }

  export type SedeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agenciaUbicacion?: StringFieldUpdateOperationsInput | string
    agencia?: StringFieldUpdateOperationsInput | string
    serieBoleto?: EnumSerieBoletoFieldUpdateOperationsInput | $Enums.SerieBoleto
    serieFactura?: EnumSerieFacturaFieldUpdateOperationsInput | $Enums.SerieFactura
    contadorBoletos?: IntFieldUpdateOperationsInput | number
    contadorFacturas?: IntFieldUpdateOperationsInput | number
    usuarios?: UsuarioUncheckedUpdateManyWithoutSedeNestedInput
  }

  export type SedeCreateManyInput = {
    id?: string
    agenciaUbicacion: string
    agencia: string
    serieBoleto: $Enums.SerieBoleto
    serieFactura: $Enums.SerieFactura
    contadorBoletos: number
    contadorFacturas: number
  }

  export type SedeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agenciaUbicacion?: StringFieldUpdateOperationsInput | string
    agencia?: StringFieldUpdateOperationsInput | string
    serieBoleto?: EnumSerieBoletoFieldUpdateOperationsInput | $Enums.SerieBoleto
    serieFactura?: EnumSerieFacturaFieldUpdateOperationsInput | $Enums.SerieFactura
    contadorBoletos?: IntFieldUpdateOperationsInput | number
    contadorFacturas?: IntFieldUpdateOperationsInput | number
  }

  export type SedeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agenciaUbicacion?: StringFieldUpdateOperationsInput | string
    agencia?: StringFieldUpdateOperationsInput | string
    serieBoleto?: EnumSerieBoletoFieldUpdateOperationsInput | $Enums.SerieBoleto
    serieFactura?: EnumSerieFacturaFieldUpdateOperationsInput | $Enums.SerieFactura
    contadorBoletos?: IntFieldUpdateOperationsInput | number
    contadorFacturas?: IntFieldUpdateOperationsInput | number
  }

  export type BoletoCreateInput = {
    asiento: number
    metodoPago: string
    pasajeroDni: string
    estado?: $Enums.BoletoEstado
    pasajeroNombres: string
    pasajeroApellidos: string
    codigo: string
    destino?: string
    fechaRegistro?: Date | string
    id?: string
    precio: number
    usuario: UsuarioCreateNestedOneWithoutBoletoInput
    viaje: ViajeCreateNestedOneWithoutBoletosInput
  }

  export type BoletoUncheckedCreateInput = {
    asiento: number
    metodoPago: string
    pasajeroDni: string
    estado?: $Enums.BoletoEstado
    pasajeroNombres: string
    pasajeroApellidos: string
    usuarioId: string
    codigo: string
    destino?: string
    fechaRegistro?: Date | string
    id?: string
    precio: number
    viajeId: string
  }

  export type BoletoUpdateInput = {
    asiento?: IntFieldUpdateOperationsInput | number
    metodoPago?: StringFieldUpdateOperationsInput | string
    pasajeroDni?: StringFieldUpdateOperationsInput | string
    estado?: EnumBoletoEstadoFieldUpdateOperationsInput | $Enums.BoletoEstado
    pasajeroNombres?: StringFieldUpdateOperationsInput | string
    pasajeroApellidos?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutBoletoNestedInput
    viaje?: ViajeUpdateOneRequiredWithoutBoletosNestedInput
  }

  export type BoletoUncheckedUpdateInput = {
    asiento?: IntFieldUpdateOperationsInput | number
    metodoPago?: StringFieldUpdateOperationsInput | string
    pasajeroDni?: StringFieldUpdateOperationsInput | string
    estado?: EnumBoletoEstadoFieldUpdateOperationsInput | $Enums.BoletoEstado
    pasajeroNombres?: StringFieldUpdateOperationsInput | string
    pasajeroApellidos?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    viajeId?: StringFieldUpdateOperationsInput | string
  }

  export type BoletoCreateManyInput = {
    asiento: number
    metodoPago: string
    pasajeroDni: string
    estado?: $Enums.BoletoEstado
    pasajeroNombres: string
    pasajeroApellidos: string
    usuarioId: string
    codigo: string
    destino?: string
    fechaRegistro?: Date | string
    id?: string
    precio: number
    viajeId: string
  }

  export type BoletoUpdateManyMutationInput = {
    asiento?: IntFieldUpdateOperationsInput | number
    metodoPago?: StringFieldUpdateOperationsInput | string
    pasajeroDni?: StringFieldUpdateOperationsInput | string
    estado?: EnumBoletoEstadoFieldUpdateOperationsInput | $Enums.BoletoEstado
    pasajeroNombres?: StringFieldUpdateOperationsInput | string
    pasajeroApellidos?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
  }

  export type BoletoUncheckedUpdateManyInput = {
    asiento?: IntFieldUpdateOperationsInput | number
    metodoPago?: StringFieldUpdateOperationsInput | string
    pasajeroDni?: StringFieldUpdateOperationsInput | string
    estado?: EnumBoletoEstadoFieldUpdateOperationsInput | $Enums.BoletoEstado
    pasajeroNombres?: StringFieldUpdateOperationsInput | string
    pasajeroApellidos?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    viajeId?: StringFieldUpdateOperationsInput | string
  }

  export type BusCreateInput = {
    id?: string
    asientos: number
    fechaRegistro?: Date | string
    foto?: string
    modelo?: string
    placa: string
    viaje?: ViajeCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateInput = {
    id?: string
    asientos: number
    fechaRegistro?: Date | string
    foto?: string
    modelo?: string
    placa: string
    viaje?: ViajeUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asientos?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    viaje?: ViajeUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asientos?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    viaje?: ViajeUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusCreateManyInput = {
    id?: string
    asientos: number
    fechaRegistro?: Date | string
    foto?: string
    modelo?: string
    placa: string
  }

  export type BusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    asientos?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
  }

  export type BusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    asientos?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
  }

  export type ConductorCreateInput = {
    claseLicencia: string
    conductorDni: string
    nombres: string
    apellidos: string
    disponibilidad?: boolean
    foto?: string
    id?: string
    numeroLicencia: string
    telefono: string
    viaje?: ViajeCreateNestedOneWithoutConductoresInput
  }

  export type ConductorUncheckedCreateInput = {
    claseLicencia: string
    conductorDni: string
    nombres: string
    apellidos: string
    disponibilidad?: boolean
    foto?: string
    id?: string
    numeroLicencia: string
    telefono: string
    viajeId?: string | null
  }

  export type ConductorUpdateInput = {
    claseLicencia?: StringFieldUpdateOperationsInput | string
    conductorDni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    disponibilidad?: BoolFieldUpdateOperationsInput | boolean
    foto?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    numeroLicencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    viaje?: ViajeUpdateOneWithoutConductoresNestedInput
  }

  export type ConductorUncheckedUpdateInput = {
    claseLicencia?: StringFieldUpdateOperationsInput | string
    conductorDni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    disponibilidad?: BoolFieldUpdateOperationsInput | boolean
    foto?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    numeroLicencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    viajeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConductorCreateManyInput = {
    claseLicencia: string
    conductorDni: string
    nombres: string
    apellidos: string
    disponibilidad?: boolean
    foto?: string
    id?: string
    numeroLicencia: string
    telefono: string
    viajeId?: string | null
  }

  export type ConductorUpdateManyMutationInput = {
    claseLicencia?: StringFieldUpdateOperationsInput | string
    conductorDni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    disponibilidad?: BoolFieldUpdateOperationsInput | boolean
    foto?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    numeroLicencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type ConductorUncheckedUpdateManyInput = {
    claseLicencia?: StringFieldUpdateOperationsInput | string
    conductorDni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    disponibilidad?: BoolFieldUpdateOperationsInput | boolean
    foto?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    numeroLicencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    viajeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EncomiendaCreateInput = {
    destino: string
    numero?: number
    serie: $Enums.SerieEncomienda
    descripcion: string
    codigoRastreo?: string
    destinatarioDni: string
    destinatarioNombres: string
    destinatarioApellidos: string
    remitenteNombres: string
    remitenteDni: string
    remitenteApellidos: string
    factura?: boolean
    razonSocial?: string | null
    ruc?: string | null
    fechaEnvio: Date | string
    fechaRecepcion?: Date | string
    id?: string
    pagado?: boolean
    precio: number
    usuario: UsuarioCreateNestedOneWithoutEncomiendaInput
    viaje: ViajeCreateNestedOneWithoutEncomiendasInput
  }

  export type EncomiendaUncheckedCreateInput = {
    destino: string
    numero?: number
    serie: $Enums.SerieEncomienda
    descripcion: string
    usuarioId: string
    codigoRastreo?: string
    destinatarioDni: string
    destinatarioNombres: string
    destinatarioApellidos: string
    remitenteNombres: string
    remitenteDni: string
    remitenteApellidos: string
    factura?: boolean
    razonSocial?: string | null
    ruc?: string | null
    fechaEnvio: Date | string
    fechaRecepcion?: Date | string
    id?: string
    pagado?: boolean
    precio: number
    viajeId: string
  }

  export type EncomiendaUpdateInput = {
    destino?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    serie?: EnumSerieEncomiendaFieldUpdateOperationsInput | $Enums.SerieEncomienda
    descripcion?: StringFieldUpdateOperationsInput | string
    codigoRastreo?: StringFieldUpdateOperationsInput | string
    destinatarioDni?: StringFieldUpdateOperationsInput | string
    destinatarioNombres?: StringFieldUpdateOperationsInput | string
    destinatarioApellidos?: StringFieldUpdateOperationsInput | string
    remitenteNombres?: StringFieldUpdateOperationsInput | string
    remitenteDni?: StringFieldUpdateOperationsInput | string
    remitenteApellidos?: StringFieldUpdateOperationsInput | string
    factura?: BoolFieldUpdateOperationsInput | boolean
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRecepcion?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    pagado?: BoolFieldUpdateOperationsInput | boolean
    precio?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutEncomiendaNestedInput
    viaje?: ViajeUpdateOneRequiredWithoutEncomiendasNestedInput
  }

  export type EncomiendaUncheckedUpdateInput = {
    destino?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    serie?: EnumSerieEncomiendaFieldUpdateOperationsInput | $Enums.SerieEncomienda
    descripcion?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    codigoRastreo?: StringFieldUpdateOperationsInput | string
    destinatarioDni?: StringFieldUpdateOperationsInput | string
    destinatarioNombres?: StringFieldUpdateOperationsInput | string
    destinatarioApellidos?: StringFieldUpdateOperationsInput | string
    remitenteNombres?: StringFieldUpdateOperationsInput | string
    remitenteDni?: StringFieldUpdateOperationsInput | string
    remitenteApellidos?: StringFieldUpdateOperationsInput | string
    factura?: BoolFieldUpdateOperationsInput | boolean
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRecepcion?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    pagado?: BoolFieldUpdateOperationsInput | boolean
    precio?: IntFieldUpdateOperationsInput | number
    viajeId?: StringFieldUpdateOperationsInput | string
  }

  export type EncomiendaCreateManyInput = {
    destino: string
    numero?: number
    serie: $Enums.SerieEncomienda
    descripcion: string
    usuarioId: string
    codigoRastreo?: string
    destinatarioDni: string
    destinatarioNombres: string
    destinatarioApellidos: string
    remitenteNombres: string
    remitenteDni: string
    remitenteApellidos: string
    factura?: boolean
    razonSocial?: string | null
    ruc?: string | null
    fechaEnvio: Date | string
    fechaRecepcion?: Date | string
    id?: string
    pagado?: boolean
    precio: number
    viajeId: string
  }

  export type EncomiendaUpdateManyMutationInput = {
    destino?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    serie?: EnumSerieEncomiendaFieldUpdateOperationsInput | $Enums.SerieEncomienda
    descripcion?: StringFieldUpdateOperationsInput | string
    codigoRastreo?: StringFieldUpdateOperationsInput | string
    destinatarioDni?: StringFieldUpdateOperationsInput | string
    destinatarioNombres?: StringFieldUpdateOperationsInput | string
    destinatarioApellidos?: StringFieldUpdateOperationsInput | string
    remitenteNombres?: StringFieldUpdateOperationsInput | string
    remitenteDni?: StringFieldUpdateOperationsInput | string
    remitenteApellidos?: StringFieldUpdateOperationsInput | string
    factura?: BoolFieldUpdateOperationsInput | boolean
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRecepcion?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    pagado?: BoolFieldUpdateOperationsInput | boolean
    precio?: IntFieldUpdateOperationsInput | number
  }

  export type EncomiendaUncheckedUpdateManyInput = {
    destino?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    serie?: EnumSerieEncomiendaFieldUpdateOperationsInput | $Enums.SerieEncomienda
    descripcion?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    codigoRastreo?: StringFieldUpdateOperationsInput | string
    destinatarioDni?: StringFieldUpdateOperationsInput | string
    destinatarioNombres?: StringFieldUpdateOperationsInput | string
    destinatarioApellidos?: StringFieldUpdateOperationsInput | string
    remitenteNombres?: StringFieldUpdateOperationsInput | string
    remitenteDni?: StringFieldUpdateOperationsInput | string
    remitenteApellidos?: StringFieldUpdateOperationsInput | string
    factura?: BoolFieldUpdateOperationsInput | boolean
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRecepcion?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    pagado?: BoolFieldUpdateOperationsInput | boolean
    precio?: IntFieldUpdateOperationsInput | number
    viajeId?: StringFieldUpdateOperationsInput | string
  }

  export type RutaCreateInput = {
    ciudadDestino: string
    ciudadOrigen: string
    duracionEstimada: number
    id?: string
    terminalDestino: string
    terminalOrigen: string
    viaje?: ViajeCreateNestedManyWithoutRutaInput
  }

  export type RutaUncheckedCreateInput = {
    ciudadDestino: string
    ciudadOrigen: string
    duracionEstimada: number
    id?: string
    terminalDestino: string
    terminalOrigen: string
    viaje?: ViajeUncheckedCreateNestedManyWithoutRutaInput
  }

  export type RutaUpdateInput = {
    ciudadDestino?: StringFieldUpdateOperationsInput | string
    ciudadOrigen?: StringFieldUpdateOperationsInput | string
    duracionEstimada?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    terminalDestino?: StringFieldUpdateOperationsInput | string
    terminalOrigen?: StringFieldUpdateOperationsInput | string
    viaje?: ViajeUpdateManyWithoutRutaNestedInput
  }

  export type RutaUncheckedUpdateInput = {
    ciudadDestino?: StringFieldUpdateOperationsInput | string
    ciudadOrigen?: StringFieldUpdateOperationsInput | string
    duracionEstimada?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    terminalDestino?: StringFieldUpdateOperationsInput | string
    terminalOrigen?: StringFieldUpdateOperationsInput | string
    viaje?: ViajeUncheckedUpdateManyWithoutRutaNestedInput
  }

  export type RutaCreateManyInput = {
    ciudadDestino: string
    ciudadOrigen: string
    duracionEstimada: number
    id?: string
    terminalDestino: string
    terminalOrigen: string
  }

  export type RutaUpdateManyMutationInput = {
    ciudadDestino?: StringFieldUpdateOperationsInput | string
    ciudadOrigen?: StringFieldUpdateOperationsInput | string
    duracionEstimada?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    terminalDestino?: StringFieldUpdateOperationsInput | string
    terminalOrigen?: StringFieldUpdateOperationsInput | string
  }

  export type RutaUncheckedUpdateManyInput = {
    ciudadDestino?: StringFieldUpdateOperationsInput | string
    ciudadOrigen?: StringFieldUpdateOperationsInput | string
    duracionEstimada?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    terminalDestino?: StringFieldUpdateOperationsInput | string
    terminalOrigen?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    username: string
    usuarioDni: string
    id?: string
    foto?: string
    telefono: string
    password: string
    nombres: string
    apellidos: string
    rol?: $Enums.Rol
    isDeleted?: boolean
    sede: SedeCreateNestedOneWithoutUsuariosInput
    encomienda?: EncomiendaCreateNestedManyWithoutUsuarioInput
    boleto?: BoletoCreateNestedManyWithoutUsuarioInput
    viaje?: ViajeCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    username: string
    sedeId: string
    usuarioDni: string
    id?: string
    foto?: string
    telefono: string
    password: string
    nombres: string
    apellidos: string
    rol?: $Enums.Rol
    isDeleted?: boolean
    encomienda?: EncomiendaUncheckedCreateNestedManyWithoutUsuarioInput
    boleto?: BoletoUncheckedCreateNestedManyWithoutUsuarioInput
    viaje?: ViajeUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    usuarioDni?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    sede?: SedeUpdateOneRequiredWithoutUsuariosNestedInput
    encomienda?: EncomiendaUpdateManyWithoutUsuarioNestedInput
    boleto?: BoletoUpdateManyWithoutUsuarioNestedInput
    viaje?: ViajeUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    sedeId?: StringFieldUpdateOperationsInput | string
    usuarioDni?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    encomienda?: EncomiendaUncheckedUpdateManyWithoutUsuarioNestedInput
    boleto?: BoletoUncheckedUpdateManyWithoutUsuarioNestedInput
    viaje?: ViajeUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    username: string
    sedeId: string
    usuarioDni: string
    id?: string
    foto?: string
    telefono: string
    password: string
    nombres: string
    apellidos: string
    rol?: $Enums.Rol
    isDeleted?: boolean
  }

  export type UsuarioUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    usuarioDni?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    sedeId?: StringFieldUpdateOperationsInput | string
    usuarioDni?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ViajeCreateInput = {
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
    boletos?: BoletoCreateNestedManyWithoutViajeInput
    bus: BusCreateNestedOneWithoutViajeInput
    conductores?: ConductorCreateNestedManyWithoutViajeInput
    usuario: UsuarioCreateNestedOneWithoutViajeInput
    encomiendas?: EncomiendaCreateNestedManyWithoutViajeInput
    ruta: RutaCreateNestedOneWithoutViajeInput
  }

  export type ViajeUncheckedCreateInput = {
    busId: string
    usuarioId: string
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    rutaId: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
    boletos?: BoletoUncheckedCreateNestedManyWithoutViajeInput
    conductores?: ConductorUncheckedCreateNestedManyWithoutViajeInput
    encomiendas?: EncomiendaUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeUpdateInput = {
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
    boletos?: BoletoUpdateManyWithoutViajeNestedInput
    bus?: BusUpdateOneRequiredWithoutViajeNestedInput
    conductores?: ConductorUpdateManyWithoutViajeNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutViajeNestedInput
    encomiendas?: EncomiendaUpdateManyWithoutViajeNestedInput
    ruta?: RutaUpdateOneRequiredWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateInput = {
    busId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    rutaId?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
    boletos?: BoletoUncheckedUpdateManyWithoutViajeNestedInput
    conductores?: ConductorUncheckedUpdateManyWithoutViajeNestedInput
    encomiendas?: EncomiendaUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type ViajeCreateManyInput = {
    busId: string
    usuarioId: string
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    rutaId: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
  }

  export type ViajeUpdateManyMutationInput = {
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
  }

  export type ViajeUncheckedUpdateManyInput = {
    busId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    rutaId?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
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

  export type EnumSerieBoletoFilter<$PrismaModel = never> = {
    equals?: $Enums.SerieBoleto | EnumSerieBoletoFieldRefInput<$PrismaModel>
    in?: $Enums.SerieBoleto[] | ListEnumSerieBoletoFieldRefInput<$PrismaModel>
    notIn?: $Enums.SerieBoleto[] | ListEnumSerieBoletoFieldRefInput<$PrismaModel>
    not?: NestedEnumSerieBoletoFilter<$PrismaModel> | $Enums.SerieBoleto
  }

  export type EnumSerieFacturaFilter<$PrismaModel = never> = {
    equals?: $Enums.SerieFactura | EnumSerieFacturaFieldRefInput<$PrismaModel>
    in?: $Enums.SerieFactura[] | ListEnumSerieFacturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SerieFactura[] | ListEnumSerieFacturaFieldRefInput<$PrismaModel>
    not?: NestedEnumSerieFacturaFilter<$PrismaModel> | $Enums.SerieFactura
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

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SedeCountOrderByAggregateInput = {
    id?: SortOrder
    agenciaUbicacion?: SortOrder
    agencia?: SortOrder
    serieBoleto?: SortOrder
    serieFactura?: SortOrder
    contadorBoletos?: SortOrder
    contadorFacturas?: SortOrder
  }

  export type SedeAvgOrderByAggregateInput = {
    contadorBoletos?: SortOrder
    contadorFacturas?: SortOrder
  }

  export type SedeMaxOrderByAggregateInput = {
    id?: SortOrder
    agenciaUbicacion?: SortOrder
    agencia?: SortOrder
    serieBoleto?: SortOrder
    serieFactura?: SortOrder
    contadorBoletos?: SortOrder
    contadorFacturas?: SortOrder
  }

  export type SedeMinOrderByAggregateInput = {
    id?: SortOrder
    agenciaUbicacion?: SortOrder
    agencia?: SortOrder
    serieBoleto?: SortOrder
    serieFactura?: SortOrder
    contadorBoletos?: SortOrder
    contadorFacturas?: SortOrder
  }

  export type SedeSumOrderByAggregateInput = {
    contadorBoletos?: SortOrder
    contadorFacturas?: SortOrder
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

  export type EnumSerieBoletoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SerieBoleto | EnumSerieBoletoFieldRefInput<$PrismaModel>
    in?: $Enums.SerieBoleto[] | ListEnumSerieBoletoFieldRefInput<$PrismaModel>
    notIn?: $Enums.SerieBoleto[] | ListEnumSerieBoletoFieldRefInput<$PrismaModel>
    not?: NestedEnumSerieBoletoWithAggregatesFilter<$PrismaModel> | $Enums.SerieBoleto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSerieBoletoFilter<$PrismaModel>
    _max?: NestedEnumSerieBoletoFilter<$PrismaModel>
  }

  export type EnumSerieFacturaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SerieFactura | EnumSerieFacturaFieldRefInput<$PrismaModel>
    in?: $Enums.SerieFactura[] | ListEnumSerieFacturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SerieFactura[] | ListEnumSerieFacturaFieldRefInput<$PrismaModel>
    not?: NestedEnumSerieFacturaWithAggregatesFilter<$PrismaModel> | $Enums.SerieFactura
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSerieFacturaFilter<$PrismaModel>
    _max?: NestedEnumSerieFacturaFilter<$PrismaModel>
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

  export type EnumBoletoEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.BoletoEstado | EnumBoletoEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.BoletoEstado[] | ListEnumBoletoEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.BoletoEstado[] | ListEnumBoletoEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumBoletoEstadoFilter<$PrismaModel> | $Enums.BoletoEstado
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ViajeScalarRelationFilter = {
    is?: ViajeWhereInput
    isNot?: ViajeWhereInput
  }

  export type BoletoCountOrderByAggregateInput = {
    asiento?: SortOrder
    metodoPago?: SortOrder
    pasajeroDni?: SortOrder
    estado?: SortOrder
    pasajeroNombres?: SortOrder
    pasajeroApellidos?: SortOrder
    usuarioId?: SortOrder
    codigo?: SortOrder
    destino?: SortOrder
    fechaRegistro?: SortOrder
    id?: SortOrder
    precio?: SortOrder
    viajeId?: SortOrder
  }

  export type BoletoAvgOrderByAggregateInput = {
    asiento?: SortOrder
    precio?: SortOrder
  }

  export type BoletoMaxOrderByAggregateInput = {
    asiento?: SortOrder
    metodoPago?: SortOrder
    pasajeroDni?: SortOrder
    estado?: SortOrder
    pasajeroNombres?: SortOrder
    pasajeroApellidos?: SortOrder
    usuarioId?: SortOrder
    codigo?: SortOrder
    destino?: SortOrder
    fechaRegistro?: SortOrder
    id?: SortOrder
    precio?: SortOrder
    viajeId?: SortOrder
  }

  export type BoletoMinOrderByAggregateInput = {
    asiento?: SortOrder
    metodoPago?: SortOrder
    pasajeroDni?: SortOrder
    estado?: SortOrder
    pasajeroNombres?: SortOrder
    pasajeroApellidos?: SortOrder
    usuarioId?: SortOrder
    codigo?: SortOrder
    destino?: SortOrder
    fechaRegistro?: SortOrder
    id?: SortOrder
    precio?: SortOrder
    viajeId?: SortOrder
  }

  export type BoletoSumOrderByAggregateInput = {
    asiento?: SortOrder
    precio?: SortOrder
  }

  export type EnumBoletoEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoletoEstado | EnumBoletoEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.BoletoEstado[] | ListEnumBoletoEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.BoletoEstado[] | ListEnumBoletoEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumBoletoEstadoWithAggregatesFilter<$PrismaModel> | $Enums.BoletoEstado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBoletoEstadoFilter<$PrismaModel>
    _max?: NestedEnumBoletoEstadoFilter<$PrismaModel>
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

  export type ViajeListRelationFilter = {
    every?: ViajeWhereInput
    some?: ViajeWhereInput
    none?: ViajeWhereInput
  }

  export type ViajeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusCountOrderByAggregateInput = {
    id?: SortOrder
    asientos?: SortOrder
    fechaRegistro?: SortOrder
    foto?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
  }

  export type BusAvgOrderByAggregateInput = {
    asientos?: SortOrder
  }

  export type BusMaxOrderByAggregateInput = {
    id?: SortOrder
    asientos?: SortOrder
    fechaRegistro?: SortOrder
    foto?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
  }

  export type BusMinOrderByAggregateInput = {
    id?: SortOrder
    asientos?: SortOrder
    fechaRegistro?: SortOrder
    foto?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
  }

  export type BusSumOrderByAggregateInput = {
    asientos?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ViajeNullableScalarRelationFilter = {
    is?: ViajeWhereInput | null
    isNot?: ViajeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConductorCountOrderByAggregateInput = {
    claseLicencia?: SortOrder
    conductorDni?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    disponibilidad?: SortOrder
    foto?: SortOrder
    id?: SortOrder
    numeroLicencia?: SortOrder
    telefono?: SortOrder
    viajeId?: SortOrder
  }

  export type ConductorMaxOrderByAggregateInput = {
    claseLicencia?: SortOrder
    conductorDni?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    disponibilidad?: SortOrder
    foto?: SortOrder
    id?: SortOrder
    numeroLicencia?: SortOrder
    telefono?: SortOrder
    viajeId?: SortOrder
  }

  export type ConductorMinOrderByAggregateInput = {
    claseLicencia?: SortOrder
    conductorDni?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    disponibilidad?: SortOrder
    foto?: SortOrder
    id?: SortOrder
    numeroLicencia?: SortOrder
    telefono?: SortOrder
    viajeId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumSerieEncomiendaFilter<$PrismaModel = never> = {
    equals?: $Enums.SerieEncomienda | EnumSerieEncomiendaFieldRefInput<$PrismaModel>
    in?: $Enums.SerieEncomienda[] | ListEnumSerieEncomiendaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SerieEncomienda[] | ListEnumSerieEncomiendaFieldRefInput<$PrismaModel>
    not?: NestedEnumSerieEncomiendaFilter<$PrismaModel> | $Enums.SerieEncomienda
  }

  export type EncomiendaCountOrderByAggregateInput = {
    destino?: SortOrder
    numero?: SortOrder
    serie?: SortOrder
    descripcion?: SortOrder
    usuarioId?: SortOrder
    codigoRastreo?: SortOrder
    destinatarioDni?: SortOrder
    destinatarioNombres?: SortOrder
    destinatarioApellidos?: SortOrder
    remitenteNombres?: SortOrder
    remitenteDni?: SortOrder
    remitenteApellidos?: SortOrder
    factura?: SortOrder
    razonSocial?: SortOrder
    ruc?: SortOrder
    fechaEnvio?: SortOrder
    fechaRecepcion?: SortOrder
    id?: SortOrder
    pagado?: SortOrder
    precio?: SortOrder
    viajeId?: SortOrder
  }

  export type EncomiendaAvgOrderByAggregateInput = {
    numero?: SortOrder
    precio?: SortOrder
  }

  export type EncomiendaMaxOrderByAggregateInput = {
    destino?: SortOrder
    numero?: SortOrder
    serie?: SortOrder
    descripcion?: SortOrder
    usuarioId?: SortOrder
    codigoRastreo?: SortOrder
    destinatarioDni?: SortOrder
    destinatarioNombres?: SortOrder
    destinatarioApellidos?: SortOrder
    remitenteNombres?: SortOrder
    remitenteDni?: SortOrder
    remitenteApellidos?: SortOrder
    factura?: SortOrder
    razonSocial?: SortOrder
    ruc?: SortOrder
    fechaEnvio?: SortOrder
    fechaRecepcion?: SortOrder
    id?: SortOrder
    pagado?: SortOrder
    precio?: SortOrder
    viajeId?: SortOrder
  }

  export type EncomiendaMinOrderByAggregateInput = {
    destino?: SortOrder
    numero?: SortOrder
    serie?: SortOrder
    descripcion?: SortOrder
    usuarioId?: SortOrder
    codigoRastreo?: SortOrder
    destinatarioDni?: SortOrder
    destinatarioNombres?: SortOrder
    destinatarioApellidos?: SortOrder
    remitenteNombres?: SortOrder
    remitenteDni?: SortOrder
    remitenteApellidos?: SortOrder
    factura?: SortOrder
    razonSocial?: SortOrder
    ruc?: SortOrder
    fechaEnvio?: SortOrder
    fechaRecepcion?: SortOrder
    id?: SortOrder
    pagado?: SortOrder
    precio?: SortOrder
    viajeId?: SortOrder
  }

  export type EncomiendaSumOrderByAggregateInput = {
    numero?: SortOrder
    precio?: SortOrder
  }

  export type EnumSerieEncomiendaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SerieEncomienda | EnumSerieEncomiendaFieldRefInput<$PrismaModel>
    in?: $Enums.SerieEncomienda[] | ListEnumSerieEncomiendaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SerieEncomienda[] | ListEnumSerieEncomiendaFieldRefInput<$PrismaModel>
    not?: NestedEnumSerieEncomiendaWithAggregatesFilter<$PrismaModel> | $Enums.SerieEncomienda
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSerieEncomiendaFilter<$PrismaModel>
    _max?: NestedEnumSerieEncomiendaFilter<$PrismaModel>
  }

  export type RutaCountOrderByAggregateInput = {
    ciudadDestino?: SortOrder
    ciudadOrigen?: SortOrder
    duracionEstimada?: SortOrder
    id?: SortOrder
    terminalDestino?: SortOrder
    terminalOrigen?: SortOrder
  }

  export type RutaAvgOrderByAggregateInput = {
    duracionEstimada?: SortOrder
  }

  export type RutaMaxOrderByAggregateInput = {
    ciudadDestino?: SortOrder
    ciudadOrigen?: SortOrder
    duracionEstimada?: SortOrder
    id?: SortOrder
    terminalDestino?: SortOrder
    terminalOrigen?: SortOrder
  }

  export type RutaMinOrderByAggregateInput = {
    ciudadDestino?: SortOrder
    ciudadOrigen?: SortOrder
    duracionEstimada?: SortOrder
    id?: SortOrder
    terminalDestino?: SortOrder
    terminalOrigen?: SortOrder
  }

  export type RutaSumOrderByAggregateInput = {
    duracionEstimada?: SortOrder
  }

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type SedeScalarRelationFilter = {
    is?: SedeWhereInput
    isNot?: SedeWhereInput
  }

  export type EncomiendaListRelationFilter = {
    every?: EncomiendaWhereInput
    some?: EncomiendaWhereInput
    none?: EncomiendaWhereInput
  }

  export type BoletoListRelationFilter = {
    every?: BoletoWhereInput
    some?: BoletoWhereInput
    none?: BoletoWhereInput
  }

  export type EncomiendaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoletoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    username?: SortOrder
    sedeId?: SortOrder
    usuarioDni?: SortOrder
    id?: SortOrder
    foto?: SortOrder
    telefono?: SortOrder
    password?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    rol?: SortOrder
    isDeleted?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    username?: SortOrder
    sedeId?: SortOrder
    usuarioDni?: SortOrder
    id?: SortOrder
    foto?: SortOrder
    telefono?: SortOrder
    password?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    rol?: SortOrder
    isDeleted?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    username?: SortOrder
    sedeId?: SortOrder
    usuarioDni?: SortOrder
    id?: SortOrder
    foto?: SortOrder
    telefono?: SortOrder
    password?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    rol?: SortOrder
    isDeleted?: SortOrder
  }

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type EnumViajeEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.ViajeEstado | EnumViajeEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.ViajeEstado[] | ListEnumViajeEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViajeEstado[] | ListEnumViajeEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumViajeEstadoFilter<$PrismaModel> | $Enums.ViajeEstado
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BusScalarRelationFilter = {
    is?: BusWhereInput
    isNot?: BusWhereInput
  }

  export type ConductorListRelationFilter = {
    every?: ConductorWhereInput
    some?: ConductorWhereInput
    none?: ConductorWhereInput
  }

  export type RutaScalarRelationFilter = {
    is?: RutaWhereInput
    isNot?: RutaWhereInput
  }

  export type ConductorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViajeCountOrderByAggregateInput = {
    busId?: SortOrder
    usuarioId?: SortOrder
    estado?: SortOrder
    salida?: SortOrder
    id?: SortOrder
    rutaId?: SortOrder
    tarifas?: SortOrder
    tarifaGeneral?: SortOrder
  }

  export type ViajeAvgOrderByAggregateInput = {
    tarifas?: SortOrder
    tarifaGeneral?: SortOrder
  }

  export type ViajeMaxOrderByAggregateInput = {
    busId?: SortOrder
    usuarioId?: SortOrder
    estado?: SortOrder
    salida?: SortOrder
    id?: SortOrder
    rutaId?: SortOrder
    tarifaGeneral?: SortOrder
  }

  export type ViajeMinOrderByAggregateInput = {
    busId?: SortOrder
    usuarioId?: SortOrder
    estado?: SortOrder
    salida?: SortOrder
    id?: SortOrder
    rutaId?: SortOrder
    tarifaGeneral?: SortOrder
  }

  export type ViajeSumOrderByAggregateInput = {
    tarifas?: SortOrder
    tarifaGeneral?: SortOrder
  }

  export type EnumViajeEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViajeEstado | EnumViajeEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.ViajeEstado[] | ListEnumViajeEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViajeEstado[] | ListEnumViajeEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumViajeEstadoWithAggregatesFilter<$PrismaModel> | $Enums.ViajeEstado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViajeEstadoFilter<$PrismaModel>
    _max?: NestedEnumViajeEstadoFilter<$PrismaModel>
  }

  export type UsuarioCreateNestedManyWithoutSedeInput = {
    create?: XOR<UsuarioCreateWithoutSedeInput, UsuarioUncheckedCreateWithoutSedeInput> | UsuarioCreateWithoutSedeInput[] | UsuarioUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutSedeInput | UsuarioCreateOrConnectWithoutSedeInput[]
    createMany?: UsuarioCreateManySedeInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutSedeInput = {
    create?: XOR<UsuarioCreateWithoutSedeInput, UsuarioUncheckedCreateWithoutSedeInput> | UsuarioCreateWithoutSedeInput[] | UsuarioUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutSedeInput | UsuarioCreateOrConnectWithoutSedeInput[]
    createMany?: UsuarioCreateManySedeInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumSerieBoletoFieldUpdateOperationsInput = {
    set?: $Enums.SerieBoleto
  }

  export type EnumSerieFacturaFieldUpdateOperationsInput = {
    set?: $Enums.SerieFactura
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateManyWithoutSedeNestedInput = {
    create?: XOR<UsuarioCreateWithoutSedeInput, UsuarioUncheckedCreateWithoutSedeInput> | UsuarioCreateWithoutSedeInput[] | UsuarioUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutSedeInput | UsuarioCreateOrConnectWithoutSedeInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutSedeInput | UsuarioUpsertWithWhereUniqueWithoutSedeInput[]
    createMany?: UsuarioCreateManySedeInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutSedeInput | UsuarioUpdateWithWhereUniqueWithoutSedeInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutSedeInput | UsuarioUpdateManyWithWhereWithoutSedeInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutSedeNestedInput = {
    create?: XOR<UsuarioCreateWithoutSedeInput, UsuarioUncheckedCreateWithoutSedeInput> | UsuarioCreateWithoutSedeInput[] | UsuarioUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutSedeInput | UsuarioCreateOrConnectWithoutSedeInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutSedeInput | UsuarioUpsertWithWhereUniqueWithoutSedeInput[]
    createMany?: UsuarioCreateManySedeInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutSedeInput | UsuarioUpdateWithWhereUniqueWithoutSedeInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutSedeInput | UsuarioUpdateManyWithWhereWithoutSedeInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutBoletoInput = {
    create?: XOR<UsuarioCreateWithoutBoletoInput, UsuarioUncheckedCreateWithoutBoletoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutBoletoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ViajeCreateNestedOneWithoutBoletosInput = {
    create?: XOR<ViajeCreateWithoutBoletosInput, ViajeUncheckedCreateWithoutBoletosInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutBoletosInput
    connect?: ViajeWhereUniqueInput
  }

  export type EnumBoletoEstadoFieldUpdateOperationsInput = {
    set?: $Enums.BoletoEstado
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateOneRequiredWithoutBoletoNestedInput = {
    create?: XOR<UsuarioCreateWithoutBoletoInput, UsuarioUncheckedCreateWithoutBoletoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutBoletoInput
    upsert?: UsuarioUpsertWithoutBoletoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutBoletoInput, UsuarioUpdateWithoutBoletoInput>, UsuarioUncheckedUpdateWithoutBoletoInput>
  }

  export type ViajeUpdateOneRequiredWithoutBoletosNestedInput = {
    create?: XOR<ViajeCreateWithoutBoletosInput, ViajeUncheckedCreateWithoutBoletosInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutBoletosInput
    upsert?: ViajeUpsertWithoutBoletosInput
    connect?: ViajeWhereUniqueInput
    update?: XOR<XOR<ViajeUpdateToOneWithWhereWithoutBoletosInput, ViajeUpdateWithoutBoletosInput>, ViajeUncheckedUpdateWithoutBoletosInput>
  }

  export type ViajeCreateNestedManyWithoutBusInput = {
    create?: XOR<ViajeCreateWithoutBusInput, ViajeUncheckedCreateWithoutBusInput> | ViajeCreateWithoutBusInput[] | ViajeUncheckedCreateWithoutBusInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutBusInput | ViajeCreateOrConnectWithoutBusInput[]
    createMany?: ViajeCreateManyBusInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type ViajeUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<ViajeCreateWithoutBusInput, ViajeUncheckedCreateWithoutBusInput> | ViajeCreateWithoutBusInput[] | ViajeUncheckedCreateWithoutBusInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutBusInput | ViajeCreateOrConnectWithoutBusInput[]
    createMany?: ViajeCreateManyBusInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type ViajeUpdateManyWithoutBusNestedInput = {
    create?: XOR<ViajeCreateWithoutBusInput, ViajeUncheckedCreateWithoutBusInput> | ViajeCreateWithoutBusInput[] | ViajeUncheckedCreateWithoutBusInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutBusInput | ViajeCreateOrConnectWithoutBusInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutBusInput | ViajeUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: ViajeCreateManyBusInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutBusInput | ViajeUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutBusInput | ViajeUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type ViajeUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<ViajeCreateWithoutBusInput, ViajeUncheckedCreateWithoutBusInput> | ViajeCreateWithoutBusInput[] | ViajeUncheckedCreateWithoutBusInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutBusInput | ViajeCreateOrConnectWithoutBusInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutBusInput | ViajeUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: ViajeCreateManyBusInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutBusInput | ViajeUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutBusInput | ViajeUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type ViajeCreateNestedOneWithoutConductoresInput = {
    create?: XOR<ViajeCreateWithoutConductoresInput, ViajeUncheckedCreateWithoutConductoresInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutConductoresInput
    connect?: ViajeWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ViajeUpdateOneWithoutConductoresNestedInput = {
    create?: XOR<ViajeCreateWithoutConductoresInput, ViajeUncheckedCreateWithoutConductoresInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutConductoresInput
    upsert?: ViajeUpsertWithoutConductoresInput
    disconnect?: ViajeWhereInput | boolean
    delete?: ViajeWhereInput | boolean
    connect?: ViajeWhereUniqueInput
    update?: XOR<XOR<ViajeUpdateToOneWithWhereWithoutConductoresInput, ViajeUpdateWithoutConductoresInput>, ViajeUncheckedUpdateWithoutConductoresInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioCreateNestedOneWithoutEncomiendaInput = {
    create?: XOR<UsuarioCreateWithoutEncomiendaInput, UsuarioUncheckedCreateWithoutEncomiendaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEncomiendaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ViajeCreateNestedOneWithoutEncomiendasInput = {
    create?: XOR<ViajeCreateWithoutEncomiendasInput, ViajeUncheckedCreateWithoutEncomiendasInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutEncomiendasInput
    connect?: ViajeWhereUniqueInput
  }

  export type EnumSerieEncomiendaFieldUpdateOperationsInput = {
    set?: $Enums.SerieEncomienda
  }

  export type UsuarioUpdateOneRequiredWithoutEncomiendaNestedInput = {
    create?: XOR<UsuarioCreateWithoutEncomiendaInput, UsuarioUncheckedCreateWithoutEncomiendaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEncomiendaInput
    upsert?: UsuarioUpsertWithoutEncomiendaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEncomiendaInput, UsuarioUpdateWithoutEncomiendaInput>, UsuarioUncheckedUpdateWithoutEncomiendaInput>
  }

  export type ViajeUpdateOneRequiredWithoutEncomiendasNestedInput = {
    create?: XOR<ViajeCreateWithoutEncomiendasInput, ViajeUncheckedCreateWithoutEncomiendasInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutEncomiendasInput
    upsert?: ViajeUpsertWithoutEncomiendasInput
    connect?: ViajeWhereUniqueInput
    update?: XOR<XOR<ViajeUpdateToOneWithWhereWithoutEncomiendasInput, ViajeUpdateWithoutEncomiendasInput>, ViajeUncheckedUpdateWithoutEncomiendasInput>
  }

  export type ViajeCreateNestedManyWithoutRutaInput = {
    create?: XOR<ViajeCreateWithoutRutaInput, ViajeUncheckedCreateWithoutRutaInput> | ViajeCreateWithoutRutaInput[] | ViajeUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutRutaInput | ViajeCreateOrConnectWithoutRutaInput[]
    createMany?: ViajeCreateManyRutaInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type ViajeUncheckedCreateNestedManyWithoutRutaInput = {
    create?: XOR<ViajeCreateWithoutRutaInput, ViajeUncheckedCreateWithoutRutaInput> | ViajeCreateWithoutRutaInput[] | ViajeUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutRutaInput | ViajeCreateOrConnectWithoutRutaInput[]
    createMany?: ViajeCreateManyRutaInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type ViajeUpdateManyWithoutRutaNestedInput = {
    create?: XOR<ViajeCreateWithoutRutaInput, ViajeUncheckedCreateWithoutRutaInput> | ViajeCreateWithoutRutaInput[] | ViajeUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutRutaInput | ViajeCreateOrConnectWithoutRutaInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutRutaInput | ViajeUpsertWithWhereUniqueWithoutRutaInput[]
    createMany?: ViajeCreateManyRutaInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutRutaInput | ViajeUpdateWithWhereUniqueWithoutRutaInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutRutaInput | ViajeUpdateManyWithWhereWithoutRutaInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type ViajeUncheckedUpdateManyWithoutRutaNestedInput = {
    create?: XOR<ViajeCreateWithoutRutaInput, ViajeUncheckedCreateWithoutRutaInput> | ViajeCreateWithoutRutaInput[] | ViajeUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutRutaInput | ViajeCreateOrConnectWithoutRutaInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutRutaInput | ViajeUpsertWithWhereUniqueWithoutRutaInput[]
    createMany?: ViajeCreateManyRutaInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutRutaInput | ViajeUpdateWithWhereUniqueWithoutRutaInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutRutaInput | ViajeUpdateManyWithWhereWithoutRutaInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type SedeCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<SedeCreateWithoutUsuariosInput, SedeUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: SedeCreateOrConnectWithoutUsuariosInput
    connect?: SedeWhereUniqueInput
  }

  export type EncomiendaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EncomiendaCreateWithoutUsuarioInput, EncomiendaUncheckedCreateWithoutUsuarioInput> | EncomiendaCreateWithoutUsuarioInput[] | EncomiendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EncomiendaCreateOrConnectWithoutUsuarioInput | EncomiendaCreateOrConnectWithoutUsuarioInput[]
    createMany?: EncomiendaCreateManyUsuarioInputEnvelope
    connect?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
  }

  export type BoletoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<BoletoCreateWithoutUsuarioInput, BoletoUncheckedCreateWithoutUsuarioInput> | BoletoCreateWithoutUsuarioInput[] | BoletoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutUsuarioInput | BoletoCreateOrConnectWithoutUsuarioInput[]
    createMany?: BoletoCreateManyUsuarioInputEnvelope
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
  }

  export type ViajeCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ViajeCreateWithoutUsuarioInput, ViajeUncheckedCreateWithoutUsuarioInput> | ViajeCreateWithoutUsuarioInput[] | ViajeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutUsuarioInput | ViajeCreateOrConnectWithoutUsuarioInput[]
    createMany?: ViajeCreateManyUsuarioInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type EncomiendaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EncomiendaCreateWithoutUsuarioInput, EncomiendaUncheckedCreateWithoutUsuarioInput> | EncomiendaCreateWithoutUsuarioInput[] | EncomiendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EncomiendaCreateOrConnectWithoutUsuarioInput | EncomiendaCreateOrConnectWithoutUsuarioInput[]
    createMany?: EncomiendaCreateManyUsuarioInputEnvelope
    connect?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
  }

  export type BoletoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<BoletoCreateWithoutUsuarioInput, BoletoUncheckedCreateWithoutUsuarioInput> | BoletoCreateWithoutUsuarioInput[] | BoletoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutUsuarioInput | BoletoCreateOrConnectWithoutUsuarioInput[]
    createMany?: BoletoCreateManyUsuarioInputEnvelope
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
  }

  export type ViajeUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ViajeCreateWithoutUsuarioInput, ViajeUncheckedCreateWithoutUsuarioInput> | ViajeCreateWithoutUsuarioInput[] | ViajeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutUsuarioInput | ViajeCreateOrConnectWithoutUsuarioInput[]
    createMany?: ViajeCreateManyUsuarioInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type SedeUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<SedeCreateWithoutUsuariosInput, SedeUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: SedeCreateOrConnectWithoutUsuariosInput
    upsert?: SedeUpsertWithoutUsuariosInput
    connect?: SedeWhereUniqueInput
    update?: XOR<XOR<SedeUpdateToOneWithWhereWithoutUsuariosInput, SedeUpdateWithoutUsuariosInput>, SedeUncheckedUpdateWithoutUsuariosInput>
  }

  export type EncomiendaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EncomiendaCreateWithoutUsuarioInput, EncomiendaUncheckedCreateWithoutUsuarioInput> | EncomiendaCreateWithoutUsuarioInput[] | EncomiendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EncomiendaCreateOrConnectWithoutUsuarioInput | EncomiendaCreateOrConnectWithoutUsuarioInput[]
    upsert?: EncomiendaUpsertWithWhereUniqueWithoutUsuarioInput | EncomiendaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EncomiendaCreateManyUsuarioInputEnvelope
    set?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    disconnect?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    delete?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    connect?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    update?: EncomiendaUpdateWithWhereUniqueWithoutUsuarioInput | EncomiendaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EncomiendaUpdateManyWithWhereWithoutUsuarioInput | EncomiendaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EncomiendaScalarWhereInput | EncomiendaScalarWhereInput[]
  }

  export type BoletoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<BoletoCreateWithoutUsuarioInput, BoletoUncheckedCreateWithoutUsuarioInput> | BoletoCreateWithoutUsuarioInput[] | BoletoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutUsuarioInput | BoletoCreateOrConnectWithoutUsuarioInput[]
    upsert?: BoletoUpsertWithWhereUniqueWithoutUsuarioInput | BoletoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: BoletoCreateManyUsuarioInputEnvelope
    set?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    disconnect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    delete?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    update?: BoletoUpdateWithWhereUniqueWithoutUsuarioInput | BoletoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: BoletoUpdateManyWithWhereWithoutUsuarioInput | BoletoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
  }

  export type ViajeUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ViajeCreateWithoutUsuarioInput, ViajeUncheckedCreateWithoutUsuarioInput> | ViajeCreateWithoutUsuarioInput[] | ViajeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutUsuarioInput | ViajeCreateOrConnectWithoutUsuarioInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutUsuarioInput | ViajeUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ViajeCreateManyUsuarioInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutUsuarioInput | ViajeUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutUsuarioInput | ViajeUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type EncomiendaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EncomiendaCreateWithoutUsuarioInput, EncomiendaUncheckedCreateWithoutUsuarioInput> | EncomiendaCreateWithoutUsuarioInput[] | EncomiendaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EncomiendaCreateOrConnectWithoutUsuarioInput | EncomiendaCreateOrConnectWithoutUsuarioInput[]
    upsert?: EncomiendaUpsertWithWhereUniqueWithoutUsuarioInput | EncomiendaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EncomiendaCreateManyUsuarioInputEnvelope
    set?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    disconnect?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    delete?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    connect?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    update?: EncomiendaUpdateWithWhereUniqueWithoutUsuarioInput | EncomiendaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EncomiendaUpdateManyWithWhereWithoutUsuarioInput | EncomiendaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EncomiendaScalarWhereInput | EncomiendaScalarWhereInput[]
  }

  export type BoletoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<BoletoCreateWithoutUsuarioInput, BoletoUncheckedCreateWithoutUsuarioInput> | BoletoCreateWithoutUsuarioInput[] | BoletoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutUsuarioInput | BoletoCreateOrConnectWithoutUsuarioInput[]
    upsert?: BoletoUpsertWithWhereUniqueWithoutUsuarioInput | BoletoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: BoletoCreateManyUsuarioInputEnvelope
    set?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    disconnect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    delete?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    update?: BoletoUpdateWithWhereUniqueWithoutUsuarioInput | BoletoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: BoletoUpdateManyWithWhereWithoutUsuarioInput | BoletoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
  }

  export type ViajeUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ViajeCreateWithoutUsuarioInput, ViajeUncheckedCreateWithoutUsuarioInput> | ViajeCreateWithoutUsuarioInput[] | ViajeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutUsuarioInput | ViajeCreateOrConnectWithoutUsuarioInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutUsuarioInput | ViajeUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ViajeCreateManyUsuarioInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutUsuarioInput | ViajeUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutUsuarioInput | ViajeUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type ViajeCreatetarifasInput = {
    set: number[]
  }

  export type BoletoCreateNestedManyWithoutViajeInput = {
    create?: XOR<BoletoCreateWithoutViajeInput, BoletoUncheckedCreateWithoutViajeInput> | BoletoCreateWithoutViajeInput[] | BoletoUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutViajeInput | BoletoCreateOrConnectWithoutViajeInput[]
    createMany?: BoletoCreateManyViajeInputEnvelope
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
  }

  export type BusCreateNestedOneWithoutViajeInput = {
    create?: XOR<BusCreateWithoutViajeInput, BusUncheckedCreateWithoutViajeInput>
    connectOrCreate?: BusCreateOrConnectWithoutViajeInput
    connect?: BusWhereUniqueInput
  }

  export type ConductorCreateNestedManyWithoutViajeInput = {
    create?: XOR<ConductorCreateWithoutViajeInput, ConductorUncheckedCreateWithoutViajeInput> | ConductorCreateWithoutViajeInput[] | ConductorUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: ConductorCreateOrConnectWithoutViajeInput | ConductorCreateOrConnectWithoutViajeInput[]
    createMany?: ConductorCreateManyViajeInputEnvelope
    connect?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutViajeInput = {
    create?: XOR<UsuarioCreateWithoutViajeInput, UsuarioUncheckedCreateWithoutViajeInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutViajeInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EncomiendaCreateNestedManyWithoutViajeInput = {
    create?: XOR<EncomiendaCreateWithoutViajeInput, EncomiendaUncheckedCreateWithoutViajeInput> | EncomiendaCreateWithoutViajeInput[] | EncomiendaUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: EncomiendaCreateOrConnectWithoutViajeInput | EncomiendaCreateOrConnectWithoutViajeInput[]
    createMany?: EncomiendaCreateManyViajeInputEnvelope
    connect?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
  }

  export type RutaCreateNestedOneWithoutViajeInput = {
    create?: XOR<RutaCreateWithoutViajeInput, RutaUncheckedCreateWithoutViajeInput>
    connectOrCreate?: RutaCreateOrConnectWithoutViajeInput
    connect?: RutaWhereUniqueInput
  }

  export type BoletoUncheckedCreateNestedManyWithoutViajeInput = {
    create?: XOR<BoletoCreateWithoutViajeInput, BoletoUncheckedCreateWithoutViajeInput> | BoletoCreateWithoutViajeInput[] | BoletoUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutViajeInput | BoletoCreateOrConnectWithoutViajeInput[]
    createMany?: BoletoCreateManyViajeInputEnvelope
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
  }

  export type ConductorUncheckedCreateNestedManyWithoutViajeInput = {
    create?: XOR<ConductorCreateWithoutViajeInput, ConductorUncheckedCreateWithoutViajeInput> | ConductorCreateWithoutViajeInput[] | ConductorUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: ConductorCreateOrConnectWithoutViajeInput | ConductorCreateOrConnectWithoutViajeInput[]
    createMany?: ConductorCreateManyViajeInputEnvelope
    connect?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
  }

  export type EncomiendaUncheckedCreateNestedManyWithoutViajeInput = {
    create?: XOR<EncomiendaCreateWithoutViajeInput, EncomiendaUncheckedCreateWithoutViajeInput> | EncomiendaCreateWithoutViajeInput[] | EncomiendaUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: EncomiendaCreateOrConnectWithoutViajeInput | EncomiendaCreateOrConnectWithoutViajeInput[]
    createMany?: EncomiendaCreateManyViajeInputEnvelope
    connect?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
  }

  export type EnumViajeEstadoFieldUpdateOperationsInput = {
    set?: $Enums.ViajeEstado
  }

  export type ViajeUpdatetarifasInput = {
    set?: number[]
    push?: number | number[]
  }

  export type BoletoUpdateManyWithoutViajeNestedInput = {
    create?: XOR<BoletoCreateWithoutViajeInput, BoletoUncheckedCreateWithoutViajeInput> | BoletoCreateWithoutViajeInput[] | BoletoUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutViajeInput | BoletoCreateOrConnectWithoutViajeInput[]
    upsert?: BoletoUpsertWithWhereUniqueWithoutViajeInput | BoletoUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: BoletoCreateManyViajeInputEnvelope
    set?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    disconnect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    delete?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    update?: BoletoUpdateWithWhereUniqueWithoutViajeInput | BoletoUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: BoletoUpdateManyWithWhereWithoutViajeInput | BoletoUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
  }

  export type BusUpdateOneRequiredWithoutViajeNestedInput = {
    create?: XOR<BusCreateWithoutViajeInput, BusUncheckedCreateWithoutViajeInput>
    connectOrCreate?: BusCreateOrConnectWithoutViajeInput
    upsert?: BusUpsertWithoutViajeInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutViajeInput, BusUpdateWithoutViajeInput>, BusUncheckedUpdateWithoutViajeInput>
  }

  export type ConductorUpdateManyWithoutViajeNestedInput = {
    create?: XOR<ConductorCreateWithoutViajeInput, ConductorUncheckedCreateWithoutViajeInput> | ConductorCreateWithoutViajeInput[] | ConductorUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: ConductorCreateOrConnectWithoutViajeInput | ConductorCreateOrConnectWithoutViajeInput[]
    upsert?: ConductorUpsertWithWhereUniqueWithoutViajeInput | ConductorUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: ConductorCreateManyViajeInputEnvelope
    set?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    disconnect?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    delete?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    connect?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    update?: ConductorUpdateWithWhereUniqueWithoutViajeInput | ConductorUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: ConductorUpdateManyWithWhereWithoutViajeInput | ConductorUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: ConductorScalarWhereInput | ConductorScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutViajeNestedInput = {
    create?: XOR<UsuarioCreateWithoutViajeInput, UsuarioUncheckedCreateWithoutViajeInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutViajeInput
    upsert?: UsuarioUpsertWithoutViajeInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutViajeInput, UsuarioUpdateWithoutViajeInput>, UsuarioUncheckedUpdateWithoutViajeInput>
  }

  export type EncomiendaUpdateManyWithoutViajeNestedInput = {
    create?: XOR<EncomiendaCreateWithoutViajeInput, EncomiendaUncheckedCreateWithoutViajeInput> | EncomiendaCreateWithoutViajeInput[] | EncomiendaUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: EncomiendaCreateOrConnectWithoutViajeInput | EncomiendaCreateOrConnectWithoutViajeInput[]
    upsert?: EncomiendaUpsertWithWhereUniqueWithoutViajeInput | EncomiendaUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: EncomiendaCreateManyViajeInputEnvelope
    set?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    disconnect?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    delete?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    connect?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    update?: EncomiendaUpdateWithWhereUniqueWithoutViajeInput | EncomiendaUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: EncomiendaUpdateManyWithWhereWithoutViajeInput | EncomiendaUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: EncomiendaScalarWhereInput | EncomiendaScalarWhereInput[]
  }

  export type RutaUpdateOneRequiredWithoutViajeNestedInput = {
    create?: XOR<RutaCreateWithoutViajeInput, RutaUncheckedCreateWithoutViajeInput>
    connectOrCreate?: RutaCreateOrConnectWithoutViajeInput
    upsert?: RutaUpsertWithoutViajeInput
    connect?: RutaWhereUniqueInput
    update?: XOR<XOR<RutaUpdateToOneWithWhereWithoutViajeInput, RutaUpdateWithoutViajeInput>, RutaUncheckedUpdateWithoutViajeInput>
  }

  export type BoletoUncheckedUpdateManyWithoutViajeNestedInput = {
    create?: XOR<BoletoCreateWithoutViajeInput, BoletoUncheckedCreateWithoutViajeInput> | BoletoCreateWithoutViajeInput[] | BoletoUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutViajeInput | BoletoCreateOrConnectWithoutViajeInput[]
    upsert?: BoletoUpsertWithWhereUniqueWithoutViajeInput | BoletoUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: BoletoCreateManyViajeInputEnvelope
    set?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    disconnect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    delete?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    update?: BoletoUpdateWithWhereUniqueWithoutViajeInput | BoletoUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: BoletoUpdateManyWithWhereWithoutViajeInput | BoletoUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
  }

  export type ConductorUncheckedUpdateManyWithoutViajeNestedInput = {
    create?: XOR<ConductorCreateWithoutViajeInput, ConductorUncheckedCreateWithoutViajeInput> | ConductorCreateWithoutViajeInput[] | ConductorUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: ConductorCreateOrConnectWithoutViajeInput | ConductorCreateOrConnectWithoutViajeInput[]
    upsert?: ConductorUpsertWithWhereUniqueWithoutViajeInput | ConductorUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: ConductorCreateManyViajeInputEnvelope
    set?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    disconnect?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    delete?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    connect?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    update?: ConductorUpdateWithWhereUniqueWithoutViajeInput | ConductorUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: ConductorUpdateManyWithWhereWithoutViajeInput | ConductorUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: ConductorScalarWhereInput | ConductorScalarWhereInput[]
  }

  export type EncomiendaUncheckedUpdateManyWithoutViajeNestedInput = {
    create?: XOR<EncomiendaCreateWithoutViajeInput, EncomiendaUncheckedCreateWithoutViajeInput> | EncomiendaCreateWithoutViajeInput[] | EncomiendaUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: EncomiendaCreateOrConnectWithoutViajeInput | EncomiendaCreateOrConnectWithoutViajeInput[]
    upsert?: EncomiendaUpsertWithWhereUniqueWithoutViajeInput | EncomiendaUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: EncomiendaCreateManyViajeInputEnvelope
    set?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    disconnect?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    delete?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    connect?: EncomiendaWhereUniqueInput | EncomiendaWhereUniqueInput[]
    update?: EncomiendaUpdateWithWhereUniqueWithoutViajeInput | EncomiendaUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: EncomiendaUpdateManyWithWhereWithoutViajeInput | EncomiendaUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: EncomiendaScalarWhereInput | EncomiendaScalarWhereInput[]
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

  export type NestedEnumSerieBoletoFilter<$PrismaModel = never> = {
    equals?: $Enums.SerieBoleto | EnumSerieBoletoFieldRefInput<$PrismaModel>
    in?: $Enums.SerieBoleto[] | ListEnumSerieBoletoFieldRefInput<$PrismaModel>
    notIn?: $Enums.SerieBoleto[] | ListEnumSerieBoletoFieldRefInput<$PrismaModel>
    not?: NestedEnumSerieBoletoFilter<$PrismaModel> | $Enums.SerieBoleto
  }

  export type NestedEnumSerieFacturaFilter<$PrismaModel = never> = {
    equals?: $Enums.SerieFactura | EnumSerieFacturaFieldRefInput<$PrismaModel>
    in?: $Enums.SerieFactura[] | ListEnumSerieFacturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SerieFactura[] | ListEnumSerieFacturaFieldRefInput<$PrismaModel>
    not?: NestedEnumSerieFacturaFilter<$PrismaModel> | $Enums.SerieFactura
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

  export type NestedEnumSerieBoletoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SerieBoleto | EnumSerieBoletoFieldRefInput<$PrismaModel>
    in?: $Enums.SerieBoleto[] | ListEnumSerieBoletoFieldRefInput<$PrismaModel>
    notIn?: $Enums.SerieBoleto[] | ListEnumSerieBoletoFieldRefInput<$PrismaModel>
    not?: NestedEnumSerieBoletoWithAggregatesFilter<$PrismaModel> | $Enums.SerieBoleto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSerieBoletoFilter<$PrismaModel>
    _max?: NestedEnumSerieBoletoFilter<$PrismaModel>
  }

  export type NestedEnumSerieFacturaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SerieFactura | EnumSerieFacturaFieldRefInput<$PrismaModel>
    in?: $Enums.SerieFactura[] | ListEnumSerieFacturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SerieFactura[] | ListEnumSerieFacturaFieldRefInput<$PrismaModel>
    not?: NestedEnumSerieFacturaWithAggregatesFilter<$PrismaModel> | $Enums.SerieFactura
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSerieFacturaFilter<$PrismaModel>
    _max?: NestedEnumSerieFacturaFilter<$PrismaModel>
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

  export type NestedEnumBoletoEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.BoletoEstado | EnumBoletoEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.BoletoEstado[] | ListEnumBoletoEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.BoletoEstado[] | ListEnumBoletoEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumBoletoEstadoFilter<$PrismaModel> | $Enums.BoletoEstado
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

  export type NestedEnumBoletoEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoletoEstado | EnumBoletoEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.BoletoEstado[] | ListEnumBoletoEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.BoletoEstado[] | ListEnumBoletoEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumBoletoEstadoWithAggregatesFilter<$PrismaModel> | $Enums.BoletoEstado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBoletoEstadoFilter<$PrismaModel>
    _max?: NestedEnumBoletoEstadoFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumSerieEncomiendaFilter<$PrismaModel = never> = {
    equals?: $Enums.SerieEncomienda | EnumSerieEncomiendaFieldRefInput<$PrismaModel>
    in?: $Enums.SerieEncomienda[] | ListEnumSerieEncomiendaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SerieEncomienda[] | ListEnumSerieEncomiendaFieldRefInput<$PrismaModel>
    not?: NestedEnumSerieEncomiendaFilter<$PrismaModel> | $Enums.SerieEncomienda
  }

  export type NestedEnumSerieEncomiendaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SerieEncomienda | EnumSerieEncomiendaFieldRefInput<$PrismaModel>
    in?: $Enums.SerieEncomienda[] | ListEnumSerieEncomiendaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SerieEncomienda[] | ListEnumSerieEncomiendaFieldRefInput<$PrismaModel>
    not?: NestedEnumSerieEncomiendaWithAggregatesFilter<$PrismaModel> | $Enums.SerieEncomienda
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSerieEncomiendaFilter<$PrismaModel>
    _max?: NestedEnumSerieEncomiendaFilter<$PrismaModel>
  }

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type NestedEnumViajeEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.ViajeEstado | EnumViajeEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.ViajeEstado[] | ListEnumViajeEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViajeEstado[] | ListEnumViajeEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumViajeEstadoFilter<$PrismaModel> | $Enums.ViajeEstado
  }

  export type NestedEnumViajeEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViajeEstado | EnumViajeEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.ViajeEstado[] | ListEnumViajeEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViajeEstado[] | ListEnumViajeEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumViajeEstadoWithAggregatesFilter<$PrismaModel> | $Enums.ViajeEstado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViajeEstadoFilter<$PrismaModel>
    _max?: NestedEnumViajeEstadoFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutSedeInput = {
    username: string
    usuarioDni: string
    id?: string
    foto?: string
    telefono: string
    password: string
    nombres: string
    apellidos: string
    rol?: $Enums.Rol
    isDeleted?: boolean
    encomienda?: EncomiendaCreateNestedManyWithoutUsuarioInput
    boleto?: BoletoCreateNestedManyWithoutUsuarioInput
    viaje?: ViajeCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutSedeInput = {
    username: string
    usuarioDni: string
    id?: string
    foto?: string
    telefono: string
    password: string
    nombres: string
    apellidos: string
    rol?: $Enums.Rol
    isDeleted?: boolean
    encomienda?: EncomiendaUncheckedCreateNestedManyWithoutUsuarioInput
    boleto?: BoletoUncheckedCreateNestedManyWithoutUsuarioInput
    viaje?: ViajeUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutSedeInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSedeInput, UsuarioUncheckedCreateWithoutSedeInput>
  }

  export type UsuarioCreateManySedeInputEnvelope = {
    data: UsuarioCreateManySedeInput | UsuarioCreateManySedeInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutSedeInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutSedeInput, UsuarioUncheckedUpdateWithoutSedeInput>
    create: XOR<UsuarioCreateWithoutSedeInput, UsuarioUncheckedCreateWithoutSedeInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutSedeInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutSedeInput, UsuarioUncheckedUpdateWithoutSedeInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutSedeInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutSedeInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    username?: StringFilter<"Usuario"> | string
    sedeId?: StringFilter<"Usuario"> | string
    usuarioDni?: StringFilter<"Usuario"> | string
    id?: StringFilter<"Usuario"> | string
    foto?: StringFilter<"Usuario"> | string
    telefono?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    nombres?: StringFilter<"Usuario"> | string
    apellidos?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    isDeleted?: BoolFilter<"Usuario"> | boolean
  }

  export type UsuarioCreateWithoutBoletoInput = {
    username: string
    usuarioDni: string
    id?: string
    foto?: string
    telefono: string
    password: string
    nombres: string
    apellidos: string
    rol?: $Enums.Rol
    isDeleted?: boolean
    sede: SedeCreateNestedOneWithoutUsuariosInput
    encomienda?: EncomiendaCreateNestedManyWithoutUsuarioInput
    viaje?: ViajeCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutBoletoInput = {
    username: string
    sedeId: string
    usuarioDni: string
    id?: string
    foto?: string
    telefono: string
    password: string
    nombres: string
    apellidos: string
    rol?: $Enums.Rol
    isDeleted?: boolean
    encomienda?: EncomiendaUncheckedCreateNestedManyWithoutUsuarioInput
    viaje?: ViajeUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutBoletoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutBoletoInput, UsuarioUncheckedCreateWithoutBoletoInput>
  }

  export type ViajeCreateWithoutBoletosInput = {
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
    bus: BusCreateNestedOneWithoutViajeInput
    conductores?: ConductorCreateNestedManyWithoutViajeInput
    usuario: UsuarioCreateNestedOneWithoutViajeInput
    encomiendas?: EncomiendaCreateNestedManyWithoutViajeInput
    ruta: RutaCreateNestedOneWithoutViajeInput
  }

  export type ViajeUncheckedCreateWithoutBoletosInput = {
    busId: string
    usuarioId: string
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    rutaId: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
    conductores?: ConductorUncheckedCreateNestedManyWithoutViajeInput
    encomiendas?: EncomiendaUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeCreateOrConnectWithoutBoletosInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutBoletosInput, ViajeUncheckedCreateWithoutBoletosInput>
  }

  export type UsuarioUpsertWithoutBoletoInput = {
    update: XOR<UsuarioUpdateWithoutBoletoInput, UsuarioUncheckedUpdateWithoutBoletoInput>
    create: XOR<UsuarioCreateWithoutBoletoInput, UsuarioUncheckedCreateWithoutBoletoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutBoletoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutBoletoInput, UsuarioUncheckedUpdateWithoutBoletoInput>
  }

  export type UsuarioUpdateWithoutBoletoInput = {
    username?: StringFieldUpdateOperationsInput | string
    usuarioDni?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    sede?: SedeUpdateOneRequiredWithoutUsuariosNestedInput
    encomienda?: EncomiendaUpdateManyWithoutUsuarioNestedInput
    viaje?: ViajeUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutBoletoInput = {
    username?: StringFieldUpdateOperationsInput | string
    sedeId?: StringFieldUpdateOperationsInput | string
    usuarioDni?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    encomienda?: EncomiendaUncheckedUpdateManyWithoutUsuarioNestedInput
    viaje?: ViajeUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ViajeUpsertWithoutBoletosInput = {
    update: XOR<ViajeUpdateWithoutBoletosInput, ViajeUncheckedUpdateWithoutBoletosInput>
    create: XOR<ViajeCreateWithoutBoletosInput, ViajeUncheckedCreateWithoutBoletosInput>
    where?: ViajeWhereInput
  }

  export type ViajeUpdateToOneWithWhereWithoutBoletosInput = {
    where?: ViajeWhereInput
    data: XOR<ViajeUpdateWithoutBoletosInput, ViajeUncheckedUpdateWithoutBoletosInput>
  }

  export type ViajeUpdateWithoutBoletosInput = {
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
    bus?: BusUpdateOneRequiredWithoutViajeNestedInput
    conductores?: ConductorUpdateManyWithoutViajeNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutViajeNestedInput
    encomiendas?: EncomiendaUpdateManyWithoutViajeNestedInput
    ruta?: RutaUpdateOneRequiredWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateWithoutBoletosInput = {
    busId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    rutaId?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
    conductores?: ConductorUncheckedUpdateManyWithoutViajeNestedInput
    encomiendas?: EncomiendaUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type ViajeCreateWithoutBusInput = {
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
    boletos?: BoletoCreateNestedManyWithoutViajeInput
    conductores?: ConductorCreateNestedManyWithoutViajeInput
    usuario: UsuarioCreateNestedOneWithoutViajeInput
    encomiendas?: EncomiendaCreateNestedManyWithoutViajeInput
    ruta: RutaCreateNestedOneWithoutViajeInput
  }

  export type ViajeUncheckedCreateWithoutBusInput = {
    usuarioId: string
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    rutaId: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
    boletos?: BoletoUncheckedCreateNestedManyWithoutViajeInput
    conductores?: ConductorUncheckedCreateNestedManyWithoutViajeInput
    encomiendas?: EncomiendaUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeCreateOrConnectWithoutBusInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutBusInput, ViajeUncheckedCreateWithoutBusInput>
  }

  export type ViajeCreateManyBusInputEnvelope = {
    data: ViajeCreateManyBusInput | ViajeCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type ViajeUpsertWithWhereUniqueWithoutBusInput = {
    where: ViajeWhereUniqueInput
    update: XOR<ViajeUpdateWithoutBusInput, ViajeUncheckedUpdateWithoutBusInput>
    create: XOR<ViajeCreateWithoutBusInput, ViajeUncheckedCreateWithoutBusInput>
  }

  export type ViajeUpdateWithWhereUniqueWithoutBusInput = {
    where: ViajeWhereUniqueInput
    data: XOR<ViajeUpdateWithoutBusInput, ViajeUncheckedUpdateWithoutBusInput>
  }

  export type ViajeUpdateManyWithWhereWithoutBusInput = {
    where: ViajeScalarWhereInput
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyWithoutBusInput>
  }

  export type ViajeScalarWhereInput = {
    AND?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
    OR?: ViajeScalarWhereInput[]
    NOT?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
    busId?: StringFilter<"Viaje"> | string
    usuarioId?: StringFilter<"Viaje"> | string
    estado?: EnumViajeEstadoFilter<"Viaje"> | $Enums.ViajeEstado
    salida?: DateTimeFilter<"Viaje"> | Date | string
    id?: StringFilter<"Viaje"> | string
    rutaId?: StringFilter<"Viaje"> | string
    tarifas?: IntNullableListFilter<"Viaje">
    tarifaGeneral?: IntFilter<"Viaje"> | number
  }

  export type ViajeCreateWithoutConductoresInput = {
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
    boletos?: BoletoCreateNestedManyWithoutViajeInput
    bus: BusCreateNestedOneWithoutViajeInput
    usuario: UsuarioCreateNestedOneWithoutViajeInput
    encomiendas?: EncomiendaCreateNestedManyWithoutViajeInput
    ruta: RutaCreateNestedOneWithoutViajeInput
  }

  export type ViajeUncheckedCreateWithoutConductoresInput = {
    busId: string
    usuarioId: string
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    rutaId: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
    boletos?: BoletoUncheckedCreateNestedManyWithoutViajeInput
    encomiendas?: EncomiendaUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeCreateOrConnectWithoutConductoresInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutConductoresInput, ViajeUncheckedCreateWithoutConductoresInput>
  }

  export type ViajeUpsertWithoutConductoresInput = {
    update: XOR<ViajeUpdateWithoutConductoresInput, ViajeUncheckedUpdateWithoutConductoresInput>
    create: XOR<ViajeCreateWithoutConductoresInput, ViajeUncheckedCreateWithoutConductoresInput>
    where?: ViajeWhereInput
  }

  export type ViajeUpdateToOneWithWhereWithoutConductoresInput = {
    where?: ViajeWhereInput
    data: XOR<ViajeUpdateWithoutConductoresInput, ViajeUncheckedUpdateWithoutConductoresInput>
  }

  export type ViajeUpdateWithoutConductoresInput = {
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
    boletos?: BoletoUpdateManyWithoutViajeNestedInput
    bus?: BusUpdateOneRequiredWithoutViajeNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutViajeNestedInput
    encomiendas?: EncomiendaUpdateManyWithoutViajeNestedInput
    ruta?: RutaUpdateOneRequiredWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateWithoutConductoresInput = {
    busId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    rutaId?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
    boletos?: BoletoUncheckedUpdateManyWithoutViajeNestedInput
    encomiendas?: EncomiendaUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type UsuarioCreateWithoutEncomiendaInput = {
    username: string
    usuarioDni: string
    id?: string
    foto?: string
    telefono: string
    password: string
    nombres: string
    apellidos: string
    rol?: $Enums.Rol
    isDeleted?: boolean
    sede: SedeCreateNestedOneWithoutUsuariosInput
    boleto?: BoletoCreateNestedManyWithoutUsuarioInput
    viaje?: ViajeCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutEncomiendaInput = {
    username: string
    sedeId: string
    usuarioDni: string
    id?: string
    foto?: string
    telefono: string
    password: string
    nombres: string
    apellidos: string
    rol?: $Enums.Rol
    isDeleted?: boolean
    boleto?: BoletoUncheckedCreateNestedManyWithoutUsuarioInput
    viaje?: ViajeUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutEncomiendaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEncomiendaInput, UsuarioUncheckedCreateWithoutEncomiendaInput>
  }

  export type ViajeCreateWithoutEncomiendasInput = {
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
    boletos?: BoletoCreateNestedManyWithoutViajeInput
    bus: BusCreateNestedOneWithoutViajeInput
    conductores?: ConductorCreateNestedManyWithoutViajeInput
    usuario: UsuarioCreateNestedOneWithoutViajeInput
    ruta: RutaCreateNestedOneWithoutViajeInput
  }

  export type ViajeUncheckedCreateWithoutEncomiendasInput = {
    busId: string
    usuarioId: string
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    rutaId: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
    boletos?: BoletoUncheckedCreateNestedManyWithoutViajeInput
    conductores?: ConductorUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeCreateOrConnectWithoutEncomiendasInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutEncomiendasInput, ViajeUncheckedCreateWithoutEncomiendasInput>
  }

  export type UsuarioUpsertWithoutEncomiendaInput = {
    update: XOR<UsuarioUpdateWithoutEncomiendaInput, UsuarioUncheckedUpdateWithoutEncomiendaInput>
    create: XOR<UsuarioCreateWithoutEncomiendaInput, UsuarioUncheckedCreateWithoutEncomiendaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEncomiendaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEncomiendaInput, UsuarioUncheckedUpdateWithoutEncomiendaInput>
  }

  export type UsuarioUpdateWithoutEncomiendaInput = {
    username?: StringFieldUpdateOperationsInput | string
    usuarioDni?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    sede?: SedeUpdateOneRequiredWithoutUsuariosNestedInput
    boleto?: BoletoUpdateManyWithoutUsuarioNestedInput
    viaje?: ViajeUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEncomiendaInput = {
    username?: StringFieldUpdateOperationsInput | string
    sedeId?: StringFieldUpdateOperationsInput | string
    usuarioDni?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    boleto?: BoletoUncheckedUpdateManyWithoutUsuarioNestedInput
    viaje?: ViajeUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ViajeUpsertWithoutEncomiendasInput = {
    update: XOR<ViajeUpdateWithoutEncomiendasInput, ViajeUncheckedUpdateWithoutEncomiendasInput>
    create: XOR<ViajeCreateWithoutEncomiendasInput, ViajeUncheckedCreateWithoutEncomiendasInput>
    where?: ViajeWhereInput
  }

  export type ViajeUpdateToOneWithWhereWithoutEncomiendasInput = {
    where?: ViajeWhereInput
    data: XOR<ViajeUpdateWithoutEncomiendasInput, ViajeUncheckedUpdateWithoutEncomiendasInput>
  }

  export type ViajeUpdateWithoutEncomiendasInput = {
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
    boletos?: BoletoUpdateManyWithoutViajeNestedInput
    bus?: BusUpdateOneRequiredWithoutViajeNestedInput
    conductores?: ConductorUpdateManyWithoutViajeNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutViajeNestedInput
    ruta?: RutaUpdateOneRequiredWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateWithoutEncomiendasInput = {
    busId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    rutaId?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
    boletos?: BoletoUncheckedUpdateManyWithoutViajeNestedInput
    conductores?: ConductorUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type ViajeCreateWithoutRutaInput = {
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
    boletos?: BoletoCreateNestedManyWithoutViajeInput
    bus: BusCreateNestedOneWithoutViajeInput
    conductores?: ConductorCreateNestedManyWithoutViajeInput
    usuario: UsuarioCreateNestedOneWithoutViajeInput
    encomiendas?: EncomiendaCreateNestedManyWithoutViajeInput
  }

  export type ViajeUncheckedCreateWithoutRutaInput = {
    busId: string
    usuarioId: string
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
    boletos?: BoletoUncheckedCreateNestedManyWithoutViajeInput
    conductores?: ConductorUncheckedCreateNestedManyWithoutViajeInput
    encomiendas?: EncomiendaUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeCreateOrConnectWithoutRutaInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutRutaInput, ViajeUncheckedCreateWithoutRutaInput>
  }

  export type ViajeCreateManyRutaInputEnvelope = {
    data: ViajeCreateManyRutaInput | ViajeCreateManyRutaInput[]
    skipDuplicates?: boolean
  }

  export type ViajeUpsertWithWhereUniqueWithoutRutaInput = {
    where: ViajeWhereUniqueInput
    update: XOR<ViajeUpdateWithoutRutaInput, ViajeUncheckedUpdateWithoutRutaInput>
    create: XOR<ViajeCreateWithoutRutaInput, ViajeUncheckedCreateWithoutRutaInput>
  }

  export type ViajeUpdateWithWhereUniqueWithoutRutaInput = {
    where: ViajeWhereUniqueInput
    data: XOR<ViajeUpdateWithoutRutaInput, ViajeUncheckedUpdateWithoutRutaInput>
  }

  export type ViajeUpdateManyWithWhereWithoutRutaInput = {
    where: ViajeScalarWhereInput
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyWithoutRutaInput>
  }

  export type SedeCreateWithoutUsuariosInput = {
    id?: string
    agenciaUbicacion: string
    agencia: string
    serieBoleto: $Enums.SerieBoleto
    serieFactura: $Enums.SerieFactura
    contadorBoletos: number
    contadorFacturas: number
  }

  export type SedeUncheckedCreateWithoutUsuariosInput = {
    id?: string
    agenciaUbicacion: string
    agencia: string
    serieBoleto: $Enums.SerieBoleto
    serieFactura: $Enums.SerieFactura
    contadorBoletos: number
    contadorFacturas: number
  }

  export type SedeCreateOrConnectWithoutUsuariosInput = {
    where: SedeWhereUniqueInput
    create: XOR<SedeCreateWithoutUsuariosInput, SedeUncheckedCreateWithoutUsuariosInput>
  }

  export type EncomiendaCreateWithoutUsuarioInput = {
    destino: string
    numero?: number
    serie: $Enums.SerieEncomienda
    descripcion: string
    codigoRastreo?: string
    destinatarioDni: string
    destinatarioNombres: string
    destinatarioApellidos: string
    remitenteNombres: string
    remitenteDni: string
    remitenteApellidos: string
    factura?: boolean
    razonSocial?: string | null
    ruc?: string | null
    fechaEnvio: Date | string
    fechaRecepcion?: Date | string
    id?: string
    pagado?: boolean
    precio: number
    viaje: ViajeCreateNestedOneWithoutEncomiendasInput
  }

  export type EncomiendaUncheckedCreateWithoutUsuarioInput = {
    destino: string
    numero?: number
    serie: $Enums.SerieEncomienda
    descripcion: string
    codigoRastreo?: string
    destinatarioDni: string
    destinatarioNombres: string
    destinatarioApellidos: string
    remitenteNombres: string
    remitenteDni: string
    remitenteApellidos: string
    factura?: boolean
    razonSocial?: string | null
    ruc?: string | null
    fechaEnvio: Date | string
    fechaRecepcion?: Date | string
    id?: string
    pagado?: boolean
    precio: number
    viajeId: string
  }

  export type EncomiendaCreateOrConnectWithoutUsuarioInput = {
    where: EncomiendaWhereUniqueInput
    create: XOR<EncomiendaCreateWithoutUsuarioInput, EncomiendaUncheckedCreateWithoutUsuarioInput>
  }

  export type EncomiendaCreateManyUsuarioInputEnvelope = {
    data: EncomiendaCreateManyUsuarioInput | EncomiendaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type BoletoCreateWithoutUsuarioInput = {
    asiento: number
    metodoPago: string
    pasajeroDni: string
    estado?: $Enums.BoletoEstado
    pasajeroNombres: string
    pasajeroApellidos: string
    codigo: string
    destino?: string
    fechaRegistro?: Date | string
    id?: string
    precio: number
    viaje: ViajeCreateNestedOneWithoutBoletosInput
  }

  export type BoletoUncheckedCreateWithoutUsuarioInput = {
    asiento: number
    metodoPago: string
    pasajeroDni: string
    estado?: $Enums.BoletoEstado
    pasajeroNombres: string
    pasajeroApellidos: string
    codigo: string
    destino?: string
    fechaRegistro?: Date | string
    id?: string
    precio: number
    viajeId: string
  }

  export type BoletoCreateOrConnectWithoutUsuarioInput = {
    where: BoletoWhereUniqueInput
    create: XOR<BoletoCreateWithoutUsuarioInput, BoletoUncheckedCreateWithoutUsuarioInput>
  }

  export type BoletoCreateManyUsuarioInputEnvelope = {
    data: BoletoCreateManyUsuarioInput | BoletoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ViajeCreateWithoutUsuarioInput = {
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
    boletos?: BoletoCreateNestedManyWithoutViajeInput
    bus: BusCreateNestedOneWithoutViajeInput
    conductores?: ConductorCreateNestedManyWithoutViajeInput
    encomiendas?: EncomiendaCreateNestedManyWithoutViajeInput
    ruta: RutaCreateNestedOneWithoutViajeInput
  }

  export type ViajeUncheckedCreateWithoutUsuarioInput = {
    busId: string
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    rutaId: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
    boletos?: BoletoUncheckedCreateNestedManyWithoutViajeInput
    conductores?: ConductorUncheckedCreateNestedManyWithoutViajeInput
    encomiendas?: EncomiendaUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeCreateOrConnectWithoutUsuarioInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutUsuarioInput, ViajeUncheckedCreateWithoutUsuarioInput>
  }

  export type ViajeCreateManyUsuarioInputEnvelope = {
    data: ViajeCreateManyUsuarioInput | ViajeCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type SedeUpsertWithoutUsuariosInput = {
    update: XOR<SedeUpdateWithoutUsuariosInput, SedeUncheckedUpdateWithoutUsuariosInput>
    create: XOR<SedeCreateWithoutUsuariosInput, SedeUncheckedCreateWithoutUsuariosInput>
    where?: SedeWhereInput
  }

  export type SedeUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: SedeWhereInput
    data: XOR<SedeUpdateWithoutUsuariosInput, SedeUncheckedUpdateWithoutUsuariosInput>
  }

  export type SedeUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    agenciaUbicacion?: StringFieldUpdateOperationsInput | string
    agencia?: StringFieldUpdateOperationsInput | string
    serieBoleto?: EnumSerieBoletoFieldUpdateOperationsInput | $Enums.SerieBoleto
    serieFactura?: EnumSerieFacturaFieldUpdateOperationsInput | $Enums.SerieFactura
    contadorBoletos?: IntFieldUpdateOperationsInput | number
    contadorFacturas?: IntFieldUpdateOperationsInput | number
  }

  export type SedeUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    agenciaUbicacion?: StringFieldUpdateOperationsInput | string
    agencia?: StringFieldUpdateOperationsInput | string
    serieBoleto?: EnumSerieBoletoFieldUpdateOperationsInput | $Enums.SerieBoleto
    serieFactura?: EnumSerieFacturaFieldUpdateOperationsInput | $Enums.SerieFactura
    contadorBoletos?: IntFieldUpdateOperationsInput | number
    contadorFacturas?: IntFieldUpdateOperationsInput | number
  }

  export type EncomiendaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: EncomiendaWhereUniqueInput
    update: XOR<EncomiendaUpdateWithoutUsuarioInput, EncomiendaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EncomiendaCreateWithoutUsuarioInput, EncomiendaUncheckedCreateWithoutUsuarioInput>
  }

  export type EncomiendaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: EncomiendaWhereUniqueInput
    data: XOR<EncomiendaUpdateWithoutUsuarioInput, EncomiendaUncheckedUpdateWithoutUsuarioInput>
  }

  export type EncomiendaUpdateManyWithWhereWithoutUsuarioInput = {
    where: EncomiendaScalarWhereInput
    data: XOR<EncomiendaUpdateManyMutationInput, EncomiendaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type EncomiendaScalarWhereInput = {
    AND?: EncomiendaScalarWhereInput | EncomiendaScalarWhereInput[]
    OR?: EncomiendaScalarWhereInput[]
    NOT?: EncomiendaScalarWhereInput | EncomiendaScalarWhereInput[]
    destino?: StringFilter<"Encomienda"> | string
    numero?: IntFilter<"Encomienda"> | number
    serie?: EnumSerieEncomiendaFilter<"Encomienda"> | $Enums.SerieEncomienda
    descripcion?: StringFilter<"Encomienda"> | string
    usuarioId?: StringFilter<"Encomienda"> | string
    codigoRastreo?: StringFilter<"Encomienda"> | string
    destinatarioDni?: StringFilter<"Encomienda"> | string
    destinatarioNombres?: StringFilter<"Encomienda"> | string
    destinatarioApellidos?: StringFilter<"Encomienda"> | string
    remitenteNombres?: StringFilter<"Encomienda"> | string
    remitenteDni?: StringFilter<"Encomienda"> | string
    remitenteApellidos?: StringFilter<"Encomienda"> | string
    factura?: BoolFilter<"Encomienda"> | boolean
    razonSocial?: StringNullableFilter<"Encomienda"> | string | null
    ruc?: StringNullableFilter<"Encomienda"> | string | null
    fechaEnvio?: DateTimeFilter<"Encomienda"> | Date | string
    fechaRecepcion?: DateTimeFilter<"Encomienda"> | Date | string
    id?: StringFilter<"Encomienda"> | string
    pagado?: BoolFilter<"Encomienda"> | boolean
    precio?: IntFilter<"Encomienda"> | number
    viajeId?: StringFilter<"Encomienda"> | string
  }

  export type BoletoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: BoletoWhereUniqueInput
    update: XOR<BoletoUpdateWithoutUsuarioInput, BoletoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<BoletoCreateWithoutUsuarioInput, BoletoUncheckedCreateWithoutUsuarioInput>
  }

  export type BoletoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: BoletoWhereUniqueInput
    data: XOR<BoletoUpdateWithoutUsuarioInput, BoletoUncheckedUpdateWithoutUsuarioInput>
  }

  export type BoletoUpdateManyWithWhereWithoutUsuarioInput = {
    where: BoletoScalarWhereInput
    data: XOR<BoletoUpdateManyMutationInput, BoletoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type BoletoScalarWhereInput = {
    AND?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
    OR?: BoletoScalarWhereInput[]
    NOT?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
    asiento?: IntFilter<"Boleto"> | number
    metodoPago?: StringFilter<"Boleto"> | string
    pasajeroDni?: StringFilter<"Boleto"> | string
    estado?: EnumBoletoEstadoFilter<"Boleto"> | $Enums.BoletoEstado
    pasajeroNombres?: StringFilter<"Boleto"> | string
    pasajeroApellidos?: StringFilter<"Boleto"> | string
    usuarioId?: StringFilter<"Boleto"> | string
    codigo?: StringFilter<"Boleto"> | string
    destino?: StringFilter<"Boleto"> | string
    fechaRegistro?: DateTimeFilter<"Boleto"> | Date | string
    id?: StringFilter<"Boleto"> | string
    precio?: IntFilter<"Boleto"> | number
    viajeId?: StringFilter<"Boleto"> | string
  }

  export type ViajeUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ViajeWhereUniqueInput
    update: XOR<ViajeUpdateWithoutUsuarioInput, ViajeUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ViajeCreateWithoutUsuarioInput, ViajeUncheckedCreateWithoutUsuarioInput>
  }

  export type ViajeUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ViajeWhereUniqueInput
    data: XOR<ViajeUpdateWithoutUsuarioInput, ViajeUncheckedUpdateWithoutUsuarioInput>
  }

  export type ViajeUpdateManyWithWhereWithoutUsuarioInput = {
    where: ViajeScalarWhereInput
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type BoletoCreateWithoutViajeInput = {
    asiento: number
    metodoPago: string
    pasajeroDni: string
    estado?: $Enums.BoletoEstado
    pasajeroNombres: string
    pasajeroApellidos: string
    codigo: string
    destino?: string
    fechaRegistro?: Date | string
    id?: string
    precio: number
    usuario: UsuarioCreateNestedOneWithoutBoletoInput
  }

  export type BoletoUncheckedCreateWithoutViajeInput = {
    asiento: number
    metodoPago: string
    pasajeroDni: string
    estado?: $Enums.BoletoEstado
    pasajeroNombres: string
    pasajeroApellidos: string
    usuarioId: string
    codigo: string
    destino?: string
    fechaRegistro?: Date | string
    id?: string
    precio: number
  }

  export type BoletoCreateOrConnectWithoutViajeInput = {
    where: BoletoWhereUniqueInput
    create: XOR<BoletoCreateWithoutViajeInput, BoletoUncheckedCreateWithoutViajeInput>
  }

  export type BoletoCreateManyViajeInputEnvelope = {
    data: BoletoCreateManyViajeInput | BoletoCreateManyViajeInput[]
    skipDuplicates?: boolean
  }

  export type BusCreateWithoutViajeInput = {
    id?: string
    asientos: number
    fechaRegistro?: Date | string
    foto?: string
    modelo?: string
    placa: string
  }

  export type BusUncheckedCreateWithoutViajeInput = {
    id?: string
    asientos: number
    fechaRegistro?: Date | string
    foto?: string
    modelo?: string
    placa: string
  }

  export type BusCreateOrConnectWithoutViajeInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutViajeInput, BusUncheckedCreateWithoutViajeInput>
  }

  export type ConductorCreateWithoutViajeInput = {
    claseLicencia: string
    conductorDni: string
    nombres: string
    apellidos: string
    disponibilidad?: boolean
    foto?: string
    id?: string
    numeroLicencia: string
    telefono: string
  }

  export type ConductorUncheckedCreateWithoutViajeInput = {
    claseLicencia: string
    conductorDni: string
    nombres: string
    apellidos: string
    disponibilidad?: boolean
    foto?: string
    id?: string
    numeroLicencia: string
    telefono: string
  }

  export type ConductorCreateOrConnectWithoutViajeInput = {
    where: ConductorWhereUniqueInput
    create: XOR<ConductorCreateWithoutViajeInput, ConductorUncheckedCreateWithoutViajeInput>
  }

  export type ConductorCreateManyViajeInputEnvelope = {
    data: ConductorCreateManyViajeInput | ConductorCreateManyViajeInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutViajeInput = {
    username: string
    usuarioDni: string
    id?: string
    foto?: string
    telefono: string
    password: string
    nombres: string
    apellidos: string
    rol?: $Enums.Rol
    isDeleted?: boolean
    sede: SedeCreateNestedOneWithoutUsuariosInput
    encomienda?: EncomiendaCreateNestedManyWithoutUsuarioInput
    boleto?: BoletoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutViajeInput = {
    username: string
    sedeId: string
    usuarioDni: string
    id?: string
    foto?: string
    telefono: string
    password: string
    nombres: string
    apellidos: string
    rol?: $Enums.Rol
    isDeleted?: boolean
    encomienda?: EncomiendaUncheckedCreateNestedManyWithoutUsuarioInput
    boleto?: BoletoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutViajeInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutViajeInput, UsuarioUncheckedCreateWithoutViajeInput>
  }

  export type EncomiendaCreateWithoutViajeInput = {
    destino: string
    numero?: number
    serie: $Enums.SerieEncomienda
    descripcion: string
    codigoRastreo?: string
    destinatarioDni: string
    destinatarioNombres: string
    destinatarioApellidos: string
    remitenteNombres: string
    remitenteDni: string
    remitenteApellidos: string
    factura?: boolean
    razonSocial?: string | null
    ruc?: string | null
    fechaEnvio: Date | string
    fechaRecepcion?: Date | string
    id?: string
    pagado?: boolean
    precio: number
    usuario: UsuarioCreateNestedOneWithoutEncomiendaInput
  }

  export type EncomiendaUncheckedCreateWithoutViajeInput = {
    destino: string
    numero?: number
    serie: $Enums.SerieEncomienda
    descripcion: string
    usuarioId: string
    codigoRastreo?: string
    destinatarioDni: string
    destinatarioNombres: string
    destinatarioApellidos: string
    remitenteNombres: string
    remitenteDni: string
    remitenteApellidos: string
    factura?: boolean
    razonSocial?: string | null
    ruc?: string | null
    fechaEnvio: Date | string
    fechaRecepcion?: Date | string
    id?: string
    pagado?: boolean
    precio: number
  }

  export type EncomiendaCreateOrConnectWithoutViajeInput = {
    where: EncomiendaWhereUniqueInput
    create: XOR<EncomiendaCreateWithoutViajeInput, EncomiendaUncheckedCreateWithoutViajeInput>
  }

  export type EncomiendaCreateManyViajeInputEnvelope = {
    data: EncomiendaCreateManyViajeInput | EncomiendaCreateManyViajeInput[]
    skipDuplicates?: boolean
  }

  export type RutaCreateWithoutViajeInput = {
    ciudadDestino: string
    ciudadOrigen: string
    duracionEstimada: number
    id?: string
    terminalDestino: string
    terminalOrigen: string
  }

  export type RutaUncheckedCreateWithoutViajeInput = {
    ciudadDestino: string
    ciudadOrigen: string
    duracionEstimada: number
    id?: string
    terminalDestino: string
    terminalOrigen: string
  }

  export type RutaCreateOrConnectWithoutViajeInput = {
    where: RutaWhereUniqueInput
    create: XOR<RutaCreateWithoutViajeInput, RutaUncheckedCreateWithoutViajeInput>
  }

  export type BoletoUpsertWithWhereUniqueWithoutViajeInput = {
    where: BoletoWhereUniqueInput
    update: XOR<BoletoUpdateWithoutViajeInput, BoletoUncheckedUpdateWithoutViajeInput>
    create: XOR<BoletoCreateWithoutViajeInput, BoletoUncheckedCreateWithoutViajeInput>
  }

  export type BoletoUpdateWithWhereUniqueWithoutViajeInput = {
    where: BoletoWhereUniqueInput
    data: XOR<BoletoUpdateWithoutViajeInput, BoletoUncheckedUpdateWithoutViajeInput>
  }

  export type BoletoUpdateManyWithWhereWithoutViajeInput = {
    where: BoletoScalarWhereInput
    data: XOR<BoletoUpdateManyMutationInput, BoletoUncheckedUpdateManyWithoutViajeInput>
  }

  export type BusUpsertWithoutViajeInput = {
    update: XOR<BusUpdateWithoutViajeInput, BusUncheckedUpdateWithoutViajeInput>
    create: XOR<BusCreateWithoutViajeInput, BusUncheckedCreateWithoutViajeInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutViajeInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutViajeInput, BusUncheckedUpdateWithoutViajeInput>
  }

  export type BusUpdateWithoutViajeInput = {
    id?: StringFieldUpdateOperationsInput | string
    asientos?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
  }

  export type BusUncheckedUpdateWithoutViajeInput = {
    id?: StringFieldUpdateOperationsInput | string
    asientos?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
  }

  export type ConductorUpsertWithWhereUniqueWithoutViajeInput = {
    where: ConductorWhereUniqueInput
    update: XOR<ConductorUpdateWithoutViajeInput, ConductorUncheckedUpdateWithoutViajeInput>
    create: XOR<ConductorCreateWithoutViajeInput, ConductorUncheckedCreateWithoutViajeInput>
  }

  export type ConductorUpdateWithWhereUniqueWithoutViajeInput = {
    where: ConductorWhereUniqueInput
    data: XOR<ConductorUpdateWithoutViajeInput, ConductorUncheckedUpdateWithoutViajeInput>
  }

  export type ConductorUpdateManyWithWhereWithoutViajeInput = {
    where: ConductorScalarWhereInput
    data: XOR<ConductorUpdateManyMutationInput, ConductorUncheckedUpdateManyWithoutViajeInput>
  }

  export type ConductorScalarWhereInput = {
    AND?: ConductorScalarWhereInput | ConductorScalarWhereInput[]
    OR?: ConductorScalarWhereInput[]
    NOT?: ConductorScalarWhereInput | ConductorScalarWhereInput[]
    claseLicencia?: StringFilter<"Conductor"> | string
    conductorDni?: StringFilter<"Conductor"> | string
    nombres?: StringFilter<"Conductor"> | string
    apellidos?: StringFilter<"Conductor"> | string
    disponibilidad?: BoolFilter<"Conductor"> | boolean
    foto?: StringFilter<"Conductor"> | string
    id?: StringFilter<"Conductor"> | string
    numeroLicencia?: StringFilter<"Conductor"> | string
    telefono?: StringFilter<"Conductor"> | string
    viajeId?: StringNullableFilter<"Conductor"> | string | null
  }

  export type UsuarioUpsertWithoutViajeInput = {
    update: XOR<UsuarioUpdateWithoutViajeInput, UsuarioUncheckedUpdateWithoutViajeInput>
    create: XOR<UsuarioCreateWithoutViajeInput, UsuarioUncheckedCreateWithoutViajeInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutViajeInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutViajeInput, UsuarioUncheckedUpdateWithoutViajeInput>
  }

  export type UsuarioUpdateWithoutViajeInput = {
    username?: StringFieldUpdateOperationsInput | string
    usuarioDni?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    sede?: SedeUpdateOneRequiredWithoutUsuariosNestedInput
    encomienda?: EncomiendaUpdateManyWithoutUsuarioNestedInput
    boleto?: BoletoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutViajeInput = {
    username?: StringFieldUpdateOperationsInput | string
    sedeId?: StringFieldUpdateOperationsInput | string
    usuarioDni?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    encomienda?: EncomiendaUncheckedUpdateManyWithoutUsuarioNestedInput
    boleto?: BoletoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type EncomiendaUpsertWithWhereUniqueWithoutViajeInput = {
    where: EncomiendaWhereUniqueInput
    update: XOR<EncomiendaUpdateWithoutViajeInput, EncomiendaUncheckedUpdateWithoutViajeInput>
    create: XOR<EncomiendaCreateWithoutViajeInput, EncomiendaUncheckedCreateWithoutViajeInput>
  }

  export type EncomiendaUpdateWithWhereUniqueWithoutViajeInput = {
    where: EncomiendaWhereUniqueInput
    data: XOR<EncomiendaUpdateWithoutViajeInput, EncomiendaUncheckedUpdateWithoutViajeInput>
  }

  export type EncomiendaUpdateManyWithWhereWithoutViajeInput = {
    where: EncomiendaScalarWhereInput
    data: XOR<EncomiendaUpdateManyMutationInput, EncomiendaUncheckedUpdateManyWithoutViajeInput>
  }

  export type RutaUpsertWithoutViajeInput = {
    update: XOR<RutaUpdateWithoutViajeInput, RutaUncheckedUpdateWithoutViajeInput>
    create: XOR<RutaCreateWithoutViajeInput, RutaUncheckedCreateWithoutViajeInput>
    where?: RutaWhereInput
  }

  export type RutaUpdateToOneWithWhereWithoutViajeInput = {
    where?: RutaWhereInput
    data: XOR<RutaUpdateWithoutViajeInput, RutaUncheckedUpdateWithoutViajeInput>
  }

  export type RutaUpdateWithoutViajeInput = {
    ciudadDestino?: StringFieldUpdateOperationsInput | string
    ciudadOrigen?: StringFieldUpdateOperationsInput | string
    duracionEstimada?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    terminalDestino?: StringFieldUpdateOperationsInput | string
    terminalOrigen?: StringFieldUpdateOperationsInput | string
  }

  export type RutaUncheckedUpdateWithoutViajeInput = {
    ciudadDestino?: StringFieldUpdateOperationsInput | string
    ciudadOrigen?: StringFieldUpdateOperationsInput | string
    duracionEstimada?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    terminalDestino?: StringFieldUpdateOperationsInput | string
    terminalOrigen?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateManySedeInput = {
    username: string
    usuarioDni: string
    id?: string
    foto?: string
    telefono: string
    password: string
    nombres: string
    apellidos: string
    rol?: $Enums.Rol
    isDeleted?: boolean
  }

  export type UsuarioUpdateWithoutSedeInput = {
    username?: StringFieldUpdateOperationsInput | string
    usuarioDni?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    encomienda?: EncomiendaUpdateManyWithoutUsuarioNestedInput
    boleto?: BoletoUpdateManyWithoutUsuarioNestedInput
    viaje?: ViajeUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSedeInput = {
    username?: StringFieldUpdateOperationsInput | string
    usuarioDni?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    encomienda?: EncomiendaUncheckedUpdateManyWithoutUsuarioNestedInput
    boleto?: BoletoUncheckedUpdateManyWithoutUsuarioNestedInput
    viaje?: ViajeUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutSedeInput = {
    username?: StringFieldUpdateOperationsInput | string
    usuarioDni?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ViajeCreateManyBusInput = {
    usuarioId: string
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    rutaId: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
  }

  export type ViajeUpdateWithoutBusInput = {
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
    boletos?: BoletoUpdateManyWithoutViajeNestedInput
    conductores?: ConductorUpdateManyWithoutViajeNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutViajeNestedInput
    encomiendas?: EncomiendaUpdateManyWithoutViajeNestedInput
    ruta?: RutaUpdateOneRequiredWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateWithoutBusInput = {
    usuarioId?: StringFieldUpdateOperationsInput | string
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    rutaId?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
    boletos?: BoletoUncheckedUpdateManyWithoutViajeNestedInput
    conductores?: ConductorUncheckedUpdateManyWithoutViajeNestedInput
    encomiendas?: EncomiendaUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateManyWithoutBusInput = {
    usuarioId?: StringFieldUpdateOperationsInput | string
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    rutaId?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
  }

  export type ViajeCreateManyRutaInput = {
    busId: string
    usuarioId: string
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
  }

  export type ViajeUpdateWithoutRutaInput = {
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
    boletos?: BoletoUpdateManyWithoutViajeNestedInput
    bus?: BusUpdateOneRequiredWithoutViajeNestedInput
    conductores?: ConductorUpdateManyWithoutViajeNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutViajeNestedInput
    encomiendas?: EncomiendaUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateWithoutRutaInput = {
    busId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
    boletos?: BoletoUncheckedUpdateManyWithoutViajeNestedInput
    conductores?: ConductorUncheckedUpdateManyWithoutViajeNestedInput
    encomiendas?: EncomiendaUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateManyWithoutRutaInput = {
    busId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
  }

  export type EncomiendaCreateManyUsuarioInput = {
    destino: string
    numero?: number
    serie: $Enums.SerieEncomienda
    descripcion: string
    codigoRastreo?: string
    destinatarioDni: string
    destinatarioNombres: string
    destinatarioApellidos: string
    remitenteNombres: string
    remitenteDni: string
    remitenteApellidos: string
    factura?: boolean
    razonSocial?: string | null
    ruc?: string | null
    fechaEnvio: Date | string
    fechaRecepcion?: Date | string
    id?: string
    pagado?: boolean
    precio: number
    viajeId: string
  }

  export type BoletoCreateManyUsuarioInput = {
    asiento: number
    metodoPago: string
    pasajeroDni: string
    estado?: $Enums.BoletoEstado
    pasajeroNombres: string
    pasajeroApellidos: string
    codigo: string
    destino?: string
    fechaRegistro?: Date | string
    id?: string
    precio: number
    viajeId: string
  }

  export type ViajeCreateManyUsuarioInput = {
    busId: string
    estado?: $Enums.ViajeEstado
    salida: Date | string
    id?: string
    rutaId: string
    tarifas?: ViajeCreatetarifasInput | number[]
    tarifaGeneral: number
  }

  export type EncomiendaUpdateWithoutUsuarioInput = {
    destino?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    serie?: EnumSerieEncomiendaFieldUpdateOperationsInput | $Enums.SerieEncomienda
    descripcion?: StringFieldUpdateOperationsInput | string
    codigoRastreo?: StringFieldUpdateOperationsInput | string
    destinatarioDni?: StringFieldUpdateOperationsInput | string
    destinatarioNombres?: StringFieldUpdateOperationsInput | string
    destinatarioApellidos?: StringFieldUpdateOperationsInput | string
    remitenteNombres?: StringFieldUpdateOperationsInput | string
    remitenteDni?: StringFieldUpdateOperationsInput | string
    remitenteApellidos?: StringFieldUpdateOperationsInput | string
    factura?: BoolFieldUpdateOperationsInput | boolean
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRecepcion?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    pagado?: BoolFieldUpdateOperationsInput | boolean
    precio?: IntFieldUpdateOperationsInput | number
    viaje?: ViajeUpdateOneRequiredWithoutEncomiendasNestedInput
  }

  export type EncomiendaUncheckedUpdateWithoutUsuarioInput = {
    destino?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    serie?: EnumSerieEncomiendaFieldUpdateOperationsInput | $Enums.SerieEncomienda
    descripcion?: StringFieldUpdateOperationsInput | string
    codigoRastreo?: StringFieldUpdateOperationsInput | string
    destinatarioDni?: StringFieldUpdateOperationsInput | string
    destinatarioNombres?: StringFieldUpdateOperationsInput | string
    destinatarioApellidos?: StringFieldUpdateOperationsInput | string
    remitenteNombres?: StringFieldUpdateOperationsInput | string
    remitenteDni?: StringFieldUpdateOperationsInput | string
    remitenteApellidos?: StringFieldUpdateOperationsInput | string
    factura?: BoolFieldUpdateOperationsInput | boolean
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRecepcion?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    pagado?: BoolFieldUpdateOperationsInput | boolean
    precio?: IntFieldUpdateOperationsInput | number
    viajeId?: StringFieldUpdateOperationsInput | string
  }

  export type EncomiendaUncheckedUpdateManyWithoutUsuarioInput = {
    destino?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    serie?: EnumSerieEncomiendaFieldUpdateOperationsInput | $Enums.SerieEncomienda
    descripcion?: StringFieldUpdateOperationsInput | string
    codigoRastreo?: StringFieldUpdateOperationsInput | string
    destinatarioDni?: StringFieldUpdateOperationsInput | string
    destinatarioNombres?: StringFieldUpdateOperationsInput | string
    destinatarioApellidos?: StringFieldUpdateOperationsInput | string
    remitenteNombres?: StringFieldUpdateOperationsInput | string
    remitenteDni?: StringFieldUpdateOperationsInput | string
    remitenteApellidos?: StringFieldUpdateOperationsInput | string
    factura?: BoolFieldUpdateOperationsInput | boolean
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRecepcion?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    pagado?: BoolFieldUpdateOperationsInput | boolean
    precio?: IntFieldUpdateOperationsInput | number
    viajeId?: StringFieldUpdateOperationsInput | string
  }

  export type BoletoUpdateWithoutUsuarioInput = {
    asiento?: IntFieldUpdateOperationsInput | number
    metodoPago?: StringFieldUpdateOperationsInput | string
    pasajeroDni?: StringFieldUpdateOperationsInput | string
    estado?: EnumBoletoEstadoFieldUpdateOperationsInput | $Enums.BoletoEstado
    pasajeroNombres?: StringFieldUpdateOperationsInput | string
    pasajeroApellidos?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    viaje?: ViajeUpdateOneRequiredWithoutBoletosNestedInput
  }

  export type BoletoUncheckedUpdateWithoutUsuarioInput = {
    asiento?: IntFieldUpdateOperationsInput | number
    metodoPago?: StringFieldUpdateOperationsInput | string
    pasajeroDni?: StringFieldUpdateOperationsInput | string
    estado?: EnumBoletoEstadoFieldUpdateOperationsInput | $Enums.BoletoEstado
    pasajeroNombres?: StringFieldUpdateOperationsInput | string
    pasajeroApellidos?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    viajeId?: StringFieldUpdateOperationsInput | string
  }

  export type BoletoUncheckedUpdateManyWithoutUsuarioInput = {
    asiento?: IntFieldUpdateOperationsInput | number
    metodoPago?: StringFieldUpdateOperationsInput | string
    pasajeroDni?: StringFieldUpdateOperationsInput | string
    estado?: EnumBoletoEstadoFieldUpdateOperationsInput | $Enums.BoletoEstado
    pasajeroNombres?: StringFieldUpdateOperationsInput | string
    pasajeroApellidos?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    viajeId?: StringFieldUpdateOperationsInput | string
  }

  export type ViajeUpdateWithoutUsuarioInput = {
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
    boletos?: BoletoUpdateManyWithoutViajeNestedInput
    bus?: BusUpdateOneRequiredWithoutViajeNestedInput
    conductores?: ConductorUpdateManyWithoutViajeNestedInput
    encomiendas?: EncomiendaUpdateManyWithoutViajeNestedInput
    ruta?: RutaUpdateOneRequiredWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateWithoutUsuarioInput = {
    busId?: StringFieldUpdateOperationsInput | string
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    rutaId?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
    boletos?: BoletoUncheckedUpdateManyWithoutViajeNestedInput
    conductores?: ConductorUncheckedUpdateManyWithoutViajeNestedInput
    encomiendas?: EncomiendaUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateManyWithoutUsuarioInput = {
    busId?: StringFieldUpdateOperationsInput | string
    estado?: EnumViajeEstadoFieldUpdateOperationsInput | $Enums.ViajeEstado
    salida?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    rutaId?: StringFieldUpdateOperationsInput | string
    tarifas?: ViajeUpdatetarifasInput | number[]
    tarifaGeneral?: IntFieldUpdateOperationsInput | number
  }

  export type BoletoCreateManyViajeInput = {
    asiento: number
    metodoPago: string
    pasajeroDni: string
    estado?: $Enums.BoletoEstado
    pasajeroNombres: string
    pasajeroApellidos: string
    usuarioId: string
    codigo: string
    destino?: string
    fechaRegistro?: Date | string
    id?: string
    precio: number
  }

  export type ConductorCreateManyViajeInput = {
    claseLicencia: string
    conductorDni: string
    nombres: string
    apellidos: string
    disponibilidad?: boolean
    foto?: string
    id?: string
    numeroLicencia: string
    telefono: string
  }

  export type EncomiendaCreateManyViajeInput = {
    destino: string
    numero?: number
    serie: $Enums.SerieEncomienda
    descripcion: string
    usuarioId: string
    codigoRastreo?: string
    destinatarioDni: string
    destinatarioNombres: string
    destinatarioApellidos: string
    remitenteNombres: string
    remitenteDni: string
    remitenteApellidos: string
    factura?: boolean
    razonSocial?: string | null
    ruc?: string | null
    fechaEnvio: Date | string
    fechaRecepcion?: Date | string
    id?: string
    pagado?: boolean
    precio: number
  }

  export type BoletoUpdateWithoutViajeInput = {
    asiento?: IntFieldUpdateOperationsInput | number
    metodoPago?: StringFieldUpdateOperationsInput | string
    pasajeroDni?: StringFieldUpdateOperationsInput | string
    estado?: EnumBoletoEstadoFieldUpdateOperationsInput | $Enums.BoletoEstado
    pasajeroNombres?: StringFieldUpdateOperationsInput | string
    pasajeroApellidos?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutBoletoNestedInput
  }

  export type BoletoUncheckedUpdateWithoutViajeInput = {
    asiento?: IntFieldUpdateOperationsInput | number
    metodoPago?: StringFieldUpdateOperationsInput | string
    pasajeroDni?: StringFieldUpdateOperationsInput | string
    estado?: EnumBoletoEstadoFieldUpdateOperationsInput | $Enums.BoletoEstado
    pasajeroNombres?: StringFieldUpdateOperationsInput | string
    pasajeroApellidos?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
  }

  export type BoletoUncheckedUpdateManyWithoutViajeInput = {
    asiento?: IntFieldUpdateOperationsInput | number
    metodoPago?: StringFieldUpdateOperationsInput | string
    pasajeroDni?: StringFieldUpdateOperationsInput | string
    estado?: EnumBoletoEstadoFieldUpdateOperationsInput | $Enums.BoletoEstado
    pasajeroNombres?: StringFieldUpdateOperationsInput | string
    pasajeroApellidos?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
  }

  export type ConductorUpdateWithoutViajeInput = {
    claseLicencia?: StringFieldUpdateOperationsInput | string
    conductorDni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    disponibilidad?: BoolFieldUpdateOperationsInput | boolean
    foto?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    numeroLicencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type ConductorUncheckedUpdateWithoutViajeInput = {
    claseLicencia?: StringFieldUpdateOperationsInput | string
    conductorDni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    disponibilidad?: BoolFieldUpdateOperationsInput | boolean
    foto?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    numeroLicencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type ConductorUncheckedUpdateManyWithoutViajeInput = {
    claseLicencia?: StringFieldUpdateOperationsInput | string
    conductorDni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    disponibilidad?: BoolFieldUpdateOperationsInput | boolean
    foto?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    numeroLicencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type EncomiendaUpdateWithoutViajeInput = {
    destino?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    serie?: EnumSerieEncomiendaFieldUpdateOperationsInput | $Enums.SerieEncomienda
    descripcion?: StringFieldUpdateOperationsInput | string
    codigoRastreo?: StringFieldUpdateOperationsInput | string
    destinatarioDni?: StringFieldUpdateOperationsInput | string
    destinatarioNombres?: StringFieldUpdateOperationsInput | string
    destinatarioApellidos?: StringFieldUpdateOperationsInput | string
    remitenteNombres?: StringFieldUpdateOperationsInput | string
    remitenteDni?: StringFieldUpdateOperationsInput | string
    remitenteApellidos?: StringFieldUpdateOperationsInput | string
    factura?: BoolFieldUpdateOperationsInput | boolean
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRecepcion?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    pagado?: BoolFieldUpdateOperationsInput | boolean
    precio?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutEncomiendaNestedInput
  }

  export type EncomiendaUncheckedUpdateWithoutViajeInput = {
    destino?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    serie?: EnumSerieEncomiendaFieldUpdateOperationsInput | $Enums.SerieEncomienda
    descripcion?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    codigoRastreo?: StringFieldUpdateOperationsInput | string
    destinatarioDni?: StringFieldUpdateOperationsInput | string
    destinatarioNombres?: StringFieldUpdateOperationsInput | string
    destinatarioApellidos?: StringFieldUpdateOperationsInput | string
    remitenteNombres?: StringFieldUpdateOperationsInput | string
    remitenteDni?: StringFieldUpdateOperationsInput | string
    remitenteApellidos?: StringFieldUpdateOperationsInput | string
    factura?: BoolFieldUpdateOperationsInput | boolean
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRecepcion?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    pagado?: BoolFieldUpdateOperationsInput | boolean
    precio?: IntFieldUpdateOperationsInput | number
  }

  export type EncomiendaUncheckedUpdateManyWithoutViajeInput = {
    destino?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    serie?: EnumSerieEncomiendaFieldUpdateOperationsInput | $Enums.SerieEncomienda
    descripcion?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    codigoRastreo?: StringFieldUpdateOperationsInput | string
    destinatarioDni?: StringFieldUpdateOperationsInput | string
    destinatarioNombres?: StringFieldUpdateOperationsInput | string
    destinatarioApellidos?: StringFieldUpdateOperationsInput | string
    remitenteNombres?: StringFieldUpdateOperationsInput | string
    remitenteDni?: StringFieldUpdateOperationsInput | string
    remitenteApellidos?: StringFieldUpdateOperationsInput | string
    factura?: BoolFieldUpdateOperationsInput | boolean
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRecepcion?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    pagado?: BoolFieldUpdateOperationsInput | boolean
    precio?: IntFieldUpdateOperationsInput | number
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