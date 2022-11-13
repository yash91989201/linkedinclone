// interface for database connection
interface DbConnectionDataType {
  isConnected: boolean | number;
}

// Type for PostData
interface PostDataType {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  message: string;
  imageURL: string;
  likes: number;
}

// Type for database response
interface DbResponseDataType {
  status: boolean;
  message: string;
  data: PostDataType[] | null;
}

// Type NextResponse
interface ResponseDataType {
  status: boolean;
  message: string;
  data?: PostDataType[] | null;
}

// User schema type
interface PostSchemaType extends Document {
  userId: string;
  userName: string;
  userEmail: string;
  message: string;
  imageURL: string;
  likes: number;
}

// Post schema type
interface UserSchemaType extends Document {
  email: string;
  userName: string;
  password: string;
  timeStamp: typeof NumberSchemaDefinition;
  accessToken: string;
  tokens: string[];
}
