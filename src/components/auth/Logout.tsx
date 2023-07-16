import { Session } from "next-auth";

type LogoutProps = {
    signOut: any;
    session:Session | null;
  }
  
  export const Logout = ({signOut, session}:LogoutProps) => {
    return (
      <>
        <a
          className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
          onClick={() => signOut()}
        >
          <span
            className="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
          >
            Se déconnecter
          </span>
        </a>
        <br/>
        <br/>Utilisateur connecté : <span className="font-bold">{session?.user?.name}</span>
        <br/>
      </>
    )
  };

  export default Logout;