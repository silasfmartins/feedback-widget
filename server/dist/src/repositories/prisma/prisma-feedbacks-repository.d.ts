import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repositories";
export declare class PrismaFeedbacksRepository implements FeedbacksRepository {
    create({ type, comment, screenshot }: FeedbackCreateData): Promise<void>;
}
