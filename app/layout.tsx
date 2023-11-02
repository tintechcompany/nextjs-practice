import {ClerkProvider} from '@clerk/nextjs'
import React from "react";
import {Metadata} from "next";
import './global.css'
import {Inter, Space_Grotesk} from "next/font/google";


 const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-inter'

})

 const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-spaceGrotesk'

})
export const metadata: Metadata = {
    title: 'AliNextJS',
    description: 'Ali NextJS description',

    icons: {
        icon: '/assets/images/site-logo.png'
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider appearance={{
            elements : {
                formButtonPrimary:'primary-gradient',
                footerActionLink:'primary-text-gradient hover:text-primary-500',

            }
        }}>
            <html lang="en">
            <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <h1 className={'h1-bold'}>This is text</h1>


            {children}
            </body>

            </html>
        </ClerkProvider>
    );

}