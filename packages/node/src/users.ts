// src/users.ts

import { Router, Request, Response } from "express";
import { getUsers, createUser } from './usersStore';


const router = Router();

/** 
 * GET /users 
 * → renvoie la liste JSON des utilisateurs. 
 */
router.get('/', (_req, res) => { 
    res.status(200).json(getUsers());
});

/** 
 * POST /users 
 * Body attendu: { name: string } 
 * → crée un utilisateur ou renvoie 400 si name manquant. 
 */
router.post("/", (req: Request, res: Response) => {
	const { name } = req.body
	if (!name) {
		res.status(400).json({ error: "name is required" })
        return
	}
	const user = createUser(name)
	res.status(201).json(user)
})

export default router;