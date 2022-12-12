import { IsNotEmpty } from "class-validator";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";


/**
 * A Classe Entidade : Referencial de objetos presentes no banco de dados. Será utilizada pelo TypeORM 
 * para criar as tabelas no banco de dados.
 * @Entity  - Decorador 
 * Irá gerar uma tabela no Banco de dados, utilizando como refêncial a classe produto. (tb_produto)
 */ 

@Entity({name: 'tb_produto'})
export class Produto{

/**
* @PrimaryGeneratedColumn - Gerará a chave primária (id) da classe produto dentro do banco de dados.  
*/
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

/**
 *@Column - São as especifidades das colunas criadas dentro da classe, aqui produto. 
 */

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 45, nullable: false})
    nome: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({nullable: false})
    quantidade: number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({nullable: false})
    foto: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({type: 'decimal', precision: 7, scale: 2, nullable: false})
    preco: number;

/**
* @ManytoOne - Decorador que irá realizar a ligação entre tabelas no banco de dados, ou seja, criará a chave estrangeira
 * Esse decorador em específico sinaliza uma ligação de n:1, aqui entre (produto e categoria) 
 */
    @ApiProperty({type:() => Categoria})
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: 'CASCADE'
    })
    categoria: Categoria;
    
    @ApiProperty({type:() => Usuario})
    @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
        onDelete: 'CASCADE'
    })
    usuario: Usuario;
}