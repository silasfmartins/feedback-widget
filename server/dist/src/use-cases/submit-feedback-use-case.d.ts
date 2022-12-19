import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repositories";
interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}
export declare class SubmitFeedbackUseCase {
    private feedbacksRepository;
    private mailAdapter;
    constructor(feedbacksRepository: FeedbacksRepository, mailAdapter: MailAdapter);
    execute(request: SubmitFeedbackUseCaseRequest): Promise<void>;
}
export {};
