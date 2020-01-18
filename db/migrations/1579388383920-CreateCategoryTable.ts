import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCategoryTable1579388383920 implements MigrationInterface {
    name = 'CreateCategoryTable1579388383920'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "categorys" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "created_by_id" character varying NOT NULL, "updated_at" TIMESTAMP DEFAULT now(), "updated_by_id" character varying, "deleted_at" TIMESTAMP, "deleted_by_id" character varying, "version" integer NOT NULL, "name" character varying, CONSTRAINT "PK_806896a0a29595c702235036597" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "categorys"`, undefined);
    }

}
