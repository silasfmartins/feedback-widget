import { FeedbacksRepository } from "../repositories/feedbacks-repositories";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
  ) {
    this.feedbacksRepository = feedbacksRepository
  }

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error('type is required.')
    }
    
    if (!comment) {
      throw new Error('type is required.')
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format')
    }
    
    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })
  }
}