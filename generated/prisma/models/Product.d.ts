import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPayload>;
export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type ProductAvgAggregateOutputType = {
    id: number | null;
    categoryId: number | null;
    currentStock: number | null;
    minStock: number | null;
    unitsPerBox: number | null;
};
export type ProductSumAggregateOutputType = {
    id: number | null;
    categoryId: number | null;
    currentStock: number | null;
    minStock: number | null;
    unitsPerBox: number | null;
};
export type ProductMinAggregateOutputType = {
    id: number | null;
    sku: string | null;
    alias: string | null;
    description: string | null;
    brand: string | null;
    categoryId: number | null;
    currentStock: number | null;
    minStock: number | null;
    unitsPerBox: number | null;
    imageUrl: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductMaxAggregateOutputType = {
    id: number | null;
    sku: string | null;
    alias: string | null;
    description: string | null;
    brand: string | null;
    categoryId: number | null;
    currentStock: number | null;
    minStock: number | null;
    unitsPerBox: number | null;
    imageUrl: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductCountAggregateOutputType = {
    id: number;
    sku: number;
    alias: number;
    description: number;
    brand: number;
    categoryId: number;
    currentStock: number;
    minStock: number;
    unitsPerBox: number;
    imageUrl: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductAvgAggregateInputType = {
    id?: true;
    categoryId?: true;
    currentStock?: true;
    minStock?: true;
    unitsPerBox?: true;
};
export type ProductSumAggregateInputType = {
    id?: true;
    categoryId?: true;
    currentStock?: true;
    minStock?: true;
    unitsPerBox?: true;
};
export type ProductMinAggregateInputType = {
    id?: true;
    sku?: true;
    alias?: true;
    description?: true;
    brand?: true;
    categoryId?: true;
    currentStock?: true;
    minStock?: true;
    unitsPerBox?: true;
    imageUrl?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductMaxAggregateInputType = {
    id?: true;
    sku?: true;
    alias?: true;
    description?: true;
    brand?: true;
    categoryId?: true;
    currentStock?: true;
    minStock?: true;
    unitsPerBox?: true;
    imageUrl?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductCountAggregateInputType = {
    id?: true;
    sku?: true;
    alias?: true;
    description?: true;
    brand?: true;
    categoryId?: true;
    currentStock?: true;
    minStock?: true;
    unitsPerBox?: true;
    imageUrl?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductCountAggregateInputType;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct[P]> : Prisma.GetScalarType<T[P], AggregateProduct[P]>;
};
export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithAggregationInput | Prisma.ProductOrderByWithAggregationInput[];
    by: Prisma.ProductScalarFieldEnum[] | Prisma.ProductScalarFieldEnum;
    having?: Prisma.ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type ProductGroupByOutputType = {
    id: number;
    sku: string;
    alias: string;
    description: string | null;
    brand: string | null;
    categoryId: number;
    currentStock: number;
    minStock: number;
    unitsPerBox: number | null;
    imageUrl: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]>;
}>>;
export type ProductWhereInput = {
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    id?: Prisma.IntFilter<"Product"> | number;
    sku?: Prisma.StringFilter<"Product"> | string;
    alias?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    brand?: Prisma.StringNullableFilter<"Product"> | string | null;
    categoryId?: Prisma.IntFilter<"Product"> | number;
    currentStock?: Prisma.IntFilter<"Product"> | number;
    minStock?: Prisma.IntFilter<"Product"> | number;
    unitsPerBox?: Prisma.IntNullableFilter<"Product"> | number | null;
    imageUrl?: Prisma.StringNullableFilter<"Product"> | string | null;
    isActive?: Prisma.BoolFilter<"Product"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    movements?: Prisma.MovementListRelationFilter;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
};
export type ProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    brand?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    currentStock?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    unitsPerBox?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    movements?: Prisma.MovementOrderByRelationAggregateInput;
    category?: Prisma.CategoryOrderByWithRelationInput;
};
export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    sku?: string;
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    alias?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    brand?: Prisma.StringNullableFilter<"Product"> | string | null;
    categoryId?: Prisma.IntFilter<"Product"> | number;
    currentStock?: Prisma.IntFilter<"Product"> | number;
    minStock?: Prisma.IntFilter<"Product"> | number;
    unitsPerBox?: Prisma.IntNullableFilter<"Product"> | number | null;
    imageUrl?: Prisma.StringNullableFilter<"Product"> | string | null;
    isActive?: Prisma.BoolFilter<"Product"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    movements?: Prisma.MovementListRelationFilter;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
}, "id" | "sku">;
export type ProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    brand?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    currentStock?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    unitsPerBox?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProductCountOrderByAggregateInput;
    _avg?: Prisma.ProductAvgOrderByAggregateInput;
    _max?: Prisma.ProductMaxOrderByAggregateInput;
    _min?: Prisma.ProductMinOrderByAggregateInput;
    _sum?: Prisma.ProductSumOrderByAggregateInput;
};
export type ProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    sku?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    alias?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    brand?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    categoryId?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    currentStock?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    minStock?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    unitsPerBox?: Prisma.IntNullableWithAggregatesFilter<"Product"> | number | null;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Product"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
};
export type ProductCreateInput = {
    sku: string;
    alias: string;
    description?: string | null;
    brand?: string | null;
    currentStock?: number;
    minStock?: number;
    unitsPerBox?: number | null;
    imageUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movements?: Prisma.MovementCreateNestedManyWithoutProductInput;
    category: Prisma.CategoryCreateNestedOneWithoutProductsInput;
};
export type ProductUncheckedCreateInput = {
    id?: number;
    sku: string;
    alias: string;
    description?: string | null;
    brand?: string | null;
    categoryId: number;
    currentStock?: number;
    minStock?: number;
    unitsPerBox?: number | null;
    imageUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movements?: Prisma.MovementUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductUpdateInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentStock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    unitsPerBox?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movements?: Prisma.MovementUpdateManyWithoutProductNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutProductsNestedInput;
};
export type ProductUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    currentStock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    unitsPerBox?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movements?: Prisma.MovementUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyInput = {
    id?: number;
    sku: string;
    alias: string;
    description?: string | null;
    brand?: string | null;
    categoryId: number;
    currentStock?: number;
    minStock?: number;
    unitsPerBox?: number | null;
    imageUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateManyMutationInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentStock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    unitsPerBox?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    currentStock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    unitsPerBox?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductListRelationFilter = {
    every?: Prisma.ProductWhereInput;
    some?: Prisma.ProductWhereInput;
    none?: Prisma.ProductWhereInput;
};
export type ProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    currentStock?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    unitsPerBox?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    currentStock?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    unitsPerBox?: Prisma.SortOrder;
};
export type ProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    currentStock?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    unitsPerBox?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    currentStock?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    unitsPerBox?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    currentStock?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    unitsPerBox?: Prisma.SortOrder;
};
export type ProductScalarRelationFilter = {
    is?: Prisma.ProductWhereInput;
    isNot?: Prisma.ProductWhereInput;
};
export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutCategoryInput | Prisma.ProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutCategoryInput | Prisma.ProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ProductCreateNestedOneWithoutMovementsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutMovementsInput, Prisma.ProductUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutMovementsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutMovementsInput, Prisma.ProductUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutMovementsInput;
    upsert?: Prisma.ProductUpsertWithoutMovementsInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutMovementsInput, Prisma.ProductUpdateWithoutMovementsInput>, Prisma.ProductUncheckedUpdateWithoutMovementsInput>;
};
export type ProductCreateWithoutCategoryInput = {
    sku: string;
    alias: string;
    description?: string | null;
    brand?: string | null;
    currentStock?: number;
    minStock?: number;
    unitsPerBox?: number | null;
    imageUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movements?: Prisma.MovementCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number;
    sku: string;
    alias: string;
    description?: string | null;
    brand?: string | null;
    currentStock?: number;
    minStock?: number;
    unitsPerBox?: number | null;
    imageUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movements?: Prisma.MovementUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutCategoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput>;
};
export type ProductCreateManyCategoryInputEnvelope = {
    data: Prisma.ProductCreateManyCategoryInput | Prisma.ProductCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutCategoryInput, Prisma.ProductUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput>;
};
export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutCategoryInput, Prisma.ProductUncheckedUpdateWithoutCategoryInput>;
};
export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutCategoryInput>;
};
export type ProductScalarWhereInput = {
    AND?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    OR?: Prisma.ProductScalarWhereInput[];
    NOT?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    id?: Prisma.IntFilter<"Product"> | number;
    sku?: Prisma.StringFilter<"Product"> | string;
    alias?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    brand?: Prisma.StringNullableFilter<"Product"> | string | null;
    categoryId?: Prisma.IntFilter<"Product"> | number;
    currentStock?: Prisma.IntFilter<"Product"> | number;
    minStock?: Prisma.IntFilter<"Product"> | number;
    unitsPerBox?: Prisma.IntNullableFilter<"Product"> | number | null;
    imageUrl?: Prisma.StringNullableFilter<"Product"> | string | null;
    isActive?: Prisma.BoolFilter<"Product"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
};
export type ProductCreateWithoutMovementsInput = {
    sku: string;
    alias: string;
    description?: string | null;
    brand?: string | null;
    currentStock?: number;
    minStock?: number;
    unitsPerBox?: number | null;
    imageUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutProductsInput;
};
export type ProductUncheckedCreateWithoutMovementsInput = {
    id?: number;
    sku: string;
    alias: string;
    description?: string | null;
    brand?: string | null;
    categoryId: number;
    currentStock?: number;
    minStock?: number;
    unitsPerBox?: number | null;
    imageUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductCreateOrConnectWithoutMovementsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutMovementsInput, Prisma.ProductUncheckedCreateWithoutMovementsInput>;
};
export type ProductUpsertWithoutMovementsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutMovementsInput, Prisma.ProductUncheckedUpdateWithoutMovementsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutMovementsInput, Prisma.ProductUncheckedCreateWithoutMovementsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutMovementsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutMovementsInput, Prisma.ProductUncheckedUpdateWithoutMovementsInput>;
};
export type ProductUpdateWithoutMovementsInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentStock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    unitsPerBox?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutProductsNestedInput;
};
export type ProductUncheckedUpdateWithoutMovementsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    currentStock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    unitsPerBox?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCreateManyCategoryInput = {
    id?: number;
    sku: string;
    alias: string;
    description?: string | null;
    brand?: string | null;
    currentStock?: number;
    minStock?: number;
    unitsPerBox?: number | null;
    imageUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateWithoutCategoryInput = {
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentStock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    unitsPerBox?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movements?: Prisma.MovementUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentStock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    unitsPerBox?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movements?: Prisma.MovementUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currentStock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    unitsPerBox?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCountOutputType = {
    movements: number;
};
export type ProductCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movements?: boolean | ProductCountOutputTypeCountMovementsArgs;
};
export type ProductCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductCountOutputTypeCountMovementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovementWhereInput;
};
export type ProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sku?: boolean;
    alias?: boolean;
    description?: boolean;
    brand?: boolean;
    categoryId?: boolean;
    currentStock?: boolean;
    minStock?: boolean;
    unitsPerBox?: boolean;
    imageUrl?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    movements?: boolean | Prisma.Product$movementsArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sku?: boolean;
    alias?: boolean;
    description?: boolean;
    brand?: boolean;
    categoryId?: boolean;
    currentStock?: boolean;
    minStock?: boolean;
    unitsPerBox?: boolean;
    imageUrl?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sku?: boolean;
    alias?: boolean;
    description?: boolean;
    brand?: boolean;
    categoryId?: boolean;
    currentStock?: boolean;
    minStock?: boolean;
    unitsPerBox?: boolean;
    imageUrl?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectScalar = {
    id?: boolean;
    sku?: boolean;
    alias?: boolean;
    description?: boolean;
    brand?: boolean;
    categoryId?: boolean;
    currentStock?: boolean;
    minStock?: boolean;
    unitsPerBox?: boolean;
    imageUrl?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sku" | "alias" | "description" | "brand" | "categoryId" | "currentStock" | "minStock" | "unitsPerBox" | "imageUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>;
export type ProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movements?: boolean | Prisma.Product$movementsArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type ProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type $ProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Product";
    objects: {
        movements: Prisma.$MovementPayload<ExtArgs>[];
        category: Prisma.$CategoryPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        sku: string;
        alias: string;
        description: string | null;
        brand: string | null;
        categoryId: number;
        currentStock: number;
        minStock: number;
        unitsPerBox: number | null;
        imageUrl: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["product"]>;
    composites: {};
};
export type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPayload, S>;
export type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
};
export interface ProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Product'];
        meta: {
            name: 'Product';
        };
    };
    findUnique<T extends ProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductCreateArgs>(args: Prisma.SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductDeleteArgs>(args: Prisma.SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductUpdateArgs>(args: Prisma.SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductUpsertArgs>(args: Prisma.SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductCountArgs>(args?: Prisma.Subset<T, ProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCountAggregateOutputType> : number>;
    aggregate<T extends ProductAggregateArgs>(args: Prisma.Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>;
    groupBy<T extends ProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductFieldRefs;
}
export interface Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    movements<T extends Prisma.Product$movementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    category<T extends Prisma.CategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductFieldRefs {
    readonly id: Prisma.FieldRef<"Product", 'Int'>;
    readonly sku: Prisma.FieldRef<"Product", 'String'>;
    readonly alias: Prisma.FieldRef<"Product", 'String'>;
    readonly description: Prisma.FieldRef<"Product", 'String'>;
    readonly brand: Prisma.FieldRef<"Product", 'String'>;
    readonly categoryId: Prisma.FieldRef<"Product", 'Int'>;
    readonly currentStock: Prisma.FieldRef<"Product", 'Int'>;
    readonly minStock: Prisma.FieldRef<"Product", 'Int'>;
    readonly unitsPerBox: Prisma.FieldRef<"Product", 'Int'>;
    readonly imageUrl: Prisma.FieldRef<"Product", 'String'>;
    readonly isActive: Prisma.FieldRef<"Product", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Product", 'DateTime'>;
}
export type ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
};
export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
    include?: Prisma.ProductIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
};
export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type Product$movementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
};
