export const SUITS = {
  HEARTS: "HEARTS",
  SPADES: "SPADES",
  CLUBS: "CLUBS",
  DIAMONDS: "DIAMONDS",
};

export function generateStringFromSuit(suit) {
  let suitString = "ERR_SUIT";
  switch (suit) {
    case SUITS.HEARTS:
      suitString = "\u2665";
      break;
    case SUITS.SPADES:
      suitString = "\u2660";
      break;
    case SUITS.CLUBS:
      suitString = "\u2663";
      break;
    case SUITS.DIAMONDS:
      suitString = "\u2666";
      break;
  }

  return suitString;
}

export function generateStringFromRank(rank) {
  if (rank === "T") return "10";
  return rank;
}

export function genRandomCard() {
  let rank = Math.floor(Math.random() * 10) + 1;
  let suit = Object.values(SUITS)[Math.floor(Math.random() * 3)];
  let suitstr = generateStringFromSuit(suit);
  return `${rank} ${suitstr}`;
}