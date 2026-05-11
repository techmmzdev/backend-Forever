import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MovementModel = runtime.Types.Result.DefaultSelection<Prisma.$MovementPayload>;
export type AggregateMovement = {
    _count: MovementCountAggregateOutputType | null;
    _avg: MovementAvgAggregateOutputType | null;
    _sum: MovementSumAggregateOutputType | null;
    _min: MovementMinAggregateOutputType | null;
    _max: MovementMaxAggregateOutputType | null;
};
export type MovementAvgAggregateOutputType = {
    id: number | null;
    productId: number | null;
    userId: number | null;
    quantity: number | null;
};
export type MovementSumAggregateOutputType = {
    id: number | null;
    productId: number | null;
    userId: number | null;
    quantity: number | null;
};
export type MovementMinAggregateOutputType = {
    id: number | null;
    productId: number | null;
    userId: number | null;
    type: $Enums.MovementType | null;
    quantity: number | null;
    observations: string | null;
    receivedBy: string | null;
    createdAt: Date | null;
};
export type MovementMaxAggregateOutputType = {
    id: number | null;
    productId: number | null;
    userId: number | null;
    type: $Enums.MovementType | null;
    quantity: number | null;
    observations: string | null;
    receivedBy: string | null;
    createdAt: Date | null;
};
export type MovementCountAggregateOutputType = {
    id: number;
    productId: number;
    userId: number;
    type: number;
    quantity: number;
    observations: number;
    receivedBy: number;
    createdAt: number;
    _all: number;
};
export type MovementAvgAggregateInputType = {
    id?: true;
    productId?: true;
    userId?: true;
    quantity?: true;
};
export type MovementSumAggregateInputType = {
    id?: true;
    productId?: true;
    userId?: true;
    quantity?: true;
};
export type MovementMinAggregateInputType = {
    id?: true;
    productId?: true;
    userId?: true;
    type?: true;
    quantity?: true;
    observations?: true;
    receivedBy?: true;
    createdAt?: true;
};
export type MovementMaxAggregateInputType = {
    id?: true;
    productId?: true;
    userId?: true;
    type?: true;
    quantity?: true;
    observations?: true;
    receivedBy?: true;
    createdAt?: true;
};
export type MovementCountAggregateInputType = {
    id?: true;
    productId?: true;
    userId?: true;
    type?: true;
    quantity?: true;
    observations?: true;
    receivedBy?: true;
    createdAt?: true;
    _all?: true;
};
export type MovementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovementWhereInput;
    orderBy?: Prisma.MovementOrderByWithRelationInput | Prisma.MovementOrderByWithRelationInput[];
    cursor?: Prisma.MovementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MovementCountAggregateInputType;
    _avg?: MovementAvgAggregateInputType;
    _sum?: MovementSumAggregateInputType;
    _min?: MovementMinAggregateInputType;
    _max?: MovementMaxAggregateInputType;
};
export type GetMovementAggregateType<T extends MovementAggregateArgs> = {
    [P in keyof T & keyof AggregateMovement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMovement[P]> : Prisma.GetScalarType<T[P], AggregateMovement[P]>;
};
export type MovementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovementWhereInput;
    orderBy?: Prisma.MovementOrderByWithAggregationInput | Prisma.MovementOrderByWithAggregationInput[];
    by: Prisma.MovementScalarFieldEnum[] | Prisma.MovementScalarFieldEnum;
    having?: Prisma.MovementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MovementCountAggregateInputType | true;
    _avg?: MovementAvgAggregateInputType;
    _sum?: MovementSumAggregateInputType;
    _min?: MovementMinAggregateInputType;
    _max?: MovementMaxAggregateInputType;
};
export type MovementGroupByOutputType = {
    id: number;
    productId: number;
    userId: number;
    type: $Enums.MovementType;
    quantity: number;
    observations: string | null;
    receivedBy: string | null;
    createdAt: Date;
    _count: MovementCountAggregateOutputType | null;
    _avg: MovementAvgAggregateOutputType | null;
    _sum: MovementSumAggregateOutputType | null;
    _min: MovementMinAggregateOutputType | null;
    _max: MovementMaxAggregateOutputType | null;
};
export type GetMovementGroupByPayload<T extends MovementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MovementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MovementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MovementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MovementGroupByOutputType[P]>;
}>>;
export type MovementWhereInput = {
    AND?: Prisma.MovementWhereInput | Prisma.MovementWhereInput[];
    OR?: Prisma.MovementWhereInput[];
    NOT?: Prisma.MovementWhereInput | Prisma.MovementWhereInput[];
    id?: Prisma.IntFilter<"Movement"> | number;
    productId?: Prisma.IntFilter<"Movement"> | number;
    userId?: Prisma.IntFilter<"Movement"> | number;
    type?: Prisma.EnumMovementTypeFilter<"Movement"> | $Enums.MovementType;
    quantity?: Prisma.IntFilter<"Movement"> | number;
    observations?: Prisma.StringNullableFilter<"Movement"> | string | null;
    receivedBy?: Prisma.StringNullableFilter<"Movement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Movement"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type MovementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    observations?: Prisma.SortOrderInput | Prisma.SortOrder;
    receivedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type MovementWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MovementWhereInput | Prisma.MovementWhereInput[];
    OR?: Prisma.MovementWhereInput[];
    NOT?: Prisma.MovementWhereInput | Prisma.MovementWhereInput[];
    productId?: Prisma.IntFilter<"Movement"> | number;
    userId?: Prisma.IntFilter<"Movement"> | number;
    type?: Prisma.EnumMovementTypeFilter<"Movement"> | $Enums.MovementType;
    quantity?: Prisma.IntFilter<"Movement"> | number;
    observations?: Prisma.StringNullableFilter<"Movement"> | string | null;
    receivedBy?: Prisma.StringNullableFilter<"Movement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Movement"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type MovementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    observations?: Prisma.SortOrderInput | Prisma.SortOrder;
    receivedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MovementCountOrderByAggregateInput;
    _avg?: Prisma.MovementAvgOrderByAggregateInput;
    _max?: Prisma.MovementMaxOrderByAggregateInput;
    _min?: Prisma.MovementMinOrderByAggregateInput;
    _sum?: Prisma.MovementSumOrderByAggregateInput;
};
export type MovementScalarWhereWithAggregatesInput = {
    AND?: Prisma.MovementScalarWhereWithAggregatesInput | Prisma.MovementScalarWhereWithAggregatesInput[];
    OR?: Prisma.MovementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MovementScalarWhereWithAggregatesInput | Prisma.MovementScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Movement"> | number;
    productId?: Prisma.IntWithAggregatesFilter<"Movement"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"Movement"> | number;
    type?: Prisma.EnumMovementTypeWithAggregatesFilter<"Movement"> | $Enums.MovementType;
    quantity?: Prisma.IntWithAggregatesFilter<"Movement"> | number;
    observations?: Prisma.StringNullableWithAggregatesFilter<"Movement"> | string | null;
    receivedBy?: Prisma.StringNullableWithAggregatesFilter<"Movement"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Movement"> | Date | string;
};
export type MovementCreateInput = {
    type: $Enums.MovementType;
    quantity?: number;
    observations?: string | null;
    receivedBy?: string | null;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutMovementsInput;
    user: Prisma.UserCreateNestedOneWithoutMovementsInput;
};
export type MovementUncheckedCreateInput = {
    id?: number;
    productId: number;
    userId: number;
    type: $Enums.MovementType;
    quantity?: number;
    observations?: string | null;
    receivedBy?: string | null;
    createdAt?: Date | string;
};
export type MovementUpdateInput = {
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutMovementsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMovementsNestedInput;
};
export type MovementUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovementCreateManyInput = {
    id?: number;
    productId: number;
    userId: number;
    type: $Enums.MovementType;
    quantity?: number;
    observations?: string | null;
    receivedBy?: string | null;
    createdAt?: Date | string;
};
export type MovementUpdateManyMutationInput = {
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovementUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovementListRelationFilter = {
    every?: Prisma.MovementWhereInput;
    some?: Prisma.MovementWhereInput;
    none?: Prisma.MovementWhereInput;
};
export type MovementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MovementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    observations?: Prisma.SortOrder;
    receivedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MovementAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type MovementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    observations?: Prisma.SortOrder;
    receivedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MovementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    observations?: Prisma.SortOrder;
    receivedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MovementSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type MovementCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutUserInput, Prisma.MovementUncheckedCreateWithoutUserInput> | Prisma.MovementCreateWithoutUserInput[] | Prisma.MovementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutUserInput | Prisma.MovementCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MovementCreateManyUserInputEnvelope;
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
};
export type MovementUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutUserInput, Prisma.MovementUncheckedCreateWithoutUserInput> | Prisma.MovementCreateWithoutUserInput[] | Prisma.MovementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutUserInput | Prisma.MovementCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MovementCreateManyUserInputEnvelope;
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
};
export type MovementUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutUserInput, Prisma.MovementUncheckedCreateWithoutUserInput> | Prisma.MovementCreateWithoutUserInput[] | Prisma.MovementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutUserInput | Prisma.MovementCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MovementUpsertWithWhereUniqueWithoutUserInput | Prisma.MovementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MovementCreateManyUserInputEnvelope;
    set?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    disconnect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    delete?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    update?: Prisma.MovementUpdateWithWhereUniqueWithoutUserInput | Prisma.MovementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MovementUpdateManyWithWhereWithoutUserInput | Prisma.MovementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MovementScalarWhereInput | Prisma.MovementScalarWhereInput[];
};
export type MovementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutUserInput, Prisma.MovementUncheckedCreateWithoutUserInput> | Prisma.MovementCreateWithoutUserInput[] | Prisma.MovementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutUserInput | Prisma.MovementCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MovementUpsertWithWhereUniqueWithoutUserInput | Prisma.MovementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MovementCreateManyUserInputEnvelope;
    set?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    disconnect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    delete?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    update?: Prisma.MovementUpdateWithWhereUniqueWithoutUserInput | Prisma.MovementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MovementUpdateManyWithWhereWithoutUserInput | Prisma.MovementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MovementScalarWhereInput | Prisma.MovementScalarWhereInput[];
};
export type MovementCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutProductInput, Prisma.MovementUncheckedCreateWithoutProductInput> | Prisma.MovementCreateWithoutProductInput[] | Prisma.MovementUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutProductInput | Prisma.MovementCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.MovementCreateManyProductInputEnvelope;
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
};
export type MovementUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutProductInput, Prisma.MovementUncheckedCreateWithoutProductInput> | Prisma.MovementCreateWithoutProductInput[] | Prisma.MovementUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutProductInput | Prisma.MovementCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.MovementCreateManyProductInputEnvelope;
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
};
export type MovementUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutProductInput, Prisma.MovementUncheckedCreateWithoutProductInput> | Prisma.MovementCreateWithoutProductInput[] | Prisma.MovementUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutProductInput | Prisma.MovementCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.MovementUpsertWithWhereUniqueWithoutProductInput | Prisma.MovementUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.MovementCreateManyProductInputEnvelope;
    set?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    disconnect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    delete?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    update?: Prisma.MovementUpdateWithWhereUniqueWithoutProductInput | Prisma.MovementUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.MovementUpdateManyWithWhereWithoutProductInput | Prisma.MovementUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.MovementScalarWhereInput | Prisma.MovementScalarWhereInput[];
};
export type MovementUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.MovementCreateWithoutProductInput, Prisma.MovementUncheckedCreateWithoutProductInput> | Prisma.MovementCreateWithoutProductInput[] | Prisma.MovementUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.MovementCreateOrConnectWithoutProductInput | Prisma.MovementCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.MovementUpsertWithWhereUniqueWithoutProductInput | Prisma.MovementUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.MovementCreateManyProductInputEnvelope;
    set?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    disconnect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    delete?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    connect?: Prisma.MovementWhereUniqueInput | Prisma.MovementWhereUniqueInput[];
    update?: Prisma.MovementUpdateWithWhereUniqueWithoutProductInput | Prisma.MovementUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.MovementUpdateManyWithWhereWithoutProductInput | Prisma.MovementUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.MovementScalarWhereInput | Prisma.MovementScalarWhereInput[];
};
export type EnumMovementTypeFieldUpdateOperationsInput = {
    set?: $Enums.MovementType;
};
export type MovementCreateWithoutUserInput = {
    type: $Enums.MovementType;
    quantity?: number;
    observations?: string | null;
    receivedBy?: string | null;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutMovementsInput;
};
export type MovementUncheckedCreateWithoutUserInput = {
    id?: number;
    productId: number;
    type: $Enums.MovementType;
    quantity?: number;
    observations?: string | null;
    receivedBy?: string | null;
    createdAt?: Date | string;
};
export type MovementCreateOrConnectWithoutUserInput = {
    where: Prisma.MovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.MovementCreateWithoutUserInput, Prisma.MovementUncheckedCreateWithoutUserInput>;
};
export type MovementCreateManyUserInputEnvelope = {
    data: Prisma.MovementCreateManyUserInput | Prisma.MovementCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MovementUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MovementWhereUniqueInput;
    update: Prisma.XOR<Prisma.MovementUpdateWithoutUserInput, Prisma.MovementUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MovementCreateWithoutUserInput, Prisma.MovementUncheckedCreateWithoutUserInput>;
};
export type MovementUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MovementWhereUniqueInput;
    data: Prisma.XOR<Prisma.MovementUpdateWithoutUserInput, Prisma.MovementUncheckedUpdateWithoutUserInput>;
};
export type MovementUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MovementScalarWhereInput;
    data: Prisma.XOR<Prisma.MovementUpdateManyMutationInput, Prisma.MovementUncheckedUpdateManyWithoutUserInput>;
};
export type MovementScalarWhereInput = {
    AND?: Prisma.MovementScalarWhereInput | Prisma.MovementScalarWhereInput[];
    OR?: Prisma.MovementScalarWhereInput[];
    NOT?: Prisma.MovementScalarWhereInput | Prisma.MovementScalarWhereInput[];
    id?: Prisma.IntFilter<"Movement"> | number;
    productId?: Prisma.IntFilter<"Movement"> | number;
    userId?: Prisma.IntFilter<"Movement"> | number;
    type?: Prisma.EnumMovementTypeFilter<"Movement"> | $Enums.MovementType;
    quantity?: Prisma.IntFilter<"Movement"> | number;
    observations?: Prisma.StringNullableFilter<"Movement"> | string | null;
    receivedBy?: Prisma.StringNullableFilter<"Movement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Movement"> | Date | string;
};
export type MovementCreateWithoutProductInput = {
    type: $Enums.MovementType;
    quantity?: number;
    observations?: string | null;
    receivedBy?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMovementsInput;
};
export type MovementUncheckedCreateWithoutProductInput = {
    id?: number;
    userId: number;
    type: $Enums.MovementType;
    quantity?: number;
    observations?: string | null;
    receivedBy?: string | null;
    createdAt?: Date | string;
};
export type MovementCreateOrConnectWithoutProductInput = {
    where: Prisma.MovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.MovementCreateWithoutProductInput, Prisma.MovementUncheckedCreateWithoutProductInput>;
};
export type MovementCreateManyProductInputEnvelope = {
    data: Prisma.MovementCreateManyProductInput | Prisma.MovementCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type MovementUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.MovementWhereUniqueInput;
    update: Prisma.XOR<Prisma.MovementUpdateWithoutProductInput, Prisma.MovementUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.MovementCreateWithoutProductInput, Prisma.MovementUncheckedCreateWithoutProductInput>;
};
export type MovementUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.MovementWhereUniqueInput;
    data: Prisma.XOR<Prisma.MovementUpdateWithoutProductInput, Prisma.MovementUncheckedUpdateWithoutProductInput>;
};
export type MovementUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.MovementScalarWhereInput;
    data: Prisma.XOR<Prisma.MovementUpdateManyMutationInput, Prisma.MovementUncheckedUpdateManyWithoutProductInput>;
};
export type MovementCreateManyUserInput = {
    id?: number;
    productId: number;
    type: $Enums.MovementType;
    quantity?: number;
    observations?: string | null;
    receivedBy?: string | null;
    createdAt?: Date | string;
};
export type MovementUpdateWithoutUserInput = {
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutMovementsNestedInput;
};
export type MovementUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovementUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovementCreateManyProductInput = {
    id?: number;
    userId: number;
    type: $Enums.MovementType;
    quantity?: number;
    observations?: string | null;
    receivedBy?: string | null;
    createdAt?: Date | string;
};
export type MovementUpdateWithoutProductInput = {
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMovementsNestedInput;
};
export type MovementUncheckedUpdateWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovementUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receivedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    userId?: boolean;
    type?: boolean;
    quantity?: boolean;
    observations?: boolean;
    receivedBy?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["movement"]>;
export type MovementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    userId?: boolean;
    type?: boolean;
    quantity?: boolean;
    observations?: boolean;
    receivedBy?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["movement"]>;
export type MovementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    userId?: boolean;
    type?: boolean;
    quantity?: boolean;
    observations?: boolean;
    receivedBy?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["movement"]>;
export type MovementSelectScalar = {
    id?: boolean;
    productId?: boolean;
    userId?: boolean;
    type?: boolean;
    quantity?: boolean;
    observations?: boolean;
    receivedBy?: boolean;
    createdAt?: boolean;
};
export type MovementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "userId" | "type" | "quantity" | "observations" | "receivedBy" | "createdAt", ExtArgs["result"]["movement"]>;
export type MovementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MovementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MovementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MovementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Movement";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        productId: number;
        userId: number;
        type: $Enums.MovementType;
        quantity: number;
        observations: string | null;
        receivedBy: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["movement"]>;
    composites: {};
};
export type MovementGetPayload<S extends boolean | null | undefined | MovementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MovementPayload, S>;
export type MovementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MovementCountAggregateInputType | true;
};
export interface MovementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Movement'];
        meta: {
            name: 'Movement';
        };
    };
    findUnique<T extends MovementFindUniqueArgs>(args: Prisma.SelectSubset<T, MovementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MovementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MovementFindFirstArgs>(args?: Prisma.SelectSubset<T, MovementFindFirstArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MovementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MovementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MovementFindManyArgs>(args?: Prisma.SelectSubset<T, MovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MovementCreateArgs>(args: Prisma.SelectSubset<T, MovementCreateArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MovementCreateManyArgs>(args?: Prisma.SelectSubset<T, MovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MovementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MovementDeleteArgs>(args: Prisma.SelectSubset<T, MovementDeleteArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MovementUpdateArgs>(args: Prisma.SelectSubset<T, MovementUpdateArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MovementDeleteManyArgs>(args?: Prisma.SelectSubset<T, MovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MovementUpdateManyArgs>(args: Prisma.SelectSubset<T, MovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MovementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MovementUpsertArgs>(args: Prisma.SelectSubset<T, MovementUpsertArgs<ExtArgs>>): Prisma.Prisma__MovementClient<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MovementCountArgs>(args?: Prisma.Subset<T, MovementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MovementCountAggregateOutputType> : number>;
    aggregate<T extends MovementAggregateArgs>(args: Prisma.Subset<T, MovementAggregateArgs>): Prisma.PrismaPromise<GetMovementAggregateType<T>>;
    groupBy<T extends MovementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MovementGroupByArgs['orderBy'];
    } : {
        orderBy?: MovementGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MovementFieldRefs;
}
export interface Prisma__MovementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MovementFieldRefs {
    readonly id: Prisma.FieldRef<"Movement", 'Int'>;
    readonly productId: Prisma.FieldRef<"Movement", 'Int'>;
    readonly userId: Prisma.FieldRef<"Movement", 'Int'>;
    readonly type: Prisma.FieldRef<"Movement", 'MovementType'>;
    readonly quantity: Prisma.FieldRef<"Movement", 'Int'>;
    readonly observations: Prisma.FieldRef<"Movement", 'String'>;
    readonly receivedBy: Prisma.FieldRef<"Movement", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Movement", 'DateTime'>;
}
export type MovementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    where: Prisma.MovementWhereUniqueInput;
};
export type MovementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    where: Prisma.MovementWhereUniqueInput;
};
export type MovementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    where?: Prisma.MovementWhereInput;
    orderBy?: Prisma.MovementOrderByWithRelationInput | Prisma.MovementOrderByWithRelationInput[];
    cursor?: Prisma.MovementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MovementScalarFieldEnum | Prisma.MovementScalarFieldEnum[];
};
export type MovementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    where?: Prisma.MovementWhereInput;
    orderBy?: Prisma.MovementOrderByWithRelationInput | Prisma.MovementOrderByWithRelationInput[];
    cursor?: Prisma.MovementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MovementScalarFieldEnum | Prisma.MovementScalarFieldEnum[];
};
export type MovementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    where?: Prisma.MovementWhereInput;
    orderBy?: Prisma.MovementOrderByWithRelationInput | Prisma.MovementOrderByWithRelationInput[];
    cursor?: Prisma.MovementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MovementScalarFieldEnum | Prisma.MovementScalarFieldEnum[];
};
export type MovementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MovementCreateInput, Prisma.MovementUncheckedCreateInput>;
};
export type MovementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MovementCreateManyInput | Prisma.MovementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MovementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    data: Prisma.MovementCreateManyInput | Prisma.MovementCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MovementIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MovementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MovementUpdateInput, Prisma.MovementUncheckedUpdateInput>;
    where: Prisma.MovementWhereUniqueInput;
};
export type MovementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MovementUpdateManyMutationInput, Prisma.MovementUncheckedUpdateManyInput>;
    where?: Prisma.MovementWhereInput;
    limit?: number;
};
export type MovementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MovementUpdateManyMutationInput, Prisma.MovementUncheckedUpdateManyInput>;
    where?: Prisma.MovementWhereInput;
    limit?: number;
    include?: Prisma.MovementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MovementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    where: Prisma.MovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.MovementCreateInput, Prisma.MovementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MovementUpdateInput, Prisma.MovementUncheckedUpdateInput>;
};
export type MovementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
    where: Prisma.MovementWhereUniqueInput;
};
export type MovementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovementWhereInput;
    limit?: number;
};
export type MovementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovementSelect<ExtArgs> | null;
    omit?: Prisma.MovementOmit<ExtArgs> | null;
    include?: Prisma.MovementInclude<ExtArgs> | null;
};
