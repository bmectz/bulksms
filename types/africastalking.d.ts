// types/africastalking.d.ts
declare module "africastalking" {
  const africastalking: (config: { username: string; apiKey: string }) => {
    SMS: {
      send: (options: {
        to: string[] | string;
        message: string;
        from?: string;
      }) => Promise<unknown>;
    };
  };

  export default africastalking;
}
