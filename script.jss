export const pickWinners = (participants) => {
  const shuffled = [...participants].sort(() => 0.5 - Math.random());
  
  return {
    grandPrize: shuffled[0], // 1 Laptop
    topTier: shuffled.slice(1, 6), // 5 Users (15k NPR)
    baseTier: shuffled.slice(6, 16), // 10 Users (5k NPR)
  };
};
