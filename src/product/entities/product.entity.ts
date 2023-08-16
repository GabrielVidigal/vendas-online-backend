import { CategoryEntity } from "src/category/entities/category.entity";
import { Column, CreateDateColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class ProductEntity {

    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'name', nullable: false})
    name: string;

    @Column({name: 'category_id', nullable: false})
    category_id: string;

    @Column({name: 'price', nullable: false})
    price: number;

    @Column({name: 'image', nullable: false})
    image: string;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Date;

    @ManyToOne(() => CategoryEntity, (category: CategoryEntity) => category.procuts)
    @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
    category?: CategoryEntity;
}