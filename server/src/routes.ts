import express from 'express';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository"

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;
  try {
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository,
    )
    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    });
    return res.status(201).send();
  } catch(err) {
    console.error(err);

    return res.status(500).send();
  }
});