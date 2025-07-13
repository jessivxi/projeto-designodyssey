// app/api/auth/route.js
import { NextResponse } from 'next/server'

export async function POST(request) {
    const { email, password } = await request.json()

    try {
        const phpResponse = await fetch('http://localhost/dashboard/api-designOdyssey/usuarios/post.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha: password })
        })

        const data = await phpResponse.json()

        if (!phpResponse.ok) {
            return NextResponse.json(
                { error: data.erro || 'Credenciais inválidas' },
                { status: 401 }
            )
        }

        const userData = {
            id: data.id,
            nome: data.nome,
            email: data.email,
            tipo: data.tipo
        };

        const response = NextResponse.json({
            message: 'Logged in successfully',
            user: userData
        });

        response.cookies.set('session', JSON.stringify(userData), {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'lax',
            path: '/'
        });

        return response;

    } catch (error) {
        return NextResponse.json(
            { error: `Login error: ${error.message}` },
            { status: 500 }
        )
    }
}