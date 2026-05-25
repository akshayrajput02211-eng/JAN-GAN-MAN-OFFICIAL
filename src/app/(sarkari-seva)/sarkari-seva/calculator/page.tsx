import CalcTabs from "@/components/sarkari-seva/calculator/CalcTabs";
import AgeCalculator from "@/components/sarkari-seva/calculator/AgeCalculator";
import LoanCalculator from "@/components/sarkari-seva/calculator/LoanCalculator";

export default function CalculatorPage() {
  return (
    <main className="min-h-screen p-10">
      <CalcTabs
        ageTab={<AgeCalculator />}
        loanTab={<LoanCalculator />}
      />
    </main>
  );
}