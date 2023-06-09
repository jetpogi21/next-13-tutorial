//Generated by ImportCompleteModelFile
//Generated by GetCompleteModelFile

//Generated by GetModelImports
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "../config/db";
import { User } from "./UserModel";

//Generated by GetModelInterface
export default interface Post
  extends Model<InferAttributes<Post>, InferCreationAttributes<Post>> {
  postId: CreationOptional<number>;
  userId: string;
  title: string;
  body: string;
}

//Generated by GetModelDefinition
export const Post = sequelize.define<Post>(
  "Post",
  //Generated by GetModelFieldsDictionary
  {
    postId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: "post_id",
    },
    userId: {
      type: DataTypes.UUID,
      field: "user_id",
    },
    title: {
      type: DataTypes.STRING,
      field: "title",
    },
    body: {
      type: DataTypes.TEXT,
      field: "body",
    },
  },
  //Generated By GetModelOptionDict
  {
    name: { singular: "Post", plural: "Posts" },
    tableName: "posts",
  }
);

//Generated by GenerateSyncModel
export const PostSync = async () => {
  try {
    await Post.sync({ alter: true });
    console.log("Post table has been created!");
  } catch (error) {
    console.error(`Unable to create ${"Post".toLowerCase()} table:`, error);
  }
};

//Generated by GenerateModelRelationship
User.hasMany(Post, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
