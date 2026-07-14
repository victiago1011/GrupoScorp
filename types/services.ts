export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  deliveries: string[];
  /** Visual weight: main cards vs complementary block */
  prominence: "primary" | "secondary";
}
