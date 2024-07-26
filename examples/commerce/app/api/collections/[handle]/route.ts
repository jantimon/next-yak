import { collections } from "db/collections";

type Params = {
	handle: string;
};

export async function GET(request: Request, context: { params: Params }) {
	await new Promise((resolve) => setTimeout(resolve, 500));
	return Response.json(collections.find(collection => collection.handle === context.params.handle));
}