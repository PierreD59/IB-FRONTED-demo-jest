export default class Calculatrice {
  /**
   * Effectue un calcul à l'aide de la méthode eval()
   * @param operation à effectuer
   * @returns resultat de l'opération
   */
  public calculer(operation: string): number {
    return eval(operation);
  }
}
