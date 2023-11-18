import { getServerAuthSession } from "@/server/auth";
import styles from "./post.module.css";

export default async function Page() {
  const session = await getServerAuthSession();

  return (
    <main className="bg-primary-50 relative mx-auto flex min-h-[100svh] max-w-lg flex-col border-2">
      <div className={styles.header}>
        <div className={styles.header_left}>left</div>
        <div className={styles.header_left}>right</div>
      </div>
    </main>
  );
}
