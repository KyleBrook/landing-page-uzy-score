const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute top-1/2 -left-16 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-60 w-60 rounded-full bg-purple-400/10 blur-3xl" />
      </div>

      <main className="relative z-10 container mx-auto max-w-4xl px-4 py-16">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Política de Privacidade
          </div>
          <h1 className="mt-6 text-4xl font-bold text-white">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-white/60">
            Última atualização: 01 de outubro de 2025
          </p>
        </header>

        <section className="space-y-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="space-y-4">
            <p className="text-white/80">
              A sua privacidade é importante para nós. Esta Política de
              Privacidade descreve como coletamos, usamos, armazenamos e
              protegemos as informações pessoais dos usuários do nosso site
              uzyscore.com.br.
            </p>
            <p className="text-white/80">
              Ao acessar ou utilizar nosso site, você concorda com as práticas
              descritas nesta Política de Privacidade.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              1. Informações que Coletamos
            </h2>
            <p className="text-white/80">
              Podemos coletar as seguintes informações:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-white/70">
              <li>
                <strong className="text-white">Informações pessoais:</strong>{" "}
                nome, e-mail, telefone, CPF/CNPJ, endereço e outros dados
                fornecidos voluntariamente por você.
              </li>
              <li>
                <strong className="text-white">
                  Informações de navegação:
                </strong>{" "}
                endereço IP, tipo de dispositivo, navegador utilizado, páginas
                visitadas, tempo de permanência e cookies.
              </li>
              <li>
                <strong className="text-white">Informações de uso:</strong>{" "}
                dados sobre como você interage com nossos serviços, como cliques,
                preferências e histórico de acessos.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              2. Como Utilizamos suas Informações
            </h2>
            <p className="text-white/80">As informações coletadas são utilizadas para:</p>
            <ul className="list-disc space-y-2 pl-6 text-white/70">
              <li>Fornecer e melhorar nossos serviços;</li>
              <li>Personalizar sua experiência no site;</li>
              <li>Entrar em contato com você quando necessário;</li>
              <li>Enviar comunicações, promoções ou notificações (quando autorizado);</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              3. Compartilhamento de Informações
            </h2>
            <p className="text-white/80">
              Não vendemos, trocamos ou alugamos suas informações pessoais.
              Podemos compartilhar seus dados apenas com:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-white/70">
              <li>
                Parceiros e prestadores de serviço que auxiliam na operação do
                site (por exemplo, provedores de hospedagem, plataformas de
                pagamento, envio de e-mails etc.), sempre sob acordos de
                confidencialidade;
              </li>
              <li>Autoridades legais, quando exigido por lei.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              4. Proteção dos Dados
            </h2>
            <p className="text-white/80">
              Adotamos medidas técnicas e administrativas adequadas para proteger
              suas informações pessoais contra acesso não autorizado, perda, uso
              indevido ou divulgação indevida. Ainda assim, nenhum sistema é
              totalmente seguro, e não podemos garantir proteção absoluta.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              5. Cookies e Tecnologias Semelhantes
            </h2>
            <p className="text-white/80">
              Usamos cookies para melhorar a experiência do usuário, analisar o
              tráfego e personalizar conteúdo. Você pode configurar seu navegador
              para recusar cookies, mas algumas partes do site podem não
              funcionar corretamente.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Seus Direitos</h2>
            <p className="text-white/80">Você tem o direito de:</p>
            <ul className="list-disc space-y-2 pl-6 text-white/70">
              <li>Acessar os dados que possuímos sobre você;</li>
              <li>Corrigir informações incorretas ou desatualizadas;</li>
              <li>Solicitar a exclusão dos seus dados;</li>
              <li>Revogar o consentimento de uso de informações a qualquer momento.</li>
            </ul>
            <p className="text-white/80">
              Para exercer seus direitos, entre em contato pelo e-mail:
              <span className="ml-1 font-semibold text-white">
                adm@uzyscore.com.br
              </span>
              .
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              7. Alterações nesta Política
            </h2>
            <p className="text-white/80">
              Podemos atualizar esta Política de Privacidade periodicamente. As
              alterações entrarão em vigor a partir da data de publicação no
              site. Recomendamos revisar esta página regularmente para estar
              sempre informado sobre como protegemos suas informações.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">8. Contato</h2>
            <p className="text-white/80">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o
              tratamento de seus dados, entre em contato conosco:
            </p>
            <div className="space-y-1 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
              <p>
                <span className="font-semibold text-white">📧</span>{" "}
                adm@uzyscore.com.br
              </p>
              <p>
                <span className="font-semibold text-white">🌐</span>{" "}
                uzyscore.com.br
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;