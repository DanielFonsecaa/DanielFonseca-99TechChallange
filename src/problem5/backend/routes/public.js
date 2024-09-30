import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/users", async (req, res) => {
  try {
    const query = req.query.user;
    const users = query
      ? await prisma.user.findMany({
          where: {
            OR: [{ name: { contains: query } }, { email: { contains: query } }],
          },
        })
      : await prisma.user.findMany();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: {
        name: req.body.name,
        email: req.body.email,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.post("/users", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: req.params.id },
    });
    res.status(201).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
