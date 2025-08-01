type Props = { params: { id: string } };

export default function SubscriptionPage({ params }: Props) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Subscription {params.id}</h1>
    </main>
  );
}
