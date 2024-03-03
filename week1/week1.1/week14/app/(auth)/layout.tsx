export default function Banner({ children }: { children: React.ReactNode }) {
    return (
      <>
        <div className="border-b text-center border-b-black">
          20 % off for the next 3 days
        </div>
        <div>
          {children}
        </div>
      </>
    );
  }
  