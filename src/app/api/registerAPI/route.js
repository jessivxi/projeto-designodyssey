// app/api/registerAPI/route.js
import { NextResponse } from 'next/server'

export async function POST(request) {
    const { nome, email, senha, confirmSenha } = await request.json()

    // Verifique se as senhas coincidem (segunda camada de validação)
    if (senha !== confirmSenha) {
        return NextResponse.json(
            { error: 'As senhas não coincidem' },
            { status: 400 }
        )
    }

    try {
        const phpResponse = await fetch('http://localhost/dashboard/api-designOdyssey/usuarios/post.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, senha })
        })

        const data = await phpResponse.json()

        if (!phpResponse.ok) {
            return NextResponse.json(
                { error: data.error || 'Erro no registro' },
                { status: phpResponse.status }
            )
        }

        return NextResponse.json(data, { status: 200 })

    } catch (error) {
        return NextResponse.json(
            { error: `Erro no servidor: ${error.message}` },
            { status: 500 }
        )
    }
}