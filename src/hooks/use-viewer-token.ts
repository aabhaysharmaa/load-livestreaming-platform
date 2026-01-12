"use client"

import { creteViewerToken } from "@/actions/token";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { toast } from "sonner";


export const useViewerToken = (hostIdentity: string) => {
	const [token, setToken] = useState("");
	const [name, setName] = useState("");
	const [identity, setIdentity] = useState("");

	useEffect(() => {
		const createToken = async () => {
			try {
				const viewerToken = await creteViewerToken(hostIdentity);
				setToken(viewerToken)

				const decodeToken = jwtDecode(viewerToken) as JwtPayload & { name?: string }

				const name = decodeToken.name
				const identity = decodeToken.sub
				console.log({identity})
				if (identity) {
					setIdentity(identity)
				}
				if (name) {
					setName(name)
				}
			} catch (error) {
				toast.error("Something went Wrong")
				console.log("Error in useViewerToken", error)
			}
		}
		createToken();
	}, [hostIdentity])
	return {
		token, name, identity
	}
}
