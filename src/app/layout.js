export const metadata = {
  title: 'Event Countdown',
  description: 'Countdown to the upcoming event',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 