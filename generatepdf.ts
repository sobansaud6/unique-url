import { NowRequest, NowResponse } from '@vercel/node';
import puppeteer from 'puppeteer';

export default async (req: NowRequest, res: NowResponse) => {
    const { username, resumeData } = req.body;

    if (!resumeData) {
        return res.status(400).send('Resume data is required');
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(resumeData, { waitUntil: 'networkidle0' });

    const pdf = await page.pdf({
        format: 'A4',
        printBackground: true
    });

    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', attachment; filename=${username}_resume.pdf);
    res.send(pdf);
};