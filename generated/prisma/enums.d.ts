export declare const MovementType: {
    readonly INGRESO: "INGRESO";
    readonly SALIDA: "SALIDA";
};
export type MovementType = (typeof MovementType)[keyof typeof MovementType];
export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly STAFF: "STAFF";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
